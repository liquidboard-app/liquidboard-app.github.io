export const supportedLanguages = [
  { code: 'en', label: 'English', native: 'English', chooseLabel: 'Language' },
  { code: 'vi', label: 'Vietnamese', native: 'Tiếng Việt', chooseLabel: 'Ngôn Ngữ' },
  { code: 'ja', label: 'Japanese', native: '日本語', chooseLabel: '言語' },
  { code: 'es', label: 'Spanish', native: 'Español', chooseLabel: 'Idioma' },
  { code: 'zh-TW', label: 'Chinese (Traditional)', native: '繁體中文', chooseLabel: '語言' },
  { code: 'zh-CN', label: 'Chinese (Simplified)', native: '简体中文', chooseLabel: '语言' },
  { code: 'pt-BR', label: 'Portuguese', native: 'Português', chooseLabel: 'Idioma' },
  { code: 'fr', label: 'French', native: 'Français', chooseLabel: 'Langue' },
  { code: 'de', label: 'German', native: 'Deutsch', chooseLabel: 'Sprache' },
  { code: 'ru', label: 'Russian', native: 'Русский', chooseLabel: 'Язык' },
  { code: 'ko', label: 'Korean', native: '한국어', chooseLabel: '언어' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', chooseLabel: 'भाषा' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা', chooseLabel: 'ভাষা' },
  { code: 'id', label: 'Indonesian', native: 'Bahasa Indonesia', chooseLabel: 'Bahasa' },
  { code: 'it', label: 'Italian', native: 'Italiano', chooseLabel: 'Lingua' },
  { code: 'th', label: 'Thai', native: 'ไทย', chooseLabel: 'ภาษา' },
  { code: 'tl', label: 'Filipino', native: 'Filipino', chooseLabel: 'Wika' },
  { code: 'pl', label: 'Polish', native: 'Polski', chooseLabel: 'Język' },
  { code: 'tr', label: 'Turkish', native: 'Türkçe', chooseLabel: 'Dil' },
] as const;

export const getLanguageConfig = (code: string) => (
  supportedLanguages.find((language) => language.code === code) ?? supportedLanguages[0]
);

const updatesLabels: Record<string, string> = {
  en: 'Updates', vi: 'Cập nhật', ja: 'アップデート', es: 'Actualizaciones', 'zh-TW': '更新', 'zh-CN': '更新',
  'pt-BR': 'Atualizações', fr: 'Mises à jour', de: 'Updates', ru: 'Обновления', ko: '업데이트',
  hi: 'अपडेट', bn: 'আপডেট', id: 'Pembaruan', it: 'Aggiornamenti', th: 'อัปเดต',
  tl: 'Mga update', pl: 'Aktualizacje',
  tr: 'Güncellemeler',
};

export const getUpdatesLabel = (code: string) => updatesLabels[code] ?? updatesLabels.en;

const menuToggleLabels: Record<string, { menu: string; close: string }> = {
  en: { menu: 'Menu', close: 'Close' },
  vi: { menu: 'Menu', close: 'Đóng' },
  ja: { menu: 'メニュー', close: '閉じる' },
  es: { menu: 'Menú', close: 'Cerrar' },
  'zh-TW': { menu: '選單', close: '關閉' },
  'zh-CN': { menu: '菜单', close: '关闭' },
  'pt-BR': { menu: 'Menu', close: 'Fechar' },
  fr: { menu: 'Menu', close: 'Fermer' },
  de: { menu: 'Menü', close: 'Schließen' },
  ru: { menu: 'Меню', close: 'Закрыть' },
  ko: { menu: '메뉴', close: '닫기' },
  hi: { menu: 'मेनू', close: 'बंद करें' },
  bn: { menu: 'মেনু', close: 'বন্ধ' },
  id: { menu: 'Menu', close: 'Tutup' },
  it: { menu: 'Menu', close: 'Chiudi' },
  th: { menu: 'เมนู', close: 'ปิด' },
  tl: { menu: 'Menu', close: 'Isara' },
  pl: { menu: 'Menu', close: 'Zamknij' },
  tr: { menu: 'Menü', close: 'Kapat' },
};

export const getMenuToggleLabels = (code: string) => menuToggleLabels[code] ?? menuToggleLabels.en;

const headerActionLabels: Record<string, { language: string; light: string; dark: string; download: string }> = {
  en: { language: 'Language', light: 'Light', dark: 'Dark', download: 'Download' },
  vi: { language: 'Ngôn ngữ', light: 'Sáng', dark: 'Tối', download: 'Tải xuống' },
  ja: { language: '言語', light: 'ライト', dark: 'ダーク', download: 'ダウンロード' },
  es: { language: 'Idioma', light: 'Claro', dark: 'Oscuro', download: 'Descargar' },
  'zh-TW': { language: '語言', light: '淺色', dark: '深色', download: '下載' },
  'zh-CN': { language: '语言', light: '浅色', dark: '深色', download: '下载' },
  'pt-BR': { language: 'Idioma', light: 'Claro', dark: 'Escuro', download: 'Baixar' },
  fr: { language: 'Langue', light: 'Clair', dark: 'Sombre', download: 'Télécharger' },
  de: { language: 'Sprache', light: 'Hell', dark: 'Dunkel', download: 'Herunterladen' },
  ru: { language: 'Язык', light: 'Светлая тема', dark: 'Тёмная тема', download: 'Скачать' },
  ko: { language: '언어', light: '라이트 모드', dark: '다크 모드', download: '다운로드' },
  hi: { language: 'भाषा', light: 'लाइट मोड', dark: 'डार्क मोड', download: 'डाउनलोड करें' },
  bn: { language: 'ভাষা', light: 'লাইট মোড', dark: 'ডার্ক মোড', download: 'ডাউনলোড' },
  id: { language: 'Bahasa', light: 'Terang', dark: 'Gelap', download: 'Unduh' },
  it: { language: 'Lingua', light: 'Chiaro', dark: 'Scuro', download: 'Scarica' },
  th: { language: 'ภาษา', light: 'สว่าง', dark: 'มืด', download: 'ดาวน์โหลด' },
  tl: { language: 'Wika', light: 'Maliwanag', dark: 'Madilim', download: 'I-download' },
  pl: { language: 'Język', light: 'Jasny', dark: 'Ciemny', download: 'Pobierz' },
  tr: { language: 'Dil', light: 'Açık', dark: 'Koyu', download: 'İndir' },
};

export const getHeaderActionLabels = (code: string) => headerActionLabels[code] ?? headerActionLabels.en;

const accessibilityLabels = {
  en: {
    closeLanguageSelection: 'Close language selection',
    brandHome: 'LiquidBoard home',
    primaryNavigation: 'Primary navigation',
    changeLanguage: 'Change language',
    closeMenu: 'Close menu',
    openMenu: 'Open menu',
    scrollToTop: 'Scroll to top',
    helpSections: 'Help sections',
    socialMediaLinks: 'Social media links',
    features: 'LiquidBoard features',
  },
  tr: {
    closeLanguageSelection: 'Dil seçimini kapat',
    brandHome: 'LiquidBoard ana sayfası',
    primaryNavigation: 'Ana gezinme',
    changeLanguage: 'Dili değiştir',
    closeMenu: 'Menüyü kapat',
    openMenu: 'Menüyü aç',
    scrollToTop: 'Sayfanın başına dön',
    helpSections: 'Yardım bölümleri',
    socialMediaLinks: 'Sosyal medya bağlantıları',
    features: 'LiquidBoard özellikleri',
  },
  'zh-CN': {
    closeLanguageSelection: '关闭语言选择',
    brandHome: 'LiquidBoard 首页',
    primaryNavigation: '主导航',
    changeLanguage: '切换语言',
    closeMenu: '关闭菜单',
    openMenu: '打开菜单',
    scrollToTop: '返回顶部',
    helpSections: '帮助栏目',
    socialMediaLinks: '社交媒体链接',
    features: 'LiquidBoard 功能',
  },
};

export const getAccessibilityLabels = (code: string) => (
  accessibilityLabels[code as keyof typeof accessibilityLabels] ?? accessibilityLabels.en
);
