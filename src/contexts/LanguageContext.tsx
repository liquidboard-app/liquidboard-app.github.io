import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Translations = {
  [key: string]: string;
};

type AllTranslations = {
  en: Translations;
  vi: Translations;
};

const translations: AllTranslations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.pricing": "Pricing",
    "nav.policy": "Policy",
    "nav.help": "Help",
    "hero.line1": "Bring a real Clipboard",
    "hero.line2.left": "in your",
    "hero.line2.right": "Keyboard",
    "header.download": "Download for iPhone",
  },
  vi: {
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.pricing": "Bảng giá",
    "nav.policy": "Chính sách",
    "nav.help": "Trợ giúp",
    "hero.line1": "Mang một Clipboard thực sự",
    "hero.line2.left": "vào trong",
    "hero.line2.right": "Bàn phím",
    "header.download": "Tải xuống cho iPhone",
  }
};

type LanguageContextType = {
  lang: string;
  changeLang: (newLang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  changeLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<string>('en');

  useEffect(() => {
    const saved = localStorage.getItem('lb_lang');
    if (saved === 'vi' || saved === 'en') {
      setLang(saved);
    }
  }, []);

  const changeLang = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem('lb_lang', newLang);
  };

  const t = (key: string) => translations[lang as keyof AllTranslations][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
