export const supportedLanguages = [
  { code: 'en', label: 'English', native: 'English', chooseLabel: 'Choose language' },
  { code: 'vi', label: 'Vietnamese', native: 'Tiếng Việt', chooseLabel: 'Chọn ngôn ngữ' },
  { code: 'ja', label: 'Japanese', native: '日本語', chooseLabel: '言語を選択' },
  { code: 'es', label: 'Spanish', native: 'Español', chooseLabel: 'Elegir idioma' },
  { code: 'zh-TW', label: 'Chinese', native: '繁體中文', chooseLabel: '選擇語言' },
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
] as const;

export const getLanguageConfig = (code: string) => (
  supportedLanguages.find((language) => language.code === code) ?? supportedLanguages[0]
);

const updatesLabels: Record<string, string> = {
  en: 'Updates', vi: 'Cập nhật', ja: 'アップデート', es: 'Actualizaciones', 'zh-TW': '更新',
  'pt-BR': 'Atualizações', fr: 'Mises à jour', de: 'Updates', ru: 'Обновления', ko: '업데이트',
  hi: 'अपडेट', bn: 'আপডেট', id: 'Pembaruan', it: 'Aggiornamenti', th: 'อัปเดต',
  tl: 'Mga update', pl: 'Aktualizacje',
};

export const getUpdatesLabel = (code: string) => updatesLabels[code] ?? updatesLabels.en;
