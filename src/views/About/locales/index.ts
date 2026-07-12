export const getAboutComponent = async (lang: string) => {
  switch (lang) {
    case 'vi': return await import('./vi');
    case 'ja': return await import('./ja');
    case 'es': return await import('./es');
    case 'zh-TW': return await import('./zh-TW');
    case 'pt-BR': return await import('./pt-BR');
    case 'fr': return await import('./fr');
    case 'de': return await import('./de');
    case 'ru': return await import('./ru');
    case 'ko': return await import('./ko');
    case 'hi': return await import('./hi');
    case 'bn': return await import('./bn');
    case 'id': return await import('./id');
    case 'it': return await import('./it');
    case 'th': return await import('./th');
    case 'tl': return await import('./tl');
    case 'pl': return await import('./pl');
    case 'en':
    default: return await import('./en');
  }
};
