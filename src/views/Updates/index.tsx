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
  border-top: 1px solid rgba(73, 48, 36, .15);
  &:last-child { border-bottom: 1px solid rgba(73, 48, 36, .15); }
  .meta { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; color: #715c52; font-size: 14px; font-weight: 720; }
  time { font-variant-numeric: tabular-nums; }
  .tag { padding: 5px 9px; border-radius: 999px; color: #282321; font-size: 12px; font-weight: 820; line-height: 1; }
  .tag.fixed { background: #edb6ac; }
  .tag.feature { background: #b8dba4; }
  .tag.optimized { background: #e3c76c; }
  .tag.privacy { background: #b3c5ef; }
  h2 { margin: 15px 0 8px; font-size: clamp(24px, 3.1dvw, 38px); line-height: 1.12; font-weight: 810; letter-spacing: -.025em; }
  p { margin: 0; color: #665249; font-size: clamp(16px, 1.35dvw, 19px); line-height: 1.6; font-weight: 540; }
`;

const updates = [
  { date: '2026 June 30', tag: 'Fixed', tone: 'fixed', title: 'More reliable clipboard handoff', body: '• Improved paste reliability when switching between apps. • Refined keyboard recovery after returning from the background.' },
  { date: '2026 June 24', tag: 'New feature', tone: 'feature', title: 'Faster grouping and pinning', body: '• Added a clearer workflow for creating groups. • Pins now stay easier to find while organizing a large board.' },
  { date: '2026 June 12', tag: 'Optimized', tone: 'optimized', title: 'A lighter, smoother home screen', body: '• Reduced image payloads and delayed off-screen content. • Tuned motion for a calmer scrolling experience.' },
];

const Updates: React.FC = () => {
  const { lang } = useTranslation();
  return (
    <PageShell>
      <PageInner>
        <PageHeading $compact>
          <h1>{sentenceCase(getUpdatesLabel(lang), lang)}</h1>
          <p>What has changed in LiquidBoard recently.</p>
        </PageHeading>
        <UpdateList>
          {updates.map((update) => (
            <UpdateItem key={update.date}>
              <div className="meta"><time>{update.date}</time><span className={`tag ${update.tone}`}>{update.tag}</span></div>
              <h2>{update.title}</h2>
              <p>{update.body}</p>
            </UpdateItem>
          ))}
        </UpdateList>
      </PageInner>
    </PageShell>
  );
};

export default Updates;
