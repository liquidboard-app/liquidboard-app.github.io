import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_tl: React.FC = () => (
  <>
    <p>Ang LiquidBoard ay isang clipboard management app para sa teksto at mga imahe. Tinutulungan ka ng app na lumikha ng madalas gamitin na nilalaman o i-imbak ang nilalaman na kinopya mula sa ibang mga app. Sinusuportahan ang mga tampok tulad ng paghahanap, pag-aayos, pag-grupo, pag-pin ng mahahalagang nilalaman, at pag-export ng mga file sa format na JSON o CSV upang mapadali ang pamamahala ng data.</p>
    <p>Ang LiquidBoard ay nagsasama sa iyong keyboard upang gawing mas madali ang pagpapadala ng mga naunang naka-imbak o kinopyang teksto at larawan. Maaari mong gamitin ang app upang mag-imbak ng paulit-ulit na pang-araw-araw na mga parirala para sa mga customer, nilalaman ng ulat, mga link sa benta, numero ng account, mga address, QR Code, at iba pa. Bukod dito, ang LiquidBoard ay may seksyon ng Stickers, na nagbibigay-daan sa iyo upang lumikha ng mga sticker mula sa mga idinagdag na larawan.</p>
    <p>Lahat ng datos ay nakaimbak nang lokal at ligtas sa iyong device at iCloud (pagkatapos i-link ang iCloud). Nangako ang LiquidBoard na hindi mag-iimbak o mag-a-upload ng anumang datos mo sa iba pang lugar. Lahat ng pangako ay ipinatutupad at kinokontrol ng Apple sa pamamagitan ng<Link to="/policy/data-security">Seguridad ng Datos</Link>at<Link to="/policy/privacy">Pagkapribado</Link>mga patakaran sa loob ng app. Inilalathala namin ang mga dokumentong ito sa publiko sa app at sa aming website, at madali mo silang mahahanap sa<Link to="/policy/data-security">Seguridad ng Datos</Link>at<Link to="/policy/privacy">Pribado</Link>.</p>
  </>
);
export default AboutContent_tl;
