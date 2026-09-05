import { LocaleDict } from './types';

const hi: LocaleDict = {
  browserTitle: 'LiquidBoard — तेज़ और सुरक्षित तरीके से कॉपी और पेस्ट करें',
  browserDescription: 'LiquidBoard टेक्स्ट, फ़ोटो, स्टिकर और लिंक को व्यवस्थित रखता है, ताकि वे आपके iPhone कीबोर्ड से तुरंत पेस्ट करने के लिए तैयार रहें।',
  nav: {
    home: "होम",
    about: "हमारे बारे में",
    pricing: "मूल्य निर्धारण",
    policy: "नीति",
    help: "सहायता",
  },
  hero: {
    line1: "एक असली क्लिपबोर्ड लाएँ",
    line2: { left: "अपने", right: "iOS कीबोर्ड में" },
  },
  coreClipboard: { line1: 'ऐप के क्लिपबोर्ड से,', line2: 'आपके iOS कीबोर्ड तक।' },
  actionClipboard: {
    sectionLabel: 'LiquidBoard सुविधाएँ',
    progressLabel: 'क्लिपबोर्ड सुविधाओं की प्रगति',
    groupTitle: { primary: 'समूह', secondary: 'का नाम' },
    featureLabels: { group: 'समूह', pin: 'पिन', share: 'शेयर', export: 'फ़ाइल निर्यात करें', voice: 'आवाज़', scanText: 'टेक्स्ट स्कैन', systemPasteboard: 'सिस्टम क्लिपबोर्ड', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "", brand: "LiquidBoard\u00A0", suffix: "डाउनलोड करें" },
  },
  pricing: {
    intro: { 
      line1: "रोजाना कॉन्टेंट सहेजने, व्यवस्थित करने और शेयर करने के अपने तरीके के लिए सही प्लान चुनें।", 
      line2: "हर प्लान लाइफटाइम एक्सेस के लिए एक बार की खरीदारी है।" 
    },
    fromPrice: '{price} से शुरू',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'आजीवन पहुँच',
        price: '₹0',
        description: 'परीक्षण प्लान',
        features: ['20 टेक्स्ट', '20 चित्र', '20 स्टिकर', 'प्रति प्रकार 2 समूह', 'प्रति समूह 2 पिन'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'आजीवन पहुँच',
        price: '₹349',
        description: 'बेसिक प्लान',
        features: ['100 टेक्स्ट', '100 चित्र', '100 स्टिकर', 'प्रति प्रकार 5 समूह', 'प्रति समूह 5 पिन'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'आजीवन पहुँच',
        price: '₹699',
        description: 'मल्टीटास्किंग प्लान',
        features: ['250 टेक्स्ट', '250 चित्र', '250 स्टिकर', 'प्रति प्रकार 15 समूह', 'प्रति समूह 15 पिन'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'आजीवन पहुँच',
        price: '₹1,299',
        description: 'प्रोफेशनल प्लान',
        features: ['500 टेक्स्ट', '500 चित्र', '500 स्टिकर', 'प्रति प्रकार 40 समूह', 'प्रति समूह 40 पिन'],
      },
    ],
  },
  policy: {
    dataSecurity: "डेटा सुरक्षा",
    privacy: "गोपनीयता",
    terms: "उपयोग की शर्तें",
    payment: "भुगतान और रिफंड",
  },
  help: {
    faqTab: 'अक्सर पूछे जाने वाले प्रश्न',
    docsTab: 'डॉक्स',
    docsPlaceholder: "दस्तावेज़ीकरण अपडेट किया जा रहा है...",
    contactTab: 'संपर्क करें', email: 'ईमेल', problem: 'समस्या', problemPlaceholder: 'हमें बताएं कि क्या हुआ…', media: 'संलग्नक', addMedia: 'फ़ाइल जोड़ें', mediaLimit: 'प्रति फ़ाइल अधिकतम 20 MB', removeMedia: 'हटाएं', send: 'भेजें', sending: 'भेजा जा रहा है…', mediaTooLarge: 'हर संलग्नक 20 MB या उससे कम होना चाहिए।', mediaMax: 'आप अधिकतम 5 चित्र या वीडियो संलग्न कर सकते हैं।', sent: 'धन्यवाद — आपकी रिपोर्ट भेज दी गई है।', sendFailed: 'रिपोर्ट भेजी नहीं जा सकी।',
  }
};

export default hi;
