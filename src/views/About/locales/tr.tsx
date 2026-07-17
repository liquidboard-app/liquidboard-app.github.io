import React from 'react';
import { Link } from 'react-router-dom';

const AboutContentTr: React.FC = () => (
  <>
    <p>LiquidBoard, iPhone&apos;da metin, görsel ve çıkartmalar için bir pano yönetimi uygulamasıdır. Uygulama, sık kullandığınız içerikleri oluşturmanıza veya diğer uygulama ya da cihazlardan kopyaladığınız içerikleri saklamanıza yardımcı olur. Veri yönetimini kolaylaştırmak için kapsamlı bir özellik seti sunar.</p>
    <p>LiquidBoard, iPhone klavyenizle bütünleşerek kaydedilmiş metinleri, görselleri ve çıkartmaları göndermenizi kolaylaştırır. Uygulamayı sık tekrarlanan metinleri ve QR kod görsellerini saklamak, sevdiğiniz çıkartmaları oluşturmak için kullanabilirsiniz.</p>
    <p>Tüm veriler cihazınızda yerel ve güvenli bir şekilde ya da eşzamanlama sırasında iCloud hesabınızda saklanır. LiquidBoard, verilerinizin hiçbirini belirtilen yerler dışında depolamamayı, kullanmamayı veya başka bir yere yüklememeyi taahhüt eder.</p>
    <p>Uygulamadaki Çıkartmalar özelliği, arka planları ayırmak ve çıkartmaları kırpmak için Apple&apos;ın iOS cihazlarında yerleşik olarak bulunan bilgisayarlı görü ve makine öğrenimi kütüphanesi Vision Framework ile geliştirilmiştir.</p>
    <p>İzinlere ve özelliklere ilişkin tüm taahhütler, uygulamanın Veri Güvenliği ve Gizlilik belgeleri aracılığıyla Apple tarafından uygulanır ve denetlenir.</p>
    <p>Bu belgeleri uygulamada ve bu web sitesinde yayımlıyoruz. <br /><Link to="/policy/data-security">Veri Güvenliği</Link><br /><Link to="/policy/privacy">Gizlilik</Link></p>
    <p>Gelecekte, en yeni iOS sürümlerindeki yapay zekâ özelliklerini Siri AI ile genişletmeye ve macOS ile iPadOS sürümleri geliştirmeye çalışacağız. LiquidBoard, kullanıcı izinlerini ve hassas verileri korumak amacıyla yapay zekâ özelliklerini yalnızca sistem düzeyinde geliştirmeyi taahhüt eder.</p>
  </>
);

export default AboutContentTr;
