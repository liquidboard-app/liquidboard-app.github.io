import { LocaleDict } from './types';

const tl: LocaleDict = {
  browserTitle: 'LiquidBoard — Mabilis at ligtas na pagkopya at pag-paste',
  browserDescription: 'Inaayos ng LiquidBoard ang mga text, larawan, sticker, at link para handa itong i-paste mula sa keyboard ng iyong iPhone.',
  nav: {
    home: "Home",
    about: "Tungkol",
    pricing: "Presyo",
    policy: "Patakaran",
    help: "Tulong",
  },
  hero: {
    line1: "Magdala ng totoong clipboard",
    line2: { left: "sa iyong", right: "iOS Keyboard" },
  },
  coreClipboard: { line1: 'Mula sa Clipboard sa app,', line2: 'papunta sa iyong iOS Keyboard.' },
  actionClipboard: {
    sectionLabel: 'Mga feature ng LiquidBoard',
    progressLabel: 'Progress ng feature ng Clipboard',
    groupTitle: { primary: 'Pangalan', secondary: 'ng grupo' },
    groupDescription: 'I-uri ayon sa pangangailangan',
    pinDescription: 'Unahin ang mahalaga',
    shareDescription: 'Ipadala sa lahat ng platform',
    exportTitle: 'I-import / I-export',
    exportDescription: 'I-save at i-import gamit ang JSON o CSV',
    featureLabels: { group: 'Grupo', pin: 'I-pin', share: 'Ibahagi', export: 'I-export ang file', voice: 'Boses', scanText: 'I-scan ang Teksto', systemPasteboard: 'System Clipboard', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "I-download ang\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  pricing: {
    intro: { 
      line1: "Piliin ang tamang plano para sa kung paano ka nagse-save, nag-oorganisa at nagbabahagi ng content araw-araw.", 
      line2: "Ang bawat plano ay isang beses na pagbili para sa panghabambuhay na pag-access." 
    },
    fromPrice: 'Mula sa {price}',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Panghabambuhay na Pag-access',
        price: '₱0',
        description: 'Trial na plano',
        features: ['20 Teksto', '20 Larawan', '20 Sticker', '2 Grupo Bawat Uri', '2 Naka-pin Bawat Grupo'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Panghabambuhay na Pag-access',
        price: '₱219',
        description: 'Basic na plano',
        features: ['100 Teksto', '100 Larawan', '100 Sticker', '5 Grupo Bawat Uri', '5 Naka-pin Bawat Grupo'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Panghabambuhay na Pag-access',
        price: '₱449',
        description: 'Multitasking na plano',
        features: ['250 Teksto', '250 Larawan', '250 Sticker', '15 Grupo Bawat Uri', '15 Naka-pin Bawat Grupo'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Panghabambuhay na Pag-access',
        price: '₱849',
        description: 'Propesyonal na plano',
        features: ['500 Teksto', '500 Larawan', '500 Sticker', '40 Grupo Bawat Uri', '40 Naka-pin Bawat Grupo'],
      },
    ],
  },
  
  help: {
    faqTab: 'Mga Madalas Itanong',
    docsTab: 'Mga dokumento',
    docsPlaceholder: "Ang dokumentasyon ay ina-update...",
    contactTab: 'Makipag-ugnayan', email: 'Email', problem: 'Problema', problemPlaceholder: 'Sabihin sa amin kung ano ang nangyari…', media: 'Mga attachment', addMedia: 'Magdagdag ng file', mediaLimit: 'Hanggang 20 MB bawat file', removeMedia: 'Alisin', send: 'Ipadala', sending: 'Ipinapadala…', mediaTooLarge: 'Ang bawat attachment ay dapat 20 MB o mas maliit.', mediaMax: 'Makakapag-attach ka ng hanggang 5 larawan o video.', sent: 'Salamat — naipadala na ang iyong ulat.', sendFailed: 'Hindi maipadala ang ulat.',
  }
,
  policy: {
    dataSecurity: "Seguridad ng Datos",
    privacy: "Pribado",
    terms: "Mga Tuntunin ng Paggamit",
    payment: "Pagbabayad at Pag-refund",
  },
};
export default tl;
