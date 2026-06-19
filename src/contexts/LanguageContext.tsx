import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LocaleDict } from '../locales/types';
import { getDict } from '../locales';
import en from '../locales/en';

type LanguageContextType = {
  lang: string;
  changeLang: (newLang: string) => void;
  dict: LocaleDict;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  changeLang: () => {},
  dict: en,
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<string>('en');
  const [dict, setDict] = useState<LocaleDict>(en);

  useEffect(() => {
    const saved = localStorage.getItem('lb_lang');
    if (saved) {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    getDict(lang).then(d => setDict(d));
  }, [lang]);

  const changeLang = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem('lb_lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLang, dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
