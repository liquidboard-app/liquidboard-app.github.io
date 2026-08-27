const HERO_IMAGE_PATTERN = /\/hero-image\/([^/]+)\.JPG$/;

export const getHeroImageSrcSet = (src: string) => {
  const match = src.match(HERO_IMAGE_PATTERN);
  if (!match) return undefined;

  return `/assets/hero-image/mobile/${match[1]}.jpg 480w, ${src} 1179w`;
};

export const heroImageSizes = '(max-width: 767px) 46vw, (max-width: 1199px) 34vw, 26vw';
