import { LocaleDict } from './types';

const tr: LocaleDict = {
  browserTitle: 'LiquidBoard — Hızlı ve güvenli kopyalayıp yapıştırın',
  browserDescription: 'LiquidBoard metinleri, fotoğrafları, çıkartmaları ve bağlantıları iPhone klavyenizden yapıştırmaya hazır olacak şekilde düzenli tutar.',
  nav: {
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    pricing: 'Fiyatlandırma',
    updates: 'Güncellemeler',
    policy: 'Politikalar',
    help: 'Yardım',
  },
  hero: {
    line1: 'Gerçek bir panoyu',
    line2: { left: 'iOS klavyenize', right: 'taşıyın' },
  },
  header: {
    download: { prefix: '', brand: 'LiquidBoard\u2019u\u00A0', suffix: 'indirin' },
  },
  action: {
    download: 'LiquidBoard\u2019u indirin',
    titles: ['Grupla', 'Sabitle', 'Kopyala ve çoğalt', 'Dosyaları içe ve dışa aktar'],
    paragraphs: [
      'Ek gruplar oluşturun; metinleri, görselleri ve çıkartmaları ihtiyaçlarınıza göre sınıflandırın. Gruplar arasında sorunsuzca geçiş yapın ve önemli grupları en üste sabitleyin.',
      'Sık kullandığınız önemli metinleri, görselleri ve çıkartmaları daha hızlı gönderebilmek için en üste sabitleyin.',
      'Metinleri, görselleri ve çıkartmaları kolayca ve hızla kopyalayıp çoğaltın.',
      'Metin verilerini doğrudan Dosyalar uygulaması üzerinden JSON ve CSV biçimlerinde içe ve dışa aktarın.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard grupları' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard sabitlenmiş öğeleri' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard kopyalama ve çoğaltma özelliği' },
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard dosya içe ve dışa aktarma özelliği' },
    ],
  },
  pricing: {
    intro: {
      line1: 'Her gün içerik kaydetme, düzenleme ve paylaşma biçiminize en uygun planı seçin.',
      line2: 'Her plan, ömür boyu erişim sağlayan tek seferlik bir satın almadır.',
    },
    fromPrice: '{price}’den başlayan',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: 'Ömür boyu',
        price: '₺0',
        description: 'Deneme planı',
        features: ['25 Metin', '25 Görsel', '25 Çıkartma', 'Tür Başına 2 Grup', 'Grup Başına 2 Sabitleme'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Ömür boyu',
        price: '₺149',
        description: 'Temel plan',
        features: ['100 Metin', '100 Görsel', '100 Çıkartma', 'Tür Başına 5 Grup', 'Grup Başına 5 Sabitleme'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Ömür boyu',
        price: '₺329',
        description: 'Çoklu görev planı',
        features: ['250 Metin', '250 Görsel', '250 Çıkartma', 'Tür Başına 15 Grup', 'Grup Başına 15 Sabitleme'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Ömür boyu',
        price: '₺589',
        description: 'Profesyonel plan',
        features: ['500 Metin', '500 Görsel', '500 Çıkartma', 'Tür Başına 40 Grup', 'Grup Başına 40 Sabitleme'],
      },
    ],
  },
  features: {
    titles: ['Metin', 'Görseller', 'Çıkartmalar'],
    paragraphs: [
      'Yazma ihtiyaçlarınıza uygun birden fazla metin belgesi, tanıtım bilgisi ve içerik oluşturup düzenleyin. Hemen kullanmak üzere hazır yanıt şablonları hazırlayın. İletişim bilgilerini hızla girip paylaşın. Verimli biçimde başvurmak ve yeniden kullanmak için web sitesi bağlantılarını, kod parçacıklarını ve AI istem yapılarını saklayın.',
      'Ödeme ve banka havalesi QR kodlarını hızla paylaşın. Ürün örneği prototiplerinden, tasarım maketlerinden, infografiklerden ve açıklayıcı ekran görüntülerinden oluşan zengin bir koleksiyona erişin. Profesyonel iletişim için görsel varlıklarınızı kolayca düzenleyip bulun.',
      'Sevdiklerinizle ve müşterilerinizle bağ kurmak için çıkartmaları, sevdiğiniz meme\u2019leri, kutlama mesajlarını ve duygusal ifadeleri oluşturup anında paylaşın. Duyguları aktaran ve etkileşimi artıran görsel öğelerle iletişiminizi kişiselleştirin.',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard metin parçacıkları' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard fotoğraf panosu' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard klavye görünümü' },
    ],
  },
  policy: {
    dataSecurity: 'Veri Güvenliği',
    privacy: 'Gizlilik',
    terms: 'Kullanım Koşulları',
    payment: 'Ödeme ve Para İadesi',
  },
  help: {
    faqTab: 'SSS',
    docsTab: 'Belgeler',
    docsPlaceholder: 'Belgeler güncelleniyor...',
    contactTab: 'İletişim',
    email: 'E-posta',
    problem: 'Sorun',
    problemPlaceholder: 'Bize ne olduğunu anlatın…',
    media: 'Medya',
    addMedia: 'Medya ekle',
    mediaLimit: 'Dosya başına en fazla 20 MB',
    removeMedia: 'Kaldır',
    send: 'Gönder',
    sending: 'Gönderiliyor…',
    mediaTooLarge: 'Her medya eki en fazla 20 MB olabilir.',
    mediaMax: 'En fazla 5 görsel veya video ekleyebilirsiniz.',
    sent: 'Teşekkürler — bildiriminiz gönderildi.',
    sendFailed: 'Bildirim gönderilemedi.',
  },
};

export default tr;
