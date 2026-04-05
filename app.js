// app.js — DXスキル学習ダッシュボード メインロジック

// ===== Supabase 設定 =====
const SUPABASE_URL = 'https://cobfrvnthgkweplhpkeu.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvYmZydm50aGdrd2VwbGhwa2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMzMzNjcsImV4cCI6MjA5MDcwOTM2N30.ydN2TXYS7zxQZdc9S2DzTrIx_JmpaYzUgdgWuW4YTBU';
const SYNC_USER_ID = 'masaki';
let sbClient = null;
let syncTimer = null;

function initSupabase() {
  try {
    sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  } catch(e) {
    console.warn('Supabase init failed', e);
  }
}

function setSyncStatus(status) {
  const el = document.getElementById('sync-status');
  if (!el) return;
  el.className = 'sync-status ' + status;
  const map = { syncing: '🔄 同期中', ok: '✅ 同期済み', error: '⚠️ オフライン' };
  el.textContent = map[status] || '';
}

async function syncToSupabase() {
  if (!sbClient) return;
  setSyncStatus('syncing');
  try {
    const { error } = await sbClient.from('progress').upsert({
      id: SYNC_USER_ID,
      data: state,
      updated_at: new Date().toISOString()
    });
    if (error) throw error;
    setSyncStatus('ok');
  } catch(e) {
    console.warn('Sync to Supabase failed', e);
    setSyncStatus('error');
  }
}

async function syncFromSupabase() {
  if (!sbClient) return;
  setSyncStatus('syncing');
  try {
    const { data, error } = await sbClient.from('progress').select('*').eq('id', SYNC_USER_ID).single();
    if (error && error.code !== 'PGRST116') throw error;
    if (data && data.data) {
      const remoteTime = new Date(data.updated_at).getTime();
      const localTime  = state.updatedAt ? new Date(state.updatedAt).getTime() : 0;
      if (remoteTime > localTime) {
        state = { ...data.data };
        if (!state.flashcards) state.flashcards = {};
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        const stats = calcStats();
        renderAll(stats);
        showToast('☁️ クラウドから最新データを取得しました', false);
      }
    }
    setSyncStatus('ok');
  } catch(e) {
    console.warn('Sync from Supabase failed', e);
    setSyncStatus('error');
  }
}

function debouncedSync() {
  clearTimeout(syncTimer);
  syncTimer = setTimeout(syncToSupabase, 1500);
}

// ===== ストレージキー =====
const STORAGE_KEY = 'dx_skill_tracker_v2';

// ===== XP 設定 =====
const XP_PER_TASK = { video: 20, quiz: 30, review: 15 };
const XP_PER_LEVEL = 100;

// ===== タスクマスタ（id→メタ情報の逆引き用） =====
let taskMeta = {}; // { taskId: { label, type, certId, certName, certColor, phaseTitle, topicTitle } }

function buildTaskMeta() {
  taskMeta = {};
  CERTIFICATIONS.forEach(cert => {
    cert.phases.forEach(phase => {
      phase.topics.forEach(topic => {
        topic.tasks.forEach(task => {
          taskMeta[task.id] = {
            label:     task.label,
            type:      task.type,
            link:      task.link,
            certId:    cert.id,
            certName:  cert.name,
            certColor: cert.color,
            phaseTitle: phase.title,
            topicTitle: topic.title,
          };
        });
      });
    });
  });
}

// ===== 状態管理 =====
// progress: { taskId: { done: bool, completedAt: ISO文字列 | null } }
let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // v1 からのマイグレーション（progress が bool だった場合）
      if (parsed.progress) {
        Object.keys(parsed.progress).forEach(k => {
          if (typeof parsed.progress[k] === 'boolean') {
            parsed.progress[k] = { done: parsed.progress[k], completedAt: parsed.progress[k] ? new Date().toISOString() : null };
          }
        });
      }
      return parsed;
    }
  } catch(e) {}
  return { progress: {}, lastStudyDate: null, streak: 0, unlockedBadges: [], flashcards: {} };
}

function saveState() {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  debouncedSync();
}

function isDone(taskId) {
  return !!(state.progress[taskId] && state.progress[taskId].done);
}

// ===== XP / レベル計算 =====
function calcStats() {
  let totalXP = 0;
  let totalCompleted = 0;
  const certProgress = {};

  CERTIFICATIONS.forEach(cert => {
    let certTotal = 0, certDone = 0;
    cert.phases.forEach(phase => {
      phase.topics.forEach(topic => {
        topic.tasks.forEach(task => {
          certTotal++;
          if (isDone(task.id)) {
            totalCompleted++;
            certDone++;
            totalXP += XP_PER_TASK[task.type] || 15;
          }
        });
      });
    });
    certProgress[cert.id] = certTotal > 0 ? Math.round((certDone / certTotal) * 100) : 0;
  });

  let level = 1, xpForLevel = 0;
  while (xpForLevel + level * XP_PER_LEVEL <= totalXP) {
    xpForLevel += level * XP_PER_LEVEL;
    level++;
  }
  const xpInLevel  = totalXP - xpForLevel;
  const xpNeeded   = level * XP_PER_LEVEL;
  const xpPct      = Math.round((xpInLevel / xpNeeded) * 100);

  return { totalXP, totalCompleted, certProgress, level, xpInLevel, xpNeeded, xpPct };
}

// ===== ストリーク更新 =====
function updateStreak() {
  const today     = new Date().toDateString();
  if (state.lastStudyDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  state.streak = (state.lastStudyDate === yesterday) ? (state.streak || 0) + 1 : 1;
  state.lastStudyDate = today;
}

// ===== バッジチェック =====
function checkBadges(stats) {
  BADGES.forEach(badge => {
    if (state.unlockedBadges.includes(badge.id)) return;
    const ctx = { totalCompleted: stats.totalCompleted, streak: state.streak, certProgress: stats.certProgress, level: stats.level };
    if (badge.condition(ctx)) {
      state.unlockedBadges.push(badge.id);
      showToast(`🏅 バッジ獲得！「${badge.name}」`, null);
    }
  });
}

// ===== タスクトグル =====
let undoTimer = null;
let pendingUndo = null; // { taskId, taskType, prevEntry }

window.toggleTask = function(taskId, taskType) {
  const prevEntry = state.progress[taskId] ? { ...state.progress[taskId] } : null;
  const wasDone   = isDone(taskId);
  const nowDone   = !wasDone;

  state.progress[taskId] = { done: nowDone, completedAt: nowDone ? new Date().toISOString() : null };

  if (nowDone) {
    updateStreak();
    // 取り消し猶予を設定
    pendingUndo = { taskId, taskType, prevEntry };
    showToast(`+${XP_PER_TASK[taskType] || 15} XP 獲得！`, true);
    clearTimeout(undoTimer);
    undoTimer = setTimeout(() => { pendingUndo = null; hideUndoBtn(); }, 5000);
  } else {
    pendingUndo = null;
    hideUndoBtn();
    showToast('チェックを外しました', false);
  }

  saveState();
  const stats = calcStats();
  checkBadges(stats);
  renderAll(stats);
};

window.undoLast = function() {
  if (!pendingUndo) return;
  const { taskId, prevEntry } = pendingUndo;
  state.progress[taskId] = prevEntry || { done: false, completedAt: null };
  pendingUndo = null;
  clearTimeout(undoTimer);
  saveState();
  const stats = calcStats();
  renderAll(stats);
  showToast('取り消しました', false);
};

// ===== 個別タスクの取り消し（完了ログから） =====
window.uncompleteTask = function(taskId) {
  if (!confirm('このタスクのチェックを外しますか？')) return;
  state.progress[taskId] = { done: false, completedAt: null };
  saveState();
  const stats = calcStats();
  renderAll(stats);
  showToast('チェックを外しました', false);
};

// ===== #1 試験日カウントダウン＋週次ペース =====
function renderCountdown() {
  const container = document.getElementById('exam-countdown');
  if (!container) return;
  const today = new Date(); today.setHours(0,0,0,0);

  container.innerHTML = CERTIFICATIONS.filter(cert => !cert.obtained).map(cert => {
    const allTasks  = cert.phases.flatMap(p => p.topics.flatMap(t => t.tasks));
    const remaining = allTasks.filter(t => !isDone(t.id)).length;
    const target    = new Date(cert.targetDate + '-01');
    target.setMonth(target.getMonth() + 1); target.setDate(0);
    const daysLeft  = Math.max(0, Math.ceil((target - today) / 86400000));
    const weeksLeft = Math.max(1, Math.ceil(daysLeft / 7));
    const perWeek   = remaining > 0 ? Math.ceil(remaining / weeksLeft) : 0;
    const warn      = daysLeft < 30 ? 'countdown-warn' : '';
    return `
      <div class="countdown-item">
        <span class="countdown-icon" style="color:${cert.color}">${cert.icon}</span>
        <div class="countdown-body">
          <div class="countdown-name" style="color:${cert.color}">${cert.name}</div>
          <div class="countdown-nums">
            <span class="${warn}"><strong>${daysLeft}</strong>日</span>
            <span>残り<strong>${remaining}</strong>タスク</span>
            <span>週<strong>${perWeek}</strong>必要</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ===== #3 学習カレンダー（草グラフ） =====
function renderActivityCalendar() {
  const container = document.getElementById('activity-calendar');
  if (!container) return;

  const dateCounts = {};
  Object.values(state.progress).forEach(v => {
    if (v && v.done && v.completedAt) {
      const d = new Date(v.completedAt);
      const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      dateCounts[key] = (dateCounts[key] || 0) + 1;
    }
  });

  const today = new Date(); today.setHours(0,0,0,0);
  const WEEKS = 16;
  const start = new Date(today);
  start.setDate(start.getDate() - WEEKS * 7 + 1);
  start.setDate(start.getDate() - start.getDay()); // align to Sunday

  const cells = [];
  const cur = new Date(start);
  while (cur <= today) {
    const key = `${cur.getFullYear()}-${String(cur.getMonth()+1).padStart(2,'0')}-${String(cur.getDate()).padStart(2,'0')}`;
    cells.push({ key, count: dateCounts[key] || 0, future: cur > today });
    cur.setDate(cur.getDate() + 1);
  }

  const weekGroups = [];
  for (let i = 0; i < cells.length; i += 7) weekGroups.push(cells.slice(i, i + 7));
  const level = n => n === 0 ? 0 : n <= 1 ? 1 : n <= 3 ? 2 : n <= 5 ? 3 : 4;

  // Month labels
  let lastM = -1;
  const monthSpans = weekGroups.map((wk, wi) => {
    const m = new Date(wk[0].key).getMonth();
    if (m !== lastM) { lastM = m; return `<span style="grid-column:${wi+1}">${m+1}月</span>`; }
    return '';
  }).join('');

  const totalDays = Object.keys(dateCounts).length;

  container.innerHTML = `
    <div class="cal-wrap">
      <div class="cal-months" style="grid-template-columns:repeat(${WEEKS},14px)">${monthSpans}</div>
      <div class="cal-grid">
        ${weekGroups.map(wk => `<div class="cal-week">${wk.map(c =>
          `<div class="cal-cell level-${c.future ? 'future' : level(c.count)}" title="${c.key}${c.count ? ` (${c.count}タスク)` : ''}"></div>`
        ).join('')}</div>`).join('')}
      </div>
      <div class="cal-legend">
        <span>${totalDays}日間学習</span>
        <div class="cal-legend-cells">
          <span>少</span>
          ${[0,1,2,3,4].map(l => `<div class="cal-cell level-${l}"></div>`).join('')}
          <span>多</span>
        </div>
      </div>
    </div>`;
}

// ===== #2 ポモドーロタイマー =====
const POMO_WORK  = 25 * 60;
const POMO_BREAK =  5 * 60;
let pomoState = { running: false, seconds: POMO_WORK, mode: 'work', interval: null };

function initPomodoro() {
  const fab       = document.getElementById('pomo-fab');
  const widget    = document.getElementById('pomodoro');
  const toggleBtn = document.getElementById('pomo-toggle');
  const resetBtn  = document.getElementById('pomo-reset');
  const closeBtn  = document.getElementById('pomo-close');
  if (!fab) return;

  fab.addEventListener('click', () => widget.classList.toggle('show'));
  closeBtn.addEventListener('click', () => widget.classList.remove('show'));

  toggleBtn.addEventListener('click', () => {
    if (pomoState.running) {
      clearInterval(pomoState.interval);
      pomoState.running = false;
      toggleBtn.textContent = '▶ 再開';
      widget.classList.remove('pomo-running', 'pomo-break');
    } else {
      pomoState.running = true;
      toggleBtn.textContent = '⏸ 停止';
      widget.classList.add(pomoState.mode === 'work' ? 'pomo-running' : 'pomo-break');
      pomoState.interval = setInterval(() => {
        pomoState.seconds--;
        updatePomoDisplay();
        if (pomoState.seconds <= 0) {
          clearInterval(pomoState.interval);
          pomoState.running = false;
          widget.classList.remove('pomo-running', 'pomo-break');
          toggleBtn.textContent = '▶ 開始';
          if (pomoState.mode === 'work') {
            pomoState.mode = 'break'; pomoState.seconds = POMO_BREAK;
            showToast('🍅 25分完了！5分休憩しましょう', false);
          } else {
            pomoState.mode = 'work'; pomoState.seconds = POMO_WORK;
            showToast('☕ 休憩終了！次のセッションを始めましょう', false);
          }
          updatePomoDisplay();
        }
      }, 1000);
    }
  });

  resetBtn.addEventListener('click', () => {
    clearInterval(pomoState.interval);
    pomoState = { running: false, seconds: POMO_WORK, mode: 'work', interval: null };
    widget.classList.remove('pomo-running', 'pomo-break');
    toggleBtn.textContent = '▶ 開始';
    updatePomoDisplay();
  });

  updatePomoDisplay();
}

function updatePomoDisplay() {
  const m = Math.floor(pomoState.seconds / 60);
  const s = pomoState.seconds % 60;
  const t = document.getElementById('pomo-time');
  const md = document.getElementById('pomo-mode');
  if (t)  t.textContent  = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  if (md) md.textContent = pomoState.mode === 'work' ? '🍅 集中' : '☕ 休憩';
}

// ===== #4 タスク理解度評価（完了ログ内） =====
window.saveRating = function(taskId, rating) {
  if (!state.progress[taskId]) return;
  state.progress[taskId].rating = state.progress[taskId].rating === rating ? null : rating;
  saveState();
  renderCompletedLog();
};

// ===== #5 通知 =====
function initNotification() {
  if (!('Notification' in window)) return;
  const banner    = document.getElementById('notif-banner');
  const allowBtn  = document.getElementById('notif-allow');
  const dismissBtn = document.getElementById('notif-dismiss');
  if (!banner) return;

  const dismissed = localStorage.getItem('notif_dismissed');
  if (Notification.permission === 'granted') {
    scheduleNotificationCheck();
    return;
  }
  if (Notification.permission !== 'denied' && !dismissed) {
    banner.style.display = 'flex';
  }
  allowBtn && allowBtn.addEventListener('click', () => {
    Notification.requestPermission().then(perm => {
      banner.style.display = 'none';
      if (perm === 'granted') scheduleNotificationCheck();
    });
  });
  dismissBtn && dismissBtn.addEventListener('click', () => {
    banner.style.display = 'none';
    localStorage.setItem('notif_dismissed', '1');
  });
}

function scheduleNotificationCheck() {
  checkDailyNotification();
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) checkDailyNotification();
  });
}

function checkDailyNotification() {
  if (Notification.permission !== 'granted') return;
  const today = new Date().toDateString();
  if (state.lastStudyDate === today) return;
  const hour = new Date().getHours();
  if (hour >= 18) {
    new Notification('DX学習リマインダー 📚', {
      body: '今日の学習がまだです！少しだけ進めましょう。',
      icon: './icon-192.png',
    });
  }
}

// ===== #7 フラッシュカード =====
let fcSession = { deck: [], index: 0, filter: 'all', flipped: false, sessionCorrect: 0, sessionTotal: 0 };

function initFlashcards() {
  if (!state.flashcards) state.flashcards = {};

  document.querySelectorAll('.fc-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fc-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      fcStartSession(btn.dataset.filter);
    });
  });

  fcStartSession('all');
}

function fcBuildDeck(filter) {
  let cards = FLASHCARDS;
  if (filter !== 'all') cards = cards.filter(c => c.cert === filter);

  // 苦手（incorrect > correct）のカードを優先、同スコア内はランダム
  return [...cards].sort((a, b) => {
    const sa = state.flashcards[a.id] || { correct: 0, incorrect: 0 };
    const sb = state.flashcards[b.id] || { correct: 0, incorrect: 0 };
    const wa = sa.incorrect - sa.correct;
    const wb = sb.incorrect - sb.correct;
    if (wa !== wb) return wb - wa;
    return Math.random() - 0.5;
  });
}

function fcStartSession(filter) {
  fcSession = { deck: fcBuildDeck(filter), index: 0, filter, flipped: false, sessionCorrect: 0, sessionTotal: 0 };
  fcRender();
}

function fcRender() {
  const container = document.getElementById('fc-area');
  if (!container) return;

  if (fcSession.deck.length === 0) {
    container.innerHTML = `<div class="fc-empty">カードがありません</div>`;
    return;
  }

  if (fcSession.index >= fcSession.deck.length) {
    const pct = fcSession.sessionTotal > 0 ? Math.round(fcSession.sessionCorrect / fcSession.sessionTotal * 100) : 0;
    const xpGained = fcSession.sessionCorrect * 5;
    container.innerHTML = `
      <div class="fc-complete">
        <div class="fc-complete-icon">🎉</div>
        <div class="fc-complete-title">セッション完了！</div>
        <div class="fc-complete-stats">${fcSession.sessionCorrect} / ${fcSession.sessionTotal} 正解（${pct}%）</div>
        <div class="fc-complete-xp">+${xpGained} XP</div>
        <button class="primary-btn" onclick="fcStartSession('${fcSession.filter}')">もう一度</button>
      </div>`;
    return;
  }

  const card = fcSession.deck[fcSession.index];
  const stats = state.flashcards[card.id] || { correct: 0, incorrect: 0 };
  const certColor = card.cert === 'g-ken' ? 'var(--g-color)' : 'var(--sc-color)';
  const pct = Math.round(fcSession.index / fcSession.deck.length * 100);

  container.innerHTML = `
    <div class="fc-progress-wrap">
      <div class="fc-progress-text">${fcSession.index + 1} / ${fcSession.deck.length}</div>
      <div class="fc-progress-bar"><div class="fc-progress-fill" style="width:${pct}%"></div></div>
      <div class="fc-session-score">✓ ${fcSession.sessionCorrect}</div>
    </div>
    <div class="fc-card${fcSession.flipped ? ' flipped' : ''}" onclick="fcFlip()">
      <div class="fc-card-inner">
        <div class="fc-front">
          <div class="fc-cert-label" style="color:${certColor}">${card.certLabel}</div>
          <div class="fc-term">${card.term}</div>
          <div class="fc-hint">タップして答えを見る</div>
        </div>
        <div class="fc-back">
          <div class="fc-cert-label" style="color:${certColor}">${card.certLabel}</div>
          <div class="fc-definition">${card.definition}</div>
          <div class="fc-card-stats">正解 ${stats.correct}回 ／ 不正解 ${stats.incorrect}回</div>
        </div>
      </div>
    </div>
    <div class="fc-answer-btns${fcSession.flipped ? '' : ' fc-answer-hidden'}">
      <button class="fc-btn fc-incorrect" onclick="fcAnswer(false)" ${fcSession.flipped ? '' : 'disabled'}>✗ もう一度</button>
      <button class="fc-btn fc-correct" onclick="fcAnswer(true)" ${fcSession.flipped ? '' : 'disabled'}>✓ 覚えた</button>
    </div>`;
}

window.fcFlip = function() {
  if (fcSession.flipped) return;
  fcSession.flipped = true;
  fcRender();
};

window.fcAnswer = function(correct) {
  const card = fcSession.deck[fcSession.index];
  if (!state.flashcards[card.id]) state.flashcards[card.id] = { correct: 0, incorrect: 0 };
  if (correct) { state.flashcards[card.id].correct++; fcSession.sessionCorrect++; }
  else         { state.flashcards[card.id].incorrect++; }
  fcSession.sessionTotal++;
  fcSession.index++;
  fcSession.flipped = false;
  saveState();
  fcRender();
};

// ===== #8 用語集 =====
let glState = { cert: 'all', query: '' };

function glRender() {
  const list = document.getElementById('gl-list');
  const count = document.getElementById('gl-count');
  if (!list) return;

  const q = glState.query.trim().toLowerCase();
  let cards = FLASHCARDS;
  if (glState.cert !== 'all') cards = cards.filter(c => c.cert === glState.cert);
  if (q) cards = cards.filter(c =>
    c.term.toLowerCase().includes(q) || c.definition.toLowerCase().includes(q)
  );

  // cert ごとに色
  const certColors = { 'g-ken': 'var(--g-color)', 'sc': 'var(--sc-color)' };

  count.textContent = `${cards.length} 件`;

  if (cards.length === 0) {
    list.innerHTML = `<div class="gl-empty">該当する用語が見つかりませんでした</div>`;
    return;
  }

  list.innerHTML = cards.map(card => {
    const color = certColors[card.cert] || 'var(--accent)';
    const stats = (state.flashcards && state.flashcards[card.id]) || { correct: 0, incorrect: 0 };
    const mastered = stats.correct >= 3 && stats.correct > stats.incorrect;
    const masteredBadge = mastered ? `<span class="gl-mastered">✓ 習得済み</span>` : '';

    // 検索ワードをハイライト
    function hl(text) {
      if (!q) return text;
      const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      return text.replace(re, '<mark class="gl-hl">$1</mark>');
    }

    return `
    <div class="gl-item" onclick="this.classList.toggle('open')">
      <div class="gl-item-head">
        <span class="gl-cert-dot" style="background:${color}"></span>
        <span class="gl-cert-tag" style="color:${color}">${card.certLabel}</span>
        <span class="gl-term">${hl(card.term)}</span>
        ${masteredBadge}
        <span class="gl-chevron">▾</span>
      </div>
      <div class="gl-item-body">
        <p class="gl-definition">${hl(card.definition)}</p>
        <div class="gl-item-stats">正解 ${stats.correct}回 ／ 不正解 ${stats.incorrect}回
          <button class="gl-fc-btn" onclick="event.stopPropagation(); navigate('flashcard')">🃏 カード学習へ</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

window.glFilter = function() {
  const input = document.getElementById('gl-search');
  const clearBtn = document.getElementById('gl-clear');
  glState.query = input.value;
  if (clearBtn) clearBtn.style.display = input.value ? '' : 'none';
  glRender();
};

window.glClear = function() {
  const input = document.getElementById('gl-search');
  if (input) input.value = '';
  glState.query = '';
  const clearBtn = document.getElementById('gl-clear');
  if (clearBtn) clearBtn.style.display = 'none';
  glRender();
};

window.glSetCert = function(btn) {
  document.querySelectorAll('[data-glfilter]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  glState.cert = btn.dataset.glfilter;
  glRender();
};

// ===== エクスポート =====
window.exportState = function() {
  const json = JSON.stringify(state, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `dx-skill-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('進捗データをエクスポートしました', false);
};

// ===== インポート（ファイル選択ダイアログを開く） =====
window.importState = function() {
  document.getElementById('import-file').click();
};

// ===== リセット =====
window.resetAll = function() {
  if (!confirm('すべての学習進捗をリセットします。\nこの操作は取り消せません。よろしいですか？')) return;
  state = { progress: {}, lastStudyDate: null, streak: 0, unlockedBadges: [] };
  saveState();
  const stats = calcStats();
  renderAll(stats);
  showToast('進捗をリセットしました', false);
};

// ===== ナビ =====
window.navigate = function(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const viewEl = document.getElementById('view-' + view);
  if (viewEl) viewEl.classList.add('active');
  const tabEl = document.querySelector(`[data-view="${view}"]`);
  if (tabEl) tabEl.classList.add('active');
  if (view === 'glossary') glRender();
};

// ===== ロードマップ描画 =====
function renderRoadmap(certProgress) {
  const container = document.getElementById('roadmap');
  if (!container) return;

  const months   = ['2026/4','2026/7','2026/10','2027/1','2027/4'];
  const startMs  = new Date('2026-04-06').getTime();
  const endMs    = new Date('2027-04-30').getTime();
  const totalMs  = endMs - startMs;

  const axisHtml = `<div class="roadmap-axis">${months.map(m => `<span>${m}</span>`).join('')}</div>`;
  const barsHtml = ROADMAP.map(item => {
    const cert    = CERTIFICATIONS.find(c => c.id === item.certId);
    const color   = cert ? cert.color : '#888';
    const s       = new Date(item.startMonth + '-01').getTime();
    const e       = new Date(item.endMonth   + '-28').getTime();
    const left    = Math.round(((s - startMs) / totalMs) * 100);
    const width   = Math.round(((e - s) / totalMs) * 100);
    const progress = certProgress[item.certId] || 0;

    return `
      <div class="roadmap-bar-row">
        <span class="roadmap-bar-label" style="color:${color}">${item.label}</span>
        <div class="roadmap-bar-track">
          <div class="roadmap-bar-fill" style="left:${left}%;width:${width}%;background:${color}20;border:1px solid ${color}40">
            <div class="roadmap-bar-progress" style="width:${progress}%;background:${color}60"></div>
            <span style="position:relative;z-index:1;font-size:0.7rem;padding:0 8px;color:${color}">${item.milestone}</span>
          </div>
        </div>
      </div>`;
  }).join('');

  container.innerHTML = `<div class="roadmap-timeline">${axisHtml}<div class="roadmap-bars">${barsHtml}</div></div>`;
}

// ===== カテゴリID取得ヘルパー =====
function getCertCategoryId(certId) {
  const cat = CERT_CATEGORIES.find(c => c.certIds.includes(certId));
  return cat ? cat.id : null;
}

// ===== 資格カード描画 =====
function renderCertCards(certProgress) {
  const container = document.getElementById('cert-cards');
  if (!container) return;

  container.innerHTML = CERTIFICATIONS.filter(cert => !cert.obtained).map(cert => {
    const pct      = certProgress[cert.id] || 0;
    const allTasks = cert.phases.flatMap(p => p.topics.flatMap(t => t.tasks));
    const done     = allTasks.filter(t => isDone(t.id)).length;
    let nextTask   = null;
    outer: for (const phase of cert.phases) {
      for (const topic of phase.topics) {
        for (const task of topic.tasks) {
          if (!isDone(task.id)) { nextTask = task; break outer; }
        }
      }
    }

    return `
      <div class="cert-card" onclick="navigate('category-${getCertCategoryId(cert.id)}')">
        <div class="cert-card-accent" style="background:${cert.color}"></div>
        <div class="cert-card-header">
          <span class="cert-card-icon">${cert.icon}</span>
          <div>
            <div class="cert-card-name">${cert.name}</div>
            <div class="cert-card-target">${cert.targetLabel}</div>
          </div>
        </div>
        <div class="cert-card-progress">
          <div class="cert-progress-nums">
            <span><strong>${pct}%</strong> 完了</span>
            <span>${done} / ${allTasks.length} タスク</span>
          </div>
          <div class="cert-bar-wrap"><div class="cert-bar" style="width:${pct}%;background:${cert.color}"></div></div>
        </div>
        <div class="cert-card-footer">
          次のタスク：
          <div class="cert-next-task">${nextTask ? nextTask.label.replace(/^[^：]+：/, '') : '✅ 完了！'}</div>
        </div>
      </div>`;
  }).join('');
}

// ===== 今日のタスク描画 =====
function renderTodayTasks() {
  const container = document.getElementById('today-tasks');
  const dateEl    = document.getElementById('today-date');
  if (!container) return;
  const now = new Date();
  dateEl.textContent = `${now.getMonth()+1}月${now.getDate()}日`;

  const suggestions = [];
  CERTIFICATIONS.filter(cert => !cert.obtained).forEach(cert => {
    let count = 0;
    outer: for (const phase of cert.phases) {
      for (const topic of phase.topics) {
        for (const task of topic.tasks) {
          if (!isDone(task.id) && count < 2) { suggestions.push({ cert, task }); count++; }
          if (count >= 2) break outer;
        }
      }
    }
  });

  if (suggestions.length === 0) {
    container.innerHTML = `<div class="today-empty">🎉 今日のタスクはすべて完了しています！</div>`;
    return;
  }
  const typeIcons = { video: '▶️', quiz: '📝', review: '🔄' };
  container.innerHTML = suggestions.map(({ cert, task }) => `
    <div class="today-task-item ${isDone(task.id) ? 'done' : ''}">
      <div class="type-icon type-${task.type}">${typeIcons[task.type] || '📌'}</div>
      <div class="today-task-body">
        <div class="today-task-cert" style="color:${cert.color}">${cert.name}</div>
        <span class="today-task-label">${task.label}</span>
        ${task.link ? `<a href="${task.link}" target="_blank" rel="noopener" class="today-task-link">リソースを開く →</a>` : ''}
        ${task.type === 'review' && task.hint ? `<div class="review-hint">📌 ${task.hint}</div>` : ''}
        ${task.type === 'review' && task.action === 'flashcard' ? `<button class="review-fc-btn" onclick="navigate('flashcard')">🃏 フラッシュカードで確認</button>` : ''}
      </div>
      <input type="checkbox" class="today-task-check" ${isDone(task.id) ? 'checked' : ''}
        onchange="toggleTask('${task.id}','${task.type}')">
    </div>`).join('');
}

// ===== 完了済みタスク一覧（さかのぼり確認） =====
function renderCompletedLog() {
  const container = document.getElementById('completed-log');
  if (!container) return;

  // 完了済みタスクを新しい順に収集
  const entries = Object.entries(state.progress)
    .filter(([, v]) => v && v.done)
    .map(([taskId, v]) => ({ taskId, completedAt: v.completedAt, meta: taskMeta[taskId] }))
    .filter(e => e.meta)
    .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));

  if (entries.length === 0) {
    container.innerHTML = `<div class="log-empty">まだ完了したタスクはありません。<br>各資格のカリキュラムからタスクを進めましょう。</div>`;
    return;
  }

  const typeIcons = { video: '▶️', quiz: '📝', review: '🔄' };
  const fmtDate = iso => {
    if (!iso) return '—';
    const d = new Date(iso);
    return `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
  };

  container.innerHTML = `
    <div class="log-summary">完了済み ${entries.length} タスク ／ 新しい順に表示</div>
    <div class="log-list">
      ${entries.map(e => `
        <div class="log-item">
          <div class="log-item-left">
            <span class="log-type-icon">${typeIcons[e.meta.type] || '📌'}</span>
            <div class="log-item-body">
              <div class="log-item-cert" style="color:${e.meta.certColor}">${e.meta.certName} › ${e.meta.topicTitle}</div>
              <div class="log-item-label">${e.meta.label}</div>
              <div class="log-item-date">✅ ${fmtDate(e.completedAt)}</div>
            </div>
          </div>
          <div class="log-rating">
            ${[1,2,3,4,5].map(v => `<button class="star-btn ${(e.rating||0) >= v ? 'active' : ''}" onclick="saveRating('${e.taskId}',${v})" title="${v}★">★</button>`).join('')}
          </div>
          <button class="log-undo-btn" onclick="uncompleteTask('${e.taskId}')" title="チェックを外す">↩</button>
        </div>`).join('')}
    </div>`;
}

// ===== バッジ描画 =====
function renderBadges() {
  const container = document.getElementById('badges-grid');
  if (!container) return;
  container.innerHTML = BADGES.map(b => {
    const unlocked = state.unlockedBadges.includes(b.id);
    return `<div class="badge-item ${unlocked ? 'unlocked' : 'locked'}" title="${b.desc}">
      <span class="badge-icon">${b.icon}</span>
      <div class="badge-name">${b.name}</div>
    </div>`;
  }).join('');
}

// ===== 資格詳細描画 =====
function renderCertDetail(cert, stats) {
  const container = document.getElementById(`cert-detail-${cert.id}`);
  if (!container) return;

  const pct      = stats.certProgress[cert.id] || 0;
  const allTasks = cert.phases.flatMap(p => p.topics.flatMap(t => t.tasks));
  const done     = allTasks.filter(t => isDone(t.id)).length;

  container.innerHTML = `
    <div class="cert-detail-header">
      <div class="cert-detail-header-accent" style="background:${cert.color}"></div>
      <div class="cert-detail-top">
        <span class="cert-detail-icon">${cert.icon}</span>
        <div class="cert-detail-title">
          <h1>${cert.name}</h1>
          <p>${cert.fullName}</p>
        </div>
      </div>
      <div class="cert-detail-stats">
        <dl class="cert-detail-stat"><dt>目標</dt><dd>${cert.targetLabel}</dd></dl>
        <dl class="cert-detail-stat"><dt>学習時間目安</dt><dd>${cert.studyHours}時間</dd></dl>
        <dl class="cert-detail-stat"><dt>合格基準</dt><dd>${cert.passCriteria}</dd></dl>
      </div>
      <div class="exam-info-box">${cert.examInfo}</div>
      <div class="cert-detail-progress">
        <div class="cert-detail-progress-nums">
          <span><strong>${pct}%</strong> 完了</span>
          <span>${done} / ${allTasks.length} タスク完了</span>
        </div>
        <div class="cert-detail-bar-wrap">
          <div class="cert-detail-bar" style="background:${cert.color};width:${pct}%"></div>
        </div>
      </div>
    </div>
    <div class="cert-tabs">
      <button class="cert-tab active" onclick="switchTab('${cert.id}','curriculum',this)">カリキュラム</button>
      <button class="cert-tab" onclick="switchTab('${cert.id}','resources',this)">リソース</button>
    </div>
    <div id="tab-curriculum-${cert.id}" class="cert-tab-panel active">
      ${renderCurriculum(cert)}
    </div>
    <div id="tab-resources-${cert.id}" class="cert-tab-panel">
      ${renderResources(cert)}
    </div>`;
}

// ===== カリキュラム描画 =====
function renderCurriculum(cert) {
  const phaseIcons = ['📖','⚙️','🧮','🌐','🎯'];
  return cert.phases.map((phase, pi) => {
    const phaseTasks = phase.topics.flatMap(t => t.tasks);
    const phaseTotal = phaseTasks.length;
    const phaseDone  = phaseTasks.filter(t => isDone(t.id)).length;
    const phasePct   = phaseTotal > 0 ? Math.round((phaseDone / phaseTotal) * 100) : 0;

    const topicsHtml = phase.topics.map(topic => {
      const typeEmoji = { video: '▶️', quiz: '📝', review: '🔄' };
      const tasksHtml = topic.tasks.map(task => {
        const done = isDone(task.id);
        return `
          <div class="task-row ${done ? 'done' : ''}">
            <input type="checkbox" class="task-row-check" ${done ? 'checked' : ''}
              onchange="toggleTask('${task.id}','${task.type}')">
            <div class="task-row-body">
              <span class="task-row-label">${typeEmoji[task.type] || '📌'} ${task.label}</span>
              ${task.link ? `<a href="${task.link}" target="_blank" rel="noopener" class="task-row-link">リソースを開く →</a>` : ''}
              ${task.type === 'review' && task.hint ? `<div class="review-hint">📌 ${task.hint}</div>` : ''}
              ${task.type === 'review' && task.action === 'flashcard' ? `<button class="review-fc-btn" onclick="navigate('flashcard')">🃏 フラッシュカードで確認</button>` : ''}
            </div>
          </div>`;
      }).join('');
      return `<div class="topic-group">
        <div class="topic-title">${topic.title}</div>
        ${tasksHtml}
      </div>`;
    }).join('');

    return `
      <div class="phase-card">
        <div class="phase-header" id="phase-h-${phase.id}" onclick="togglePhase('${phase.id}')">
          <span class="phase-icon">${phaseIcons[pi % phaseIcons.length]}</span>
          <div class="phase-title-wrap">
            <div class="phase-title">${phase.title}</div>
            <div class="phase-range">${phase.range}</div>
          </div>
          <div style="text-align:right">
            <div class="phase-stat">${phaseDone} / ${phaseTotal}</div>
            <div class="phase-mini-bar"><div class="phase-mini-fill" style="width:${phasePct}%;background:${cert.color}"></div></div>
          </div>
          <span class="phase-toggle">▼</span>
        </div>
        <div class="phase-body" id="phase-b-${phase.id}">
          ${topicsHtml}
        </div>
      </div>`;
  }).join('');
}

// ===== リソース描画 =====
function renderResources(cert) {
  return `<div class="resources-list">` +
    cert.resources.map(r => `
      <div class="resource-item">
        <span class="resource-cat ${r.category}">${r.category}</span>
        <span class="resource-name">${r.name}</span>
        ${r.url
          ? `<a href="${r.url}" target="_blank" rel="noopener" class="resource-link">開く →</a>`
          : `<span class="resource-local">📁 ローカルファイル</span>`}
      </div>`).join('') +
  `</div>`;
}

// ===== フェーズ折りたたみ =====
window.togglePhase = function(phaseId) {
  document.getElementById('phase-b-' + phaseId).classList.toggle('open');
  document.getElementById('phase-h-' + phaseId).classList.toggle('open');
};

// ===== タブ切り替え =====
window.switchTab = function(certId, tabName, btn) {
  btn.closest('.cert-tabs').querySelectorAll('.cert-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  ['curriculum','resources'].forEach(name => {
    document.getElementById(`tab-${name}-${certId}`).classList.remove('active');
  });
  document.getElementById(`tab-${tabName}-${certId}`).classList.add('active');
};

// ===== ヒーロー・ナビ更新 =====
function renderHero(stats) {
  setText('dash-streak', state.streak || 0);
  setText('dash-level',  stats.level);
  setText('dash-xp',     stats.totalXP);
  setText('dash-tasks',  stats.totalCompleted);
  setStyle('dash-xp-bar',  'width', stats.xpPct + '%');
  setText('dash-xp-next', `${stats.xpInLevel} / ${stats.xpNeeded} XP`);
  setStyle('nav-xp-fill', 'width', stats.xpPct + '%');
  setText('nav-level', 'Lv.' + stats.level);
}

// ===== カテゴリビュー描画 =====
function renderCategoryViews(stats) {
  CERT_CATEGORIES.forEach(cat => {
    const container = document.getElementById('view-category-' + cat.id);
    if (!container) return;

    container.innerHTML = cat.certIds.map(certId => {
      const cert = CERTIFICATIONS.find(c => c.id === certId);
      if (!cert) return '';

      if (cert.obtained) {
        return `<div class="cert-obtained-card">
          <span class="cert-obtained-icon">${cert.icon}</span>
          <div class="cert-obtained-body">
            <div class="cert-obtained-name">${cert.name}</div>
            <div class="cert-obtained-fullname">${cert.fullName}</div>
            <div class="cert-obtained-label">✅ 取得済み</div>
          </div>
        </div>`;
      }

      // アクティブ資格：フルカリキュラムをインライン表示（IDに cert.id を使用）
      const pct      = stats.certProgress[certId] || 0;
      const allTasks = cert.phases.flatMap(p => p.topics.flatMap(t => t.tasks));
      const done     = allTasks.filter(t => isDone(t.id)).length;
      return `
        <div class="cert-detail-header">
          <div class="cert-detail-header-accent" style="background:${cert.color}"></div>
          <div class="cert-detail-top">
            <span class="cert-detail-icon">${cert.icon}</span>
            <div class="cert-detail-title">
              <h1>${cert.name}</h1>
              <p>${cert.fullName}</p>
            </div>
          </div>
          <div class="cert-detail-stats">
            <dl class="cert-detail-stat"><dt>目標</dt><dd>${cert.targetLabel}</dd></dl>
            <dl class="cert-detail-stat"><dt>学習時間目安</dt><dd>${cert.studyHours}時間</dd></dl>
            <dl class="cert-detail-stat"><dt>合格基準</dt><dd>${cert.passCriteria}</dd></dl>
          </div>
          <div class="exam-info-box">${cert.examInfo}</div>
          <div class="cert-detail-progress">
            <div class="cert-detail-progress-nums">
              <span><strong>${pct}%</strong> 完了</span>
              <span>${done} / ${allTasks.length} タスク完了</span>
            </div>
            <div class="cert-detail-bar-wrap">
              <div class="cert-detail-bar" style="background:${cert.color};width:${pct}%"></div>
            </div>
          </div>
        </div>
        <div class="cert-tabs">
          <button class="cert-tab active" onclick="switchTab('${certId}','curriculum',this)">カリキュラム</button>
          <button class="cert-tab" onclick="switchTab('${certId}','resources',this)">リソース</button>
        </div>
        <div id="tab-curriculum-${certId}" class="cert-tab-panel active">
          ${renderCurriculum(cert)}
        </div>
        <div id="tab-resources-${certId}" class="cert-tab-panel">
          ${renderResources(cert)}
        </div>`;
    }).join('');
  });
}

// ===== まとめて再描画 =====
function renderAll(stats) {
  renderHero(stats);
  renderCountdown();
  renderCertCards(stats.certProgress);
  renderRoadmap(stats.certProgress);
  renderActivityCalendar();
  renderTodayTasks();
  renderCompletedLog();
  renderBadges();
  renderCategoryViews(stats);
}

// ===== ユーティリティ =====
function setText(id, val)        { const el = document.getElementById(id); if (el) el.textContent = val; }
function setStyle(id, prop, val) { const el = document.getElementById(id); if (el) el.style[prop] = val; }

function hideUndoBtn() {
  const btn = document.getElementById('toast-undo');
  if (btn) btn.style.display = 'none';
}

function showToast(msg, showUndo) {
  const el  = document.getElementById('toast');
  const msgEl = document.getElementById('toast-msg');
  const btn = document.getElementById('toast-undo');
  if (!el || !msgEl) return;
  msgEl.textContent = msg;
  if (btn) {
    btn.style.display = showUndo ? 'inline-block' : 'none';
    btn.onclick = window.undoLast;
  }
  el.classList.add('show');
  clearTimeout(el._hideTimer);
  el._hideTimer = setTimeout(() => el.classList.remove('show'), showUndo ? 5500 : 2500);
}

// ===== 初期化 =====
function init() {
  buildTaskMeta();

  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => navigate(tab.dataset.view));
  });

  const resetBtn  = document.getElementById('reset-btn');
  if (resetBtn) resetBtn.addEventListener('click', resetAll);

  const exportBtn = document.getElementById('export-btn');
  if (exportBtn) exportBtn.addEventListener('click', exportState);

  const importBtn = document.getElementById('import-btn');
  if (importBtn) importBtn.addEventListener('click', importState);

  const importFile = document.getElementById('import-file');
  if (importFile) {
    importFile.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(ev) {
        try {
          const parsed = JSON.parse(ev.target.result);
          if (!parsed || typeof parsed.progress !== 'object') throw new Error('invalid format');
          // v1 migration
          Object.keys(parsed.progress).forEach(k => {
            if (typeof parsed.progress[k] === 'boolean') {
              parsed.progress[k] = { done: parsed.progress[k], completedAt: parsed.progress[k] ? new Date().toISOString() : null };
            }
          });
          state = parsed;
          saveState();
          const s = calcStats();
          renderAll(s);
          showToast('進捗データをインポートしました', false);
        } catch(err) {
          showToast('⚠️ ファイルの読み込みに失敗しました', false);
        }
      };
      reader.readAsText(file);
      e.target.value = ''; // 同一ファイルの再選択を可能に
    });
  }

  initPomodoro();
  initNotification();
  initFlashcards();

  const syncBtn = document.getElementById('sync-btn');
  if (syncBtn) syncBtn.addEventListener('click', syncToSupabase);

  initSupabase();
  syncFromSupabase();

  const stats = calcStats();
  renderAll(stats);
}

document.addEventListener('DOMContentLoaded', init);

// Service Worker 登録
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
