type GraphemeSegment = { segment: string };

type GraphemeSegmenter = {
  segment: (input: string) => Iterable<GraphemeSegment>;
};

type GraphemeSegmenterConstructor = new (
  locales?: string | string[],
  options?: { granularity: 'grapheme' },
) => GraphemeSegmenter;

const combiningMark = /^\p{Mark}$/u;
const variationSelector = /^[\uFE00-\uFE0F]$/u;

export const splitGraphemes = (text: string, locale?: string): string[] => {
  const Segmenter = (Intl as typeof Intl & { Segmenter?: GraphemeSegmenterConstructor }).Segmenter;
  if (Segmenter) {
    return Array.from(new Segmenter(locale, { granularity: 'grapheme' }).segment(text), ({ segment }) => segment);
  }

  return Array.from(text).reduce<string[]>((clusters, character) => {
    const previousIndex = clusters.length - 1;
    const joinsPrevious = previousIndex >= 0 && (
      combiningMark.test(character)
      || variationSelector.test(character)
      || character === '\u200D'
      || clusters[previousIndex].endsWith('\u200D')
    );

    if (joinsPrevious) clusters[previousIndex] += character;
    else clusters.push(character);
    return clusters;
  }, []);
};
