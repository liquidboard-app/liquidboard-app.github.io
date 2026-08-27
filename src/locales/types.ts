export type PlanConfig = {
  name: string;
  tone: 'white' | 'green' | 'blue' | 'red';
  lifetime: string;
  price: string;
  description: string;
  features: string[];
};

export type LocaleDict = {
  browserTitle: string;
  browserDescription: string;
  nav: {
    home: string;
    about: string;
    pricing: string;
    updates?: string;
    policy: string;
    help: string;
  };
  hero: {
    line1: string;
    line2: { left: string; right: string };
  };
  coreClipboard: {
    line1: string;
    line2: string;
  };
  header: {
    download: { prefix: string; brand: string; suffix: string };
  };
  pricing: {
    intro: { line1: string; line2: string };
    fromPrice: string;
    plans: PlanConfig[];
  };
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
    contactTab?: string;
    email?: string;
    problem?: string;
    problemPlaceholder?: string;
    media?: string;
    addMedia?: string;
    mediaLimit?: string;
    removeMedia?: string;
    send?: string;
    sending?: string;
    mediaTooLarge?: string;
    mediaMax?: string;
    sent?: string;
    sendFailed?: string;
  };
};
