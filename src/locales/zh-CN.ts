import { LocaleDict } from './types';

const zhCN: LocaleDict = {
  browserTitle: 'LiquidBoard — 快速、安全地复制与粘贴',
  browserDescription: 'LiquidBoard 将文本、照片、贴纸和链接整理妥当，让你能直接从 iPhone 键盘粘贴。',
  nav: {
    home: '首页',
    about: '关于',
    pricing: '定价',
    policy: '政策',
    help: '帮助',
  },
  hero: {
    line1: '把真正的剪贴板带入',
    line2: { left: '你的', right: 'iOS 键盘' },
  },
  header: {
    download: { prefix: '下载\u00A0', brand: 'LiquidBoard\u00A0', suffix: '' },
  },
  action: {
    download: '下载 LiquidBoard',
    titles: ['创建分组', '置顶', '复制与创建副本', '导入与导出文件'],
    paragraphs: [
      '根据需要创建更多分组，对文本、图片和贴纸进行分类。在分组之间流畅切换，并优先将重要分组置顶。',
      '将经常使用的重要文本、图片和贴纸置顶，以便更快发送。',
      '轻松快速地复制文本、图片和贴纸，或为它们创建副本。',
      '直接通过“文件”App 将文本数据导出或导入为 JSON 和 CSV 格式。',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard 分组' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard 置顶内容' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard 复制和创建副本' },
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard 导入和导出文件' },
    ],
  },
  pricing: {
    intro: {
      line1: '根据你每天保存、整理和分享内容的方式，选择合适的方案。',
      line2: '所有方案均为一次性买断，可终身使用。',
    },
    fromPrice: '{price} 起',
    plans: [
      {
        name: 'Free',
        tone: 'white',
        lifetime: '终身使用',
        price: '¥0',
        description: '试用方案',
        features: ['25 条文本', '25 张图片', '25 张贴纸', '每种类型 2 个分组', '每个分组 2 个置顶'],
      },
      {
        name: 'Plus',
        tone: 'green',
        lifetime: '终身使用',
        price: '¥20',
        description: '基础方案',
        features: ['100 条文本', '100 张图片', '100 张贴纸', '每种类型 5 个分组', '每个分组 5 个置顶'],
      },
      {
        name: 'Pro',
        tone: 'blue',
        lifetime: '终身使用',
        price: '¥46',
        description: '多任务方案',
        features: ['250 条文本', '250 张图片', '250 张贴纸', '每种类型 15 个分组', '每个分组 15 个置顶'],
      },
      {
        name: 'Max',
        tone: 'red',
        lifetime: '终身使用',
        price: '¥85',
        description: '专业方案',
        features: ['500 条文本', '500 张图片', '500 张贴纸', '每种类型 40 个分组', '每个分组 40 个置顶'],
      },
    ],
  },
  features: {
    titles: ['文本', '图片', '贴纸'],
    paragraphs: [
      '创建和编辑多个文本文档、介绍信息及符合写作需求的内容。设置预先编写的回复模板以便立即使用。快速输入并分享联系信息。保存网站链接、代码片段和 AI 提示词结构，便于高效查阅和重复使用。',
      '快速分享付款二维码和银行转账二维码。访问丰富的产品示例原型、设计模型、信息图和教学截图。无缝整理并查找视觉素材，用于专业沟通。',
      '创建并即时分享贴纸、喜爱的表情包、祝福信息和情感表达，与亲友或客户保持联系。通过能够传达情感并提升互动的视觉元素，让沟通更具个性。',
    ],
    images: [
      { src: '/assets/lb-text.webp', alt: 'LiquidBoard 文本片段' },
      { src: '/assets/lb-photos.webp', alt: 'LiquidBoard 图片面板' },
      { src: '/assets/lb-keyboard.webp', alt: 'LiquidBoard 键盘视图' },
    ],
  },
  policy: {
    dataSecurity: '数据安全',
    privacy: '隐私',
    terms: '使用条款',
    payment: '付款与退款',
  },
  help: {
    faqTab: '常见问题',
    docsTab: '文档',
    docsPlaceholder: '文档正在更新中…',
    contactTab: '联系我们',
    email: '电子邮箱',
    problem: '问题',
    problemPlaceholder: '请告诉我们发生了什么…',
    media: '附件',
    addMedia: '添加文件',
    mediaLimit: '每个文件最大 20 MB',
    removeMedia: '移除',
    send: '发送',
    sending: '发送中…',
    mediaTooLarge: '每个附件不得超过 20 MB。',
    mediaMax: '最多可添加 5 张图片或视频。',
    sent: '感谢你 — 你的反馈已发送。',
    sendFailed: '无法发送反馈。',
  },
};

export default zhCN;
