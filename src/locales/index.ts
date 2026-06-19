import { LocaleDict } from './types';
import en from './en';
import vi from './vi';

const dictionaries: Record<string, LocaleDict> = {
  en,
  vi,
};

export const getDict = async (lang: string) => {
  switch (lang) {
    case 'vi': return (await import('./vi')).default;
    case 'ja': return (await import('./ja')).default;
    case 'es': return (await import('./es')).default;
    case 'zh-TW': return (await import('./zh-TW')).default;
    case 'pt-BR': return (await import('./pt-BR')).default;
    case 'fr': return (await import('./fr')).default;
    case 'de': return (await import('./de')).default;
    case 'ru': return (await import('./ru')).default;
    case 'ko': return (await import('./ko')).default;
    case 'hi': return (await import('./hi')).default;
    case 'bn': return (await import('./bn')).default;
    case 'id': return (await import('./id')).default;
    case 'it': return (await import('./it')).default;
    case 'th': return (await import('./th')).default;
    case 'tl': return (await import('./tl')).default;
    case 'pl': return (await import('./pl')).default;
    case 'en':
    default:
      return (await import('./en')).default;
  }
};

export default dictionaries;
