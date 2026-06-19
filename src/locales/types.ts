export type PlanConfig = {
  name: string;
  tone: 'white' | 'green' | 'blue' | 'red';
  lifetime: string;
  price: string;
  description: string;
  features: string[];
};

export type FeatureConfig = {
  titles: string[];
  paragraphs: string[];
  images: { src: string; alt: string }[];
};

export type LocaleDict = {
  nav: {
    home: string;
    about: string;
    pricing: string;
    policy: string;
    help: string;
  };
  hero: {
    line1: string;
    line2: { left: string; right: string };
  };
  header: {
    download: { prefix: string; brand: string; suffix: string };
  };
  action: FeatureConfig & {
    download?: string;
  };
  pricing: {
    intro: { line1: string; line2: string };
    plans: PlanConfig[];
  };
  features: FeatureConfig;
  policy?: {
    dataSecurity: string;
    privacy: string;
    terms: string;
    payment: string;
  };
  help?: {
    docsPlaceholder: string;
    faqTab?: string;
    docsTab?: string;
  };
};
