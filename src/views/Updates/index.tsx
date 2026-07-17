import React from 'react';
import styled from 'styled-components';
import { PageHeading, PageInner, PageShell } from '@/components/PageLayout';
import { sentenceCase } from '@/locales/casing';
import { getUpdatesLabel } from '@/locales/config';
import { useTranslation } from '@/contexts/LanguageContext';

const UpdateList = styled.section`
  display: grid;
  gap: 14px;
`;

const UpdateItem = styled.article`
  padding: clamp(22px, 3dvw, 34px);
  border: 1px solid rgba(73, 48, 36, .15);
  border-radius: 20px;
  .meta { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; color: #715c52; font-size: 14px; font-weight: 720; }
  time { font-variant-numeric: tabular-nums; }
  .tag { padding: 5px 9px; border-radius: 999px; color: #282321; font-size: 12px; font-weight: 820; line-height: 1; }
  .tag.fixed { background: #edb6ac; }
  .tag.feature { background: #b8dba4; }
  .tag.optimized { background: #e3c76c; }
  .tag.privacy { background: #b3c5ef; }
  h2 { margin: 15px 0 8px; font-size: clamp(24px, 3.1dvw, 38px); line-height: 1.12; font-weight: 810; letter-spacing: -.025em; }
  ul { display: grid; gap: 5px; margin: 0; padding-left: 22px; color: #665249; font-size: clamp(16px, 1.35dvw, 19px); line-height: 1.6; font-weight: 540; }
`;

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

const Updates: React.FC = () => {
  const { lang } = useTranslation();
  const updates = updatesByLanguage[lang] ?? updatesByLanguage.en;
  return (
    <PageShell>
      <PageInner>
        <PageHeading $compact>
          <h1>{sentenceCase(getUpdatesLabel(lang), lang)}</h1>
        </PageHeading>
        <UpdateList>
          {updates.map((update) => (
            <UpdateItem key={update.date}>
              <div className="meta"><span className={`tag ${update.tone}`}>{update.tag}</span><time>{update.date}</time></div>
              <h2>{update.title}</h2>
              <ul>{update.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </UpdateItem>
          ))}
        </UpdateList>
      </PageInner>
    </PageShell>
  );
};

export default Updates;
