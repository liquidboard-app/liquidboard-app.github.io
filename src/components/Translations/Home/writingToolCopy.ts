// Home page: WritingTool section copy.
import { supportedLanguages } from '@/components/Translations/Global/config';

type SupportedLanguage = (typeof supportedLanguages)[number]['code'];

type WritingFeature = {
  title: string;
  description: string;
};

type WritingToolCopy = {
  heading: [string, string];
  description: string;
  availability: string;
  features: [WritingFeature, WritingFeature, WritingFeature];
};

const copy = {
  en: {
    heading: ['Writing Tools.', 'Write with Apple Intelligence.'],
    description: 'Integrated with ChatGPT Integration Privacy. Create, refine, and generate text quickly and effortlessly on any topic, right when you need it.',
    availability: 'Available starting with iOS 27',
    features: [
      { title: 'Write with ChatGPT', description: 'Describe the changes you want in a prompt to create your text.' },
      { title: 'Edit to match your style', description: 'Adjust the tone to be concise, professional, or friendly. Refine grammar and context with precision.' },
      { title: 'Summarize and organize', description: 'Condense your text into key ideas and organize important points into a list.' },
    ],
  },
  vi: {
    heading: ['Công Cụ Viết.', 'Soạn thảo với Apple Intelligence.'],
    description: 'Tích hợp với ChatGPT Integration Privacy. Tạo, tinh chỉnh và soạn thảo văn bản nhanh chóng, dễ dàng về mọi chủ đề, ngay khi bạn cần.',
    availability: 'Khả dụng từ iOS 27',
    features: [
      { title: 'Soạn thảo với ChatGPT', description: 'Mô tả thay đổi bạn muốn bằng prompt trực tiếp để nhận nội dung.' },
      { title: 'Sửa theo phong cách', description: 'Điều chỉnh văn phong theo cách bạn muốn: ngắn gọn, chuyên nghiệp hoặc thân thiện. Chỉnh sửa ngữ pháp và ngữ cảnh một cách chính xác.' },
      { title: 'Tóm tắt và hệ thống', description: 'Tinh gọn lại nội dung với những ý chính, hệ thống các yếu tố quan trọng thành danh sách.' },
    ],
  },
  ja: {
    heading: ['文章作成ツール。', 'Apple Intelligenceで文章を作成。'],
    description: 'ChatGPT Integration Privacyに対応。必要なときに、どんなテーマの文章もすばやく簡単に作成・推敲・生成できます。',
    availability: 'iOS 27から利用可能',
    features: [
      { title: 'ChatGPTで文章を作成', description: '希望する変更をプロンプトで直接伝えて、文章を作成できます。' },
      { title: 'スタイルに合わせて編集', description: '簡潔、プロフェッショナル、親しみやすいなど、文体を調整。文法や文脈も正確に整えます。' },
      { title: '要約して整理', description: '文章を要点に絞り、重要な内容をリストにまとめます。' },
    ],
  },
  es: {
    heading: ['Herramientas De Escritura.', 'Escribe con Apple Intelligence.'],
    description: 'Integrado con ChatGPT Integration Privacy. Crea, perfecciona y genera textos sobre cualquier tema de forma rápida y sencilla, justo cuando los necesites.',
    availability: 'Disponible a partir de iOS 27',
    features: [
      { title: 'Escribe con ChatGPT', description: 'Describe los cambios que quieres directamente en una indicación para crear tu texto.' },
      { title: 'Edita a tu estilo', description: 'Ajusta el tono para que sea conciso, profesional o cercano. Mejora la gramática y el contexto con precisión.' },
      { title: 'Resume y organiza', description: 'Reduce el texto a las ideas principales y organiza los puntos importantes en una lista.' },
    ],
  },
  'zh-TW': {
    heading: ['寫作工具。', '運用 Apple Intelligence 撰寫內容。'],
    description: '整合 ChatGPT Integration Privacy。需要時，隨時快速輕鬆地撰寫、潤飾及生成任何主題的文字。',
    availability: '自 iOS 27 起提供',
    features: [
      { title: '透過 ChatGPT 撰寫', description: '直接在提示詞中描述想要的修改，即可產生文字內容。' },
      { title: '依照風格編輯', description: '將語氣調整為簡潔、專業或親切，並精確修正文法與語意。' },
      { title: '摘要與整理', description: '將內容濃縮為重點，並把重要資訊整理成清單。' },
    ],
  },
  'zh-CN': {
    heading: ['写作工具。', '借助 Apple Intelligence 撰写内容。'],
    description: '集成 ChatGPT Integration Privacy。需要时，随时快速轻松地撰写、润色和生成任何主题的文字。',
    availability: '自 iOS 27 起提供',
    features: [
      { title: '使用 ChatGPT 撰写', description: '在提示词中直接描述想要的修改，即可生成文字内容。' },
      { title: '按你的风格编辑', description: '将语气调整为简洁、专业或友好，并准确修改语法和语境。' },
      { title: '总结与整理', description: '将内容精简为关键观点，并把重要信息整理成列表。' },
    ],
  },
  'pt-BR': {
    heading: ['Ferramentas De Escrita.', 'Escreva com Apple Intelligence.'],
    description: 'Integrado ao ChatGPT Integration Privacy. Crie, refine e gere textos sobre qualquer assunto com rapidez e facilidade, sempre que precisar.',
    availability: 'Disponível a partir do iOS 27',
    features: [
      { title: 'Escreva com o ChatGPT', description: 'Descreva as mudanças desejadas em um prompt para criar seu texto.' },
      { title: 'Edite no seu estilo', description: 'Ajuste o tom para ficar conciso, profissional ou amigável. Refine a gramática e o contexto com precisão.' },
      { title: 'Resuma e organize', description: 'Reduza o texto às ideias principais e organize os pontos importantes em uma lista.' },
    ],
  },
  fr: {
    heading: ['Outils D’Écriture.', 'Rédigez avec Apple Intelligence.'],
    description: 'Intégré à ChatGPT Integration Privacy. Créez, peaufinez et générez rapidement et facilement des textes sur tous les sujets, au moment où vous en avez besoin.',
    availability: 'Disponible dès iOS 27',
    features: [
      { title: 'Rédigez avec ChatGPT', description: 'Décrivez directement les modifications souhaitées dans une invite pour créer votre texte.' },
      { title: 'Adaptez le style', description: 'Choisissez un ton concis, professionnel ou amical. Corrigez la grammaire et le contexte avec précision.' },
      { title: 'Résumez et organisez', description: 'Réduisez le texte aux idées essentielles et organisez les points importants dans une liste.' },
    ],
  },
  de: {
    heading: ['Schreibwerkzeuge.', 'Schreibe mit Apple Intelligence.'],
    description: 'Integriert mit ChatGPT Integration Privacy. Erstelle, überarbeite und generiere schnell und mühelos Texte zu jedem Thema – genau dann, wenn du sie brauchst.',
    availability: 'Ab iOS 27 verfügbar',
    features: [
      { title: 'Mit ChatGPT schreiben', description: 'Beschreibe die gewünschten Änderungen direkt in einem Prompt, um deinen Text zu erstellen.' },
      { title: 'An deinen Stil anpassen', description: 'Wähle einen knappen, professionellen oder freundlichen Ton. Optimiere Grammatik und Kontext präzise.' },
      { title: 'Zusammenfassen und ordnen', description: 'Kürze den Text auf die Kerngedanken und fasse wichtige Punkte in einer Liste zusammen.' },
    ],
  },
  ru: {
    heading: ['Инструменты письма.', 'Пишите с Apple Intelligence.'],
    description: 'Интегрировано с ChatGPT Integration Privacy. Создавайте, дорабатывайте и генерируйте тексты на любую тему быстро и без усилий, когда они вам нужны.',
    availability: 'Доступно начиная с iOS 27',
    features: [
      { title: 'Пишите с ChatGPT', description: 'Опишите нужные изменения прямо в запросе, чтобы создать текст.' },
      { title: 'Подстройте текст под свой стиль', description: 'Сделайте тон кратким, профессиональным или дружелюбным. Точно исправьте грамматику и смысл.' },
      { title: 'Сокращайте и упорядочивайте', description: 'Выделяйте главные мысли и собирайте важные пункты в список.' },
    ],
  },
  ko: {
    heading: ['글쓰기 도구.', 'Apple Intelligence로 작성하세요.'],
    description: 'ChatGPT Integration Privacy와 통합됩니다. 필요할 때 어떤 주제의 글이든 빠르고 손쉽게 작성하고 다듬고 생성하세요.',
    availability: 'iOS 27부터 사용 가능',
    features: [
      { title: 'ChatGPT로 작성', description: '원하는 변경 사항을 프롬프트에 직접 설명하여 글을 작성하세요.' },
      { title: '원하는 문체로 편집', description: '간결하고 전문적이거나 친근한 어조로 조정하고, 문법과 문맥을 정확하게 다듬으세요.' },
      { title: '요약하고 정리', description: '핵심 내용을 간추리고 중요한 항목을 목록으로 정리하세요.' },
    ],
  },
  hi: {
    heading: ['लेखन टूल।', 'Apple Intelligence से लिखें।'],
    description: 'ChatGPT Integration Privacy के साथ एकीकृत। ज़रूरत पड़ने पर किसी भी विषय पर टेक्स्ट जल्दी और आसानी से लिखें, निखारें और तैयार करें।',
    availability: 'iOS 27 से उपलब्ध',
    features: [
      { title: 'ChatGPT से लिखें', description: 'अपनी पसंद के बदलाव सीधे प्रॉम्प्ट में बताएँ और टेक्स्ट तैयार करें।' },
      { title: 'अपनी शैली में संपादित करें', description: 'लहजे को संक्षिप्त, पेशेवर या मित्रवत बनाएँ। व्याकरण और संदर्भ को सटीकता से सुधारें।' },
      { title: 'सारांश और व्यवस्था', description: 'टेक्स्ट को मुख्य विचारों तक समेटें और ज़रूरी बिंदुओं को सूची में रखें।' },
    ],
  },
  bn: {
    heading: ['লেখার টুল।', 'Apple Intelligence দিয়ে লিখুন।'],
    description: 'ChatGPT Integration Privacy-এর সঙ্গে সমন্বিত। যখনই প্রয়োজন, যেকোনো বিষয়ে দ্রুত ও সহজে লেখা তৈরি, পরিমার্জন ও জেনারেট করুন।',
    availability: 'iOS 27 থেকে উপলব্ধ',
    features: [
      { title: 'ChatGPT দিয়ে লিখুন', description: 'কী পরিবর্তন চান তা সরাসরি প্রম্পটে লিখে নতুন লেখা তৈরি করুন।' },
      { title: 'নিজের ধরনে সম্পাদনা করুন', description: 'লেখার ভঙ্গি সংক্ষিপ্ত, পেশাদার বা বন্ধুত্বপূর্ণ করুন। ব্যাকরণ ও প্রসঙ্গ নির্ভুলভাবে ঠিক করুন।' },
      { title: 'সারসংক্ষেপ ও সাজানো', description: 'লেখা থেকে মূল ভাবগুলো তুলে আনুন এবং গুরুত্বপূর্ণ বিষয় তালিকায় সাজান।' },
    ],
  },
  id: {
    heading: ['Alat Menulis.', 'Menulis dengan Apple Intelligence.'],
    description: 'Terintegrasi dengan ChatGPT Integration Privacy. Buat, sempurnakan, dan hasilkan teks tentang topik apa pun dengan cepat dan mudah, kapan pun Anda membutuhkannya.',
    availability: 'Tersedia mulai iOS 27',
    features: [
      { title: 'Menulis dengan ChatGPT', description: 'Jelaskan perubahan yang Anda inginkan langsung dalam prompt untuk membuat teks.' },
      { title: 'Sunting sesuai gaya Anda', description: 'Atur nada agar ringkas, profesional, atau ramah. Perbaiki tata bahasa dan konteks dengan tepat.' },
      { title: 'Ringkas dan susun', description: 'Padatkan teks menjadi gagasan utama dan susun hal penting dalam daftar.' },
    ],
  },
  it: {
    heading: ['Strumenti Di Scrittura.', 'Scrivi con Apple Intelligence.'],
    description: 'Integrato con ChatGPT Integration Privacy. Crea, perfeziona e genera testi su qualsiasi argomento in modo rapido e semplice, proprio quando ne hai bisogno.',
    availability: 'Disponibile a partire da iOS 27',
    features: [
      { title: 'Scrivi con ChatGPT', description: 'Descrivi le modifiche desiderate direttamente in un prompt per creare il tuo testo.' },
      { title: 'Modifica secondo il tuo stile', description: 'Scegli un tono conciso, professionale o amichevole. Perfeziona grammatica e contesto con precisione.' },
      { title: 'Riassumi e organizza', description: 'Riduci il testo alle idee principali e organizza i punti importanti in un elenco.' },
    ],
  },
  th: {
    heading: ['เครื่องมือช่วยเขียน', 'เขียนด้วย Apple Intelligence'],
    description: 'ผสานการทำงานกับ ChatGPT Integration Privacy สร้าง ปรับแต่ง และเขียนข้อความในทุกหัวข้อได้อย่างรวดเร็วและง่ายดายทุกเมื่อที่ต้องการ',
    availability: 'ใช้งานได้ตั้งแต่ iOS 27',
    features: [
      { title: 'เขียนด้วย ChatGPT', description: 'บอกการเปลี่ยนแปลงที่ต้องการในพรอมป์ต์โดยตรงเพื่อสร้างข้อความ' },
      { title: 'แก้ไขให้ตรงสไตล์', description: 'ปรับน้ำเสียงให้กระชับ เป็นมืออาชีพ หรือเป็นกันเอง พร้อมแก้ไวยากรณ์และบริบทอย่างแม่นยำ' },
      { title: 'สรุปและจัดระเบียบ', description: 'ย่อข้อความให้เหลือใจความสำคัญ และจัดประเด็นสำคัญเป็นรายการ' },
    ],
  },
  tl: {
    heading: ['Mga Tool Sa Pagsusulat.', 'Sumulat gamit ang Apple Intelligence.'],
    description: 'May integrasyon sa ChatGPT Integration Privacy. Gumawa, pinuhin, at bumuo ng teksto sa anumang paksa nang mabilis at walang hirap, sa oras na kailangan mo ito.',
    availability: 'Magagamit simula sa iOS 27',
    features: [
      { title: 'Sumulat gamit ang ChatGPT', description: 'Ilarawan ang mga pagbabagong gusto mo sa prompt upang makagawa ng teksto.' },
      { title: 'I-edit ayon sa iyong estilo', description: 'Gawing maikli, propesyonal, o palakaibigan ang tono. Ayusin nang tumpak ang gramatika at konteksto.' },
      { title: 'Ibuod at ayusin', description: 'Paikliin ang teksto sa mahahalagang ideya at ilagay ang mahahalagang punto sa isang listahan.' },
    ],
  },
  pl: {
    heading: ['Narzędzia Do Pisania.', 'Pisz z Apple Intelligence.'],
    description: 'Zintegrowane z ChatGPT Integration Privacy. Twórz, dopracowuj i generuj teksty na dowolny temat szybko i bez wysiłku, zawsze wtedy, gdy ich potrzebujesz.',
    availability: 'Dostępne od iOS 27',
    features: [
      { title: 'Pisz z ChatGPT', description: 'Opisz oczekiwane zmiany bezpośrednio w poleceniu, aby utworzyć tekst.' },
      { title: 'Edytuj w swoim stylu', description: 'Nadaj tekstowi zwięzły, profesjonalny lub przyjazny ton. Precyzyjnie popraw gramatykę i kontekst.' },
      { title: 'Podsumuj i uporządkuj', description: 'Skróć tekst do głównych myśli i zbierz ważne punkty w listę.' },
    ],
  },
  tr: {
    heading: ['Yazma Araçları.', 'Apple Intelligence ile yazın.'],
    description: 'ChatGPT Integration Privacy ile entegre. İhtiyaç duyduğunuz anda her konuda hızlı ve zahmetsizce metin oluşturun, düzenleyin ve üretin.',
    availability: "iOS 27'den itibaren kullanılabilir",
    features: [
      { title: 'ChatGPT ile yazın', description: 'İstediğiniz değişiklikleri doğrudan bir istemde anlatarak metninizi oluşturun.' },
      { title: 'Tarzınıza göre düzenleyin', description: 'Üslubu kısa, profesyonel veya samimi olacak şekilde ayarlayın. Dil bilgisi ve bağlamı doğru biçimde iyileştirin.' },
      { title: 'Özetleyin ve düzenleyin', description: 'Metni ana fikirlere indirgeyin ve önemli noktaları liste hâlinde düzenleyin.' },
    ],
  },
} satisfies Record<SupportedLanguage, WritingToolCopy>;

export const getWritingToolCopy = (lang: string): WritingToolCopy => copy[lang as SupportedLanguage] ?? copy.en;
