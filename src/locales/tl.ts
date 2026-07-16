import { LocaleDict } from './types';

const tl: LocaleDict = {
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
  header: {
    download: { prefix: "I-download ang\u00A0", brand: "LiquidBoard\u00A0", suffix: "" },
  },
  action: {
    download: "I-download ang LiquidBoard",
    titles: ['Gumawa ng Grupo', 'I-pin', 'Kopyahin at I-duplicate', 'Mag-import at Mag-export ng mga File'],
    paragraphs: [
      'Gumawa ng karagdagang mga grupo at ikategorya ang mga teksto, larawan at sticker batay sa iyong mga pangangailangan. Lumipat nang maayos sa pagitan ng mga grupo at i-pin muna ang mahahalagang grupo sa itaas.',
      'I-pin ang mahahalagang teksto, larawan at sticker na madalas mong ginagamit sa itaas para mas mabilis mo itong maipadala.',
      'Madali at mabilis na kopyahin at i-duplicate ang mga teksto, larawan at sticker.',
      'Mag-export at mag-import ng data ng teksto bilang JSON at CSV nang direkta sa pamamagitan ng Files app.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard groups' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard pinned items' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard copy and duplicate' },
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard import and export files' },
    ],
  },
  pricing: {
    intro: { 
      line1: "Piliin ang tamang plano para sa kung paano ka nagse-save, nag-oorganisa at nagbabahagi ng content araw-araw.", 
      line2: "Ang bawat plano ay isang beses na pagbili para sa panghabambuhay na pag-access." 
    },
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Panghabambuhay na Pag-access',
        price: '₱0',
        description: 'Trial na plano',
        features: ['25 Teksto', '25 Larawan', '25 Sticker', '2 Grupo Bawat Uri', '2 Naka-pin Bawat Grupo'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Panghabambuhay na Pag-access',
        price: '₱149',
        description: 'Basic na plano',
        features: ['100 Teksto', '100 Larawan', '100 Sticker', '5 Grupo Bawat Uri', '5 Naka-pin Bawat Grupo'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Panghabambuhay na Pag-access',
        price: '₱299',
        description: 'Multitasking na plano',
        features: ['250 Teksto', '250 Larawan', '250 Sticker', '15 Grupo Bawat Uri', '15 Naka-pin Bawat Grupo'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Panghabambuhay na Pag-access',
        price: '₱549',
        description: 'Propesyonal na plano',
        features: ['500 Teksto', '500 Larawan', '500 Sticker', '40 Grupo Bawat Uri', '40 Naka-pin Bawat Grupo'],
      },
    ],
  },
  features: {
    titles: ['Teksto', 'Larawan', 'Sticker'],
    paragraphs: [
      'Gumawa at bumuo ng maramihang mga dokumento ng teksto, pambungad na impormasyon at nilalamang iniakma sa iyong mga pangangailangan sa pagsusulat. I-set up ang mga pre-built na template ng pagtugon para magamit kaagad. Mag-input at mabilis na magbahagi ng impormasyon sa pakikipag-ugnayan. Mag-imbak ng mga link ng website, code snippet, istruktura ng prompt ng AI para sa mahusay na sanggunian at muling paggamit.',
      'Mabilis na ibahagi ang mga QR code sa pagbabayad at mga QR code ng bank transfer. I-access ang isang magkakaibang koleksyon ng mga prototype ng sample ng produkto, mga mockup ng disenyo, infographics at mga instructional na screenshot. Ayusin at kunin nang maayos ang mga visual na asset para sa propesyonal na komunikasyon.',
      'Gumawa at agad na magbahagi ng mga sticker, paboritong meme, mensahe ng pagbati at emosyonal na ekspresyon para kumonekta sa mga mahal sa buhay at mga customer. I-personalize ang iyong komunikasyon sa mga visual na elementong nagpapahiwatig ng pakiramdam at nagpapahusay ng pakikipag-ugnayan.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard text snippets' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard photo board' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard keyboard view' },
    ],
  }
,
  
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
