// Shared localized page descriptions for social and browser metadata.
type PageMetadataMap = Record<string, { description: string }>;

const pageMetadataByLanguage: Record<string, PageMetadataMap> = {
  en: {
    '/': {
      description: 'LiquidBoard keeps texts, photos, stickers and links organized so they are ready to paste from your iPhone keyboard.',
    },
    '/about': {
      description: 'Learn how LiquidBoard helps you keep everyday clipboard content private, organized and ready to send.',
    },
    '/pricing': {
      description: 'Explore LiquidBoard plans and choose the clipboard workspace that fits the way you work.',
    },
    '/updates': {
      description: 'See the latest LiquidBoard features, improvements and product updates.',
    },
    '/help/contact': {
      description: 'Get help with LiquidBoard, browse frequently asked questions or contact support.',
    },
    '/help/faq': {
      description: 'Find answers to common questions about LiquidBoard and its keyboard features.',
    },
    '/policy/data-security': {
      description: 'Read how LiquidBoard protects your data and keeps your content under your control.',
    },
    '/policy/privacy': {
      description: 'Read the LiquidBoard privacy policy and learn how your information is handled.',
    },
    '/policy/terms-of-use': {
      description: 'Read the terms that apply to your use of LiquidBoard.',
    },
    '/policy/payment-and-refund': {
      description: 'Read LiquidBoard payment, purchase and refund information.',
    },
  },
  tr: {
    '/': {
      description: 'LiquidBoard metinleri, fotoğrafları, çıkartmaları ve bağlantıları iPhone klavyenizden yapıştırmaya hazır olacak şekilde düzenli tutar.',
    },
    '/about': {
      description: 'LiquidBoard’un günlük pano içeriklerinizi nasıl gizli, düzenli ve gönderilmeye hazır tuttuğunu öğrenin.',
    },
    '/pricing': {
      description: 'LiquidBoard planlarını inceleyin ve çalışma biçiminize uygun pano alanını seçin.',
    },
    '/updates': {
      description: 'En yeni LiquidBoard özelliklerini, iyileştirmelerini ve ürün güncellemelerini görün.',
    },
    '/help/contact': {
      description: 'LiquidBoard için yardım alın, sık sorulan sorulara göz atın veya destek ekibiyle iletişime geçin.',
    },
    '/help/faq': {
      description: 'LiquidBoard ve klavye özellikleri hakkında sık sorulan soruların yanıtlarını bulun.',
    },
    '/policy/data-security': {
      description: 'LiquidBoard’un verilerinizi nasıl koruduğunu ve içeriklerinizin denetimini nasıl size bıraktığını okuyun.',
    },
    '/policy/privacy': {
      description: 'LiquidBoard gizlilik politikasını ve bilgilerinizin nasıl işlendiğini okuyun.',
    },
    '/policy/terms-of-use': {
      description: 'LiquidBoard kullanımınız için geçerli olan koşulları okuyun.',
    },
    '/policy/payment-and-refund': {
      description: 'LiquidBoard ödeme, satın alma ve para iadesi bilgilerini okuyun.',
    },
  },
  'zh-CN': {
    '/': {
      description: 'LiquidBoard 将文本、照片、贴纸和链接整理妥当，让你能直接从 iPhone 键盘粘贴。',
    },
    '/about': {
      description: '了解 LiquidBoard 如何让日常剪贴板内容保持私密、有序并随时可发送。',
    },
    '/pricing': {
      description: '浏览 LiquidBoard 方案，选择适合你工作方式的剪贴板空间。',
    },
    '/updates': {
      description: '查看 LiquidBoard 的最新功能、改进和产品更新。',
    },
    '/help/contact': {
      description: '获取 LiquidBoard 帮助、浏览常见问题或联系支持团队。',
    },
    '/help/faq': {
      description: '查找有关 LiquidBoard 及其键盘功能的常见问题解答。',
    },
    '/policy/data-security': {
      description: '了解 LiquidBoard 如何保护你的数据并让内容始终由你掌控。',
    },
    '/policy/privacy': {
      description: '阅读 LiquidBoard 隐私政策，了解你的信息如何被处理。',
    },
    '/policy/terms-of-use': {
      description: '阅读适用于你使用 LiquidBoard 的条款。',
    },
    '/policy/payment-and-refund': {
      description: '阅读 LiquidBoard 的付款、购买和退款信息。',
    },
  },
};

export const getPageMetadata = (lang: string, pathname: string) => {
  const pages = pageMetadataByLanguage[lang] ?? pageMetadataByLanguage.en;
  return pages[pathname] ?? pages['/'];
};
