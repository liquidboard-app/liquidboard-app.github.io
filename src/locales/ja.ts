import { LocaleDict } from './types';

const ja: LocaleDict = {
  browserTitle: 'LiquidBoard — 高速かつ安全にコピー＆ペースト',
  browserDescription: 'LiquidBoardはテキスト、写真、ステッカー、リンクを整理し、iPhoneのキーボードからすぐにペーストできるようにします。',
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
  coreClipboard: { line1: 'アプリのクリップボードから、', line2: 'iOSキーボードへ。' },
  actionClipboard: {
    sectionLabel: 'LiquidBoardの機能',
    progressLabel: 'クリップボード機能の進行状況',
    groupTitle: { primary: 'グループの', secondary: '名前' },
    groupDescription: '必要に応じて分類',
    pinDescription: '重要なものを先頭に',
    shareDescription: 'すべてのプラットフォームに送信',
    exportTitle: 'インポート / エクスポート',
    exportDescription: 'JSONまたはCSVで保存・インポート',
    featureLabels: { group: 'グループ', pin: 'ピン留め', share: '共有', export: 'ファイルを書き出す', voice: '音声', scanText: 'テキストをスキャン', systemPasteboard: 'システムクリップボード', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "", brand: "LiquidBoard\u00A0", suffix: "をダウンロード" },
  },
  pricing: {
    intro: { 
      line1: "毎日のコンテンツの保存、整理、共有方法に合った適切なプランを選択してください。", 
      line2: "すべてのプランは、生涯アクセスのための1回限りの購入です。" 
    },
    fromPrice: '{price}から',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: '生涯アクセス',
        price: 'JP¥0',
        description: 'お試しプラン',
        features: ['テキスト20件', '画像20件', 'ステッカー20件', '各タイプ2グループ', 'グループごとに2ピン'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: '生涯アクセス',
        price: 'JP¥600',
        description: 'ベーシックプラン',
        features: ['テキスト100件', '画像100件', 'ステッカー100件', '各タイプ5グループ', 'グループごとに5ピン'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: '生涯アクセス',
        price: 'JP¥1,200',
        description: 'マルチタスクプラン',
        features: ['テキスト250件', '画像250件', 'ステッカー250件', '各タイプ15グループ', 'グループごとに15ピン'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: '生涯アクセス',
        price: 'JP¥2,200',
        description: 'プロフェッショナルプラン',
        features: ['テキスト500件', '画像500件', 'ステッカー500件', '各タイプ40グループ', 'グループごとに40ピン'],
      },
    ],
  },
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
