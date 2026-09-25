import React, { useEffect, useRef, useState } from 'react';
import { Pause } from 'lucide-react';
import { useTranslation } from '@/contexts/LanguageContext';
import { publicAsset } from '@/utils/publicAssets';
import { ListFeaturesSection } from './styled';

const features = {
  en: {
    introDescription: <>Categorize content from input to display.<br />Multiple ways to save, simple to copy and share.</>,
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
    introDescription: <>入力から表示まで、コンテンツを整理。<br />さまざまな方法で保存し、簡単にコピーして共有できます。</>,
    heading: 'アプリからカスタマイズ',
    description: '外部からコピーすることも、アプリ内でさまざまな入力方法を使って作成することもできます。',
    secondHeading: 'キーボードですぐ使える',
    secondDescription: '入力できるアプリならどこでもキーボードを開けます。貼り付けて、すばやく送信できます。',
  },
  es: {
    introDescription: <>Organiza el contenido desde que lo introduces hasta que lo muestras.<br />Guárdalo de distintas formas y cópialo o compártelo fácilmente.</>,
    heading: 'Personaliza desde la app',
    description: 'Copia contenido desde otras apps o créalo dentro de la app con distintos métodos de entrada.',
    secondHeading: 'Listo en el teclado',
    secondDescription: 'Abre el teclado en cualquier campo de texto. Pega y envía más rápido.',
  },
  'zh-TW': {
    introDescription: <>從輸入到呈現，輕鬆整理內容。<br />多種儲存方式，複製與分享都簡單。</>,
    heading: '在 App 中自訂',
    description: '可從外部複製內容，也能在 App 中透過多種輸入方式編輯。',
    secondHeading: '在鍵盤上隨時可用',
    secondDescription: '在任何輸入欄位開啟鍵盤，快速貼上並傳送。',
  },
  'zh-CN': {
    introDescription: <>从输入到展示，轻松整理内容。<br />多种保存方式，复制和分享都简单。</>,
    heading: '在应用中自定义',
    description: '可从外部复制内容，也能在应用中通过多种输入方式编辑。',
    secondHeading: '键盘中随时可用',
    secondDescription: '在任何输入框中打开键盘，快速粘贴并发送。',
  },
  'pt-BR': {
    introDescription: <>Organize o conteúdo da entrada até a exibição.<br />Salve de várias formas e copie ou compartilhe com facilidade.</>,
    heading: 'Personalize pelo app',
    description: 'Copie de outros apps ou crie conteúdo no app usando diferentes formas de entrada.',
    secondHeading: 'Pronto no teclado',
    secondDescription: 'Abra o teclado em qualquer campo de texto. Cole e envie mais rápido.',
  },
  fr: {
    introDescription: <>Organisez le contenu, de la saisie à l’affichage.<br />Enregistrez-le de plusieurs façons, puis copiez-le et partagez-le facilement.</>,
    heading: 'Personnalisez depuis l’app',
    description: 'Copiez depuis d’autres apps ou créez du contenu dans l’app avec plusieurs modes de saisie.',
    secondHeading: 'Prêt sur le clavier',
    secondDescription: 'Ouvrez le clavier dans n’importe quel champ de saisie. Collez et envoyez plus vite.',
  },
  de: {
    introDescription: <>Inhalte vom Erfassen bis zur Anzeige organisieren.<br />Auf verschiedene Arten speichern, einfach kopieren und teilen.</>,
    heading: 'In der App anpassen',
    description: 'Kopiere Inhalte aus anderen Apps oder erstelle sie mit verschiedenen Eingabemethoden direkt in der App.',
    secondHeading: 'Auf der Tastatur bereit',
    secondDescription: 'Öffne die Tastatur in jedem Eingabefeld. Füge Inhalte ein und sende sie schneller.',
  },
  ru: {
    introDescription: <>Упорядочивайте контент от ввода до отображения.<br />Сохраняйте разными способами, копируйте и делитесь легко.</>,
    heading: 'Настройте в приложении',
    description: 'Копируйте из других приложений или создавайте контент в приложении разными способами ввода.',
    secondHeading: 'Готово на клавиатуре',
    secondDescription: 'Открывайте клавиатуру в любом поле ввода. Вставляйте и отправляйте быстрее.',
  },
  ko: {
    introDescription: <>입력부터 표시까지 콘텐츠를 정리하세요.<br />다양한 방법으로 저장하고 간편하게 복사하고 공유하세요.</>,
    heading: '앱에서 맞춤 설정',
    description: '다른 앱에서 복사하거나 앱에서 다양한 입력 방식으로 콘텐츠를 작성할 수 있습니다.',
    secondHeading: '키보드에서 바로 사용',
    secondDescription: '입력할 수 있는 모든 앱에서 키보드를 여세요. 더 빠르게 붙여넣고 보내세요.',
  },
  hi: {
    introDescription: <>इनपुट से डिस्प्ले तक अपनी सामग्री व्यवस्थित करें।<br />अलग-अलग तरीकों से सेव करें और आसानी से कॉपी व शेयर करें।</>,
    heading: 'ऐप से कस्टमाइज़ करें',
    description: 'बाहरी ऐप से कॉपी करें या ऐप में कई इनपुट तरीकों से सामग्री तैयार करें।',
    secondHeading: 'कीबोर्ड पर तैयार',
    secondDescription: 'किसी भी इनपुट फ़ील्ड से कीबोर्ड खोलें। तेज़ी से पेस्ट करें और भेजें।',
  },
  bn: {
    introDescription: <>ইনপুট থেকে প্রদর্শন পর্যন্ত কনটেন্ট সাজান।<br />বিভিন্ন উপায়ে সংরক্ষণ করুন, সহজে কপি ও শেয়ার করুন।</>,
    heading: 'অ্যাপ থেকে কাস্টমাইজ করুন',
    description: 'বাইরের অ্যাপ থেকে কপি করুন, অথবা অ্যাপের বিভিন্ন ইনপুট পদ্ধতিতে কনটেন্ট তৈরি করুন।',
    secondHeading: 'কিবোর্ডে প্রস্তুত',
    secondDescription: 'যেকোনো ইনপুট ফিল্ড থেকে কিবোর্ড খুলুন। দ্রুত পেস্ট করে পাঠান।',
  },
  id: {
    introDescription: <>Atur konten dari proses input hingga tampilannya.<br />Simpan dengan berbagai cara, lalu salin dan bagikan dengan mudah.</>,
    heading: 'Sesuaikan dari aplikasi',
    description: 'Salin dari aplikasi lain atau buat konten di aplikasi dengan berbagai metode input.',
    secondHeading: 'Siap di keyboard',
    secondDescription: 'Buka keyboard dari kolom input mana pun. Tempel dan kirim lebih cepat.',
  },
  it: {
    introDescription: <>Organizza i contenuti dall’inserimento alla visualizzazione.<br />Salvali in vari modi, poi copiali e condividili facilmente.</>,
    heading: 'Personalizza dall’app',
    description: 'Copia da altre app o crea contenuti nell’app usando diversi metodi di inserimento.',
    secondHeading: 'Pronto sulla tastiera',
    secondDescription: 'Apri la tastiera in qualsiasi campo di testo. Incolla e invia più rapidamente.',
  },
  th: {
    introDescription: <>จัดระเบียบเนื้อหาตั้งแต่ป้อนข้อมูลจนถึงแสดงผล<br />บันทึกได้หลายวิธี คัดลอกและแชร์ได้ง่าย</>,
    heading: 'ปรับแต่งจากแอป',
    description: 'คัดลอกจากแอปอื่น หรือสร้างเนื้อหาในแอปด้วยวิธีป้อนข้อมูลที่หลากหลาย',
    secondHeading: 'พร้อมใช้บนคีย์บอร์ด',
    secondDescription: 'เปิดคีย์บอร์ดได้จากทุกช่องป้อนข้อความ วางและส่งได้รวดเร็วยิ่งขึ้น',
  },
  tl: {
    introDescription: <>Ayusin ang content mula pag-input hanggang pagpapakita.<br />I-save sa iba’t ibang paraan, at madaling kopyahin at ibahagi.</>,
    heading: 'I-customize mula sa app',
    description: 'Kopyahin mula sa ibang app o gumawa ng content sa app gamit ang iba’t ibang paraan ng pag-input.',
    secondHeading: 'Handa sa keyboard',
    secondDescription: 'Buksan ang keyboard sa anumang input field. Mag-paste at magpadala nang mas mabilis.',
  },
  pl: {
    introDescription: <>Porządkuj treści od wprowadzania po wyświetlanie.<br />Zapisuj na różne sposoby, łatwo kopiuj i udostępniaj.</>,
    heading: 'Dostosuj w aplikacji',
    description: 'Kopiuj z innych aplikacji lub twórz treści w aplikacji na różne sposoby.',
    secondHeading: 'Gotowe na klawiaturze',
    secondDescription: 'Otwórz klawiaturę w dowolnym polu tekstowym. Wklejaj i wysyłaj szybciej.',
  },
  tr: {
    introDescription: <>İçeriği girişten görüntülemeye kadar düzenleyin.<br />Farklı şekillerde kaydedin, kolayca kopyalayıp paylaşın.</>,
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

const ListFeatures: React.FC = () => {
  const { lang } = useTranslation();
  const [activeDemo, setActiveDemo] = useState<'app' | 'keyboard'>('app');
  const [isPlaying, setIsPlaying] = useState(true);
  const [segmentProgress, setSegmentProgress] = useState(0);
  const segmentRemaining = useRef(6000);
  const segmentDeadline = useRef<number | null>(null);
  const copy = features[lang as keyof typeof features] ?? features.en;
  const [introTitleFirstLine, introTitleSecondLine] = introTitles[lang] ?? introTitles.en;

  useEffect(() => {
    if (!isPlaying) return undefined;
    segmentDeadline.current = Date.now() + segmentRemaining.current;
    const timer = window.setInterval(() => {
      const remaining = Math.max(0, (segmentDeadline.current ?? Date.now()) - Date.now());
      if (remaining === 0) {
        segmentRemaining.current = 6000;
        segmentDeadline.current = Date.now() + 6000;
        setSegmentProgress(0);
        setActiveDemo((current) => current === 'app' ? 'keyboard' : 'app');
        return;
      }
      segmentRemaining.current = remaining;
      setSegmentProgress(1 - remaining / 6000);
    }, 50);
    return () => {
      window.clearInterval(timer);
      if (segmentDeadline.current !== null) {
        segmentRemaining.current = Math.max(0, segmentDeadline.current - Date.now());
        segmentDeadline.current = null;
      }
    };
  }, [isPlaying]);

  return <ListFeaturesSection aria-labelledby="list-features-heading">
    <header className="features-intro">
      <h2>{introTitleFirstLine}<br />{introTitleSecondLine}</h2>
      <p>{copy.introDescription}</p>
    </header>
    <div className="feature-card">
      <div className="feature-art" data-paused={!isPlaying}>
        <img className="feature-background" src={publicAsset('/assets/background-features.jpg')} alt="" />
        <div className="story-progress" aria-hidden="true">
          <span><i style={{ width: `${activeDemo === 'app' ? segmentProgress * 100 : 100}%` }} /></span>
          <span><i style={{ width: `${activeDemo === 'keyboard' ? segmentProgress * 100 : 0}%` }} /></span>
        </div>
        <div className="story-controls">
          <button className="story-mode-indicator" type="button" aria-label={activeDemo === 'app' ? (lang === 'vi' ? 'Xem giao diện bàn phím' : 'Show keyboard view') : (lang === 'vi' ? 'Xem giao diện ứng dụng' : 'Show app view')} onClick={() => {
            setActiveDemo((current) => current === 'app' ? 'keyboard' : 'app');
            setSegmentProgress(0);
            segmentRemaining.current = 6000;
            segmentDeadline.current = isPlaying ? Date.now() + 6000 : null;
          }}>
            <span className={`mode-icon ${activeDemo === 'app' ? 'is-active' : ''}`}><img className="mode-lanyard" src={publicAsset('/assets/lanyardcard.fill.svg')} alt="" /></span>
            <span className={`mode-icon ${activeDemo === 'keyboard' ? 'is-active' : ''}`}><img className="mode-keyboard" src={publicAsset('/assets/keyboard.fill.svg')} alt="" /></span>
          </button>
          <button className="story-play-toggle" type="button" aria-label={isPlaying ? (lang === 'vi' ? 'Tạm dừng trình chiếu' : 'Pause slideshow') : (lang === 'vi' ? 'Phát trình chiếu' : 'Play slideshow')} onClick={() => setIsPlaying((playing) => !playing)}>
            <span className={`play-icon ${!isPlaying ? 'is-active' : ''}`}><img src={publicAsset('/assets/play.fill.svg')} alt="" /></span>
            <span className={`play-icon ${isPlaying ? 'is-active' : ''}`}><Pause /></span>
          </button>
        </div>
        <img className={`feature-app-image feature-app-dark ${activeDemo === 'app' ? 'is-active' : ''}`} src={publicAsset('/assets/app-features-dark.PNG')} alt="" />
        <img className={`feature-app-image feature-keyboard-dark ${activeDemo === 'keyboard' ? 'is-active' : ''}`} src={publicAsset('/assets/keyboard-features-dark.PNG')} alt="" />
        <img className={`feature-app-image feature-app-light ${activeDemo === 'app' ? 'is-active' : ''}`} src={publicAsset('/assets/app-features-light.PNG')} alt="" />
        <img className={`feature-app-image feature-keyboard-light ${activeDemo === 'keyboard' ? 'is-active' : ''}`} src={publicAsset('/assets/keyboard-features-light.PNG')} alt="" />
      </div>
      <div className="feature-copy">
        <section className="feature-detail">
          <div className="feature-title">
            <span className="feature-symbol-badge feature-symbol-blue"><img src={publicAsset('/assets/lanyardcard.fill.svg')} alt="" /></span>
            <h2 id="list-features-heading">{copy.heading}</h2>
          </div>
          <p className="feature-description">{copy.description}</p>
        </section>
        <section className="feature-detail">
          <div className="feature-title feature-title-secondary">
            <span className="feature-symbol-badge feature-symbol-green"><img src={publicAsset('/assets/keyboard.fill.svg')} alt="" /></span>
            <h3>{copy.secondHeading}</h3>
          </div>
          <p className="feature-description">{copy.secondDescription}</p>
        </section>
      </div>
    </div>
  </ListFeaturesSection>;
};

export default ListFeatures;
