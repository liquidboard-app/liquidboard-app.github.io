import { AboutParagraph, AboutLineBreak } from './elements';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent_tl: React.FC = () => (
  <>
    <AboutParagraph>Ang LiquidBoard ay isang clipboard management app para sa text, mga larawan at stickers sa iPhone. Tinutulungan ka ng app na gumawa ng madalas gamitin na content o mag-imbak ng content na kinopya mo mula sa ibang app o device. Ibinibigay ang kumpletong hanay ng mga feature upang gawing mas simple ang pamamahala ng data.</AboutParagraph>
    <AboutParagraph>Nakakabit ang LiquidBoard sa keyboard ng iyong iPhone upang mas madaling magpadala ng naka-save na text, mga larawan at stickers. Maaari mong gamitin ang app upang mag-imbak ng madalas uliting text, mga larawan ng QR Code at gumawa ng mga paborito mong sticker.</AboutParagraph>
    <AboutParagraph>Lahat ng data ay lokal at ligtas na nakaimbak sa iyong device o sa iyong iCloud kapag nagsi-sync. Nangangako ang LiquidBoard na hindi mag-iimbak, gagamit o mag-a-upload ng alinman sa iyong data sa ibang lugar.</AboutParagraph>
    <AboutParagraph>Ang feature na Stickers sa app ay ginawa gamit ang Vision Framework, ang built-in na computer vision at machine learning library ng Apple sa mga iOS device, upang paghiwalayin ang background at gupitin ang stickers.</AboutParagraph>
    <AboutParagraph>Ang lahat ng pangako tungkol sa permissions at features ay ipinatutupad at kinokontrol ng Apple sa pamamagitan ng mga dokumentong Seguridad ng Data at Privacy sa app.</AboutParagraph>
    <AboutParagraph>Inilalathala namin ang mga dokumentong ito sa app at sa website na ito. <AboutLineBreak /><Link to="/policy/data-security">Seguridad ng Data</Link><AboutLineBreak /><Link to="/policy/privacy">Privacy</Link></AboutParagraph>
    <AboutParagraph>Sa hinaharap, susubukan naming palawakin ang mga AI feature sa pinakabagong bersyon ng iOS gamit ang Siri AI at sa mga bersyon para sa macOS at iPadOS. Nangangako ang LiquidBoard na bubuo lamang ng mga AI feature sa system level upang maprotektahan ang permissions at sensitibong data ng mga user.</AboutParagraph>
  </>
);

export default AboutContent_tl;
