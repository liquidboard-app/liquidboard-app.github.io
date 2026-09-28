type ListPricingCopy = { title: string; description: string };

const translations: Record<string, ListPricingCopy> = {
  en: {
    title: 'Upgrade to fit your needs.',
    description: 'Enjoy every feature for free and upgrade when you need more. No ads or intrusive pop-ups. Pay once and own it forever.',
  },
  vi: {
    title: 'Nâng cấp theo nhu cầu của bạn.',
    description: 'Trải nghiệm trọn vẹn mọi tính năng miễn phí, nâng cấp theo nhu cầu. Không quảng cáo, không pop-up làm phiền. Thanh toán một lần, sở hữu mãi mãi.',
  },
  ja: {
    title: 'ニーズに合わせてアップグレード。',
    description: 'すべての機能を無料でお楽しみいただき、必要に応じてアップグレードできます。広告や煩わしいポップアップはありません。一度のお支払いで、ずっとご利用いただけます。',
  },
  es: {
    title: 'Mejora según tus necesidades.',
    description: 'Disfruta de todas las funciones gratis y mejora tu plan cuando necesites más. Sin anuncios ni ventanas emergentes molestas. Paga una vez y úsalo para siempre.',
  },
  'zh-CN': {
    title: '按需升级。',
    description: '免费畅享所有功能，并按需升级。没有广告，也没有烦人的弹窗。一次付费，永久拥有。',
  },
  'zh-TW': {
    title: '依照需求升級。',
    description: '免費暢享所有功能，並依需求升級。沒有廣告，也沒有惱人的彈出視窗。一次付費，永久擁有。',
  },
  fr: {
    title: 'Passez à l’offre adaptée à vos besoins.',
    description: 'Profitez pleinement de toutes les fonctionnalités gratuitement et passez à une offre supérieure selon vos besoins. Sans publicité ni fenêtre intempestive. Payez une fois et gardez votre offre à vie.',
  },
  de: {
    title: 'Das passende Upgrade für dich.',
    description: 'Nutze alle Funktionen kostenlos und führe ein Upgrade durch, wenn du mehr brauchst. Keine Werbung und keine störenden Pop-ups. Einmal zahlen und dauerhaft nutzen.',
  },
  ru: {
    title: 'Выберите подходящий уровень.',
    description: 'Пользуйтесь всеми функциями бесплатно и переходите на платный план по мере необходимости. Без рекламы и навязчивых всплывающих окон. Заплатите один раз и пользуйтесь бессрочно.',
  },
  ko: {
    title: '필요에 맞게 업그레이드하세요.',
    description: '모든 기능을 무료로 이용하고 필요에 따라 업그레이드하세요. 광고와 성가신 팝업이 없습니다. 한 번 결제하면 평생 이용할 수 있습니다.',
  },
  hi: {
    title: 'अपनी ज़रूरत के अनुसार अपग्रेड करें।',
    description: 'हर सुविधा का मुफ़्त आनंद लें और ज़रूरत के अनुसार अपग्रेड करें। न विज्ञापन, न परेशान करने वाले पॉप-अप। एक बार भुगतान करें और हमेशा के लिए पाएँ।',
  },
  bn: {
    title: 'আপনার প্রয়োজনমতো আপগ্রেড করুন।',
    description: 'সব ফিচার বিনামূল্যে উপভোগ করুন এবং প্রয়োজন অনুযায়ী আপগ্রেড করুন। কোনো বিজ্ঞাপন বা বিরক্তিকর পপ-আপ নেই। একবার পেমেন্ট করে চিরকাল ব্যবহার করুন।',
  },
  id: {
    title: 'Upgrade sesuai kebutuhan Anda.',
    description: 'Nikmati semua fitur secara gratis dan upgrade sesuai kebutuhan. Tanpa iklan atau pop-up yang mengganggu. Bayar sekali dan miliki selamanya.',
  },
  it: {
    title: 'Scegli l’upgrade adatto a te.',
    description: 'Usa tutte le funzioni gratis e passa a un piano superiore quando ne hai bisogno. Niente pubblicità né pop-up invadenti. Paghi una volta e lo usi per sempre.',
  },
  th: {
    title: 'อัปเกรดให้เหมาะกับความต้องการ',
    description: 'เพลิดเพลินกับทุกฟีเจอร์ได้ฟรี และอัปเกรดตามความต้องการ ไม่มีโฆษณาหรือป๊อปอัปที่รบกวน จ่ายครั้งเดียว ใช้ได้ตลอดไป',
  },
  tl: {
    title: 'Mag-upgrade ayon sa kailangan mo.',
    description: 'Sulitin nang libre ang lahat ng feature at mag-upgrade ayon sa kailangan mo. Walang ads o nakakainis na pop-up. Isang beses magbayad at gamitin ito habambuhay.',
  },
  pl: {
    title: 'Wybierz plan dopasowany do siebie.',
    description: 'Korzystaj bezpłatnie ze wszystkich funkcji i ulepsz plan, gdy tego potrzebujesz. Bez reklam i natrętnych wyskakujących okien. Płać raz i korzystaj bez końca.',
  },
  tr: {
    title: 'İhtiyacına uygun plana geç.',
    description: 'Tüm özelliklerin keyfini ücretsiz çıkar ve ihtiyacına göre yükselt. Reklam ve rahatsız edici açılır pencere yok. Bir kez öde, sonsuza dek kullan.',
  },
  'pt-BR': {
    title: 'Faça um upgrade para atender às suas necessidades.',
    description: 'Aproveite todos os recursos gratuitamente e faça upgrade quando precisar de mais. Sem anúncios nem pop-ups invasivos. Pague uma vez e tenha para sempre.',
  },
};

export const getListPricingCopy = (lang: string) => translations[lang] ?? translations.en;
