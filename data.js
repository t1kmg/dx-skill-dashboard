// data.js — 資格学習コンテンツ定義

const CERTIFICATIONS = [
  {
    id: 'g-ken',
    name: 'G検定',
    fullName: 'JDLA Deep Learning for GENERAL',
    category: 'AI',
    icon: '🤖',
    color: '#818cf8',
    targetDate: '2026-07',
    targetLabel: '2026年7月 受験目標',
    examInfo: '年3回（3月・7月・11月）｜オンライン｜120分・多肢選択｜合格率約30〜40%',
    passCriteria: '正答率約65%以上',
    studyHours: 100,
    phases: [
      {
        id: 'g-p1',
        title: 'Phase 1：AI概論・機械学習',
        range: '1〜3週（4/6〜4/26）',
        topics: [
          {
            id: 'g-p1-t1', title: 'Week 1：人工知能とは・AIをめぐる動向（第1〜4回）',
            tasks: [
              { id: 'g-p1-t1-v1', type: 'video', label: '動画：第1回 人工知能の定義・研究の歴史・第1〜3次AIブーム', link: 'https://www.youtube.com/watch?v=z8N7Y_hztHY&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p1-t1-v2', type: 'video', label: '動画：第2〜3回 探索・推論・知識表現・エキスパートシステム', link: 'https://www.youtube.com/watch?v=9VCZmCKGjQk&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p1-t1-v3', type: 'video', label: '動画：第4回 人工知能分野の問題（フレーム問題・シンギュラリティ・記号接地問題等）', link: 'https://www.youtube.com/watch?v=-NmgV76s_Os&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p1-t1-q', type: 'quiz',  label: '演習：黒本 AI概論・AIをめぐる動向 分野の問題を解く', link: null },
              { id: 'g-p1-t1-r', type: 'review', label: '復習：汎用AI・特化型AI・シンギュラリティ・フレーム問題・記号接地問題の定義確認', link: null, hint: '第1〜3次ブームの「きっかけ・主要技術・終焉理由」を時系列でまとめる。フラッシュカード「シンギュラリティ」でも確認できます。', action: 'flashcard' },
            ]
          },
          {
            id: 'g-p1-t2', title: 'Week 2：機械学習の概要（第5〜7回）',
            tasks: [
              { id: 'g-p1-t2-v1', type: 'video', label: '動画：第5回 教師あり学習（回帰・分類・決定木・SVM・k近傍法）', link: 'https://www.youtube.com/watch?v=kBfl8Tr8VtA&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p1-t2-v2', type: 'video', label: '動画：第6〜7回 教師なし学習（k-means・PCA）・強化学習', link: 'https://www.youtube.com/watch?v=tVz4Waf3pQc&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p1-t2-q', type: 'quiz',  label: '演習：黒本 機械学習（教師あり・なし・強化学習）分野の問題を解く', link: null },
              { id: 'g-p1-t2-r', type: 'review', label: '復習：決定木・SVM・k近傍法・k-means・PCAの特徴と用途の比較表作成', link: null, hint: '各アルゴリズムの「学習方法・得意なタスク・パラメータ調整ポイント」を表でまとめる。', action: 'flashcard' },
            ]
          },
          {
            id: 'g-p1-t3', title: 'Week 3：モデルの評価・過学習対策（第8回）',
            tasks: [
              { id: 'g-p1-t3-v', type: 'video', label: '動画：第8回 モデルの評価（混同行列・精度・適合率・再現率・F値・ROC曲線・交差検証・過学習）', link: 'https://www.youtube.com/watch?v=Mg7OxnjKtbE&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p1-t3-q', type: 'quiz',  label: '演習：黒本 モデルの評価・過学習対策 分野の問題を解く', link: null },
              { id: 'g-p1-t3-r', type: 'review', label: '復習：精度・適合率・再現率・F値の計算式と使い分け・AUCの意味', link: null, hint: '混同行列（TP/FP/FN/TN）から各指標を手計算で求められるよう練習する。フラッシュカード「F値」でも確認できます。', action: 'flashcard' },
            ]
          },
        ]
      },
      {
        id: 'g-p2',
        title: 'Phase 2：ディープラーニング基礎・CNN',
        range: '4〜5週（4/27〜5/10）',
        topics: [
          {
            id: 'g-p2-t1', title: 'Week 4：NN基礎・活性化関数・最適化・正則化（第9〜11回）',
            tasks: [
              { id: 'g-p2-t1-v1', type: 'video', label: '動画：第9回 ニューラルネットワークとディープラーニング・誤差逆伝播法', link: 'https://www.youtube.com/watch?v=FbOONmCv2go&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p2-t1-v2', type: 'video', label: '動画：第10回 活性化関数・学習の最適化（SGD・モーメンタム・Adam等）', link: 'https://www.youtube.com/watch?v=JvWx9Td0nis&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p2-t1-v3', type: 'video', label: '動画：第11回 更なるテクニック（正則化・ドロップアウト・バッチ正規化・データ拡張）', link: 'https://www.youtube.com/watch?v=zIjvJO5NkO0&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p2-t1-q', type: 'quiz',  label: '演習：黒本 NN・活性化関数・最適化・正則化 分野の問題を解く', link: null },
              { id: 'g-p2-t1-r', type: 'review', label: '復習：ReLU・Sigmoid・Softmaxの使い分け・SGD/Adamの違い・ドロップアウト/L1/L2の目的', link: null, hint: '各活性化関数の値域・微分・用途・勾配消失との関係をまとめる。フラッシュカード「ReLU」でも確認できます。', action: 'flashcard' },
            ]
          },
          {
            id: 'g-p2-t2', title: 'Week 5：CNN・深層生成モデル（第12〜14回）',
            tasks: [
              { id: 'g-p2-t2-v1', type: 'video', label: '動画：第12〜13回 畳み込みニューラルネットワーク（CNN）①②（畳み込み・プーリング・スキップ結合）', link: 'https://www.youtube.com/watch?v=lUgt5GHcG3k&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p2-t2-v2', type: 'video', label: '動画：第14回 深層生成モデル（GAN・VAE・拡散モデル・オートエンコーダ）', link: 'https://www.youtube.com/watch?v=GAKY9JWxtaY&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p2-t2-q', type: 'quiz',  label: '演習：黒本 CNN・深層生成モデル 分野の問題を解く', link: null },
              { id: 'g-p2-t2-r', type: 'review', label: '復習：畳み込み・プーリング・スキップ結合の役割・GAN/VAE/拡散モデルの仕組みの違い', link: null, hint: 'GAN=敵対的学習、VAE=変分下界・潜在空間、拡散モデル=ノイズ除去の各生成原理を図解でまとめる。フラッシュカード「転移学習」でも確認できます。', action: 'flashcard' },
            ]
          },
        ]
      },
      {
        id: 'g-p3',
        title: 'Phase 3：DL応用・最新技術',
        range: '6〜8週（5/11〜5/31）',
        topics: [
          {
            id: 'g-p3-t1', title: 'Week 6：画像認識応用・音声処理（第15〜18回）',
            tasks: [
              { id: 'g-p3-t1-v1', type: 'video', label: '動画：第15〜17回 物体識別・物体検出・セグメンテーション（VGG・ResNet・YOLO・転移学習・ファインチューニング）', link: 'https://www.youtube.com/watch?v=2b797xvF2-I&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p3-t1-v2', type: 'video', label: '動画：第18回 音声認識・音声合成（TTS）', link: 'https://www.youtube.com/watch?v=LpGTqoyxawg&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p3-t1-q', type: 'quiz',  label: '演習：黒本 画像認識応用・音声処理 分野の問題を解く', link: null },
              { id: 'g-p3-t1-r', type: 'review', label: '復習：転移学習・ファインチューニングの違い・物体識別/検出/セグメンテーションの出力の違い', link: null, hint: '転移学習=事前学習済み重みを流用、ファインチューニング=一部の層を再学習。3タスクの出力の違いを図解でまとめる。', action: 'flashcard' },
            ]
          },
          {
            id: 'g-p3-t2', title: 'Week 7：自然言語処理・Transformer・BERT・GPT（第19〜23回）',
            tasks: [
              { id: 'g-p3-t2-v1', type: 'video', label: '動画：第19〜20回 自然言語処理①②（RNN・LSTM・Attention・Transformer）', link: 'https://www.youtube.com/watch?v=XTo4-iiF_Hw&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p3-t2-v2', type: 'video', label: '動画：第21〜23回 自然言語処理③④⑤（BERT・GPT・LLM・マルチモーダル）', link: 'https://www.youtube.com/watch?v=4m3iG7ynhZM&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p3-t2-q', type: 'quiz',  label: '演習：黒本 自然言語処理・Transformer・生成AI 分野の問題を解く', link: null },
              { id: 'g-p3-t2-r', type: 'review', label: '復習：Self-Attention・Encoder-Decoder構造・BERTとGPTの違い・LLMの特徴', link: null, hint: 'BERTは双方向エンコーダ（穴埋め事前学習）、GPTは自己回帰デコーダ（次トークン予測）の違いを図解でまとめる。フラッシュカード「Attention機構」でも確認できます。', action: 'flashcard' },
            ]
          },
          {
            id: 'g-p3-t3', title: 'Week 8：深層強化学習・モデル解釈性・軽量化・社会実装（第24〜30回）',
            tasks: [
              { id: 'g-p3-t3-v1', type: 'video', label: '動画：第24〜25回 深層強化学習①②（DQN・方策勾配法）', link: 'https://www.youtube.com/watch?v=5N6TqoEfOh0&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p3-t3-v2', type: 'video', label: '動画：第26回 モデルの解釈性・軽量化・AIと社会（SHAP・LIME・プルーニング・量子化）', link: 'https://www.youtube.com/watch?v=dmTYJilMCgo&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p3-t3-v3', type: 'video', label: '動画：第27〜30回 AIプロジェクトの進め方・データ収集・加工・実装・運用・評価', link: 'https://www.youtube.com/watch?v=tsBgoQeCP6Y&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p3-t3-q', type: 'quiz',  label: '演習：黒本 DL応用・社会実装 分野の問題を解く', link: null },
              { id: 'g-p3-t3-r', type: 'review', label: '復習：CRISP-DM 6ステップ・SHAP/LIMEの違い・プルーニング/量子化の目的', link: null, hint: 'CRISP-DM 6ステップを順番に説明できるようにする。SHAP=全体の貢献度、LIME=局所的近似、の違いをまとめる。' },
            ]
          },
        ]
      },
      {
        id: 'g-p4',
        title: 'Phase 4：数学基礎・法律・倫理',
        range: '9〜11週（6/1〜6/21）',
        topics: [
          {
            id: 'g-p4-t1', title: 'Week 9：AIに必要な数理・統計知識（第32〜33回）',
            tasks: [
              { id: 'g-p4-t1-v1', type: 'video', label: '動画：第32回 数理・統計①（線形代数・行列・ベクトル・固有値・確率分布・ベイズ推定）', link: 'https://www.youtube.com/watch?v=xfVv6jRrDDY&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p4-t1-v2', type: 'video', label: '動画：第33回 数理・統計②（情報理論・エントロピー・最適化の数学）', link: 'https://www.youtube.com/watch?v=5dlqC3FPm3Q&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p4-t1-q', type: 'quiz',  label: '演習：黒本 数理・統計知識 分野の問題を解く', link: null },
              { id: 'g-p4-t1-r', type: 'review', label: '復習：正規分布・最尤推定・KLダイバージェンス・エントロピーの公式確認', link: null, hint: '各公式を紙に書いて再現できるか確認する。フラッシュカード「正規分布」「ベイズ推定」でも確認できます。', action: 'flashcard' },
            ]
          },
          {
            id: 'g-p4-t2', title: 'Week 10：法律・倫理・クライシス・マネジメント（第31回）',
            tasks: [
              { id: 'g-p4-t2-v', type: 'video', label: '動画：第31回 クライシス・マネジメント（個人情報保護法・著作権法・特許法・不正競争防止法・独占禁止法・AI倫理）', link: 'https://www.youtube.com/watch?v=2VKi9v24X9Y&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p4-t2-q', type: 'quiz',  label: '演習：黒本 法律・倫理 分野の問題を解く', link: null },
              { id: 'g-p4-t2-r', type: 'review', label: '復習：各法律のAIに関係するポイント・AI開発委託契約の要点整理', link: null, hint: '著作権法：学習用途の例外規定（第30条の4）、個人情報保護法：要配慮個人情報・匿名加工情報の違いをまとめる。' },
            ]
          },
          {
            id: 'g-p4-t3', title: 'Week 11：最新シラバス要点・AIガバナンス（2025前編・後編）',
            tasks: [
              { id: 'g-p4-t3-v1', type: 'video', label: '動画：【G検定2025】シラバス要点整理（前編）', link: 'https://www.youtube.com/watch?v=M3J8-KLHfYc&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p4-t3-v2', type: 'video', label: '動画：【G検定2025】シラバス要点整理（後編）', link: 'https://www.youtube.com/watch?v=aMsGHDw4R9s&list=PLTzA7a6XdKGZd4GH5Fjp3GY5yheWDTbNM' },
              { id: 'g-p4-t3-q', type: 'quiz',  label: '演習：黒本 AIガバナンス・産業応用 分野の問題を解く', link: null },
              { id: 'g-p4-t3-r', type: 'review', label: '復習：OECD AI原則・Society 5.0・SDGsとAIの関係・2025年追加シラバス項目の確認', link: null, hint: 'OECD AI原則（包括性・透明性・説明責任・強靭性・安全性等）と国内ガイドラインとの対応をまとめる。フラッシュカードも活用。', action: 'flashcard' },
            ]
          },
        ]
      },
      {
        id: 'g-p5',
        title: 'Phase 5：総仕上げ・模擬試験',
        range: '12週（6/22〜6/28）',
        topics: [
          {
            id: 'g-p5-t1', title: 'Week 12：模擬試験・弱点補強・直前確認',
            tasks: [
              { id: 'g-p5-t1-q1', type: 'quiz',  label: '演習：黒本 模擬試験（第1回）採点・分野別分析', link: null },
              { id: 'g-p5-t1-q2', type: 'quiz',  label: '演習：黒本 模擬試験（第2回）採点・弱点補強', link: null },
              { id: 'g-p5-t1-r',  type: 'review', label: '直前：頻出用語最終確認・試験当日のID確認・時間配分シミュレーション', link: null, hint: '模擬試験で誤った問題を分類し、白本の該当章を読み直す。JDLA受験者ページでIDを確認。120分÷問題数で時間配分メモを作成する。', action: 'flashcard' },
            ]
          },
        ]
      },
    ],
    resources: [
      { name: 'JDLA G検定 公式ページ', url: 'https://www.jdla.org/certificate/general/', category: '公式' },
      { name: 'G検定 申込ページ', url: 'https://www.jdla.org/certificate/general/#entry', category: '公式' },
      { name: 'G検定 公式シラバス', url: 'https://www.jdla.org/certificate/general/#general_No03', category: '公式' },
      { name: '白本（公式テキスト）', url: null, local: true, category: '教材' },
      { name: '黒本（問題集）', url: null, local: true, category: '教材' },
      { name: 'つくもちAI情報チャンネル（G検定講義シリーズ）', url: 'https://www.youtube.com/watch?v=z8N7Y_hztHY', category: '動画' },
    ]
  },
  {
    id: 'sg',
    name: '情報セキュリティマネジメント',
    fullName: '情報セキュリティマネジメント試験（SG）',
    category: 'IPA',
    icon: '🛡️',
    color: '#4ade80',
    obtained: true,
    phases: [],
    resources: [],
  },
  {
    id: 'sc',
    name: 'SC試験',
    fullName: '情報処理安全確保支援士試験',
    category: 'セキュリティ',
    icon: '🔐',
    color: '#38bdf8',
    targetDate: '2027-02',
    targetLabel: '2027年2月頃 受験目標（要確認）',
    examInfo: '⚠️ 制度改革中 — 2026年度よりCBT方式に完全移行。2026年度前期：2026年11月頃／後期：2027年2月頃（現行制度最後）。2027年度〜は新制度（記述式廃止・多肢選択化）。2026年夏頃に新シラバス公開予定のため、受験時期は状況を見て判断すること。',
    passCriteria: '各科目60点以上（科目A-1 は免除制度あり）',
    studyHours: 300,
    phases: [
      {
        id: 'sc-p0',
        title: 'Phase 0：午前I基礎固め',
        range: '1〜2週（4/6〜4/19）',
        topics: [
          {
            id: 'sc-p0-t1', title: 'Week 1：テクノロジ系基礎（ネットワーク・DB・セキュリティ概論）',
            tasks: [
              { id: 'sc-p0-t1-q1', type: 'quiz', label: '演習：午前I 過去問（テクノロジ系）30問', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p0-t1-r',  type: 'review', label: '復習：正答率70%未満の分野をノートに洗い出す', link: null, hint: '各大問カテゴリ別に正答率を記録し、70%未満の分野を重点確認リストに書き出す。' },
            ]
          },
          {
            id: 'sc-p0-t2', title: 'Week 2：マネジメント・ストラテジ系基礎',
            tasks: [
              { id: 'sc-p0-t2-q1', type: 'quiz', label: '演習：午前I 過去問（マネジメント・ストラテジ系）30問', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p0-t2-r',  type: 'review', label: '復習：午前I 免除条件確認・弱点分野の補強', link: null, hint: '応用情報技術者試験または他の高度試験合格から2年以内なら午前I免除可。該当する場合はPhase 1からスタート可。' },
            ]
          },
        ]
      },
      {
        id: 'sc-p1',
        title: 'Phase 1：暗号・認証・PKI',
        range: '3〜5週（4/20〜5/10）',
        topics: [
          {
            id: 'sc-p1-t1', title: 'Week 3：暗号方式（#1〜#9）',
            tasks: [
              { id: 'sc-p1-t1-v1', type: 'video', label: '動画：#1 共通鍵暗号方式', link: 'https://www.youtube.com/watch?v=vmRkn5JNqa0&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p1-t1-v2', type: 'video', label: '動画：#2-3 ブロック暗号・ストリーム暗号・暗号モード', link: 'https://www.youtube.com/watch?v=1jbQTIuDW8g&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p1-t1-v3', type: 'video', label: '動画：#4-6 公開鍵暗号方式・RSA・ハイブリッド暗号方式', link: 'https://www.youtube.com/watch?v=bsnyWESgr20&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p1-t1-v4', type: 'video', label: '動画：#7-9 DH法・ハッシュ関数・CRYPTREC暗号リスト', link: 'https://www.youtube.com/watch?v=WHPs1EUo0rQ&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p1-t1-q',  type: 'quiz',  label: '演習：午前II 暗号関連 過去問20問', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p1-t1-r',  type: 'review', label: '復習：共通鍵・公開鍵・ハイブリッドの用途・鍵管理の比較表を作成', link: null, hint: '各方式の「鍵の種類・配送問題の有無・処理速度・用途」を表で整理する。', action: 'flashcard' },
            ]
          },
          {
            id: 'sc-p1-t2', title: 'Week 4：認証方式（#10〜#19）',
            tasks: [
              { id: 'sc-p1-t2-v1', type: 'video', label: '動画：#10-12 ベーシック認証・チャレンジ&レスポンス・S/Key OTP', link: 'https://www.youtube.com/watch?v=TUBz3v7PVnk&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p1-t2-v2', type: 'video', label: '動画：#13-15 時刻同期OTP・生体認証・FIDO認証', link: 'https://www.youtube.com/watch?v=mqKbWsmBefU&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p1-t2-v3', type: 'video', label: '動画：#16-19 SSO（リバースプロキシ・Kerberos・SAML）・OAuth2.0', link: 'https://www.youtube.com/watch?v=uR2OfJJrIa4&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p1-t2-q',  type: 'quiz',  label: '演習：午前II 認証関連 過去問20問', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p1-t2-r',  type: 'review', label: '復習：OTP方式の比較・SSOプロトコルの違い整理', link: null, hint: 'S/Key（ハッシュチェーン）と時刻同期の仕組みの違い、SAML・OAuth・OIDCの使い分けをまとめる。', action: 'flashcard' },
            ]
          },
          {
            id: 'sc-p1-t3', title: 'Week 5：PKI・デジタル署名・MAC（#20〜#26）',
            tasks: [
              { id: 'sc-p1-t3-v1', type: 'video', label: '動画：#20-21 メッセージ認証符号（MAC）・デジタル署名', link: 'https://www.youtube.com/watch?v=OzGi7aB1fN0&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p1-t3-v2', type: 'video', label: '動画：#22-24 デジタル証明書・サーバ証明書の種類・PKI', link: 'https://www.youtube.com/watch?v=iwbGqXWA_ys&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p1-t3-v3', type: 'video', label: '動画：#25-26 デジタル証明書の検証方法・CRL・OCSP', link: 'https://www.youtube.com/watch?v=p7oVTL0BrYs&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p1-t3-q',  type: 'quiz',  label: '演習：午前II PKI・デジタル署名関連 過去問20問', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p1-t3-r',  type: 'review', label: '復習：PKIの信頼チェーン・CRL/OCSPの違い', link: null, hint: 'ルートCA→中間CA→サーバ証明書の関係図と、CRL（リスト配布）とOCSP（リアルタイム確認）の違いをまとめる。', action: 'flashcard' },
            ]
          },
        ]
      },
      {
        id: 'sc-p2',
        title: 'Phase 2：ネットワークセキュリティ',
        range: '6〜8週（5/11〜5/31）',
        topics: [
          {
            id: 'sc-p2-t1', title: 'Week 6：ネットワーク機器・境界防御（#27〜#33）',
            tasks: [
              { id: 'sc-p2-t1-v1', type: 'video', label: '動画：#27 TCPとUDP', link: 'https://www.youtube.com/watch?v=JGkMGeG9x48&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p2-t1-v2', type: 'video', label: '動画：#28-29 ファイアウォール・WAF', link: 'https://www.youtube.com/watch?v=Gf2SBjheq88&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p2-t1-v3', type: 'video', label: '動画：#30-32 IDS・IPS・検知方式と誤検知', link: 'https://www.youtube.com/watch?v=ge0rMsZHAMc&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p2-t1-v4', type: 'video', label: '動画：#33 フォワードプロキシとリバースプロキシ', link: 'https://www.youtube.com/watch?v=pK7yFaoazvk&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p2-t1-q',  type: 'quiz',  label: '演習：午前II ネットワーク機器・境界防御 過去問20問', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p2-t1-r',  type: 'review', label: '復習：FW・WAF・IDS・IPSの役割・配置・違いを表で整理', link: null, hint: 'FW=パケットフィルタリング、WAF=HTTPアプリ層、IDS=検知のみ、IPS=遮断まで、の違いを比較表にまとめる。', action: 'flashcard' },
            ]
          },
          {
            id: 'sc-p2-t2', title: 'Week 7：VPN・無線LANセキュリティ（#34〜#43）',
            tasks: [
              { id: 'sc-p2-t2-v1', type: 'video', label: '動画：#34-37 VPN・IPsec・IKE・VPN暗号化範囲と認証範囲', link: 'https://www.youtube.com/watch?v=yI00BxnVXRQ&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p2-t2-v2', type: 'video', label: '動画：#38-40 無線LANの基礎・セキュリティ規格・パーソナル/エンタープライズモード', link: 'https://www.youtube.com/watch?v=zAp2zF-r3ok&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p2-t2-v3', type: 'video', label: '動画：#41-43 IEEE802.1X認証・隠れ端末問題・MACアドレスフィルタリング・SSIDステルス', link: 'https://www.youtube.com/watch?v=vvtq72Mf8V8&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p2-t2-q',  type: 'quiz',  label: '演習：午前II VPN・無線LAN関連 過去問20問', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p2-t2-r',  type: 'review', label: '復習：IPsecのAH/ESP・トンネル/トランスポートモードの違い', link: null, hint: 'IPsecの2プロトコル（AH/ESP）と2モード（トンネル/トランスポート）の4組み合わせを整理する。', action: 'flashcard' },
            ]
          },
          {
            id: 'sc-p2-t3', title: 'Week 8：DNS・メール・HTTP・TLS・端末セキュリティ（#44〜#65）',
            tasks: [
              { id: 'sc-p2-t3-v1', type: 'video', label: '動画：#44-46 DNSサーバ・DNSキャッシュポイズニング・DNSSEC', link: 'https://www.youtube.com/watch?v=zz-jD7WOBmI&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p2-t3-v2', type: 'video', label: '動画：#47-53 ログ管理・SYSLOG・SNMP・パーソナルFW・サンドボックス・TPM・BYOD・IoT', link: 'https://www.youtube.com/watch?v=Qa4b0LHIK-M&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p2-t3-v3', type: 'video', label: '動画：#54-59 メール構成・ヘッダ構造・OP25B・SPF・DKIM・DMARC', link: 'https://www.youtube.com/watch?v=m6bDFIcBzWY&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p2-t3-v4', type: 'video', label: '動画：#60-65 HTTPの基礎・メッセージ構造・Cookie・TLS・常時SSL/TLS化・HSTS', link: 'https://www.youtube.com/watch?v=7B3QJ2tOMPU&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p2-t3-q',  type: 'quiz',  label: '演習：午前II DNS・メール・HTTP関連 過去問20問', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p2-t3-r',  type: 'review', label: '復習：SPF・DKIM・DMARCの役割の違い、TLSハンドシェイクの流れ', link: null, hint: 'SPF=送信元IPアドレス確認、DKIM=署名検証、DMARC=ポリシー管理。TLSのハンドシェイク手順を図解でまとめる。', action: 'flashcard' },
            ]
          },
        ]
      },
      {
        id: 'sc-p3',
        title: 'Phase 3：攻撃手法・最新防御技術',
        range: '9〜10週（6/1〜6/14）',
        topics: [
          {
            id: 'sc-p3-t1', title: 'Week 9：攻撃手法の基礎（#66〜#77）',
            tasks: [
              { id: 'sc-p3-t1-v1', type: 'video', label: '動画：#66-69 標的型攻撃・マルウェアと攻撃ツール・ウイルス対策・検疫ネットワーク', link: 'https://www.youtube.com/watch?v=ALm-nLF3koo&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p3-t1-v2', type: 'video', label: '動画：#70-74 DoS攻撃・Smurf攻撃・中間者攻撃・サイドチャネル攻撃・DNSアンプ/水責め攻撃', link: 'https://www.youtube.com/watch?v=xmxnK6WAcfg&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p3-t1-v3', type: 'video', label: '動画：#75-77 ソーシャルエンジニアリング・フィッシング・スミッシング・ARPポイズニング', link: 'https://www.youtube.com/watch?v=Nl7AaUrT36o&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p3-t1-q',  type: 'quiz',  label: '演習：午前II 攻撃手法関連 過去問20問', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p3-t1-r',  type: 'review', label: '復習：DoS・DDoS・Smurf・DNSアンプ攻撃の仕組みと対策の違い', link: null, hint: '各攻撃の「増幅率・プロトコル・対策方法」を比較表で整理する。', action: 'flashcard' },
            ]
          },
          {
            id: 'sc-p3-t2', title: 'Week 10：Webアプリ攻撃・最新防御技術（#78〜#91）',
            tasks: [
              { id: 'sc-p3-t2-v1', type: 'video', label: '動画：#78-82 XSS・CSRF・ディレクトリトラバーサル・パスワードクラッキング・ソルト/ストレッチング', link: 'https://www.youtube.com/watch?v=bX9hsnI3Qdk&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p3-t2-v2', type: 'video', label: '動画：#83-87 NOTICE・デジタルフォレンジックス・ブロックチェーン・ゼロトラスト・IAMとIAP', link: 'https://www.youtube.com/watch?v=e4b53P_UHXo&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p3-t2-v3', type: 'video', label: '動画：#88-91 CASB・セキュアウェブゲートウェイ（SWG）・SIEM・EDR（最終回）', link: 'https://www.youtube.com/watch?v=rT_MJVpu22U&list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI' },
              { id: 'sc-p3-t2-q',  type: 'quiz',  label: '演習：午前II Webアプリ攻撃・最新技術 過去問20問', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p3-t2-r',  type: 'review', label: '復習：ゼロトラストの構成要素・XSS/CSRFの対策の違い', link: null, hint: 'XSS=エスケープ処理、CSRF=トークン確認。ゼロトラストの構成要素（IAP・IAM・SIEM・EDR）を整理する。', action: 'flashcard' },
            ]
          },
        ]
      },
      {
        id: 'sc-p4',
        title: 'Phase 4：午前II 集中演習',
        range: '11〜12週（6/15〜6/28）',
        topics: [
          {
            id: 'sc-p4-t1', title: 'Week 11：午前II 過去問演習①（暗号・認証・ネットワーク）',
            tasks: [
              { id: 'sc-p4-t1-q1', type: 'quiz', label: '演習：午前II 直近5年分（暗号・認証分野）', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p4-t1-q2', type: 'quiz', label: '演習：午前II 直近5年分（ネットワーク・プロトコル分野）', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p4-t1-r',  type: 'review', label: '復習：正答率70%未満の問題を該当動画に戻って再確認', link: null, hint: '誤答した問題をPhase 1〜2の対応動画（#1〜#43）に戻って再視聴する。', action: 'flashcard' },
            ]
          },
          {
            id: 'sc-p4-t2', title: 'Week 12：午前II 過去問演習②（攻撃・法規・ISMS・マネジメント）',
            tasks: [
              { id: 'sc-p4-t2-q1', type: 'quiz', label: '演習：午前II 直近5年分（攻撃手法・セキュリティ管理分野）', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p4-t2-q2', type: 'quiz', label: '演習：午前II 直近5年分（法規・ISMS・ISO/IEC 27001関連分野）', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p4-t2-r',  type: 'review', label: '復習：苦手分野のフラッシュカード集中確認・全分野80%以上を確認してPhase 5へ', link: null, hint: '午前II 全分野で目標正答率80%以上を確認してからPhase 5へ進む。達していない分野はPhase 1〜3の対応動画を再視聴する。', action: 'flashcard' },
            ]
          },
        ]
      },
      {
        id: 'sc-p5',
        title: 'Phase 5：午後問題対策（読解・記述力）',
        range: '13〜15週（6/29〜7/19）',
        topics: [
          {
            id: 'sc-p5-t1', title: 'Week 13：午後I 記述演習①',
            tasks: [
              { id: 'sc-p5-t1-q1', type: 'quiz', label: '演習：午後I 過去問（ネットワーク・認証系）1問 精読・解説確認', link: 'https://www.ipa.go.jp/shiken/mondai-kaiotu/index.html' },
              { id: 'sc-p5-t1-q2', type: 'quiz', label: '演習：午後I 過去問（設計・開発系）1問 精読・解説確認', link: 'https://www.ipa.go.jp/shiken/mondai-kaiotu/index.html' },
              { id: 'sc-p5-t1-r',  type: 'review', label: '復習：模範解答との差分整理・不足していた技術用語の記録', link: null, hint: '自分の解答と模範解答を比較し、「どの技術用語が不足していたか」をメモにまとめる。' },
            ]
          },
          {
            id: 'sc-p5-t2', title: 'Week 14：午後I 記述演習②（速度訓練）',
            tasks: [
              { id: 'sc-p5-t2-q1', type: 'quiz', label: '演習：午後I 直近3年分 通し実施（時間計測あり・90分）', link: 'https://www.ipa.go.jp/shiken/mondai-kaiotu/index.html' },
              { id: 'sc-p5-t2-q2', type: 'quiz', label: '演習：午後I 選択戦略の確認（得意分野2問を確実に解く作戦を決める）', link: 'https://www.ipa.go.jp/shiken/mondai-kaiotu/index.html' },
              { id: 'sc-p5-t2-r',  type: 'review', label: '復習：問題文の読み方・解答の構成パターン整理', link: null, hint: '「脅威→影響→対策」の構成で答えられているか、模範解答と照合して確認する。' },
            ]
          },
          {
            id: 'sc-p5-t3', title: 'Week 15：午後II 論述演習',
            tasks: [
              { id: 'sc-p5-t3-q1', type: 'quiz', label: '演習：午後II 過去問1問（時間計測・120分）', link: 'https://www.ipa.go.jp/shiken/mondai-kaiotu/index.html' },
              { id: 'sc-p5-t3-r',  type: 'review', label: '復習：模範解答と照合・論述構成（設問ア・イ・ウ）のポイント確認', link: null, hint: '論述の構成（設問ア・イ・ウ）に沿って分量・内容が適切か確認する。フラッシュカードでSC用語を再確認。', action: 'flashcard' },
            ]
          },
        ]
      },
      {
        id: 'sc-p6',
        title: 'Phase 6：総仕上げ',
        range: '16週（7/20〜7/26）',
        topics: [
          {
            id: 'sc-p6-t1', title: 'Week 16：模擬試験・弱点補強・直前確認',
            tasks: [
              { id: 'sc-p6-t1-q1', type: 'quiz', label: '模擬試験：午前I・午前II・午後I 通し実施（時間計測）', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p6-t1-q2', type: 'quiz', label: '演習：午前II 頻出用語・プロトコル・規格 最終確認', link: 'https://www.sc-siken.com/sckakomon.php' },
              { id: 'sc-p6-t1-r',  type: 'review', label: '直前：試験当日の準備・会場確認・時間配分シミュレーション', link: null, hint: 'IPAの受験票を確認。会場へのルートを調べる。午前I・II・午後I・IIの時間配分を計画表に書き出す。' },
            ]
          },
        ]
      },
    ],
    resources: [
      { name: 'IPA 公式 SC 過去問ダウンロード', url: 'https://www.ipa.go.jp/shiken/mondai-kaiotu/index.html', category: '公式' },
      { name: '情報処理安全確保支援士 過去問道場', url: 'https://www.sc-siken.com/sckakomon.php', category: '演習' },
      { name: 'サクッと学べる支援士対策（プレイリスト全91本）', url: 'https://www.youtube.com/playlist?list=PLfrpqyRFsglL3WgvYiZsBO7Al1YsE64DI', category: '動画' },
      { name: 'IPA 情報セキュリティ白書', url: 'https://www.ipa.go.jp/publish/wp-security/index.html', category: '参考' },
      { name: 'IPA SC シラバス改定案（2025年）', url: 'https://www.ipa.go.jp/shiken/syllabus/henkou/2025/20260331.html', category: '公式' },
    ]
  }
];

// ===== 資格カテゴリ定義 =====
const CERT_CATEGORIES = [
  { id: 'ai',  label: 'AI資格',    certIds: ['g-ken'] },
  { id: 'ipa', label: '情処(IPA)', certIds: ['sg', 'sc'] },
];

// ===== フラッシュカード定義 =====
const FLASHCARDS = [
  // G検定
  { id: 'fc-g-01', cert: 'g-ken', certLabel: 'G検定', term: '教師あり学習', definition: 'ラベル付きデータ（正解）を使ってモデルを学習する手法。分類・回帰問題に使用。例：スパムフィルタ・住宅価格予測。' },
  { id: 'fc-g-02', cert: 'g-ken', certLabel: 'G検定', term: '教師なし学習', definition: 'ラベルなしデータからパターンや構造を自律的に発見する手法。クラスタリング・次元削減・密度推定など。' },
  { id: 'fc-g-03', cert: 'g-ken', certLabel: 'G検定', term: '強化学習', definition: 'エージェントが環境と試行錯誤しながら報酬を最大化する行動を学ぶ手法。囲碁AI（AlphaGo）やゲームAIで活用。' },
  { id: 'fc-g-04', cert: 'g-ken', certLabel: 'G検定', term: '誤差逆伝播法（バックプロパゲーション）', definition: 'NNの損失を出力層から入力層方向へ微分の連鎖律（chain rule）で伝播させ、各重みを更新するアルゴリズム。' },
  { id: 'fc-g-05', cert: 'g-ken', certLabel: 'G検定', term: 'ReLU（Rectified Linear Unit）', definition: '活性化関数の一種。f(x) = max(0, x)。負の値を0に切り捨て、勾配消失問題を軽減する。現在最も広く使われる。' },
  { id: 'fc-g-06', cert: 'g-ken', certLabel: 'G検定', term: '過学習（オーバーフィッティング）', definition: '訓練データに過度に適合し、未知データへの汎化性能が低下する問題。ドロップアウト・正則化・データ拡張で対策。' },
  { id: 'fc-g-07', cert: 'g-ken', certLabel: 'G検定', term: 'ドロップアウト', definition: '学習中にランダムにニューロンを無効化する正則化手法。過学習を防ぎ、アンサンブル効果も得られる。' },
  { id: 'fc-g-08', cert: 'g-ken', certLabel: 'G検定', term: 'CNN（畳み込みニューラルネットワーク）', definition: '画像認識に特化したNN。畳み込み層（特徴抽出）＋プーリング層（ダウンサンプリング）で空間的な特徴を学習する。' },
  { id: 'fc-g-09', cert: 'g-ken', certLabel: 'G検定', term: 'Transformer', definition: 'Self-Attention機構のみで構成されるDLアーキテクチャ（2017年Vaswaniら提案）。BERTやGPTの基盤。RNNより並列処理が得意。' },
  { id: 'fc-g-10', cert: 'g-ken', certLabel: 'G検定', term: '転移学習（Transfer Learning）', definition: '大規模データで学習済みのモデルを、別の（少データ）タスクに応用する手法。事前学習＋ファインチューニングが典型。' },
  { id: 'fc-g-11', cert: 'g-ken', certLabel: 'G検定', term: 'シンギュラリティ（技術的特異点）', definition: 'AIが人類の知能を超え、技術進歩が加速度的になるとされる転換点。レイ・カーツワイルが2045年頃と予測。' },
  { id: 'fc-g-12', cert: 'g-ken', certLabel: 'G検定', term: 'ベイズ推定', definition: '事前確率に観測データを加えてベイズの定理で事後確率を更新する確率的推論。P(A|B) = P(B|A)P(A)/P(B)。' },
  { id: 'fc-g-13', cert: 'g-ken', certLabel: 'G検定', term: 'GAN（敵対的生成ネットワーク）', definition: '生成器（Generator）と識別器（Discriminator）が競い合い、本物そっくりのデータを生成するモデル。画像生成などに活用。' },
  { id: 'fc-g-14', cert: 'g-ken', certLabel: 'G検定', term: 'BERT', definition: 'GoogleのBidirectional Encoder Representations from Transformers。文章を両方向から理解するTransformerモデル。事前学習＋FTで多タスク対応。' },
  { id: 'fc-g-15', cert: 'g-ken', certLabel: 'G検定', term: '損失関数（Loss Function）', definition: 'モデルの予測値と正解の誤差を定量化する関数。分類には交差エントロピー、回帰にはMSE（平均二乗誤差）が一般的。' },
  { id: 'fc-g-16', cert: 'g-ken', certLabel: 'G検定', term: '勾配消失問題', definition: 'DNN学習時、誤差逆伝播で入力層に近づくほど勾配が0に近づく問題。ReLUや残差接続（ResNet）で対策。' },
  { id: 'fc-g-17', cert: 'g-ken', certLabel: 'G検定', term: 'Attention機構', definition: 'シーケンス内の各要素が他の要素とどれだけ関連するかを重み付けする仕組み。Transformerの中核。' },
  { id: 'fc-g-18', cert: 'g-ken', certLabel: 'G検定', term: '正規分布（ガウス分布）', definition: '平均μと分散σ²で定まる釣り鐘型の確率分布。機械学習での誤差分布の仮定や初期化などで広く登場。' },
  { id: 'fc-g-19', cert: 'g-ken', certLabel: 'G検定', term: 'ファインチューニング', definition: '大規模データで事前学習したモデルを、少量のタスク固有データで追加学習する転移学習の手法。' },
  { id: 'fc-g-20', cert: 'g-ken', certLabel: 'G検定', term: 'ハイパーパラメータ', definition: '学習前に人手で設定するパラメータ。学習率・バッチサイズ・層数・ドロップアウト率など。グリッドサーチや自動探索で最適化。' },
  // SC試験
  { id: 'fc-s-01', cert: 'sc', certLabel: 'SC試験', term: 'SQLインジェクション', definition: 'ユーザー入力にSQL文を埋め込み、DBを不正操作する攻撃。対策：プリペアドステートメント・入力値のサニタイジング。' },
  { id: 'fc-s-02', cert: 'sc', certLabel: 'SC試験', term: 'XSS（クロスサイトスクリプティング）', definition: '悪意あるスクリプトをWebページに埋め込み、閲覧者のブラウザで実行させる攻撃。対策：出力エスケープ・CSP。' },
  { id: 'fc-s-03', cert: 'sc', certLabel: 'SC試験', term: 'CSRF（クロスサイトリクエストフォージェリ）', definition: '認証済みユーザーに意図しないHTTPリクエストを送らせる攻撃。対策：トークン検証・SameSite Cookie。' },
  { id: 'fc-s-04', cert: 'sc', certLabel: 'SC試験', term: '公開鍵暗号（非対称暗号）', definition: '暗号化に公開鍵、復号に秘密鍵を使う方式。例：RSA。鍵配送問題を解決するが処理速度は共通鍵より遅い。' },
  { id: 'fc-s-05', cert: 'sc', certLabel: 'SC試験', term: 'デジタル署名', definition: '送信者が秘密鍵でハッシュ値を暗号化し、受信者が公開鍵で検証する仕組み。なりすまし・改ざん・否認防止に効果。' },
  { id: 'fc-s-06', cert: 'sc', certLabel: 'SC試験', term: 'PKI（公開鍵基盤）', definition: '認証局（CA）が公開鍵証明書を発行・管理する仕組み。X.509証明書でHTTPS通信の安全性を担保する。' },
  { id: 'fc-s-07', cert: 'sc', certLabel: 'SC試験', term: 'ランサムウェア', definition: 'ファイルを暗号化して身代金（ransom）を要求するマルウェア。対策：バックアップ・EDR・メール訓練。' },
  { id: 'fc-s-08', cert: 'sc', certLabel: 'SC試験', term: 'ISMS（情報セキュリティマネジメントシステム）', definition: 'ISO/IEC 27001に基づく情報セキュリティ管理の枠組み。PDCAサイクルでリスクを継続的に管理する。' },
  { id: 'fc-s-09', cert: 'sc', certLabel: 'SC試験', term: 'リスクアセスメント', definition: '脅威・脆弱性・影響度を評価し、リスクを特定・分析・評価するプロセス。ISMSの中核。結果に応じてリスク対応策を選択。' },
  { id: 'fc-s-10', cert: 'sc', certLabel: 'SC試験', term: 'ゼロトラスト', definition: '「内部ネットワークも信頼しない」前提で全アクセスを検証するセキュリティモデル。VPN依存からの脱却として注目。' },
  { id: 'fc-s-11', cert: 'sc', certLabel: 'SC試験', term: 'CSIRT', definition: 'Computer Security Incident Response Team。セキュリティインシデントに対応する専門チーム。社内CSIRT設置が推奨される。' },
  { id: 'fc-s-12', cert: 'sc', certLabel: 'SC試験', term: 'WAF（Webアプリケーションファイアウォール）', definition: 'WebアプリへのHTTPリクエストを監視・フィルタリングしてSQLiやXSS等の攻撃を遮断する装置。' },
  { id: 'fc-s-13', cert: 'sc', certLabel: 'SC試験', term: '多要素認証（MFA）', definition: 'パスワード（知識）＋スマホ（所持）＋生体認証（生体）など複数の要素を組み合わせる認証方式。不正ログイン対策に有効。' },
  { id: 'fc-s-14', cert: 'sc', certLabel: 'SC試験', term: 'フィッシング攻撃', definition: '正規サービスを装った偽サイト・メールで認証情報を詐取する攻撃。スピアフィッシングは特定組織を狙う標的型。' },
  { id: 'fc-s-15', cert: 'sc', certLabel: 'SC試験', term: 'ソーシャルエンジニアリング', definition: '技術ではなく人間の心理・行動を利用して情報を不正入手する手法。なりすまし・口実作り・プリテキスティングなど。' },
  { id: 'fc-s-16', cert: 'sc', certLabel: 'SC試験', term: 'DDoS攻撃', definition: '複数の踏み台（ボットネット）から大量のリクエストを送りサービスを停止させる攻撃。DoSの分散型（Distributed）版。' },
  { id: 'fc-s-17', cert: 'sc', certLabel: 'SC試験', term: 'ペネトレーションテスト', definition: 'システムへの擬似攻撃を実施し、実際に侵入できるかを検証するセキュリティテスト。脆弱性診断より踏み込んだ評価。' },
  { id: 'fc-s-18', cert: 'sc', certLabel: 'SC試験', term: '不正アクセス禁止法', definition: 'アクセス権限なしにコンピュータにアクセスすることを禁じた日本の法律（正式名：不正アクセス行為の禁止等に関する法律）。' },
  { id: 'fc-s-19', cert: 'sc', certLabel: 'SC試験', term: 'TLS（Transport Layer Security）', definition: '通信の暗号化・認証・完全性保護を提供するプロトコル。HTTPSはHTTP over TLS。SSLの後継。現行はTLS 1.3。' },
  { id: 'fc-s-20', cert: 'sc', certLabel: 'SC試験', term: 'インシデントレスポンス', definition: 'セキュリティインシデント発生時の対応手順。検知→封じ込め→根絶→復旧→事後分析の流れで対処する。' },
];

// ロードマップ（全体タイムライン）
const ROADMAP = [
  { certId: 'g-ken', label: 'G検定',  startMonth: '2026-04', endMonth: '2026-07', milestone: '2026年7月 受験' },
  { certId: 'sc',    label: 'SC試験', startMonth: '2026-08', endMonth: '2027-02', milestone: '2027年2月頃 受験（要確認）' },
];

// バッジ定義
const BADGES = [
  { id: 'first-step',   icon: '🚀', name: 'ファーストステップ',  desc: '初めてタスクを完了',        condition: p => p.totalCompleted >= 1 },
  { id: 'week-warrior', icon: '🔥', name: 'ウィークウォリアー',  desc: '7日連続学習',               condition: p => p.streak >= 7 },
  { id: 'half-way',     icon: '🎯', name: 'ハーフウェイ',        desc: 'G検定 50%完了',             condition: p => p.certProgress['g-ken'] >= 50 },
  { id: 'g-ken-done',   icon: '🤖', name: 'G検定 マスター',      desc: 'G検定 全タスク完了',        condition: p => p.certProgress['g-ken'] >= 100 },
  { id: 'sc-started',   icon: '🔐', name: 'SC 始動',             desc: 'SC試験学習を開始',           condition: p => p.certProgress['sc'] >= 1 },
  { id: 'sc-done',      icon: '🏆', name: 'SC マスター',         desc: 'SC試験 全タスク完了',       condition: p => p.certProgress['sc'] >= 100 },
  { id: 'lv10',         icon: '⭐', name: 'レベル10達成',        desc: 'レベル10に到達',            condition: p => p.level >= 10 },
  { id: 'lv30',         icon: '💎', name: 'レベル30達成',        desc: 'レベル30に到達',            condition: p => p.level >= 30 },
];
