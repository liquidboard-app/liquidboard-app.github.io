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
    "lang.label": "Language",
    "hero.line1": "Bring a real Clipboard",
    "hero.line2.left": "in your",
    "hero.line2.right": "Keyboard",
    "hero.lead": "Save, copy and paste anything in one tap — fast, private and always in sync across your devices.",
    "cta.download": "Download LiquidBoard",
    "show.title": "Everything you copy, beautifully organized.",
    "show.lead": "Keep snippets, price lists and notes one tap away. Sync across devices, paste anywhere — fast and safe.",
    "footer.tag": "Mini tool copy & paste for iOS"
  },
  vi: {
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.pricing": "Bảng giá",
    "nav.policy": "Chính sách",
    "nav.help": "Trợ giúp",
    "lang.label": "Ngôn ngữ",
    "hero.line1": "Mang một Clipboard thực sự",
    "hero.line2.left": "vào trong",
    "hero.line2.right": "Bàn phím",
    "hero.lead": "Lưu, sao chép và dán mọi thứ chỉ với một chạm — nhanh chóng, riêng tư và luôn đồng bộ.",
    "cta.download": "Tải LiquidBoard",
    "show.title": "Mọi dữ liệu bạn copy, luôn ngăn nắp.",
    "show.lead": "Ghi chú, báo giá, tin nhắn mẫu luôn sẵn sàng. Đồng bộ mọi thiết bị, dán bất kì đâu.",
    "footer.tag": "Công cụ copy & paste nhỏ gọn cho iOS"
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
