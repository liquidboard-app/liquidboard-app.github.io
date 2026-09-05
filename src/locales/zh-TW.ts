import { LocaleDict } from './types';

const zhTW: LocaleDict = {
  browserTitle: 'LiquidBoard — 快速、安全地複製與貼上',
  browserDescription: 'LiquidBoard 將文字、照片、貼圖與連結整理妥當，讓你能直接從 iPhone 鍵盤貼上。',
  nav: {
    home: "首頁",
    about: "關於",
    pricing: "定價",
    policy: "政策",
    help: "幫助",
  },
  hero: {
    line1: "把真正的剪貼板帶進",
    line2: { left: "你的", right: "iOS 鍵盤" },
  },
  coreClipboard: { line1: '從 App 內的剪貼簿，', line2: '到你的 iOS 鍵盤。' },
  actionClipboard: {
    sectionLabel: 'LiquidBoard 功能',
    progressLabel: '剪貼簿功能進度',
    groupTitle: { primary: '群組', secondary: '名稱' },
    featureLabels: { group: '群組', pin: '置頂', share: '分享', export: '匯出檔案', voice: '語音', scanText: '掃描文字', systemPasteboard: '系統剪貼簿', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "下載\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  pricing: {
    intro: { 
      line1: "根據您每天儲存、整理和分享內容的方式，選擇合適的方案。", 
      line2: "所有方案皆為一次性買斷，終身存取。" 
    },
    fromPrice: '{price} 起',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: '終身存取',
        price: 'NT$0',
        description: '試用方案',
        features: ['20 則文字', '20 張圖片', '20 張貼圖', '每種型別 2 個群組', '每個群組 2 個置頂'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: '終身存取',
        price: 'NT$120',
        description: '基本方案',
        features: ['100 則文字', '100 張圖片', '100 張貼圖', '每種型別 5 個群組', '每個群組 5 個置頂'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: '終身存取',
        price: 'NT$250',
        description: '多工方案',
        features: ['250 則文字', '250 張圖片', '250 張貼圖', '每種型別 15 個群組', '每個群組 15 個置頂'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: '終身存取',
        price: 'NT$450',
        description: '專業方案',
        features: ['500 則文字', '500 張圖片', '500 張貼圖', '每種型別 40 個群組', '每個群組 40 個置頂'],
      },
    ],
  },
  policy: {
    dataSecurity: "數據安全",
    privacy: "隱私",
    terms: "使用條款",
    payment: "付款與退款",
  },
  help: {
    faqTab: '常見問題',
    docsTab: '文件',
    docsPlaceholder: "文件正在更新中...",
    contactTab: '聯絡我們', email: '電子郵件', problem: '問題', problemPlaceholder: '請告訴我們發生了什麼事…', media: '附件', addMedia: '新增檔案', mediaLimit: '每個檔案最多 20 MB', removeMedia: '移除', send: '傳送', sending: '傳送中…', mediaTooLarge: '每個附件不得超過 20 MB。', mediaMax: '您最多可以附加 5 張圖片或影片。', sent: '感謝您 — 您的回報已送出。', sendFailed: '無法送出回報。',
  }
};
export default zhTW;
