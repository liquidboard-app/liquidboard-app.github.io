import React, { createContext, useCallback, useContext, useEffect, useState, ReactNode } from 'react';
import { LocaleDict } from '../locales/types';
import { defaultDict, getDict } from '../locales';

type LanguageContextType = {
  lang: string;
  changeLang: (newLang: string) => Promise<void>;
  dict: LocaleDict;
  isLanguageChanging: boolean;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  changeLang: async () => {},
  dict: defaultDict,
  isLanguageChanging: false,
});

const wait = (duration: number) => new Promise<void>((resolve) => {
  window.setTimeout(resolve, duration);
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<string>('en');
  const [dict, setDict] = useState<LocaleDict>(defaultDict);
  const [isLanguageChanging, setIsLanguageChanging] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('lb_lang');
    if (saved) {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    let active = true;
    getDict(lang).then((nextDict) => {
      if (active) setDict(nextDict);
    });
    document.documentElement.lang = lang;
    return () => { active = false; };
  }, [lang]);

  const changeLang = useCallback(async (newLang: string) => {
    if (newLang === lang || isLanguageChanging) return;

    setIsLanguageChanging(true);
    const nextDictPromise = getDict(newLang);
    try {
      await wait(240);
      const nextDict = await nextDictPromise;
      setDict(nextDict);
      setLang(newLang);
      localStorage.setItem('lb_lang', newLang);
      document.documentElement.lang = newLang;
      await wait(420);
    } finally {
      setIsLanguageChanging(false);
    }
  }, [isLanguageChanging, lang]);

  return (
    <LanguageContext.Provider value={{ lang, changeLang, dict, isLanguageChanging }}>
      <div className={`language-page-shell${isLanguageChanging ? ' is-changing' : ''}`}>
        {children}
      </div>
      <div
        className={`language-transition${isLanguageChanging ? ' is-visible' : ''}`}
        aria-hidden={!isLanguageChanging}
        aria-live="polite"
      />
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
