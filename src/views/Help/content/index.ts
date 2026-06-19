export const getFaqs = async (lang: string) => {
  switch (lang) {
    case 'vi': return (await import('./vi')).faqs;
    case 'ja': return (await import('./ja')).faqs;
    case 'es': return (await import('./es')).faqs;
    case 'zh-TW': return (await import('./zh-TW')).faqs;
    case 'pt-BR': return (await import('./pt-BR')).faqs;
    case 'fr': return (await import('./fr')).faqs;
    case 'de': return (await import('./de')).faqs;
    case 'ru': return (await import('./ru')).faqs;
    case 'ko': return (await import('./ko')).faqs;
    case 'hi': return (await import('./hi')).faqs;
    case 'bn': return (await import('./bn')).faqs;
    case 'id': return (await import('./id')).faqs;
    case 'it': return (await import('./it')).faqs;
    case 'th': return (await import('./th')).faqs;
    case 'tl': return (await import('./tl')).faqs;
    case 'pl': return (await import('./pl')).faqs;
    case 'pt': return (await import('./pt')).faqs;
    case 'en':
    default: return (await import('./en')).faqs;
  }
};
