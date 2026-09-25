import React from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { HeroSection } from './styled';
import { getIosRequirement, getNewVersionCopy } from '../../copy';
import AppStoreButton from '@/views/Home/components/AppStoreButton';
import { publicAsset } from '@/utils/publicAssets';

const descriptions: Record<string, string> = {
  en: 'Built to support everything from text, links, and color codes to images and stickers. Copy everything to the LiquidBoard keyboard and paste it in any app.',
  vi: 'Được xây dựng để hỗ trợ mọi thứ từ văn bản, liên kết, mã màu đến hình ảnh và nhãn dán. Sao chép mọi thứ đến bàn phím LiquidBoard và dán nó ở mọi ứng dụng.',
  ja: 'テキスト、リンク、カラーコードから画像やステッカーまで、あらゆる内容に対応。すべてをLiquidBoardキーボードにコピーして、どのアプリにも貼り付けられます。',
  es: 'Diseñado para admitir desde texto, enlaces y códigos de color hasta imágenes y stickers. Copia todo al teclado de LiquidBoard y pégalo en cualquier app.',
  'zh-TW': '支援文字、連結、色碼、圖片和貼圖等各種內容。將所有內容複製到 LiquidBoard 鍵盤，並貼到任何 App。',
  'zh-CN': '支持文字、链接、颜色代码、图片和贴纸等各种内容。将所有内容复制到 LiquidBoard 键盘，并粘贴到任意应用中。',
  'pt-BR': 'Feito para tudo: textos, links, códigos de cores, imagens e figurinhas. Copie tudo para o teclado LiquidBoard e cole em qualquer app.',
  fr: 'Conçu pour tout prendre en charge, des textes, liens et codes couleur aux images et autocollants. Copiez tout dans le clavier LiquidBoard et collez dans n’importe quelle app.',
  de: 'Für alles gemacht: Texte, Links, Farbcodes, Bilder und Sticker. Kopiere alles in die LiquidBoard-Tastatur und füge es in jeder App ein.',
  ru: 'Поддерживает всё: текст, ссылки, цветовые коды, изображения и стикеры. Скопируйте всё в клавиатуру LiquidBoard и вставьте в любое приложение.',
  ko: '텍스트, 링크, 색상 코드부터 이미지와 스티커까지 모두 지원합니다. 모든 내용을 LiquidBoard 키보드로 복사해 어떤 앱에서든 붙여넣으세요.',
  hi: 'टेक्स्ट, लिंक और कलर कोड से लेकर इमेज और स्टिकर तक, हर चीज़ के लिए बनाया गया। सब कुछ LiquidBoard कीबोर्ड पर कॉपी करें और किसी भी ऐप में पेस्ट करें।',
  bn: 'টেক্সট, লিংক ও কালার কোড থেকে ছবি এবং স্টিকার—সবকিছুর জন্য তৈরি। সবকিছু LiquidBoard কিবোর্ডে কপি করুন এবং যেকোনো অ্যাপে পেস্ট করুন।',
  id: 'Dirancang untuk mendukung semuanya, mulai dari teks, tautan, kode warna hingga gambar dan stiker. Salin semuanya ke keyboard LiquidBoard dan tempel di aplikasi apa pun.',
  it: 'Pensato per supportare tutto: testi, link, codici colore, immagini e adesivi. Copia tutto nella tastiera LiquidBoard e incollalo in qualsiasi app.',
  th: 'รองรับทุกอย่างตั้งแต่ข้อความ ลิงก์ โค้ดสี ไปจนถึงรูปภาพและสติกเกอร์ คัดลอกทุกอย่างไปยังคีย์บอร์ด LiquidBoard แล้ววางในแอปใดก็ได้',
  tl: 'Ginawa para suportahan ang lahat mula sa text, link, at color code hanggang sa mga larawan at sticker. Kopyahin ang lahat papunta sa LiquidBoard keyboard at i-paste sa anumang app.',
  pl: 'Stworzony z myślą o wszystkim: tekstach, linkach, kodach kolorów, obrazach i naklejkach. Skopiuj wszystko do klawiatury LiquidBoard i wklej w dowolnej aplikacji.',
  tr: 'Metin, bağlantı ve renk kodlarından görsellere ve çıkartmalara kadar her şeyi destekler. Her şeyi LiquidBoard klavyesine kopyalayın ve herhangi bir uygulamada yapıştırın.',
};

const Hero: React.FC = () => {
  const { lang } = useTranslation();
  const copy = getNewVersionCopy(lang);
  const description = descriptions[lang] ?? descriptions.en;
  const iosRequirement = getIosRequirement(lang);
  const [requirementPrefix, requirementSuffix] = iosRequirement.split('iOS 26');
  return <HeroSection>
    <h1>{copy.headline[0]}<br /><span>{copy.headline[1]}</span></h1>
    <p>{description}</p>
    <div className="hero-download-group">
      <AppStoreButton className="hero-download-button" />
      <small className="hero-download-note" aria-label={iosRequirement}>
        {requirementPrefix.trim() && <span className="ios-requirement-prefix">{requirementPrefix.trim()}</span>}
        <span className="ios-version-label">
          <span className="ios-version-icon" aria-hidden="true">
            <img src={publicAsset('/assets/ios-26-logo.png')} alt="" />
          </span>
          <span><strong className="ios-version-number">iOS 26</strong><span className="ios-version-suffix">{requirementSuffix}</span></span>
        </span>
      </small>
    </div>
  </HeroSection>;
};

export default Hero;
