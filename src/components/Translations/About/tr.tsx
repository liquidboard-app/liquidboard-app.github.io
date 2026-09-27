import { AboutParagraph, AboutLineBreak } from './elements';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutContentTr: React.FC = () => (
  <>
    <AboutParagraph>LiquidBoard, iPhone&apos;da metin, görsel ve çıkartmalar için bir pano yönetimi uygulamasıdır. Uygulama, sık kullandığınız içerikleri oluşturmanıza veya diğer uygulama ya da cihazlardan kopyaladığınız içerikleri saklamanıza yardımcı olur. Veri yönetimini kolaylaştırmak için kapsamlı bir özellik seti sunar.</AboutParagraph>
    <AboutParagraph>LiquidBoard, iPhone klavyenizle bütünleşerek kaydedilmiş metinleri, görselleri ve çıkartmaları göndermenizi kolaylaştırır. Uygulamayı sık tekrarlanan metinleri ve QR kod görsellerini saklamak, sevdiğiniz çıkartmaları oluşturmak için kullanabilirsiniz.</AboutParagraph>
    <AboutParagraph>Tüm veriler cihazınızda yerel ve güvenli bir şekilde ya da eşzamanlama sırasında iCloud hesabınızda saklanır. LiquidBoard, verilerinizin hiçbirini belirtilen yerler dışında depolamamayı, kullanmamayı veya başka bir yere yüklememeyi taahhüt eder.</AboutParagraph>
    <AboutParagraph>Uygulamadaki Çıkartmalar özelliği, arka planları ayırmak ve çıkartmaları kırpmak için Apple&apos;ın iOS cihazlarında yerleşik olarak bulunan bilgisayarlı görü ve makine öğrenimi kütüphanesi Vision Framework ile geliştirilmiştir.</AboutParagraph>
    <AboutParagraph>İzinlere ve özelliklere ilişkin tüm taahhütler, uygulamanın Veri Güvenliği ve Gizlilik belgeleri aracılığıyla Apple tarafından uygulanır ve denetlenir.</AboutParagraph>
    <AboutParagraph>Bu belgeleri uygulamada ve bu web sitesinde yayımlıyoruz. <AboutLineBreak /><Link to="/policy/data-security">Veri Güvenliği</Link><AboutLineBreak /><Link to="/policy/privacy">Gizlilik</Link></AboutParagraph>
    <AboutParagraph>Gelecekte, en yeni iOS sürümlerindeki yapay zekâ özelliklerini Siri AI ile genişletmeye ve macOS ile iPadOS sürümleri geliştirmeye çalışacağız. LiquidBoard, kullanıcı izinlerini ve hassas verileri korumak amacıyla yapay zekâ özelliklerini yalnızca sistem düzeyinde geliştirmeyi taahhüt eder.</AboutParagraph>
  </>
);

export default AboutContentTr;
