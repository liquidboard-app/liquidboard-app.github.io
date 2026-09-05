import { LocaleDict } from './types';

const en: LocaleDict = {
  browserTitle: 'LiquidBoard — Copy and Paste, Fast and Safe',
  browserDescription: 'LiquidBoard keeps texts, photos, stickers, and links organized so they are ready to paste from your iPhone keyboard.',
  nav: {
    home: "Home",
    about: "About",
    pricing: "Pricing",
    updates: "Updates",
    policy: "Policy",
    help: "Help",
  },
  hero: {
    line1: "Bring a real Clipboard",
    line2: { left: "in your", right: "iOS Keyboard" },
  },
  coreClipboard: { line1: 'From the clipboard in the app,', line2: 'to your iOS Keyboard.' },
  actionClipboard: {
    sectionLabel: 'LiquidBoard features',
    progressLabel: 'Action Clipboard feature progress',
    groupTitle: { primary: 'Group', secondary: 'Name' },
    featureLabels: { group: 'Group', pin: 'Pin', share: 'Share', export: 'Export File', voice: 'Voice', scanText: 'Scan Text', systemPasteboard: 'System Pasteboard', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "Download\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  pricing: {
    intro: { 
      line1: "Choose the right plan for how you save, organize and share content every day.", 
      line2: "Every plan is a one-time purchase for lifetime access." 
    },
    fromPrice: 'From {price}',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Lifetime',
        price: '$0',
        description: 'Trial plan',
        features: ['20 Texts', '20 Images', '20 Stickers', '2 Groups Per Type', '2 Pins Per Group'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Lifetime',
        price: '$3.49',
        description: 'Basic plan',
        features: ['100 Texts', '100 Images', '100 Stickers', '5 Groups Per Type', '5 Pins Per Group'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Lifetime',
        price: '$7.49',
        description: 'Multitasking plan',
        features: ['250 Texts', '250 Images', '250 Stickers', '15 Groups Per Type', '15 Pins Per Group'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Lifetime',
        price: '$13.99',
        description: 'Professional plan',
        features: ['500 Texts', '500 Images', '500 Stickers', '40 Groups Per Type', '40 Pins Per Group'],
      },
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
    contactTab: 'Contact',
    email: 'Email',
    problem: 'Problem',
    problemPlaceholder: 'Tell us what happened…',
    media: 'Media',
    addMedia: 'Add media',
    mediaLimit: 'Up to 20 MB per file',
    removeMedia: 'Remove',
    send: 'Send',
    sending: 'Sending…',
    mediaTooLarge: 'Each media attachment must be 20 MB or less.',
    mediaMax: 'You can attach up to 5 images or videos.',
    sent: 'Thanks — your report has been sent.',
    sendFailed: 'Unable to send the report.',
  }
};

export default en;
