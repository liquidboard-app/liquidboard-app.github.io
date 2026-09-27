import styled from 'styled-components';

// Home page: line break used by the localized ListFeatures intro.
const ListFeaturesLineBreak = styled.br``;

// Home page: ListFeatures content and its accessible control labels.
const features = {
  en: {
    introDescription: <>Categorize content from input to display.<ListFeaturesLineBreak />Multiple ways to save, simple to copy and share.</>,
    heading: 'Customize from the app',
    description: 'Copy from outside or create content in the app with multiple input methods.',
    secondHeading: 'Ready on the keyboard',
    secondDescription: 'Open the keyboard from any text input. Paste and send faster.',
  },
  vi: {
    introDescription: 'Luôn sẵn sàng dán những nội dung bạn thường dùng, ở bất cứ đâu.',
    heading: 'Tuỳ chỉnh từ ứng dụng',
    description: 'Sao chép từ bên ngoài hoặc soạn thảo với nhiều phương thức nhập trong ứng dụng.',
    secondHeading: 'Sẵn sàng trên bàn phím',
    secondDescription: 'Mở bàn phím từ mọi ứng dụng nhập liệu. Dán và gửi đến nhanh chóng hơn.',
  },
  ja: {
    introDescription: <>入力から表示まで、コンテンツを整理。<ListFeaturesLineBreak />さまざまな方法で保存し、簡単にコピーして共有できます。</>,
    heading: 'アプリからカスタマイズ',
    description: '外部からコピーすることも、アプリ内でさまざまな入力方法を使って作成することもできます。',
    secondHeading: 'キーボードですぐ使える',
    secondDescription: '入力できるアプリならどこでもキーボードを開けます。貼り付けて、すばやく送信できます。',
  },
  es: {
    introDescription: <>Organiza el contenido desde que lo introduces hasta que lo muestras.<ListFeaturesLineBreak />Guárdalo de distintas formas y cópialo o compártelo fácilmente.</>,
    heading: 'Personaliza desde la app',
    description: 'Copia contenido desde otras apps o créalo dentro de la app con distintos métodos de entrada.',
    secondHeading: 'Listo en el teclado',
    secondDescription: 'Abre el teclado en cualquier campo de texto. Pega y envía más rápido.',
  },
  'zh-TW': {
    introDescription: <>從輸入到呈現，輕鬆整理內容。<ListFeaturesLineBreak />多種儲存方式，複製與分享都簡單。</>,
    heading: '在 App 中自訂',
    description: '可從外部複製內容，也能在 App 中透過多種輸入方式編輯。',
    secondHeading: '在鍵盤上隨時可用',
    secondDescription: '在任何輸入欄位開啟鍵盤，快速貼上並傳送。',
  },
  'zh-CN': {
    introDescription: <>从输入到展示，轻松整理内容。<ListFeaturesLineBreak />多种保存方式，复制和分享都简单。</>,
    heading: '在应用中自定义',
    description: '可从外部复制内容，也能在应用中通过多种输入方式编辑。',
    secondHeading: '键盘中随时可用',
    secondDescription: '在任何输入框中打开键盘，快速粘贴并发送。',
  },
  'pt-BR': {
    introDescription: <>Organize o conteúdo da entrada até a exibição.<ListFeaturesLineBreak />Salve de várias formas e copie ou compartilhe com facilidade.</>,
    heading: 'Personalize pelo app',
    description: 'Copie de outros apps ou crie conteúdo no app usando diferentes formas de entrada.',
    secondHeading: 'Pronto no teclado',
    secondDescription: 'Abra o teclado em qualquer campo de texto. Cole e envie mais rápido.',
  },
  fr: {
    introDescription: <>Organisez le contenu, de la saisie à l’affichage.<ListFeaturesLineBreak />Enregistrez-le de plusieurs façons, puis copiez-le et partagez-le facilement.</>,
    heading: 'Personnalisez depuis l’app',
    description: 'Copiez depuis d’autres apps ou créez du contenu dans l’app avec plusieurs modes de saisie.',
    secondHeading: 'Prêt sur le clavier',
    secondDescription: 'Ouvrez le clavier dans n’importe quel champ de saisie. Collez et envoyez plus vite.',
  },
  de: {
    introDescription: <>Inhalte vom Erfassen bis zur Anzeige organisieren.<ListFeaturesLineBreak />Auf verschiedene Arten speichern, einfach kopieren und teilen.</>,
    heading: 'In der App anpassen',
    description: 'Kopiere Inhalte aus anderen Apps oder erstelle sie mit verschiedenen Eingabemethoden direkt in der App.',
    secondHeading: 'Auf der Tastatur bereit',
    secondDescription: 'Öffne die Tastatur in jedem Eingabefeld. Füge Inhalte ein und sende sie schneller.',
  },
  ru: {
    introDescription: <>Упорядочивайте контент от ввода до отображения.<ListFeaturesLineBreak />Сохраняйте разными способами, копируйте и делитесь легко.</>,
    heading: 'Настройте в приложении',
    description: 'Копируйте из других приложений или создавайте контент в приложении разными способами ввода.',
    secondHeading: 'Готово на клавиатуре',
    secondDescription: 'Открывайте клавиатуру в любом поле ввода. Вставляйте и отправляйте быстрее.',
  },
  ko: {
    introDescription: <>입력부터 표시까지 콘텐츠를 정리하세요.<ListFeaturesLineBreak />다양한 방법으로 저장하고 간편하게 복사하고 공유하세요.</>,
    heading: '앱에서 맞춤 설정',
    description: '다른 앱에서 복사하거나 앱에서 다양한 입력 방식으로 콘텐츠를 작성할 수 있습니다.',
    secondHeading: '키보드에서 바로 사용',
    secondDescription: '입력할 수 있는 모든 앱에서 키보드를 여세요. 더 빠르게 붙여넣고 보내세요.',
  },
  hi: {
    introDescription: <>इनपुट से डिस्प्ले तक अपनी सामग्री व्यवस्थित करें।<ListFeaturesLineBreak />अलग-अलग तरीकों से सेव करें और आसानी से कॉपी व शेयर करें।</>,
    heading: 'ऐप से कस्टमाइज़ करें',
    description: 'बाहरी ऐप से कॉपी करें या ऐप में कई इनपुट तरीकों से सामग्री तैयार करें।',
    secondHeading: 'कीबोर्ड पर तैयार',
    secondDescription: 'किसी भी इनपुट फ़ील्ड से कीबोर्ड खोलें। तेज़ी से पेस्ट करें और भेजें।',
  },
  bn: {
    introDescription: <>ইনপুট থেকে প্রদর্শন পর্যন্ত কনটেন্ট সাজান।<ListFeaturesLineBreak />বিভিন্ন উপায়ে সংরক্ষণ করুন, সহজে কপি ও শেয়ার করুন।</>,
    heading: 'অ্যাপ থেকে কাস্টমাইজ করুন',
    description: 'বাইরের অ্যাপ থেকে কপি করুন, অথবা অ্যাপের বিভিন্ন ইনপুট পদ্ধতিতে কনটেন্ট তৈরি করুন।',
    secondHeading: 'কিবোর্ডে প্রস্তুত',
    secondDescription: 'যেকোনো ইনপুট ফিল্ড থেকে কিবোর্ড খুলুন। দ্রুত পেস্ট করে পাঠান।',
  },
  id: {
    introDescription: <>Atur konten dari proses input hingga tampilannya.<ListFeaturesLineBreak />Simpan dengan berbagai cara, lalu salin dan bagikan dengan mudah.</>,
    heading: 'Sesuaikan dari aplikasi',
    description: 'Salin dari aplikasi lain atau buat konten di aplikasi dengan berbagai metode input.',
    secondHeading: 'Siap di keyboard',
    secondDescription: 'Buka keyboard dari kolom input mana pun. Tempel dan kirim lebih cepat.',
  },
  it: {
    introDescription: <>Organizza i contenuti dall’inserimento alla visualizzazione.<ListFeaturesLineBreak />Salvali in vari modi, poi copiali e condividili facilmente.</>,
    heading: 'Personalizza dall’app',
    description: 'Copia da altre app o crea contenuti nell’app usando diversi metodi di inserimento.',
    secondHeading: 'Pronto sulla tastiera',
    secondDescription: 'Apri la tastiera in qualsiasi campo di testo. Incolla e invia più rapidamente.',
  },
  th: {
    introDescription: <>จัดระเบียบเนื้อหาตั้งแต่ป้อนข้อมูลจนถึงแสดงผล<ListFeaturesLineBreak />บันทึกได้หลายวิธี คัดลอกและแชร์ได้ง่าย</>,
    heading: 'ปรับแต่งจากแอป',
    description: 'คัดลอกจากแอปอื่น หรือสร้างเนื้อหาในแอปด้วยวิธีป้อนข้อมูลที่หลากหลาย',
    secondHeading: 'พร้อมใช้บนคีย์บอร์ด',
    secondDescription: 'เปิดคีย์บอร์ดได้จากทุกช่องป้อนข้อความ วางและส่งได้รวดเร็วยิ่งขึ้น',
  },
  tl: {
    introDescription: <>Ayusin ang content mula pag-input hanggang pagpapakita.<ListFeaturesLineBreak />I-save sa iba’t ibang paraan, at madaling kopyahin at ibahagi.</>,
    heading: 'I-customize mula sa app',
    description: 'Kopyahin mula sa ibang app o gumawa ng content sa app gamit ang iba’t ibang paraan ng pag-input.',
    secondHeading: 'Handa sa keyboard',
    secondDescription: 'Buksan ang keyboard sa anumang input field. Mag-paste at magpadala nang mas mabilis.',
  },
  pl: {
    introDescription: <>Porządkuj treści od wprowadzania po wyświetlanie.<ListFeaturesLineBreak />Zapisuj na różne sposoby, łatwo kopiuj i udostępniaj.</>,
    heading: 'Dostosuj w aplikacji',
    description: 'Kopiuj z innych aplikacji lub twórz treści w aplikacji na różne sposoby.',
    secondHeading: 'Gotowe na klawiaturze',
    secondDescription: 'Otwórz klawiaturę w dowolnym polu tekstowym. Wklejaj i wysyłaj szybciej.',
  },
  tr: {
    introDescription: <>İçeriği girişten görüntülemeye kadar düzenleyin.<ListFeaturesLineBreak />Farklı şekillerde kaydedin, kolayca kopyalayıp paylaşın.</>,
    heading: 'Uygulamadan özelleştirin',
    description: 'Diğer uygulamalardan kopyalayın veya uygulamada farklı giriş yöntemleriyle içerik oluşturun.',
    secondHeading: 'Klavyede kullanıma hazır',
    secondDescription: 'Klavyeyi herhangi bir metin alanında açın. Daha hızlı yapıştırıp gönderin.',
  },
};

const introTitles: Record<string, [string, string]> = {
  en: ['One Keyboard.', 'Five content types.'],
  vi: ['Một bàn phím.', 'Năm kiểu nội dung.'],
  ja: ['ひとつのキーボード。', '5種類のコンテンツ。'],
  es: ['Un teclado.', 'Cinco tipos de contenido.'],
  'zh-TW': ['一個鍵盤。', '五種內容類型。'],
  'zh-CN': ['一个键盘。', '五种内容类型。'],
  'pt-BR': ['Um teclado.', 'Cinco tipos de conteúdo.'],
  fr: ['Un clavier.', 'Cinq types de contenu.'],
  de: ['Eine Tastatur.', 'Fünf Arten von Inhalten.'],
  ru: ['Одна клавиатура.', 'Пять типов контента.'],
  ko: ['하나의 키보드.', '다섯 가지 콘텐츠 유형.'],
  hi: ['एक कीबोर्ड।', 'पाँच तरह की सामग्री।'],
  bn: ['একটি কিবোর্ড।', 'পাঁচ ধরনের কনটেন্ট।'],
  id: ['Satu Keyboard.', 'Lima jenis konten.'],
  it: ['Una tastiera.', 'Cinque tipi di contenuti.'],
  th: ['หนึ่งคีย์บอร์ด', 'เนื้อหาห้าประเภท'],
  tl: ['Isang Keyboard.', 'Limang uri ng content.'],
  pl: ['Jedna klawiatura.', 'Pięć rodzajów treści.'],
  tr: ['Tek klavye.', 'Beş içerik türü.'],
};


export const getListFeaturesCopy = (lang: string) => features[lang as keyof typeof features] ?? features.en;
export const getListFeaturesIntroTitles = (lang: string) => introTitles[lang] ?? introTitles.en;
export const getListFeaturesControlLabels = (lang: string) => ({
  filters: lang === 'vi' ? 'Lọc tính năng' : 'Feature filters',
  clipboardFilters: lang === 'vi' ? 'Bộ lọc bảng tạm' : 'Clipboard filters',
  showKeyboard: lang === 'vi' ? 'Xem giao diện bàn phím' : 'Show keyboard view',
  showApp: lang === 'vi' ? 'Xem giao diện ứng dụng' : 'Show app view',
  pause: lang === 'vi' ? 'Tạm dừng trình chiếu' : 'Pause slideshow',
  play: lang === 'vi' ? 'Phát trình chiếu' : 'Play slideshow',
});
