type PlanNotes = readonly [free: string, plus: string, pro: string, max: string];

const translations: Record<string, PlanNotes> = {
  en: [
    '*A plan for trying LiquidBoard. Includes all other features in the app and keyboard.',
    '*A plan for everyday use. Upgrade to Pro or Max later at the same cost.',
    '*A plan for multitasking. Upgrade to Max later at the same cost.',
    '*A plan for professionals. Maximize your work and get premium features in the future.',
  ],
  vi: [
    '*Gói cho người dùng trải nghiệm. Đi kèm tất cả tính năng khác trong ứng dụng và bàn phím.',
    '*Gói cho người dùng cơ bản. Có thể nâng lên gói Pro, Max sau đó với cùng chi phí.',
    '*Gói cho người dùng đa tác vụ. Có thể nâng lên gói Max sau đó với cùng chi phí.',
    '*Gói cho người dùng chuyên nghiệp. Tối đa hoá khả năng làm việc và các tính năng cao cấp trong tương lai.',
  ],
  ja: [
    '*LiquidBoardを試してみたい方のためのプランです。アプリとキーボードのその他すべての機能も利用できます。',
    '*基本的な使い方に適したプランです。同じ料金で後からProまたはMaxにアップグレードできます。',
    '*マルチタスクに適したプランです。同じ料金で後からMaxにアップグレードできます。',
    '*プロフェッショナル向けのプランです。作業効率を最大化し、今後追加されるプレミアム機能も利用できます。',
  ],
  es: [
    '*Un plan para probar LiquidBoard. Incluye las demás funciones de la app y el teclado.',
    '*Un plan para el uso diario. Más adelante puedes pasar a Pro o Max por el mismo coste.',
    '*Un plan para la multitarea. Más adelante puedes pasar a Max por el mismo coste.',
    '*Un plan para profesionales. Maximiza tu productividad y disfruta de futuras funciones prémium.',
  ],
  'zh-TW': [
    '*適合體驗 LiquidBoard 的方案，包含 App 和鍵盤中的其他所有功能。',
    '*適合基本使用的方案。之後可用相同費用升級至 Pro 或 Max。',
    '*適合多工處理的方案。之後可用相同費用升級至 Max。',
    '*適合專業人士的方案。充分提升工作效率，並享有未來推出的進階功能。',
  ],
  'zh-CN': [
    '*适合体验 LiquidBoard 的方案，包含应用和键盘中的其他所有功能。',
    '*适合日常基础使用的方案。之后可用相同费用升级到 Pro 或 Max。',
    '*适合多任务处理的方案。之后可用相同费用升级到 Max。',
    '*适合专业人士的方案。最大化工作效率，并享受未来推出的高级功能。',
  ],
  'pt-BR': [
    '*Um plano para conhecer o LiquidBoard, com todos os outros recursos do app e do teclado.',
    '*Um plano para uso básico. Depois, você pode fazer upgrade para Pro ou Max pelo mesmo custo.',
    '*Um plano para multitarefas. Depois, você pode fazer upgrade para Max pelo mesmo custo.',
    '*Um plano para profissionais. Maximize sua produtividade e aproveite recursos premium futuros.',
  ],
  fr: [
    '*Un forfait pour découvrir LiquidBoard, avec toutes les autres fonctionnalités de l’application et du clavier.',
    '*Un forfait pour un usage courant. Passez ensuite à Pro ou Max au même coût.',
    '*Un forfait pour le multitâche. Passez ensuite à Max au même coût.',
    '*Un forfait pour les professionnels. Optimisez votre travail et profitez des futures fonctionnalités premium.',
  ],
  de: [
    '*Ein Plan zum Ausprobieren von LiquidBoard, mit allen weiteren Funktionen in App und Tastatur.',
    '*Ein Plan für die grundlegende Nutzung. Später kannst du zum gleichen Preis auf Pro oder Max wechseln.',
    '*Ein Plan für Multitasking. Später kannst du zum gleichen Preis auf Max wechseln.',
    '*Ein Plan für Profis. Optimiere deine Arbeit und profitiere von zukünftigen Premiumfunktionen.',
  ],
  ru: [
    '*План для знакомства с LiquidBoard. Включает все остальные функции приложения и клавиатуры.',
    '*План для базового использования. Позже можно перейти на Pro или Max за ту же доплату.',
    '*План для многозадачности. Позже можно перейти на Max за ту же доплату.',
    '*План для профессионалов. Работайте эффективнее и получайте доступ к будущим премиум-функциям.',
  ],
  ko: [
    '*LiquidBoard를 체험하기 위한 플랜입니다. 앱과 키보드의 다른 모든 기능도 포함됩니다.',
    '*기본 사용자에게 적합한 플랜입니다. 나중에 동일한 비용으로 Pro 또는 Max로 업그레이드할 수 있습니다.',
    '*멀티태스킹 사용자에게 적합한 플랜입니다. 나중에 동일한 비용으로 Max로 업그레이드할 수 있습니다.',
    '*전문가를 위한 플랜입니다. 업무 효율을 극대화하고 앞으로 추가될 프리미엄 기능을 이용하세요.',
  ],
  hi: [
    '*LiquidBoard आज़माने के लिए प्लान। इसमें ऐप और कीबोर्ड की बाकी सभी सुविधाएँ शामिल हैं।',
    '*बुनियादी उपयोग के लिए प्लान। बाद में इसी लागत पर Pro या Max में अपग्रेड करें।',
    '*एक साथ कई काम करने के लिए प्लान। बाद में इसी लागत पर Max में अपग्रेड करें।',
    '*पेशेवर उपयोगकर्ताओं के लिए प्लान। काम करने की क्षमता बढ़ाएँ और भविष्य की प्रीमियम सुविधाएँ पाएँ।',
  ],
  bn: [
    '*LiquidBoard ব্যবহার করে দেখার পরিকল্পনা। অ্যাপ ও কিবোর্ডের অন্য সব ফিচারও এতে আছে।',
    '*সাধারণ ব্যবহারের পরিকল্পনা। পরে একই খরচে Pro বা Max-এ আপগ্রেড করতে পারবেন।',
    '*একসঙ্গে একাধিক কাজের জন্য পরিকল্পনা। পরে একই খরচে Max-এ আপগ্রেড করতে পারবেন।',
    '*পেশাদারদের জন্য পরিকল্পনা। কাজের সক্ষমতা বাড়ান এবং ভবিষ্যতের প্রিমিয়াম ফিচার উপভোগ করুন।',
  ],
  id: [
    '*Paket untuk mencoba LiquidBoard, lengkap dengan semua fitur lain di aplikasi dan keyboard.',
    '*Paket untuk penggunaan dasar. Nantinya, upgrade ke Pro atau Max dengan biaya yang sama.',
    '*Paket untuk multitasking. Nantinya, upgrade ke Max dengan biaya yang sama.',
    '*Paket untuk profesional. Maksimalkan produktivitas dan nikmati fitur premium di masa mendatang.',
  ],
  it: [
    '*Un piano per provare LiquidBoard, con tutte le altre funzioni dell’app e della tastiera.',
    '*Un piano per l’uso di base. In seguito puoi passare a Pro o Max allo stesso costo.',
    '*Un piano per il multitasking. In seguito puoi passare a Max allo stesso costo.',
    '*Un piano per professionisti. Massimizza il tuo lavoro e approfitta delle future funzioni premium.',
  ],
  th: [
    '*แพ็กเกจสำหรับทดลองใช้ LiquidBoard พร้อมฟีเจอร์อื่นทั้งหมดในแอปและคีย์บอร์ด',
    '*แพ็กเกจสำหรับการใช้งานพื้นฐาน อัปเกรดเป็น Pro หรือ Max ภายหลังได้ในราคาเท่าเดิม',
    '*แพ็กเกจสำหรับการทำงานหลายอย่าง อัปเกรดเป็น Max ภายหลังได้ในราคาเท่าเดิม',
    '*แพ็กเกจสำหรับมืออาชีพ เพิ่มประสิทธิภาพการทำงานและใช้ฟีเจอร์พรีเมียมที่จะเพิ่มในอนาคต',
  ],
  tl: [
    '*Planong subukan ang LiquidBoard, kasama ang lahat ng iba pang feature sa app at keyboard.',
    '*Planong para sa pangunahing paggamit. Mag-upgrade sa Pro o Max sa parehong halaga sa susunod.',
    '*Planong para sa multitasking. Mag-upgrade sa Max sa parehong halaga sa susunod.',
    '*Planong para sa mga propesyonal. Sulitin ang trabaho at mga premium feature na darating pa.',
  ],
  pl: [
    '*Plan do wypróbowania LiquidBoard, ze wszystkimi pozostałymi funkcjami aplikacji i klawiatury.',
    '*Plan do podstawowego użytku. Później możesz przejść na Pro lub Max za tę samą dopłatą.',
    '*Plan do wielozadaniowości. Później możesz przejść na Max za tę samą dopłatą.',
    '*Plan dla profesjonalistów. Zwiększ efektywność pracy i korzystaj z przyszłych funkcji premium.',
  ],
  tr: [
    '*LiquidBoard’u denemek için plan. Uygulama ve klavyedeki diğer tüm özellikler dahildir.',
    '*Temel kullanım için plan. Daha sonra aynı ücretle Pro veya Max’e yükseltebilirsiniz.',
    '*Çoklu görev için plan. Daha sonra aynı ücretle Max’e yükseltebilirsiniz.',
    '*Profesyoneller için plan. Çalışma verimliliğinizi artırın ve gelecekteki premium özelliklerden yararlanın.',
  ],
};

const planIndexes: Record<string, number> = { Free: 0, Plus: 1, Pro: 2, Max: 3 };

export const getListPricingPlanNote = (lang: string, planName: string) => {
  const notes = translations[lang] ?? translations.en;
  return notes[planIndexes[planName] ?? 0];
};
