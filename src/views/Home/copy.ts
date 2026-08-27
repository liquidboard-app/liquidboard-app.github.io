type HomeCopy = {
  downloadForIPhone: string;
};

const copy: Record<string, HomeCopy> = {
  en: { downloadForIPhone: 'Download for iPhone' },
  vi: { downloadForIPhone: 'Tải xuống cho iPhone' },
  ja: { downloadForIPhone: 'iPhone向けにダウンロード' },
  es: { downloadForIPhone: 'Descargar para iPhone' },
  'zh-TW': { downloadForIPhone: '下載 iPhone 版' },
  'zh-CN': { downloadForIPhone: '下载 iPhone 版' },
  'pt-BR': { downloadForIPhone: 'Baixar para iPhone' },
  fr: { downloadForIPhone: 'Télécharger pour iPhone' },
  de: { downloadForIPhone: 'Für iPhone laden' },
  ru: { downloadForIPhone: 'Скачать для iPhone' },
  ko: { downloadForIPhone: 'iPhone용 다운로드' },
  hi: { downloadForIPhone: 'iPhone के लिए डाउनलोड करें' },
  bn: { downloadForIPhone: 'iPhone-এর জন্য ডাউনলোড করুন' },
  id: { downloadForIPhone: 'Unduh untuk iPhone' },
  it: { downloadForIPhone: 'Scarica per iPhone' },
  th: { downloadForIPhone: 'ดาวน์โหลดสำหรับ iPhone' },
  tl: { downloadForIPhone: 'I-download para sa iPhone' },
  pl: { downloadForIPhone: 'Pobierz na iPhone’a' },
  tr: { downloadForIPhone: 'iPhone için indirin' },
};

export const getHomeCopy = (lang: string): HomeCopy => copy[lang] ?? copy.en;
