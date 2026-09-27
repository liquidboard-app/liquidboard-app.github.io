// Updates page: localized release notes by language.
type Update = {
  date: string;
  tag: string;
  tone: 'fixed' | 'feature' | 'optimized' | 'privacy';
  title: string;
  items: string[];
};

const updatesByLanguage: Record<string, Update[]> = {
  en: [
    { date: '2026 June 30', tag: 'Fixed', tone: 'fixed', title: 'More reliable clipboard handoff', items: ['Improved paste reliability when switching between apps.', 'Refined keyboard recovery after returning from the background.'] },
    { date: '2026 June 24', tag: 'Feature', tone: 'feature', title: 'Faster grouping and pinning', items: ['Added a clearer workflow for creating groups.', 'Pins now stay easier to find while organizing a large board.'] },
    { date: '2026 June 12', tag: 'Optimized', tone: 'optimized', title: 'A lighter, smoother home screen', items: ['Reduced image payloads and delayed off-screen content.', 'Tuned motion for a calmer scrolling experience.'] },
  ],
  tr: [
    { date: '30 Haziran 2026', tag: 'Düzeltme', tone: 'fixed', title: 'Daha güvenilir pano aktarımı', items: ['Uygulamalar arasında geçiş yaparken yapıştırma güvenilirliği artırıldı.', 'Arka plandan döndükten sonra klavyenin toparlanma süreci iyileştirildi.'] },
    { date: '24 Haziran 2026', tag: 'Özellik', tone: 'feature', title: 'Daha hızlı gruplama ve sabitleme', items: ['Grup oluşturma akışı daha anlaşılır hâle getirildi.', 'Büyük bir panoyu düzenlerken sabitlenen öğeleri bulmak artık daha kolay.'] },
    { date: '12 Haziran 2026', tag: 'İyileştirme', tone: 'optimized', title: 'Daha hafif ve akıcı bir ana ekran', items: ['Görsel veri boyutları küçültüldü ve ekran dışındaki içeriklerin yüklenmesi ertelendi.', 'Daha sakin bir kaydırma deneyimi için hareketler yeniden ayarlandı.'] },
  ],
  'zh-CN': [
    { date: '2026 年 6 月 30 日', tag: '已修复', tone: 'fixed', title: '更可靠的剪贴板传递', items: ['提升了在 App 之间切换时的粘贴可靠性。', '优化了从后台返回后键盘的恢复表现。'] },
    { date: '2026 年 6 月 24 日', tag: '新功能', tone: 'feature', title: '更快速的分组与置顶', items: ['新增了更清晰的分组创建流程。', '整理大型面板时，置顶内容现在更容易找到。'] },
    { date: '2026 年 6 月 12 日', tag: '优化', tone: 'optimized', title: '更轻盈、更流畅的首页', items: ['减小了图片资源大小，并延迟加载屏幕外内容。', '调整了动画效果，让滚动体验更加平稳。'] },
  ],
};

export const getUpdatesCopy = (lang: string): Update[] => updatesByLanguage[lang] ?? updatesByLanguage.en;
