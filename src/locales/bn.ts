import { LocaleDict } from './types';

const bn: LocaleDict = {
  browserTitle: 'LiquidBoard — দ্রুত ও নিরাপদে কপি ও পেস্ট করুন',
  browserDescription: 'LiquidBoard টেক্সট, ছবি, স্টিকার ও লিংক গুছিয়ে রাখে, যাতে সেগুলো আপনার iPhone কীবোর্ড থেকে সরাসরি পেস্ট করা যায়।',
  nav: {
    home: "হোম",
    about: "আমাদের সম্পর্কে",
    pricing: "মূল্য নির্ধারণ",
    policy: "নীতি",
    help: "সাহায্য",
  },
  hero: {
    line1: "একটি বাস্তব ক্লিপবোর্ড নিয়ে আসুন",
    line2: { left: "আপনার", right: "iOS কিবোর্ডে" },
  },
  coreClipboard: { line1: 'অ্যাপের ক্লিপবোর্ড থেকে,', line2: 'আপনার iOS কীবোর্ডে।' },
  actionClipboard: {
    sectionLabel: 'LiquidBoard-এর ফিচার',
    progressLabel: 'ক্লিপবোর্ড ফিচারের অগ্রগতি',
    groupTitle: { primary: 'গ্রুপের', secondary: 'নাম' },
    featureLabels: { group: 'গ্রুপ', pin: 'পিন', share: 'শেয়ার', export: 'ফাইল এক্সপোর্ট করুন', voice: 'ভয়েস', scanText: 'টেক্সট স্ক্যান', systemPasteboard: 'সিস্টেম ক্লিপবোর্ড', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: "", brand: "LiquidBoard\u00A0", suffix: "ডাউনলোড করুন" },
  },
  pricing: {
    intro: { 
      line1: "প্রতিদিন আপনি কীভাবে সামগ্রী সংরক্ষণ, সংগঠিত এবং ভাগ করেন তার জন্য সঠিক প্ল্যান বেছে নিন।", 
      line2: "প্রতিটি প্ল্যান আজীবন অ্যাক্সেসের জন্য এককালীন কেনাকাটা।" 
    },
    fromPrice: '{price} থেকে শুরু',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'আজীবন অ্যাক্সেস',
        price: '৳0',
        description: 'ট্রায়াল প্ল্যান',
        features: ['২০টি টেক্সট', '২০টি ছবি', '২০টি স্টিকার', 'প্রতিটি প্রকারের জন্য ২টি গ্রুপ', 'প্রতি গ্রুপের জন্য ২টি পিন'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'আজীবন অ্যাক্সেস',
        price: '৳৪৪৯',
        description: 'বেসিক প্ল্যান',
        features: ['১০০টি টেক্সট', '১০০টি ছবি', '১০০টি স্টিকার', 'প্রতিটি প্রকারের জন্য ৫টি গ্রুপ', 'প্রতি গ্রুপের জন্য ৫টি পিন'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'আজীবন অ্যাক্সেস',
        price: '৳৮৯৯',
        description: 'মাল্টিটাস্কিং প্ল্যান',
        features: ['২৫০টি টেক্সট', '২৫০টি ছবি', '২৫০টি স্টিকার', 'প্রতিটি প্রকারের জন্য ১৫টি গ্রুপ', 'প্রতি গ্রুপের জন্য ১৫টি পিন'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'আজীবন অ্যাক্সেস',
        price: '৳১৬৪৯',
        description: 'প্রফেশনাল প্ল্যান',
        features: ['৫০০টি টেক্সট', '৫০০টি ছবি', '৫০০টি স্টিকার', 'প্রতিটি প্রকারের জন্য ৪০টি গ্রুপ', 'প্রতি গ্রুপের জন্য ৪০টি পিন'],
      },
    ],
  },
  policy: {
    dataSecurity: "ডেটা নিরাপত্তা",
    privacy: "গোপনীয়তা",
    terms: "ব্যবহারের শর্তাবলী",
    payment: "পেমেন্ট ও রিফান্ড",
  },
  help: {
    faqTab: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    docsTab: 'ডকস',
    docsPlaceholder: "ডকুমেন্টেশন আপডেট করা হচ্ছে...",
    contactTab: 'যোগাযোগ', email: 'ইমেইল', problem: 'সমস্যা', problemPlaceholder: 'কী ঘটেছে তা আমাদের জানান…', media: 'সংযুক্তি', addMedia: 'ফাইল যোগ করুন', mediaLimit: 'প্রতি ফাইলে সর্বোচ্চ ২০ MB', removeMedia: 'সরান', send: 'পাঠান', sending: 'পাঠানো হচ্ছে…', mediaTooLarge: 'প্রতিটি সংযুক্তি ২০ MB বা তার কম হতে হবে।', mediaMax: 'আপনি সর্বোচ্চ ৫টি ছবি বা ভিডিও সংযুক্ত করতে পারবেন।', sent: 'ধন্যবাদ — আপনার প্রতিবেদন পাঠানো হয়েছে।', sendFailed: 'প্রতিবেদন পাঠানো যায়নি।',
  }
};

export default bn;
