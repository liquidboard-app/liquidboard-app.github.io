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
  coreClipboard: { line1: 'Uygulamadaki panodan,', line2: 'iOS klavyenize.' },
  actionClipboard: {
    sectionLabel: 'LiquidBoard özellikleri',
    progressLabel: 'Pano özellik ilerlemesi',
    groupTitle: { primary: 'Grup', secondary: 'Ad' },
    featureLabels: { group: 'Grup', pin: 'Sabitle', share: 'Paylaş', export: 'Dışa aktar', voice: 'Ses', scanText: 'Metni tara', systemPasteboard: 'Sistem panosu', iCloud: 'iCloud' },
  },
  header: {
    download: { prefix: '', brand: 'LiquidBoard\u2019u\u00A0', suffix: 'indirin' },
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
        features: ['20 Metin', '20 Görsel', '20 Çıkartma', 'Tür Başına 2 Grup', 'Grup Başına 2 Sabitleme'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: 'Ömür boyu',
        price: '₺179',
        description: 'Temel plan',
        features: ['100 Metin', '100 Görsel', '100 Çıkartma', 'Tür Başına 5 Grup', 'Grup Başına 5 Sabitleme'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: 'Ömür boyu',
        price: '₺349',
        description: 'Çoklu görev planı',
        features: ['250 Metin', '250 Görsel', '250 Çıkartma', 'Tür Başına 15 Grup', 'Grup Başına 15 Sabitleme'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: 'Ömür boyu',
        price: '₺649',
        description: 'Profesyonel plan',
        features: ['500 Metin', '500 Görsel', '500 Çıkartma', 'Tür Başına 40 Grup', 'Grup Başına 40 Sabitleme'],
      },
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
