import { LocaleDict } from './types';

const zhTW: LocaleDict = {
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
  header: {
    download: { prefix: "下載\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  action: {
    download: "下載 LiquidBoard",
    titles: ['建立群組', '置頂', '複製與拷貝', '匯入與匯出檔案'],
    paragraphs: [
      '根據需求建立更多群組，將文字、圖片和貼圖進行分類。在群組之間流暢切換，並優先置頂重要群組。',
      '將經常使用的重要文字、圖片和貼圖置頂，以便更快地傳送。',
      '輕鬆快速地複製和拷貝文字、圖片和貼圖。',
      '直接透過檔案 App 將文字資料匯出和匯入為 JSON 與 CSV 格式。',
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
      line1: "根據您每天儲存、整理和分享內容的方式，選擇合適的方案。", 
      line2: "所有方案皆為一次性買斷，終身存取。" 
    },
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: '終身存取',
        price: 'NT$0',
        description: '試用方案',
        features: ['25 則文字', '25 張圖片', '25 張貼圖', '每種型別 2 個群組', '每個群組 2 個置頂'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: '終身存取',
        price: 'NT$90',
        description: '基本方案',
        features: ['100 則文字', '100 張圖片', '100 張貼圖', '每種型別 5 個群組', '每個群組 5 個置頂'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: '終身存取',
        price: 'NT$190',
        description: '多工方案',
        features: ['250 則文字', '250 張圖片', '250 張貼圖', '每種型別 15 個群組', '每個群組 15 個置頂'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: '終身存取',
        price: 'NT$330',
        description: '專業方案',
        features: ['500 則文字', '500 張圖片', '500 張貼圖', '每種型別 40 個群組', '每個群組 40 個置頂'],
      },
    ],
  },
  features: {
    titles: ['文字', '圖片', '貼圖'],
    paragraphs: [
      '建立和撰寫多個文字文件、介紹資訊和符合您寫作需求的內容。設定預先建立的回覆範本以便立即使用。輸入並快速分享聯絡資訊。儲存網站連結、程式碼片段、AI 提示詞結構，以便高效參考和重複使用。',
      '快速分享付款行動條碼和銀行轉帳行動條碼。存取多樣化的產品範例原型、設計模型、資訊圖表和教學螢幕截圖集合。無縫整理和擷取視覺資產，以進行專業溝通。',
      '建立並立即分享貼圖、最愛的迷因、祝賀訊息和情感表達，以與親人或客戶建立聯絡。使用傳達情感並提高參與度的視覺元素來個人化您的溝通。',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard text snippets' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard photo board' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard keyboard view' },
    ],
  }
,
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
  }
};
export default zhTW;
