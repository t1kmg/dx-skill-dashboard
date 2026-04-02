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
        title: 'Phase 1：AIの基礎とシラバス概要',
        range: '1〜2週',
        topics: [
          {
            id: 'g-p1-t1', title: 'AIの歴史・概念',
            tasks: [
              { id: 'g-p1-t1-v', type: 'video', label: '動画：AIの歴史・第1〜3次AIブーム・機械学習の登場', link: 'https://www.youtube.com/results?search_query=AI+歴史+G検定+入門' },
              { id: 'g-p1-t1-q', type: 'quiz',  label: '演習：AI概論の重要用語確認（白本 第1章）', link: null },
              { id: 'g-p1-t1-r', type: 'review', label: '復習：シンギュラリティ・汎用AI・特化型AIの定義確認', link: null },
            ]
          },
          {
            id: 'g-p1-t2', title: '機械学習の基礎概念',
            tasks: [
              { id: 'g-p1-t2-v', type: 'video', label: '動画：教師あり・教師なし・強化学習の違い', link: 'https://www.youtube.com/results?search_query=機械学習+基礎+G検定+3種類' },
              { id: 'g-p1-t2-q', type: 'quiz',  label: '演習：機械学習の分類・アルゴリズム 過去問10問', link: 'https://study.jdla.org/' },
              { id: 'g-p1-t2-r', type: 'review', label: '復習：決定木・SVM・クラスタリングの特徴整理', link: null },
            ]
          },
        ]
      },
      {
        id: 'g-p2',
        title: 'Phase 2：ディープラーニング',
        range: '3〜5週',
        topics: [
          {
            id: 'g-p2-t1', title: 'ニューラルネットワーク基礎',
            tasks: [
              { id: 'g-p2-t1-v', type: 'video', label: '動画：パーセプトロン・多層NN・誤差逆伝播', link: 'https://www.youtube.com/results?search_query=ニューラルネットワーク+G検定+誤差逆伝播' },
              { id: 'g-p2-t1-q', type: 'quiz',  label: '演習：活性化関数・損失関数 確認問題（白本 第3章）', link: null },
              { id: 'g-p2-t1-r', type: 'review', label: '復習：ReLU・Sigmoid・Softmaxの使い分け', link: null },
            ]
          },
          {
            id: 'g-p2-t2', title: 'CNN（画像認識）',
            tasks: [
              { id: 'g-p2-t2-v', type: 'video', label: '動画：CNNの仕組み・畳み込み・プーリング', link: 'https://www.youtube.com/results?search_query=CNN+畳み込みニューラルネットワーク+G検定' },
              { id: 'g-p2-t2-q', type: 'quiz',  label: '演習：CNN・画像認識 過去問10問', link: 'https://study.jdla.org/' },
              { id: 'g-p2-t2-r', type: 'review', label: '復習：VGG・ResNet・転移学習の概要', link: null },
            ]
          },
          {
            id: 'g-p2-t3', title: 'RNN・自然言語処理・Transformer',
            tasks: [
              { id: 'g-p2-t3-v', type: 'video', label: '動画：RNN・LSTM・Transformer・BERT・GPTの流れ', link: 'https://www.youtube.com/results?search_query=Transformer+BERT+GPT+G検定+解説' },
              { id: 'g-p2-t3-q', type: 'quiz',  label: '演習：NLP・Transformer関連 過去問10問', link: 'https://study.jdla.org/' },
              { id: 'g-p2-t3-r', type: 'review', label: '復習：Attention機構・Self-Attentionの概念整理', link: null },
            ]
          },
        ]
      },
      {
        id: 'g-p3',
        title: 'Phase 3：数学基礎',
        range: '6〜7週',
        topics: [
          {
            id: 'g-p3-t1', title: '線形代数・確率・統計',
            tasks: [
              { id: 'g-p3-t1-v', type: 'video', label: '動画：行列・ベクトル・固有値・確率分布・ベイズ', link: 'https://www.youtube.com/results?search_query=G検定+数学+線形代数+確率統計+ベイズ' },
              { id: 'g-p3-t1-q', type: 'quiz',  label: '演習：数学基礎の頻出計算問題（白本 数学章）', link: null },
              { id: 'g-p3-t1-r', type: 'review', label: '復習：正規分布・最尤推定・情報量の公式確認', link: null },
            ]
          },
        ]
      },
      {
        id: 'g-p4',
        title: 'Phase 4：法律・倫理・社会実装',
        range: '8〜9週',
        topics: [
          {
            id: 'g-p4-t1', title: 'AI倫理・法律・ガイドライン',
            tasks: [
              { id: 'g-p4-t1-v', type: 'video', label: '動画：AI倫理・個人情報保護法・著作権法とAI', link: 'https://www.youtube.com/results?search_query=AI+倫理+法律+G検定+個人情報保護' },
              { id: 'g-p4-t1-q', type: 'quiz',  label: '演習：法律・倫理分野 過去問10問', link: 'https://study.jdla.org/' },
              { id: 'g-p4-t1-r', type: 'review', label: '復習：AI活用ガイドライン（経産省・内閣府）の要点', link: null },
            ]
          },
          {
            id: 'g-p4-t2', title: 'DXとAIのビジネス活用',
            tasks: [
              { id: 'g-p4-t2-v', type: 'video', label: '動画：製造業・金融・医療のAI活用事例', link: 'https://www.youtube.com/results?search_query=AI+DX+製造業+活用事例+G検定' },
              { id: 'g-p4-t2-q', type: 'quiz',  label: '演習：産業応用・社会課題 過去問10問', link: 'https://study.jdla.org/' },
              { id: 'g-p4-t2-r', type: 'review', label: '復習：Society 5.0・SDGsとAIの関係整理', link: null },
            ]
          },
        ]
      },
      {
        id: 'g-p5',
        title: 'Phase 5：総仕上げ・模擬試験',
        range: '10〜12週',
        topics: [
          {
            id: 'g-p5-t1', title: '模擬試験・弱点補強',
            tasks: [
              { id: 'g-p5-t1-q1', type: 'quiz',  label: '演習：黒本 模擬試験（第1回）採点・分析', link: null },
              { id: 'g-p5-t1-q2', type: 'quiz',  label: '演習：黒本 模擬試験（第2回）採点・分析', link: null },
              { id: 'g-p5-t1-r',  type: 'review', label: '復習：弱点分野を白本で集中補強', link: null },
            ]
          },
          {
            id: 'g-p5-t2', title: '直前最終確認',
            tasks: [
              { id: 'g-p5-t2-q', type: 'quiz',  label: '直前：頻出用語100選 最終一覧チェック', link: null },
              { id: 'g-p5-t2-r', type: 'review', label: '試験当日の注意事項・ID確認・時間配分シミュレーション', link: null },
            ]
          },
        ]
      },
    ],
    resources: [
      { name: 'JDLA G検定 公式ページ', url: 'https://www.jdla.org/certificate/general/', category: '公式' },
      { name: 'G検定 申込ページ',       url: 'https://www.jdla.org/certificate/general/#entry', category: '公式' },
      { name: '白本（公式テキスト）',   url: null, local: true, category: '教材' },
      { name: '黒本（問題集）',         url: null, local: true, category: '教材' },
      { name: 'AIの教科書チャンネル（YouTube）', url: 'https://www.youtube.com/results?search_query=G検定+AI+解説+入門', category: '動画' },
      { name: 'G検定 公式シラバス（PDF）', url: null, local: true, category: '公式' },
    ]
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
        id: 'sc-p1',
        title: 'Phase 1：インプット＆午前II対策',
        range: '1〜4週',
        topics: [
          {
            id: 'sc-p1-t1', title: 'Week 1：ネットワークセキュリティの基礎',
            tasks: [
              { id: 'sc-p1-t1-v', type: 'video', label: '動画：TCP/IP・DNS・HTTPの脆弱性とセキュリティ対策', link: 'https://www.youtube.com/@masaru-benkyo' },
              { id: 'sc-p1-t1-q', type: 'quiz',  label: '演習：過去問道場（午前II）関連問題 20問', link: 'https://www.itpassportsiken.com/scsiken.php' },
            ]
          },
          {
            id: 'sc-p1-t2', title: 'Week 2：暗号技術と認証',
            tasks: [
              { id: 'sc-p1-t2-v', type: 'video', label: '動画：公開鍵暗号・共通鍵暗号・デジタル署名・PKI', link: 'https://www.youtube.com/@masaru-benkyo' },
              { id: 'sc-p1-t2-q', type: 'quiz',  label: '演習：過去問道場（午前II）関連問題 20問', link: 'https://www.itpassportsiken.com/scsiken.php' },
            ]
          },
          {
            id: 'sc-p1-t3', title: 'Week 3：攻撃手法（マルウェア・不正アクセス）',
            tasks: [
              { id: 'sc-p1-t3-v', type: 'video', label: '動画：SQLインジェクション・XSS・DoS攻撃・マルウェア種別', link: 'https://www.youtube.com/@se-plus-it-education' },
              { id: 'sc-p1-t3-q', type: 'quiz',  label: '演習：過去問道場（午前II）関連問題 20問', link: 'https://www.itpassportsiken.com/scsiken.php' },
            ]
          },
          {
            id: 'sc-p1-t4', title: 'Week 4：セキュリティ管理・ISMS・規格',
            tasks: [
              { id: 'sc-p1-t4-v', type: 'video', label: '動画：ISMS・リスクアセスメント・ISO27001・JIS Q 27000', link: 'https://www.youtube.com/@se-plus-it-education' },
              { id: 'sc-p1-t4-q', type: 'quiz',  label: '演習：午前II 過去5年分を総復習（過去問道場）', link: 'https://www.itpassportsiken.com/scsiken.php' },
            ]
          },
        ]
      },
      {
        id: 'sc-p2',
        title: 'Phase 2：午後問題対策（読解・記述力）',
        range: '5〜9週',
        topics: [
          {
            id: 'sc-p2-t1', title: 'Week 5：セキュリティ設計・開発',
            tasks: [
              { id: 'sc-p2-t1-v', type: 'video', label: '動画：セキュアコーディング・脆弱性対策設計の原則', link: 'https://www.youtube.com/@masaru-benkyo' },
              { id: 'sc-p2-t1-q', type: 'quiz',  label: '演習：午後I 過去問（設計分野）1問を精読・解説確認', link: 'https://www.ipa.go.jp/shiken/mondai-kaiotu/sc.html' },
            ]
          },
          {
            id: 'sc-p2-t2', title: 'Week 6：インシデント対応（CSIRT/SOC）',
            tasks: [
              { id: 'sc-p2-t2-v', type: 'video', label: '動画：インシデントレスポンス・CSIRT・SOC・ログ分析', link: 'https://www.youtube.com/@masaru-benkyo' },
              { id: 'sc-p2-t2-q', type: 'quiz',  label: '演習：午後I 過去問（インシデント分野）1問 精読・解説確認', link: 'https://www.ipa.go.jp/shiken/mondai-kaiotu/sc.html' },
            ]
          },
          {
            id: 'sc-p2-t3', title: 'Week 7：クラウド・モバイル・IoTセキュリティ',
            tasks: [
              { id: 'sc-p2-t3-v', type: 'video', label: '動画：クラウドセキュリティ・ゼロトラスト・IoT脅威', link: 'https://www.youtube.com/@se-plus-it-education' },
              { id: 'sc-p2-t3-q', type: 'quiz',  label: '演習：午後I 過去問（クラウド分野）1問 精読・解説確認', link: 'https://www.ipa.go.jp/shiken/mondai-kaiotu/sc.html' },
            ]
          },
          {
            id: 'sc-p2-t4', title: 'Week 8-9：午後I 過去問演習（速度訓練）',
            tasks: [
              { id: 'sc-p2-t4-q1', type: 'quiz',  label: '演習：午後I 直近3年分（時間計測あり）', link: 'https://www.ipa.go.jp/shiken/mondai-kaiotu/sc.html' },
              { id: 'sc-p2-t4-q2', type: 'quiz',  label: '演習：午後I 直近5年分（選択戦略の確認）', link: 'https://www.ipa.go.jp/shiken/mondai-kaiotu/sc.html' },
              { id: 'sc-p2-t4-r',  type: 'review', label: '復習：模範解答との差分整理・記述表現の改善', link: null },
            ]
          },
        ]
      },
      {
        id: 'sc-p3',
        title: 'Phase 3：総仕上げ',
        range: '10〜12週',
        topics: [
          {
            id: 'sc-p3-t1', title: 'Week 10：午後II 記述演習',
            tasks: [
              { id: 'sc-p3-t1-q', type: 'quiz',  label: '演習：午後II 過去問1問（時間計測・手書き/タイプ）', link: 'https://www.ipa.go.jp/shiken/mondai-kaiotu/sc.html' },
              { id: 'sc-p3-t1-r', type: 'review', label: '復習：模範解答と照合・論述構成のポイント確認', link: null },
            ]
          },
          {
            id: 'sc-p3-t2', title: 'Week 11：模擬試験・時間配分',
            tasks: [
              { id: 'sc-p3-t2-q', type: 'quiz',  label: '模擬試験：全4区分通し実施（午前I免除含め確認）', link: null },
              { id: 'sc-p3-t2-r', type: 'review', label: '復習：弱点分野を集中補強', link: null },
            ]
          },
          {
            id: 'sc-p3-t3', title: 'Week 12：直前最終確認',
            tasks: [
              { id: 'sc-p3-t3-q', type: 'quiz',  label: '直前：午前II 頻出用語・プロトコル・規格 最終確認', link: 'https://www.itpassportsiken.com/scsiken.php' },
              { id: 'sc-p3-t3-r', type: 'review', label: '試験当日の準備・会場確認・時間配分シミュレーション', link: null },
            ]
          },
        ]
      },
    ],
    resources: [
      { name: 'IPA 公式 SC 過去問ダウンロード', url: 'https://www.ipa.go.jp/shiken/mondai-kaiotu/sc.html', category: '公式' },
      { name: '情報処理安全確保支援士 過去問道場', url: 'https://www.itpassportsiken.com/scsiken.php', category: '演習' },
      { name: 'まさるの勉強部屋（YouTube）', url: 'https://www.youtube.com/@masaru-benkyo', category: '動画' },
      { name: 'SE+IT教育チャンネル（YouTube）', url: 'https://www.youtube.com/@se-plus-it-education', category: '動画' },
      { name: 'IPA 情報セキュリティ白書', url: 'https://www.ipa.go.jp/security/publications/hakusyo/', category: '参考' },
    ]
  }
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
