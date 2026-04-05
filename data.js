// data.js — 資格学習コンテンツ定義

const CERTIFICATIONS = [
  {
    id: 'g-ken',
    name: 'G検定',
    fullName: 'JDLA Deep Learning for GENERAL',
    category: 'AI',
    icon: '🤖',
    color: '#818cf8',
    targetDate: '2026-05',
    targetLabel: '2026年5月9日 受験（オンライン）',
    examInfo: '年複数回実施｜オンライン｜120分・多肢選択｜合格率約30〜40%｜次回：2026年5月9日（申込済）',
    passCriteria: '正答率約65%以上',
    studyHours: 100,
    phases: [
      {
        id: 'g-p1',
        title: 'Phase 1：AI概論・機械学習',
        range: '1〜3週（4/6〜4/11）— 白本2周目（1周目完了済み）',
        topics: [
          {
            id: 'g-p1-t1', title: 'Week 1：人工知能とは・AIをめぐる動向（第1〜4回）【白本1周目完了済み✓】',
            tasks: [
              { id: 'g-p1-t1-v1', type: 'video', label: '動画：人工知能とは何か（AIの定義・研究の歴史・第1〜3次AIブーム）', link: 'https://youtu.be/2UB6HnB349E' },
              { id: 'g-p1-t1-v2', type: 'video', label: '動画：人工知能をめぐる動向（探索・推論・知識表現・フレーム問題・シンギュラリティ）', link: 'https://youtu.be/YFbEtE8fkGg' },
              { id: 'g-p1-t1-q', type: 'quiz',  label: '演習：黒本 AI概論・AIをめぐる動向 分野の問題を解く', link: 'https://drive.google.com/file/d/1OWSEeObgOZ5O64VNMLwvtLULrklvUNio/view' },
              { id: 'g-p1-t1-r', type: 'review', label: '復習：汎用AI・特化型AI・シンギュラリティ・フレーム問題・記号接地問題の定義確認', link: null, hint: '第1〜3次ブームの「きっかけ・主要技術・終焉理由」を時系列でまとめる。フラッシュカード「シンギュラリティ」でも確認できます。', action: 'flashcard' },
            ]
          },
          {
            id: 'g-p1-t2', title: 'Week 2：機械学習の概要（第5〜7回）【白本1周目完了済み✓】',
            tasks: [
              { id: 'g-p1-t2-v1', type: 'video', label: '動画：機械学習の概要（教師あり・なし・強化学習・決定木・SVM・k-means・PCA）', link: 'https://youtu.be/d4brSTv_11k' },
              { id: 'g-p1-t2-q', type: 'quiz',  label: '演習：黒本 機械学習（教師あり・なし・強化学習）分野の問題を解く', link: 'https://drive.google.com/file/d/1OWSEeObgOZ5O64VNMLwvtLULrklvUNio/view' },
              { id: 'g-p1-t2-r', type: 'review', label: '復習：決定木・SVM・k近傍法・k-means・PCAの特徴と用途の比較表作成', link: null, hint: '各アルゴリズムの「学習方法・得意なタスク・パラメータ調整ポイント」を表でまとめる。', action: 'flashcard' },
            ]
          },
          {
            id: 'g-p1-t3', title: '⬅ Week 3：モデルの評価・過学習対策（第8回）【2周目 4/4〜4/11 今週開始】',
            tasks: [
              { id: 'g-p1-t3-v', type: 'video', label: '動画：ディープラーニングの概要（モデル評価・混同行列・精度・F値・ROC曲線・過学習）', link: 'https://youtu.be/v4vo_wqcsfE' },
              { id: 'g-p1-t3-q', type: 'quiz',  label: '演習：黒本 モデルの評価・過学習対策 分野の問題を解く', link: 'https://drive.google.com/file/d/1OWSEeObgOZ5O64VNMLwvtLULrklvUNio/view' },
              { id: 'g-p1-t3-r', type: 'review', label: '復習：精度・適合率・再現率・F値の計算式と使い分け・AUCの意味', link: null, hint: '混同行列（TP/FP/FN/TN）から各指標を手計算で求められるよう練習する。フラッシュカード「F値」でも確認できます。', action: 'flashcard' },
            ]
          },
        ]
      },
      {
        id: 'g-p2',
        title: 'Phase 2：ディープラーニング基礎・CNN',
        range: '4〜5週（4/12〜4/25）',
        topics: [
          {
            id: 'g-p2-t1', title: 'Week 4：NN基礎・活性化関数・最適化・正則化（第9〜11回）',
            tasks: [
              { id: 'g-p2-t1-v1', type: 'video', label: '動画：ディープラーニング概要（ニューラルネットワーク・誤差逆伝播・学習の仕組み）', link: 'https://youtu.be/v4vo_wqcsfE' },
              { id: 'g-p2-t1-v2', type: 'video', label: '動画：ディープラーニングの要素技術（活性化関数・最適化・正則化・ドロップアウト・バッチ正規化）', link: 'https://youtu.be/ttjCKctEjm8' },
              { id: 'g-p2-t1-q', type: 'quiz',  label: '演習：黒本 NN・活性化関数・最適化・正則化 分野の問題を解く', link: 'https://drive.google.com/file/d/1OWSEeObgOZ5O64VNMLwvtLULrklvUNio/view' },
              { id: 'g-p2-t1-r', type: 'review', label: '復習：ReLU・Sigmoid・Softmaxの使い分け・SGD/Adamの違い・ドロップアウト/L1/L2の目的', link: null, hint: '各活性化関数の値域・微分・用途・勾配消失との関係をまとめる。フラッシュカード「ReLU」でも確認できます。', action: 'flashcard' },
            ]
          },
          {
            id: 'g-p2-t2', title: 'Week 5：CNN・深層生成モデル（第12〜14回）',
            tasks: [
              { id: 'g-p2-t2-v1', type: 'video', label: '動画：ディープラーニングの要素技術（CNN・畳み込み・プーリング・スキップ結合）', link: 'https://youtu.be/ttjCKctEjm8' },
              { id: 'g-p2-t2-v2', type: 'video', label: '動画：ディープラーニングの応用例（深層生成モデル・GAN・VAE・拡散モデル）', link: 'https://youtu.be/KgfOa8YtPLk' },
              { id: 'g-p2-t2-q', type: 'quiz',  label: '演習：黒本 CNN・深層生成モデル 分野の問題を解く', link: 'https://drive.google.com/file/d/1OWSEeObgOZ5O64VNMLwvtLULrklvUNio/view' },
              { id: 'g-p2-t2-r', type: 'review', label: '復習：畳み込み・プーリング・スキップ結合の役割・GAN/VAE/拡散モデルの仕組みの違い', link: null, hint: 'GAN=敵対的学習、VAE=変分下界・潜在空間、拡散モデル=ノイズ除去の各生成原理を図解でまとめる。フラッシュカード「転移学習」でも確認できます。', action: 'flashcard' },
            ]
          },
        ]
      },
      {
        id: 'g-p3',
        title: 'Phase 3：DL応用・最新技術',
        range: '6〜8週（4/26〜5/4）【2周目：要点確認＋演習】',
        topics: [
          {
            id: 'g-p3-t1', title: 'Week 6：画像認識応用・音声処理（第15〜18回）',
            tasks: [
              { id: 'g-p3-t1-v1', type: 'video', label: '動画：ディープラーニングの応用例（画像認識・物体検出・セグメンテーション・転移学習）', link: 'https://youtu.be/KgfOa8YtPLk' },
              { id: 'g-p3-t1-v2', type: 'video', label: '動画：ディープラーニングの応用例（音声認識・音声合成・TTS）', link: 'https://youtu.be/KgfOa8YtPLk' },
              { id: 'g-p3-t1-q', type: 'quiz',  label: '演習：黒本 画像認識応用・音声処理 分野の問題を解く', link: 'https://drive.google.com/file/d/1OWSEeObgOZ5O64VNMLwvtLULrklvUNio/view' },
              { id: 'g-p3-t1-r', type: 'review', label: '復習：転移学習・ファインチューニングの違い・物体識別/検出/セグメンテーションの出力の違い', link: null, hint: '転移学習=事前学習済み重みを流用、ファインチューニング=一部の層を再学習。3タスクの出力の違いを図解でまとめる。', action: 'flashcard' },
            ]
          },
          {
            id: 'g-p3-t2', title: 'Week 7：自然言語処理・Transformer・BERT・GPT（第19〜23回）',
            tasks: [
              { id: 'g-p3-t2-v1', type: 'video', label: '動画：ディープラーニングの応用例（NLP・RNN・LSTM・Attention・Transformer）', link: 'https://youtu.be/KgfOa8YtPLk' },
              { id: 'g-p3-t2-v2', type: 'video', label: '動画：ディープラーニングの応用例（BERT・GPT・LLM・マルチモーダル）', link: 'https://youtu.be/KgfOa8YtPLk' },
              { id: 'g-p3-t2-q', type: 'quiz',  label: '演習：黒本 自然言語処理・Transformer・生成AI 分野の問題を解く', link: 'https://drive.google.com/file/d/1OWSEeObgOZ5O64VNMLwvtLULrklvUNio/view' },
              { id: 'g-p3-t2-r', type: 'review', label: '復習：Self-Attention・Encoder-Decoder構造・BERTとGPTの違い・LLMの特徴', link: null, hint: 'BERTは双方向エンコーダ（穴埋め事前学習）、GPTは自己回帰デコーダ（次トークン予測）の違いを図解でまとめる。フラッシュカード「Attention機構」でも確認できます。', action: 'flashcard' },
            ]
          },
          {
            id: 'g-p3-t3', title: 'Week 8：深層強化学習・モデル解釈性・軽量化・社会実装（第24〜30回）',
            tasks: [
              { id: 'g-p3-t3-v1', type: 'video', label: '動画：ディープラーニングの応用例（深層強化学習・DQN・モデル解釈性・軽量化）', link: 'https://youtu.be/KgfOa8YtPLk' },
              { id: 'g-p3-t3-v2', type: 'video', label: '動画：AIの社会実装に向けて（AIプロジェクトの進め方・データ収集・加工・運用評価）', link: 'https://youtu.be/xRN3W74Pf9w' },
              { id: 'g-p3-t3-q', type: 'quiz',  label: '演習：黒本 DL応用・社会実装 分野の問題を解く', link: 'https://drive.google.com/file/d/1OWSEeObgOZ5O64VNMLwvtLULrklvUNio/view' },
              { id: 'g-p3-t3-r', type: 'review', label: '復習：CRISP-DM 6ステップ・SHAP/LIMEの違い・プルーニング/量子化の目的', link: null, hint: 'CRISP-DM 6ステップを順番に説明できるようにする。SHAP=全体の貢献度、LIME=局所的近似、の違いをまとめる。' },
            ]
          },
        ]
      },
      {
        id: 'g-p4',
        title: 'Phase 4：数学基礎・法律・倫理',
        range: '9〜11週（5/5〜5/7）【2周目：要点確認＋演習】',
        topics: [
          {
            id: 'g-p4-t1', title: 'Week 9：AIに必要な数理・統計知識（第32〜33回）',
            tasks: [
              { id: 'g-p4-t1-v1', type: 'video', label: '動画：AIに必要な数理・統計知識（線形代数・確率分布・ベイズ推定・情報理論・エントロピー）', link: 'https://youtu.be/WnTIb5vPhQg' },
              { id: 'g-p4-t1-q', type: 'quiz',  label: '演習：黒本 数理・統計知識 分野の問題を解く', link: 'https://drive.google.com/file/d/1OWSEeObgOZ5O64VNMLwvtLULrklvUNio/view' },
              { id: 'g-p4-t1-r', type: 'review', label: '復習：正規分布・最尤推定・KLダイバージェンス・エントロピーの公式確認', link: null, hint: '各公式を紙に書いて再現できるか確認する。フラッシュカード「正規分布」「ベイズ推定」でも確認できます。', action: 'flashcard' },
            ]
          },
          {
            id: 'g-p4-t2', title: 'Week 10：法律・倫理・クライシス・マネジメント（第31回）',
            tasks: [
              { id: 'g-p4-t2-v', type: 'video', label: '動画：AIに関する法律と契約（個人情報保護法・著作権法・特許法・不正競争防止法・独占禁止法）', link: 'https://youtu.be/MsHN_sPy7dU' },
              { id: 'g-p4-t2-q', type: 'quiz',  label: '演習：黒本 法律・倫理 分野の問題を解く', link: 'https://drive.google.com/file/d/1OWSEeObgOZ5O64VNMLwvtLULrklvUNio/view' },
              { id: 'g-p4-t2-r', type: 'review', label: '復習：各法律のAIに関係するポイント・AI開発委託契約の要点整理', link: null, hint: '著作権法：学習用途の例外規定（第30条の4）、個人情報保護法：要配慮個人情報・匿名加工情報の違いをまとめる。' },
            ]
          },
          {
            id: 'g-p4-t3', title: 'Week 11：最新シラバス要点・AIガバナンス（2025前編・後編）',
            tasks: [
              { id: 'g-p4-t3-v1', type: 'video', label: '動画：AI倫理・AIガバナンス（OECD原則・各国ガイドライン・責任あるAI）', link: 'https://youtu.be/o_5mMhrWffs' },
              { id: 'g-p4-t3-v2', type: 'video', label: '動画：用語解説 総まとめ（G検定2026対応）', link: 'https://youtu.be/iNMZtrpTXpM' },
              { id: 'g-p4-t3-q', type: 'quiz',  label: '演習：黒本 AIガバナンス・産業応用 分野の問題を解く', link: 'https://drive.google.com/file/d/1OWSEeObgOZ5O64VNMLwvtLULrklvUNio/view' },
              { id: 'g-p4-t3-r', type: 'review', label: '復習：OECD AI原則・Society 5.0・SDGsとAIの関係・2025年追加シラバス項目の確認', link: null, hint: 'OECD AI原則（包括性・透明性・説明責任・強靭性・安全性等）と国内ガイドラインとの対応をまとめる。フラッシュカードも活用。', action: 'flashcard' },
            ]
          },
        ]
      },
      {
        id: 'g-p5',
        title: 'Phase 5：総仕上げ・模擬試験',
        range: '直前確認（5/8）',
        topics: [
          {
            id: 'g-p5-t1', title: 'Week 12：模擬試験・弱点補強・直前確認',
            tasks: [
              { id: 'g-p5-t1-q1', type: 'quiz',  label: '演習：黒本 模擬試験（第1回）採点・分野別分析', link: 'https://drive.google.com/file/d/1OWSEeObgOZ5O64VNMLwvtLULrklvUNio/view' },
              { id: 'g-p5-t1-q2', type: 'quiz',  label: '演習：黒本 模擬試験（第2回）採点・弱点補強', link: 'https://drive.google.com/file/d/1OWSEeObgOZ5O64VNMLwvtLULrklvUNio/view' },
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
    name: 'SG試験',
    fullName: '情報セキュリティマネジメント試験(SG)',
    category: 'IPA',
    icon: '🛡️',
    color: '#4ade80',
    obtained: true,
    phases: [],
    resources: [],
  },
  {
    id: 'ap',
    name: 'AP試験',
    fullName: '応用情報技術者試験(AP)',
    category: 'IPA',
    icon: '💡',
    color: '#fb923c',
    targetDate: '2026-11',
    targetLabel: '2026年秋期（11月頃）受験目標',
    examInfo: '年2回（春・秋）｜ペーパー試験｜午前：90分・80問（四肢択一）/ 午後：100分・問題選択式（記述含む）｜合格率約20〜25%。AP合格でSC試験の午前I免除（2年間有効）。',
    passCriteria: '午前・午後ともに60点以上',
    studyHours: 200,
    phases: [
      {
        id: 'ap-p0',
        title: 'Phase 0：現状把握・計画',
        range: '1〜2週（6/1〜6/14）',
        topics: [
          {
            id: 'ap-p0-t1', title: 'Week 1：ベースライン測定・出題分析',
            tasks: [
              { id: 'ap-p0-t1-q1', type: 'quiz', label: '演習：直近3年の午前問題（2023〜2025）を時間計測（90分）して解く', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p0-t1-r',  type: 'review', label: '分析：大問カテゴリ別の正答率を記録し、60%未満の分野を特定する', link: null, hint: 'テクノロジ系・マネジメント系・ストラテジ系の大カテゴリで分けて集計。弱点分野に重点投資する。' },
            ]
          },
          {
            id: 'ap-p0-t2', title: 'Week 2：午後試験の傾向分析・選択科目決定',
            tasks: [
              { id: 'ap-p0-t2-r1', type: 'review', label: '確認：午後試験の問題構成（必答：情報セキュリティ＋選択4問）を把握する', link: 'https://www.ap-siken.com/', hint: '問1（情報セキュリティ）は必答。問2〜11から4問選択。SC受験を見据えてネットワーク系を選ぶと相乗効果大。' },
              { id: 'ap-p0-t2-r2', type: 'review', label: '決定：過去問を流し読みし、自分の得意な選択問題4分野を仮決定する', link: null, hint: 'SC対策と親和性が高い組み合わせ例：①情報セキュリティ（必答）②ネットワーク③システムアーキテクチャ④プログラミング。' },
            ]
          },
        ]
      },
      {
        id: 'ap-p1',
        title: 'Phase 1：テクノロジ系 午前対策',
        range: '3〜6週（6/15〜7/12）',
        topics: [
          {
            id: 'ap-p1-t1', title: 'Week 3：コンピュータ構成・OS・データ構造',
            tasks: [
              { id: 'ap-p1-t1-q1', type: 'quiz', label: '演習：コンピュータ構成・OS・データ構造分野 過去問30問', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p1-t1-r',  type: 'review', label: '復習：2進数変換・補数・論理演算・OSスケジューリング・スタック/キューの使い分け', link: null, hint: '2進数↔10進数↔16進数変換は確実に。ラウンドロビン・優先度スケジューリングも頻出。' },
            ]
          },
          {
            id: 'ap-p1-t2', title: 'Week 4：アルゴリズム・プログラミング',
            tasks: [
              { id: 'ap-p1-t2-q1', type: 'quiz', label: '演習：アルゴリズム・プログラミング分野 過去問30問', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p1-t2-r',  type: 'review', label: '復習：ソートの計算量・探索アルゴリズム・再帰処理・OOPの概念（カプセル化・継承・多態性）', link: null, hint: 'バブル/選択/挿入O(n²)、マージ/クイックO(n log n)。二分探索O(log n)。各ソートの安定性も確認。' },
            ]
          },
          {
            id: 'ap-p1-t3', title: 'Week 5：データベース',
            tasks: [
              { id: 'ap-p1-t3-q1', type: 'quiz', label: '演習：データベース分野 過去問30問', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p1-t3-r',  type: 'review', label: '復習：E-R図・正規化（1NF〜3NF）・SQL（JOIN・GROUP BY・HAVING）・トランザクション（ACID）', link: null, hint: 'SQL記述順：SELECT→FROM→WHERE→GROUP BY→HAVING→ORDER BY。第3正規化は「推移的関数従属の排除」。' },
            ]
          },
          {
            id: 'ap-p1-t4', title: 'Week 6：ネットワーク・セキュリティ（午前）',
            tasks: [
              { id: 'ap-p1-t4-q1', type: 'quiz', label: '演習：ネットワーク・セキュリティ分野 過去問30問', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p1-t4-r',  type: 'review', label: '復習：TCP/IP 4層・プロトコルとポート番号・サブネット計算・暗号化方式の比較', link: null, hint: 'SC試験とも重複が多い分野。HTTP:80・HTTPS:443・SSH:22・FTP:21・SMTP:25・DNS:53 は必須。', action: 'flashcard' },
            ]
          },
        ]
      },
      {
        id: 'ap-p2',
        title: 'Phase 2：マネジメント・ストラテジ系 午前対策',
        range: '7〜9週（7/13〜8/2）',
        topics: [
          {
            id: 'ap-p2-t1', title: 'Week 7：PM・サービスマネジメント・監査',
            tasks: [
              { id: 'ap-p2-t1-q1', type: 'quiz', label: '演習：PM・SM・監査分野 過去問30問', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p2-t1-r',  type: 'review', label: '復習：PMBOK知識エリア・EVM指標（CPI/SPI）・ITIL v4・システム監査の手順', link: null, hint: 'EV-PV=SV（スケジュール差異）、EV-AC=CV（コスト差異）、EV/AC=CPI（>1が良好）。クリティカルパス計算も頻出。' },
            ]
          },
          {
            id: 'ap-p2-t2', title: 'Week 8：企業活動・法務',
            tasks: [
              { id: 'ap-p2-t2-q1', type: 'quiz', label: '演習：企業活動・法務分野 過去問30問', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p2-t2-r',  type: 'review', label: '復習：財務諸表（BS・PL）・PERT・線形計画法・知財法（特許・著作権・不正競争防止法）', link: null, hint: '損益分岐点=固定費÷（1-変動費率）は必須。PERTのクリティカルパス計算手順を確実に習得。' },
            ]
          },
          {
            id: 'ap-p2-t3', title: 'Week 9：システム戦略・経営戦略',
            tasks: [
              { id: 'ap-p2-t3-q1', type: 'quiz', label: '演習：システム戦略・経営戦略分野 過去問30問', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p2-t3-r',  type: 'review', label: '復習：SaaS/PaaS/IaaS・BPR・SCM・CRM・BSC・UMLの主要図（クラス・シーケンス・ユースケース）', link: null, hint: 'UML 3大図の違い：クラス図=構造、シーケンス図=時系列の相互作用、ユースケース図=要求。アクティビティ図=フロー。' },
            ]
          },
        ]
      },
      {
        id: 'ap-p3',
        title: 'Phase 3：午後試験対策',
        range: '10〜13週（8/3〜8/30）',
        topics: [
          {
            id: 'ap-p3-t1', title: 'Week 10：情報セキュリティ（必答）記述対策',
            tasks: [
              { id: 'ap-p3-t1-q1', type: 'quiz', label: '演習：AP午後 情報セキュリティ問題 直近5年分を時間計測して解く', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p3-t1-r',  type: 'review', label: '復習：記述解答のキーワード整理（攻撃手法・対策・リスク管理の頻出パターン）', link: null, hint: 'AP情報セキュリティの記述解答は「攻撃の種類・被害内容・具体的対策」の3点を含める。SC試験の知識が直結する。', action: 'flashcard' },
            ]
          },
          {
            id: 'ap-p3-t2', title: 'Week 11〜12：選択問題 演習（選択分野①②）',
            tasks: [
              { id: 'ap-p3-t2-q1', type: 'quiz', label: '演習：選択分野①（ネットワーク・システムアーキテクチャ等）の過去問5年分', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p3-t2-q2', type: 'quiz', label: '演習：選択分野②（プログラミング・DB等）の過去問5年分', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p3-t2-r',  type: 'review', label: '復習：記述解答で使えるキーワード・典型的な問題パターンを分野別にまとめる', link: null, hint: '各選択分野で「よく問われる概念・記述解答のキーワード」をノートにまとめておくと本番で時間節約できる。' },
            ]
          },
          {
            id: 'ap-p3-t3', title: 'Week 13：選択問題 演習（選択分野③④）・本番選択確定',
            tasks: [
              { id: 'ap-p3-t3-q1', type: 'quiz', label: '演習：選択分野③（PM・サービス管理等）の過去問5年分', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p3-t3-q2', type: 'quiz', label: '演習：選択分野④（組込み・情報システム開発等）の過去問5年分', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p3-t3-r',  type: 'review', label: '決定：本番で選ぶ4分野を最終確定・捨て分野を決定する', link: null, hint: 'SC対策との親和性が高い推奨構成：情報セキュリティ（必答）+ネットワーク+システムアーキテクチャ+プログラミング。' },
            ]
          },
        ]
      },
      {
        id: 'ap-p4',
        title: 'Phase 4：総仕上げ・模擬試験',
        range: '14〜17週（9/1〜10/4）',
        topics: [
          {
            id: 'ap-p4-t1', title: 'Week 14〜15：午前全分野 総演習',
            tasks: [
              { id: 'ap-p4-t1-q1', type: 'quiz', label: '演習：午前 直近5年分を年度別・時間計測（90分）で解く', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p4-t1-r',  type: 'review', label: '復習：正答率70%未満の分野を重点復習・間違えた問題の解説を精読する', link: null, hint: '目標は80%以上。60〜80%の分野は解説精読で足固め。60%未満はPhase 1〜2に戻って再確認。' },
            ]
          },
          {
            id: 'ap-p4-t2', title: 'Week 16：午後 総合模擬試験',
            tasks: [
              { id: 'ap-p4-t2-q1', type: 'quiz', label: '演習：午後 直近年度の本試験問題（100分計測）を実施・採点', link: 'https://www.ap-siken.com/apkakomon.php' },
              { id: 'ap-p4-t2-r',  type: 'review', label: '復習：記述解答の失点パターン分析・キーワード不足の分野を特定する', link: null, hint: '部分点のためのキーワードを意識。「〜という攻撃を、〜することで防ぐ」のような具体的記述が高評価。' },
            ]
          },
          {
            id: 'ap-p4-t3', title: 'Week 17：直前確認',
            tasks: [
              { id: 'ap-p4-t3-r1', type: 'review', label: '直前：頻出公式・法律・略語の最終暗記チェック（午前を1時間でさらう）', link: null, hint: 'EVM公式・正規化手順・主要プロトコル・損益分岐点・PMBOK知識エリアを重点確認。' },
              { id: 'ap-p4-t3-r2', type: 'review', label: '確認：受験票・試験会場・持ち物の確認（HB鉛筆・消しゴム必須）', link: 'https://www.jitec.ipa.go.jp/', hint: 'AP試験はペーパー試験（マークシート＋記述）。試験会場へのルート・所要時間を事前確認。' },
            ]
          },
        ]
      },
    ],
    resources: [
      { name: 'IPA 応用情報技術者試験 公式ページ', url: 'https://www.ipa.go.jp/shiken/kubun/ap.html', category: '公式' },
      { name: 'AP試験 過去問道場', url: 'https://www.ap-siken.com/apkakomon.php', category: '演習' },
      { name: 'キタミ式イラストIT塾 応用情報技術者', url: null, local: true, category: '教材' },
    ]
  },
  {
    id: 'sc',
    name: 'SC試験',
    fullName: '情報処理安全確保支援士試験(SC)',
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
  { id: 'ipa', label: '情処(IPA)', certIds: ['sg', 'ap', 'sc'] },
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

  // G検定 追加カード（21〜40）
  { id: 'fc-g-21', cert: 'g-ken', certLabel: 'G検定', term: '自己教師あり学習', definition: 'ラベルなしデータから擬似ラベルを自動生成して学習する手法。大規模テキスト・画像の事前学習（BERTのMasked LM、CLIPなど）に活用。ラベルコストを大幅に削減できる。' },
  { id: 'fc-g-22', cert: 'g-ken', certLabel: 'G検定', term: '対照学習（Contrastive Learning）', definition: '同じ意味を持つサンプルを近く・異なるサンプルを遠くに配置するように表現を学習する手法。SimCLR・MoCo・CLIPなどが代表例。ラベルなしで高品質な特徴表現が得られる。' },
  { id: 'fc-g-23', cert: 'g-ken', certLabel: 'G検定', term: '拡散モデル（Diffusion Model）', definition: 'データに徐々にノイズを加える正拡散と、それを逆向きに学習する逆拡散で高品質な生成を行うモデル。Stable Diffusion・DALL-E 3の基盤技術。GANより安定した学習が可能。' },
  { id: 'fc-g-24', cert: 'g-ken', certLabel: 'G検定', term: 'LLM（大規模言語モデル）', definition: '数百億〜兆規模のパラメータを持つTransformerベースの言語モデル。GPT-4・Gemini・Claudeなど。Few-shot学習（In-context learning）や指示追従能力が高い。' },
  { id: 'fc-g-25', cert: 'g-ken', certLabel: 'G検定', term: 'RAG（検索拡張生成）', definition: 'LLMが回答生成時に外部知識ベースを検索し、取得した文書を文脈に加えて応答する手法。ハルシネーション低減・最新情報への対応・情報源の明示が可能になる。' },
  { id: 'fc-g-26', cert: 'g-ken', certLabel: 'G検定', term: 'プロンプトエンジニアリング', definition: 'LLMへの入力（プロンプト）を工夫して望む出力を引き出す技術。Few-shot・Chain-of-Thought・Role Promptingなどの手法がある。モデルの再学習なしで性能改善できる。' },
  { id: 'fc-g-27', cert: 'g-ken', certLabel: 'G検定', term: 'ハルシネーション（幻覚）', definition: 'LLMが事実と異なる情報を自信を持って生成してしまう問題。知識の更新遅れ・確率的生成に起因。RAG・ファクトチェック・温度パラメータの調整で対策する。' },
  { id: 'fc-g-28', cert: 'g-ken', certLabel: 'G検定', term: 'SVM（サポートベクターマシン）', definition: 'クラス間マージンを最大化する境界超平面を求める分類器。カーネルトリックにより非線形分類も可能。少量データで高性能を発揮するが、大規模データには不向き。' },
  { id: 'fc-g-29', cert: 'g-ken', certLabel: 'G検定', term: 'k-means法', definition: 'データをk個のクラスタに分割する代表的な教師なしクラスタリング手法。各クラスタの重心を反復更新して収束させる。kの選択にエルボー法やシルエット係数を使用する。' },
  { id: 'fc-g-30', cert: 'g-ken', certLabel: 'G検定', term: '主成分分析（PCA）', definition: 'データの分散が最大になる方向（主成分）へ射影して次元を削減する手法。固有値分解または特異値分解で計算。可視化・ノイズ除去・特徴圧縮に活用される。' },
  { id: 'fc-g-31', cert: 'g-ken', certLabel: 'G検定', term: '混同行列（Confusion Matrix）', definition: '分類モデルの予測結果をTP（真陽性）・FP（偽陽性）・FN（偽陰性）・TN（真陰性）で整理した表。適合率・再現率・F値・正解率の計算基礎となる。' },
  { id: 'fc-g-32', cert: 'g-ken', certLabel: 'G検定', term: 'F値（F1スコア）', definition: '適合率（Precision）と再現率（Recall）の調和平均。F1 = 2×P×R÷(P+R)。クラス不均衡データで正解率より有効な評価指標。マクロ/マイクロ平均がある。' },
  { id: 'fc-g-33', cert: 'g-ken', certLabel: 'G検定', term: 'バッチ正規化（Batch Normalization）', definition: 'ミニバッチ単位でニューロンの出力を平均0・分散1に正規化する手法。学習の安定化・高速化・過学習抑制に効果。ReLUの前後どちらに置くかは設計による。' },
  { id: 'fc-g-34', cert: 'g-ken', certLabel: 'G検定', term: '残差接続（スキップ接続）', definition: 'ブロックの入力をそのまま出力に加算するショートカット。ResNetで採用。勾配消失問題を緩和し100層以上の超深層NNの学習を可能にした。現代のDLアーキテクチャの標準。' },
  { id: 'fc-g-35', cert: 'g-ken', certLabel: 'G検定', term: 'LSTM（長短期記憶）', definition: '系列データの長距離依存関係を学習するRNNの改良版。入力ゲート・忘却ゲート・出力ゲートで情報を選択的に保持・破棄する。勾配消失問題をバニリングRNNより大幅に改善。' },
  { id: 'fc-g-36', cert: 'g-ken', certLabel: 'G検定', term: 'Word2Vec', definition: '単語を密ベクトル（分散表現）で表す技術。CBOW（文脈→単語）とSkip-gram（単語→文脈）の2モデルがある。「王−男+女≈女王」のような意味演算が可能。' },
  { id: 'fc-g-37', cert: 'g-ken', certLabel: 'G検定', term: 'データ拡張（Data Augmentation）', definition: '訓練データに回転・反転・色変換・ノイズ付加などの変換を加えてデータ量を擬似的に増やす手法。過学習を防ぎ汎化性能を向上させる。特に画像分野で広く利用。' },
  { id: 'fc-g-38', cert: 'g-ken', certLabel: 'G検定', term: 'AI倫理・説明可能性（XAI）', definition: 'AIの判断の公平性・透明性・説明責任を確保するための原則と技術。LIME・SHAPなどの解釈手法がある。EU AI Actでも高リスクAIへの説明責任が義務化。' },
  { id: 'fc-g-39', cert: 'g-ken', certLabel: 'G検定', term: '連合学習（Federated Learning）', definition: 'データを中央サーバに送らず端末上でモデルを学習し、モデル更新（勾配）のみを集約する分散学習手法。プライバシー保護と省通信量が特長。医療・金融分野で注目。' },
  { id: 'fc-g-40', cert: 'g-ken', certLabel: 'G検定', term: 'マルチモーダルAI', definition: '画像・テキスト・音声など複数のモダリティ（様式）を統合して扱うAI。CLIP（画像×テキスト）、GPT-4V（画像理解）、Geminiなどが代表例。視覚QAや画像キャプション生成に活用。' },

  // SC試験 追加カード（21〜40）
  { id: 'fc-s-21', cert: 'sc', certLabel: 'SC試験', term: 'バッファオーバーフロー', definition: '入力データがバッファ容量を超えて隣接メモリを上書きする脆弱性。任意コード実行につながる。対策：境界チェック・ASLR（アドレス空間配置ランダム化）・スタックカナリア。' },
  { id: 'fc-s-22', cert: 'sc', certLabel: 'SC試験', term: 'ディレクトリトラバーサル', definition: 'URLやファイルパスに「../」を含めてWebサーバ上の非公開ファイルへアクセスする攻撃。対策：パスの正規化・ホワイトリスト検証・chroot環境。' },
  { id: 'fc-s-23', cert: 'sc', certLabel: 'SC試験', term: 'ゼロデイ攻撃', definition: 'ベンダーが脆弱性を把握していない（または修正パッチが未公開の）状態で行われる攻撃。防御が特に困難。対策：ふるまい検知・ネットワーク分離・仮想パッチ（WAF）。' },
  { id: 'fc-s-24', cert: 'sc', certLabel: 'SC試験', term: 'APT（持続的標的型攻撃）', definition: 'Advanced Persistent Threat。特定組織を標的に長期間潜伏して情報窃取を行う高度な攻撃。国家レベルの攻撃者が多い。対策：多層防御・SIEM・ログ監視・脅威インテリジェンス。' },
  { id: 'fc-s-25', cert: 'sc', certLabel: 'SC試験', term: 'SIEM（セキュリティ情報・イベント管理）', definition: 'Security Information and Event Management。複数システムのログをリアルタイムで収集・相関分析して異常を検知するセキュリティ基盤。SOCで中核的に利用される。' },
  { id: 'fc-s-26', cert: 'sc', certLabel: 'SC試験', term: 'IDS/IPS', definition: 'IDS（侵入検知システム）は不正な通信を検知してアラートを上げる。IPS（侵入防御システム）は自動的に遮断まで行う。シグネチャ型と異常検知型がある。' },
  { id: 'fc-s-27', cert: 'sc', certLabel: 'SC試験', term: 'OAuth 2.0', definition: 'サードパーティアプリにリソースへの限定的なアクセス権を委譲する認可フレームワーク。アクセストークンで権限を管理。OpenID ConnectはOAuth 2.0上で認証機能を追加したもの。' },
  { id: 'fc-s-28', cert: 'sc', certLabel: 'SC試験', term: 'AES（Advanced Encryption Standard）', definition: '現在の標準共通鍵暗号方式。128/192/256ビット鍵長を選択可能。ブロック暗号で動作モード（CBC・GCM等）を組み合わせて使用。DESの後継として2001年に標準化。' },
  { id: 'fc-s-29', cert: 'sc', certLabel: 'SC試験', term: '暗号学的ハッシュ関数', definition: '任意長データから固定長のダイジェストを生成する一方向関数。一方向性・衝突困難性が重要な性質。SHA-256が現在の標準。MD5・SHA-1は脆弱性が発見されており非推奨。' },
  { id: 'fc-s-30', cert: 'sc', certLabel: 'SC試験', term: 'サプライチェーン攻撃', definition: 'ソフトウェアの開発・配布・保守過程に侵入し、正規ソフトウェアにマルウェアを混入させる攻撃。SolarWindsやCodecov事案が有名。対策：SBOM管理・コード署名・脆弱性管理。' },
  { id: 'fc-s-31', cert: 'sc', certLabel: 'SC試験', term: 'デジタルフォレンジック', definition: 'セキュリティインシデント後にデジタル証拠を収集・保全・解析する手続き。証拠の完全性（チェーン・オブ・カストディ）の維持が法的有効性の鍵。メモリ・ディスク・ログを対象とする。' },
  { id: 'fc-s-32', cert: 'sc', certLabel: 'SC試験', term: 'EDR（エンドポイント検知・対応）', definition: 'Endpoint Detection and Response。エンドポイント上のふるまいを継続監視し、マルウェアの侵入・横移動を検知・対応するセキュリティ製品。従来のアンチウイルスより高度な検知が可能。' },
  { id: 'fc-s-33', cert: 'sc', certLabel: 'SC試験', term: 'DNSキャッシュポイズニング', definition: 'DNSキャッシュに偽の名前解決レコードを注入し、正規ドメインへのアクセスを偽サイトに誘導する攻撃。対策：DNSSEC（署名検証）・ランダム送信元ポート。' },
  { id: 'fc-s-34', cert: 'sc', certLabel: 'SC試験', term: 'ポートスキャン', definition: '対象ホストの開放ポートを調べて稼働サービスを把握する偵察技術。TCP SYNスキャンが一般的。Nmapが代表ツール。ペネトレーションテストの初期偵察フェーズで使用。' },
  { id: 'fc-s-35', cert: 'sc', certLabel: 'SC試験', term: '情報セキュリティポリシー', definition: '組織の情報資産を守るための方針・対策基準・実施手順の3階層文書体系。ISMSの基礎。経営層が承認し、全従業員への周知・教育が必要。定期的な見直しが求められる。' },
  { id: 'fc-s-36', cert: 'sc', certLabel: 'SC試験', term: 'SSH（Secure Shell）', definition: '公開鍵認証によるリモートログイン・コマンド実行・ファイル転送を暗号化して安全に行うプロトコル。ポート22番。TelnetのセキュアなSSHよる代替が推奨。' },
  { id: 'fc-s-37', cert: 'sc', certLabel: 'SC試験', term: 'CVSS（共通脆弱性評価システム）', definition: 'Common Vulnerability Scoring System。脆弱性の深刻度を0〜10のスコアで評価する国際標準。基本値（攻撃可能性・影響範囲等）・現状値・環境値の3指標から算出。NVD等で公開。' },
  { id: 'fc-s-38', cert: 'sc', certLabel: 'SC試験', term: 'セキュアコーディング', definition: 'バグや脆弱性を作り込まないためのコーディング原則。入力値検証・出力エスケープ・最小権限の原則・エラーハンドリングの適切な実装が基本。OWASP Top 10が主な脅威リスト。' },
  { id: 'fc-s-39', cert: 'sc', certLabel: 'SC試験', term: '個人情報保護法（改正）', definition: '個人情報の取得・利用・管理・提供を規制する日本の法律。2022年改正で①漏洩時の報告義務（個人情報保護委員会＋本人通知）②越境移転規制強化③不適正利用禁止が追加。' },
  { id: 'fc-s-40', cert: 'sc', certLabel: 'SC試験', term: 'ボットネット', definition: 'マルウェアに感染して攻撃者の指令（C2サーバ）に従い動作する複数の踏み台コンピュータ群。DDoS攻撃・スパム送信・クリック詐欺などに悪用される。' },

  // AP試験カード（1〜40）
  // ── テクノロジ系（20枚） ──
  { id: 'fc-a-01', cert: 'ap', certLabel: 'AP試験', term: 'クロック周波数 / MIPS', definition: 'クロック周波数：CPUが1秒間に刻むクロック数（GHz単位）。MIPS（Millions of Instructions Per Second）：1秒間に実行できる命令数（百万単位）。CPUの処理性能指標。' },
  { id: 'fc-a-02', cert: 'ap', certLabel: 'AP試験', term: 'キャッシュメモリ', definition: 'CPUと主記憶の速度差を埋めるための高速小容量メモリ。L1（最速）→L2→L3の階層構造。ヒット率が高いほど実効アクセス時間が短縮される。局所参照性（時間・空間）が効果の基盤。' },
  { id: 'fc-a-03', cert: 'ap', certLabel: 'AP試験', term: '仮想記憶（ページング）', definition: 'ディスクを主記憶の延長として利用し、実際より大きな記憶空間を提供する仕組み。固定長のページ単位で管理。ページフォルト発生時にディスクからメモリにロード（スワッピング）。' },
  { id: 'fc-a-04', cert: 'ap', certLabel: 'AP試験', term: 'スタック / キュー', definition: 'スタック：LIFO（後入れ先出し）構造。push/popで操作。関数呼び出し・再帰処理に利用。キュー：FIFO（先入れ先出し）構造。enqueue/dequeueで操作。印刷待ち・BFSなどに利用。' },
  { id: 'fc-a-05', cert: 'ap', certLabel: 'AP試験', term: '二分探索（バイナリサーチ）', definition: 'ソート済み配列の中央値と比較し、探索範囲を半減させながら目的値を見つける手法。計算量O(log n)。線形探索O(n)より大幅に高速。前提として配列のソートが必要。' },
  { id: 'fc-a-06', cert: 'ap', certLabel: 'AP試験', term: 'O記法（計算量・オーダー記法）', definition: 'アルゴリズムの時間/空間計算量を入力サイズnの関数で表す記法。O(1)＜O(log n)＜O(n)＜O(n log n)＜O(n²)＜O(2ⁿ)の順に遅くなる。最悪ケースの評価指標として使う。' },
  { id: 'fc-a-07', cert: 'ap', certLabel: 'AP試験', term: 'デッドロック', definition: '複数プロセスがそれぞれ相手が保持する資源の解放を待ち続け、どのプロセスも進行できなくなる状態（循環待ち）。発生条件：相互排除・保持と待機・横取り不可・循環待ちの4つが同時成立。' },
  { id: 'fc-a-08', cert: 'ap', certLabel: 'AP試験', term: 'CPUスケジューリング', definition: 'どのプロセスにCPUを割り当てるかを決める戦略。ラウンドロビン（時分割・公平）・優先度順（高優先が先）・最短ジョブ優先（SJF）・多段待ち行列などがある。スループット・応答時間の改善が目的。' },
  { id: 'fc-a-09', cert: 'ap', certLabel: 'AP試験', term: 'RAID（0/1/5）', definition: 'RAID 0：ストライピング（分散書き込み、高速・冗長性なし）。RAID 1：ミラーリング（複製、信頼性高・容量効率50%）。RAID 5：分散パリティ（1台故障に耐性・容量効率高・読み取り速い）。' },
  { id: 'fc-a-10', cert: 'ap', certLabel: 'AP試験', term: 'TCP / UDP', definition: 'TCP：コネクション型・信頼性保証（3ウェイハンドシェイク・再送制御・順序保証）。HTTP/FTP/SMTPで利用。UDP：コネクションレス・高速・信頼性なし。動画ストリーミング・DNS・VoIPで利用。' },
  { id: 'fc-a-11', cert: 'ap', certLabel: 'AP試験', term: 'IPアドレス・サブネットマスク', definition: 'IPアドレスをネットワーク部とホスト部に分割するビットマスク。例：/24 = 255.255.255.0、ホスト数254台。CIDRで表記。サブネット分割でブロードキャストドメインを縮小できる。' },
  { id: 'fc-a-12', cert: 'ap', certLabel: 'AP試験', term: 'DNS（Aレコード・MXレコード）', definition: 'ドメイン名をIPアドレスに変換する名前解決システム。Aレコード：ドメイン→IPv4アドレス。MXレコード：メールサーバ指定。再帰的・反復的問い合わせで権威DNSサーバまで問い合わせる。' },
  { id: 'fc-a-13', cert: 'ap', certLabel: 'AP試験', term: '関係データベース・正規化', definition: '正規化：データの冗長性や更新異常を排除するDB設計手法。第1正規形（繰り返し排除）→第2正規形（部分関数従属排除）→第3正規形（推移的関数従属排除）の順に行う。' },
  { id: 'fc-a-14', cert: 'ap', certLabel: 'AP試験', term: 'SQL（JOIN・GROUP BY）', definition: 'INNER JOIN：両テーブルに一致する行を結合。LEFT JOIN：左テーブル全行＋一致する右行。GROUP BY：列でグループ化しSUM/COUNT等の集計関数を適用。HAVINGでグループ条件を指定。' },
  { id: 'fc-a-15', cert: 'ap', certLabel: 'AP試験', term: 'ACID特性（トランザクション）', definition: 'A（原子性）：全成功か全失敗。C（一貫性）：整合性のある状態を維持。I（独立性/隔離性）：並行トランザクションの干渉を防ぐ。D（永続性）：コミット後は障害でも消えない。DBの信頼性の基本。' },
  { id: 'fc-a-16', cert: 'ap', certLabel: 'AP試験', term: '排他制御（ロック）', definition: '複数トランザクションの同時実行でデータの整合性を保つ仕組み。共有ロック（読み取り）と排他ロック（書き込み）がある。2相ロックプロトコルでデッドロックを防ぐ。楽観的ロックはバージョン管理で衝突検出。' },
  { id: 'fc-a-17', cert: 'ap', certLabel: 'AP試験', term: 'ウォーターフォールモデル', definition: 'システム開発を要件定義→外部設計→内部設計→実装→テスト→運用の順に上流から下流へ一方向に進める手法。前工程の完成を前提とするため手戻りコストが大きく、要件変化に弱い。' },
  { id: 'fc-a-18', cert: 'ap', certLabel: 'AP試験', term: 'アジャイル開発（スクラム）', definition: '短い反復（スプリント：1〜4週）で動くソフトウェアを継続的にリリースする開発手法。スクラムの役割：プロダクトオーナー・スクラムマスター・開発チーム。バックログで要求を管理。' },
  { id: 'fc-a-19', cert: 'ap', certLabel: 'AP試験', term: 'テスト手法（ホワイト/ブラックボックス）', definition: 'ホワイトボックステスト：内部構造（コード）を把握した上でテスト。命令網羅・分岐網羅・条件網羅などのカバレッジ指標で測定。ブラックボックステスト：仕様から同値分割・境界値分析でテストケースを設計。' },
  { id: 'fc-a-20', cert: 'ap', certLabel: 'AP試験', term: 'UML（クラス図・シーケンス図）', definition: 'クラス図：クラスの属性・操作・関連（集約・継承・依存等）を表す静的構造モデル。シーケンス図：オブジェクト間のメッセージ交換を時系列で表す動的モデル。AP午後では読み解き問題が頻出。' },

  // ── マネジメント系（10枚） ──
  { id: 'fc-a-21', cert: 'ap', certLabel: 'AP試験', term: 'WBS（作業分解構造）', definition: 'Work Breakdown Structure。プロジェクトの成果物や作業を階層的に分解した一覧・ツリー図。最小単位のワークパッケージに分解することでスケジュール・コスト・責任者の割り当てが可能になる。' },
  { id: 'fc-a-22', cert: 'ap', certLabel: 'AP試験', term: 'EVM（アーンドバリュー分析）', definition: 'Earned Value Management。計画・実績・出来高を金額（またはポイント）で統一管理する進捗管理手法。SPI（スケジュール効率）= EV/PV、CPI（コスト効率）= EV/AC。SPI<1：遅延、CPI<1：コスト超過。' },
  { id: 'fc-a-23', cert: 'ap', certLabel: 'AP試験', term: 'クリティカルパス法（CPM）', definition: 'プロジェクトの全タスクの依存関係をネットワーク図（PERT図）で表し、余裕ゼロ（最長経路）のクリティカルパスを特定する手法。クリティカルパス上の遅延がプロジェクト完了日を直接遅らせる。' },
  { id: 'fc-a-24', cert: 'ap', certLabel: 'AP試験', term: 'SLA（サービスレベルアグリーメント）', definition: 'サービス提供者と顧客間でサービス品質（稼働率・応答時間・障害復旧時間等）の目標値を明記した合意書。KPIで測定し未達時のペナルティ・是正措置も規定。SLM（サービスレベル管理）で継続的に監視する。' },
  { id: 'fc-a-25', cert: 'ap', certLabel: 'AP試験', term: 'ITIL（ITサービスマネジメント）', definition: 'ITサービス管理のベストプラクティス集（英国発）。サービスストラテジ・サービスデザイン・サービストランジション・サービスオペレーション・継続的改善の5フェーズ。ITSM基盤として広く採用。' },
  { id: 'fc-a-26', cert: 'ap', certLabel: 'AP試験', term: 'システム監査', definition: '情報システムの信頼性・安全性・効率性を、独立した立場の監査人が評価し報告する活動。内部統制の有効性を確認する。システム監査人はシステムの構築・運用から独立していることが必要。' },
  { id: 'fc-a-27', cert: 'ap', certLabel: 'AP試験', term: '稼働率・MTBF・MTTR', definition: 'MTBF（平均故障間隔）：障害から次の障害までの平均時間。MTTR（平均修復時間）：故障から復旧までの平均時間。稼働率 = MTBF÷(MTBF+MTTR)。直列システムは稼働率の積、並列は1から非稼働率の積を引いた値。' },
  { id: 'fc-a-28', cert: 'ap', certLabel: 'AP試験', term: 'BCP / DR（事業継続計画）', definition: 'BCP（Business Continuity Plan）：大規模災害・障害が発生しても事業を継続するための計画。DR（Disaster Recovery）はBCPの一部でIT系の復旧手順に特化。BCM（管理プロセス）でPDCA運営する。' },
  { id: 'fc-a-29', cert: 'ap', certLabel: 'AP試験', term: 'RTO / RPO', definition: 'RTO（Recovery Time Objective）：復旧目標時間。障害発生からサービス再開までの許容時間。RPO（Recovery Point Objective）：復旧目標時点。どの時点まで遡って復旧するかの許容量。バックアップ頻度の設計基準になる。' },
  { id: 'fc-a-30', cert: 'ap', certLabel: 'AP試験', term: 'チェンジマネジメント（変更管理）', definition: 'ITILの変更管理プロセス。本番環境への変更を変更諮問委員会（CAB）が審査・承認・スケジューリングし、リスクを管理するプロセス。緊急変更（ECAB）も手順化されている。' },

  // ── ストラテジ系（10枚） ──
  { id: 'fc-a-31', cert: 'ap', certLabel: 'AP試験', term: 'SWOT分析', definition: '強み（Strengths）・弱み（Weaknesses）・機会（Opportunities）・脅威（Threats）を整理する経営戦略分析フレームワーク。内部環境（強み・弱み）と外部環境（機会・脅威）の組み合わせで戦略を導出する。' },
  { id: 'fc-a-32', cert: 'ap', certLabel: 'AP試験', term: 'バランスト・スコアカード（BSC）', definition: '財務・顧客・内部プロセス・学習と成長の4視点でKPIを設定し、戦略を実行管理するフレームワーク（Kaplan & Norton）。財務指標だけでなく非財務指標も含めた統合的業績評価を行う。' },
  { id: 'fc-a-33', cert: 'ap', certLabel: 'AP試験', term: 'CRM（顧客関係管理）', definition: 'Customer Relationship Management。顧客情報を一元管理し、個別の関係を強化して顧客満足度・LTV（生涯価値）を向上させる経営戦略・システム。購買履歴・問い合わせ履歴を統合分析する。' },
  { id: 'fc-a-34', cert: 'ap', certLabel: 'AP試験', term: 'SCM（サプライチェーン管理）', definition: 'Supply Chain Management。調達→製造→物流→販売までの全工程を統合管理し、在庫最適化・コスト削減・リードタイム短縮を実現する手法。需要予測の誤差が川上に増幅するブルウィップ効果が課題。' },
  { id: 'fc-a-35', cert: 'ap', certLabel: 'AP試験', term: 'ERP（統合基幹業務システム）', definition: 'Enterprise Resource Planning。会計・人事・生産・調達・販売などの基幹業務を単一DBで統合管理するシステム。SAP・Oracleが代表。リアルタイムで経営情報を一元把握できる反面、導入コスト・カスタマイズ費用が大きい。' },
  { id: 'fc-a-36', cert: 'ap', certLabel: 'AP試験', term: 'KGI / KPI', definition: 'KGI（Key Goal Indicator）：最終的な目標達成度を測る指標（例：売上高）。KPI（Key Performance Indicator）：KGI達成に向けた中間プロセスの指標（例：問い合わせ件数・成約率）。BSCと組み合わせて戦略管理する。' },
  { id: 'fc-a-37', cert: 'ap', certLabel: 'AP試験', term: 'ROI / 費用便益分析', definition: 'ROI（Return on Investment）= 利益÷投資額×100%。IT投資の経済的効果を測る基本指標。費用便益分析：投資の全コスト（初期＋運用）と全便益（コスト削減・売上増）を現在価値で比較し投資判断に使う。' },
  { id: 'fc-a-38', cert: 'ap', certLabel: 'AP試験', term: 'システム化計画・要件定義', definition: 'システム化計画：経営目標に沿ってシステム化の目的・範囲・スケジュール・予算を定める。要件定義：利用者の業務要件を機能要件・非機能要件に整理してシステム要求仕様書を作成する工程。上流の品質がプロジェクト全体に影響する。' },
  { id: 'fc-a-39', cert: 'ap', certLabel: 'AP試験', term: '著作権・産業財産権（IT関連）', definition: '著作権：ソフトウェアのプログラムは著作物として保護（登録不要・創作時に発生）。特許権：発明の保護（登録必要・20年）。商標権：ブランド名・ロゴ（10年更新可）。プログラムの著作権は原則として会社に帰属（職務著作）。' },
  { id: 'fc-a-40', cert: 'ap', certLabel: 'AP試験', term: 'プライバシーマーク / ISMS認証', definition: 'プライバシーマーク：JIS Q 15001に基づく個人情報保護体制を第三者機関（JIPDEC）が認定する日本の制度。ISMS認証：ISO/IEC 27001に基づく情報セキュリティマネジメントシステムの国際認証。いずれも取引先・顧客へのセキュリティ信頼性の証明として活用される。' },
];

// ロードマップ（全体タイムライン）
const ROADMAP = [
  { certId: 'g-ken', label: 'G検定',  startMonth: '2026-04', endMonth: '2026-05', milestone: '2026年5月9日 受験（オンライン）' },
  { certId: 'ap',    label: 'AP試験', startMonth: '2026-06', endMonth: '2026-11', milestone: '2026年11月 受験目標' },
  { certId: 'sc',    label: 'SC試験', startMonth: '2026-12', endMonth: '2027-02', milestone: '2027年2月頃 受験（要確認）' },
];

// バッジ定義
const BADGES = [
  { id: 'first-step',   icon: '🚀', name: 'ファーストステップ',  desc: '初めてタスクを完了',        condition: p => p.totalCompleted >= 1 },
  { id: 'week-warrior', icon: '🔥', name: 'ウィークウォリアー',  desc: '7日連続学習',               condition: p => p.streak >= 7 },
  { id: 'half-way',     icon: '🎯', name: 'ハーフウェイ',        desc: 'G検定 50%完了',             condition: p => p.certProgress['g-ken'] >= 50 },
  { id: 'g-ken-done',   icon: '🤖', name: 'G検定 マスター',      desc: 'G検定 全タスク完了',        condition: p => p.certProgress['g-ken'] >= 100 },
  { id: 'ap-started',   icon: '💡', name: 'AP 始動',             desc: 'AP試験学習を開始',           condition: p => p.certProgress['ap'] >= 1 },
  { id: 'ap-done',      icon: '🎓', name: 'AP マスター',         desc: 'AP試験 全タスク完了',       condition: p => p.certProgress['ap'] >= 100 },
  { id: 'sc-started',   icon: '🔐', name: 'SC 始動',             desc: 'SC試験学習を開始',           condition: p => p.certProgress['sc'] >= 1 },
  { id: 'sc-done',      icon: '🏆', name: 'SC マスター',         desc: 'SC試験 全タスク完了',       condition: p => p.certProgress['sc'] >= 100 },
  { id: 'lv10',         icon: '⭐', name: 'レベル10達成',        desc: 'レベル10に到達',            condition: p => p.level >= 10 },
  { id: 'lv30',         icon: '💎', name: 'レベル30達成',        desc: 'レベル30に到達',            condition: p => p.level >= 30 },
];
