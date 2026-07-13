import { LocaleDict } from './types';

const ja: LocaleDict = {
  nav: {
    home: "ホーム",
    about: "概要",
    pricing: "料金",
    policy: "ポリシー",
    help: "ヘルプ",
  },
  hero: {
    line1: "本物のクリップボードを",
    line2: { left: "あなたの", right: "iOSキーボードに" },
  },
  header: {
    download: { prefix: "", brand: "LiquidBoard\u00A0", suffix: "をダウンロード" },
  },
  action: {
    download: "LiquidBoard をダウンロード",
    titles: ['グループ作成', 'ピン留め', 'コピー＆複製', 'ファイルのインポート＆エクスポート'],
    paragraphs: [
      'ニーズに合わせてグループを追加し、テキスト、画像、ステッカーを分類します。グループ間をスムーズに切り替え、重要なグループを最初にピン留めします。',
      '頻繁に使用する重要なテキスト、画像、ステッカーをピン留めして、すばやく送信できるようにします。',
      'テキスト、画像、ステッカーを簡単かつ迅速にコピーおよび複製します。',
      'ファイルアプリを通じて、テキストデータをJSONおよびCSVとして直接エクスポートおよびインポートします。',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard groups' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard pinned items' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard copy and duplicate' },
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard import and export files' },
    ],
  },
  pricing: {
    intro: { 
      line1: "毎日のコンテンツの保存、整理、共有方法に合った適切なプランを選択してください。", 
      line2: "すべてのプランは、生涯アクセスのための1回限りの購入です。" 
    },
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: '生涯アクセス',
        price: 'JP¥0',
        description: 'お試しプラン',
        features: ['テキスト25件', '画像25件', 'ステッカー25件', '各タイプ2グループ', 'グループごとに2ピン'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: '生涯アクセス',
        price: 'JP¥500',
        description: 'ベーシックプラン',
        features: ['テキスト100件', '画像100件', 'ステッカー100件', '各タイプ5グループ', 'グループごとに5ピン'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: '生涯アクセス',
        price: 'JP¥900',
        description: 'マルチタスクプラン',
        features: ['テキスト250件', '画像250件', 'ステッカー250件', '各タイプ15グループ', 'グループごとに15ピン'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: '生涯アクセス',
        price: 'JP¥1800',
        description: 'プロフェッショナルプラン',
        features: ['テキスト500件', '画像500件', 'ステッカー500件', '各タイプ40グループ', 'グループごとに40ピン'],
      },
    ],
  },
  features: {
    titles: ['テキスト', '画像', 'ステッカー'],
    paragraphs: [
      '複数のテキストドキュメント、紹介情報、ニーズに合わせたコンテンツを作成・構成します。すぐに使用できる応答テンプレートを設定します。連絡先情報を入力してすばやく共有します。効率的な参照と再利用のために、Webサイトのリンク、コードスニペット、AIプロンプト構造を保存します。',
      '支払いQRコードや銀行振込QRコードをすばやく共有します。製品のサンプルプロトタイプ、デザインモックアップ、インフォグラフィック、説明用スクリーンショットなどの多様なコレクションにアクセスします。プロフェッショナルなコミュニケーションのために視覚アセットをシームレスに整理・取得します。',
      'ステッカー、お気に入りのミーム、お祝いのメッセージ、感情表現を作成してすぐに共有し、愛する人や顧客とつながります。感情を伝え、エンゲージメントを高める視覚要素でコミュニケーションをパーソナライズします。',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard text snippets' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard photo board' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard keyboard view' },
    ],
  }
,
  policy: {
    dataSecurity: "データセキュリティ",
    privacy: "プライバシー",
    terms: "利用規約",
    payment: "支払いと返金",
  },
  help: {
    faqTab: 'よくある質問',
    docsTab: 'ドキュメント',
    docsPlaceholder: "ドキュメントを更新しています...",
    contactTab: 'お問い合わせ', email: 'メールアドレス', problem: '問題', problemPlaceholder: '何が起きたのかを教えてください…', media: '添付ファイル', addMedia: 'ファイルを追加', mediaLimit: '1件につき最大20 MB', removeMedia: '削除', send: '送信', sending: '送信中…', mediaTooLarge: '添付ファイルは1件につき20 MB以下にしてください。', mediaMax: '添付できる画像または動画は最大5件です。', sent: 'ありがとうございます — 報告を送信しました。', sendFailed: '報告を送信できませんでした。',
  }
};
export default ja;
