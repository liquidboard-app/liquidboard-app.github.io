// German nouns are intentionally capitalized, so applying generic sentence casing
// would make otherwise correct German copy grammatically wrong.
const sentenceCaseLanguages = new Set(['en', 'vi', 'es', 'pt-BR', 'fr', 'id', 'it', 'tl', 'pl']);

const protectedTerms: Array<[RegExp, string]> = [
  [/\bliquidboard\b/giu, 'LiquidBoard'],
  [/\bapple\b/giu, 'Apple'],
  [/\bios\b/giu, 'iOS'],
  [/\bicloud\b/giu, 'iCloud'],
  [/\biphone\b/giu, 'iPhone'],
  [/\bipad\b/giu, 'iPad'],
  [/\bmacos\b/giu, 'macOS'],
  [/\bapp\s+store\b/giu, 'App Store'],
  [/\bmac\s+app\s+store\b/giu, 'Mac App Store'],
  [/\bin-app\s+purchases\b/giu, 'In-App Purchases'],
  [/\bfiles\s+app\b/giu, 'Files app'],
  [/\bsystem\s+pasteboard\b/giu, 'System Pasteboard'],
  [/\bjson\b/giu, 'JSON'],
  [/\bcsv\b/giu, 'CSV'],
  [/\bqr\b/giu, 'QR'],
  [/\bai\b/giu, 'AI'],
  [/\bia\b/giu, 'IA'],
  // `\b` only understands ASCII word characters. In Vietnamese it treats the
  // `ế` in “kiếm” as a boundary, which incorrectly turns it into “KIếm”.
  [/(?<!\p{L})ki(?!\p{L})/giu, 'KI'],
  [/\bapi\b/giu, 'API'],
  [/\burl\b/giu, 'URL'],
  [/\bhtml\b/giu, 'HTML'],
  [/\bcss\b/giu, 'CSS'],
];

const normalizeTerms = (value: string) => protectedTerms.reduce(
  (result, [pattern, replacement]) => result.replace(pattern, replacement),
  value,
);

const lowerForLocale = (value: string, lang: string) => normalizeTerms(value.toLocaleLowerCase(lang));

export const sentenceCase = (value: string, lang: string) => {
  if (!sentenceCaseLanguages.has(lang)) return normalizeTerms(value);
  const normalized = lowerForLocale(value, lang);
  return normalizeTerms(normalized.replace(/^(\s*)(\p{L})/u, (_, space: string, letter: string) => `${space}${letter.toLocaleUpperCase(lang)}`));
};

export const inlineCase = (value: string, lang: string) => (
  sentenceCaseLanguages.has(lang) ? lowerForLocale(value, lang) : normalizeTerms(value)
);
