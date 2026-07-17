import type { LocaleDict } from './types';
import en from './en';

type LocaleModule = { default: LocaleDict };
type LocaleLoader = () => Promise<LocaleModule>;

const loaders: Record<string, LocaleLoader> = {
  vi: () => import('./vi'),
  ja: () => import('./ja'),
  es: () => import('./es'),
  'zh-TW': () => import('./zh-TW'),
  'zh-CN': () => import('./zh-CN'),
  'pt-BR': () => import('./pt-BR'),
  fr: () => import('./fr'),
  de: () => import('./de'),
  ru: () => import('./ru'),
  ko: () => import('./ko'),
  hi: () => import('./hi'),
  bn: () => import('./bn'),
  id: () => import('./id'),
  it: () => import('./it'),
  th: () => import('./th'),
  tl: () => import('./tl'),
  pl: () => import('./pl'),
  tr: () => import('./tr'),
};

export const defaultDict = en;

export const getDict = async (lang: string): Promise<LocaleDict> => {
  const loader = loaders[lang];
  return loader ? (await loader()).default : en;
};
