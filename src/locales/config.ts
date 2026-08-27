export const supportedLanguages = [
  { code: 'en', label: 'English', native: 'English', chooseLabel: 'Choose language' },
  { code: 'vi', label: 'Vietnamese', native: 'Tiếng Việt', chooseLabel: 'Chọn ngôn ngữ' },
  { code: 'ja', label: 'Japanese', native: '日本語', chooseLabel: '言語を選択' },
  { code: 'es', label: 'Spanish', native: 'Español', chooseLabel: 'Elegir idioma' },
  { code: 'zh-TW', label: 'Chinese (Traditional)', native: '繁體中文', chooseLabel: '選擇語言' },
  { code: 'zh-CN', label: 'Chinese (Simplified)', native: '简体中文', chooseLabel: '选择语言' },
  { code: 'pt-BR', label: 'Portuguese', native: 'Português', chooseLabel: 'Escolher idioma' },
  { code: 'fr', label: 'French', native: 'Français', chooseLabel: 'Choisir la langue' },
  { code: 'de', label: 'German', native: 'Deutsch', chooseLabel: 'Sprache wählen' },
  { code: 'ru', label: 'Russian', native: 'Русский', chooseLabel: 'Выберите язык' },
  { code: 'ko', label: 'Korean', native: '한국어', chooseLabel: '언어 선택' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', chooseLabel: 'भाषा चुनें' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা', chooseLabel: 'ভাষা নির্বাচন করুন' },
  { code: 'id', label: 'Indonesian', native: 'Bahasa Indonesia', chooseLabel: 'Pilih bahasa' },
  { code: 'it', label: 'Italian', native: 'Italiano', chooseLabel: 'Scegli la lingua' },
  { code: 'th', label: 'Thai', native: 'ไทย', chooseLabel: 'เลือกภาษา' },
  { code: 'tl', label: 'Filipino', native: 'Filipino', chooseLabel: 'Pumili ng wika' },
  { code: 'pl', label: 'Polish', native: 'Polski', chooseLabel: 'Wybierz język' },
  { code: 'tr', label: 'Turkish', native: 'Türkçe', chooseLabel: 'Dil seçin' },
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
