import { LocaleDict } from './types';

const en: LocaleDict = {
  nav: {
    home: "Home",
    about: "About",
    pricing: "Pricing",
    policy: "Policy",
    help: "Help",
  },
  hero: {
    line1: "Bring a real Clipboard",
    line2: { left: "in your", right: "Keyboard" },
  },
  header: {
    download: { prefix: "Download\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  action: {
    download: "Download LiquidBoard",
    titles: ['Create Group', 'Pin', 'Copy & Duplicate', 'Import & Export Files'],
    paragraphs: [
      'Create additional groups and categorize texts, images, and stickers based on your needs. Switch smoothly between groups and pin essential groups to the top first.',
      'Pin important texts, images, and stickers that you use frequently to the top so you can send them faster.',
      'Copy and duplicate texts, images, and stickers easily and quickly.',
      'Export and import text data as JSON and CSV directly through the Files app.',
    ],
    images: [
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard groups' },
      { src: '/assets/lb-photos.PNG', alt: 'LiquidBoard pinned items' },
      { src: '/assets/lb-keyboard.PNG', alt: 'LiquidBoard copy and duplicate' },
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard import and export files' },
    ],
  },
  pricing: {
    intro: { 
      line1: "Choose the right plan for how you save, organize, and share content every day.", 
      line2: "Every plan is a one-time purchase for lifetime access." 
    },
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Lifetime',
        price: '$0',
        description: 'For trial users',
        features: ['25 Texts', '25 Images', '25 Stickers', '2 Groups Per Type', '2 Pins Per Group'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Lifetime',
        price: '$2.99',
        description: 'For casual users',
        features: ['100 Texts', '100 Images', '100 Stickers', '5 Groups Per Type', '5 Pins Per Group'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Lifetime',
        price: '$5.99',
        description: 'For multitasking users',
        features: ['250 Texts', '250 Images', '250 Stickers', '15 Groups Per Type', '15 Pins Per Group'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Lifetime',
        price: '$10.99',
        description: 'For professional users',
        features: ['500 Texts', '500 Images', '500 Stickers', '40 Groups Per Type', '40 Pins Per Group'],
      },
    ],
  },
  features: {
    titles: ['Text', 'Images', 'Stickers'],
    paragraphs: [
      'Create and compose multiple text documents, introductory information and content tailored to your writing needs. Set up pre-built response templates for immediate use. Input and quickly share contact information. Store website links, code snippets, AI prompt structures for efficient reference and reuse.',
      'Rapidly share payment QR codes and bank transfer QR codes. Access a diverse collection of product sample prototypes, design mockups, infographics, and instructional screenshots. Organize and retrieve visual assets seamlessly for professional communication.',
      'Create and instantly share stickers, favorite memes, congratulatory messages, and emotional expressions to connect with loved ones and customers. Personalize your communication with visual elements that convey sentiment and enhance engagement.',
    ],
    images: [
      { src: '/assets/lb-text.PNG', alt: 'LiquidBoard text snippets' },
      { src: '/assets/lb-photos.PNG', alt: 'LiquidBoard photo board' },
      { src: '/assets/lb-keyboard.PNG', alt: 'LiquidBoard keyboard view' },
    ],
  },
  policy: {
    dataSecurity: "Data Security",
    privacy: "Privacy",
    terms: "Terms of Use",
    payment: "Payment & Refund",
  },
  help: {
    faqTab: 'FAQ',
    docsTab: 'Docs',
    docsPlaceholder: 'Documentation is being updated...',
  }
};

export default en;
