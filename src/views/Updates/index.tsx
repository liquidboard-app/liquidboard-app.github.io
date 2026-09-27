import React from 'react';
import styled from 'styled-components';
import { PageHeading, PageInner, PageShell } from '@/components/PageLayout';
import { sentenceCase } from '@/components/Translations/Global/casing';
import { getUpdatesLabel } from '@/components/Translations/Global/config';
import { getUpdatesCopy } from '@/components/Translations/Global/updatesCopy';
import { useTranslation } from '@/contexts/LanguageContext';

const PageHeadingH1 = styled.h1``;
const Meta = styled.div``;
const MetaSpan = styled.span``;
const MetaTime = styled.time``;
const UpdateItemH2 = styled.h2``;
const UpdateItemUl = styled.ul``;
const UlLi = styled.li``;


const UpdateList = styled.section`
  display: grid;
  gap: 14px;
`;

const UpdateItem = styled.article`
  padding: clamp(22px, 3dvw, 34px);
  border: 1px solid var(--border);
  background: var(--surface);
  border-radius: 20px;
  .meta { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; color: var(--muted-text); font-size: 14px; font-weight: 770; }
  time { font-variant-numeric: tabular-nums; }
  .tag { padding: 5px 9px; border-radius: 999px; color: #282321; font-size: 12px; font-weight: 870; line-height: 1; }
  .tag.fixed { background: #edb6ac; }
  .tag.feature { background: #b8dba4; }
  .tag.optimized { background: var(--text); color: var(--bg); }
  .tag.privacy { background: #b3c5ef; }
  h2 { margin: 15px 0 8px; font-size: clamp(24px, 3.1dvw, 38px); line-height: 1.12; font-weight: 860; letter-spacing: -.025em; }
  ul { display: grid; gap: 5px; margin: 0; padding-left: 22px; color: var(--text); font-size: clamp(16px, 1.35dvw, 19px); line-height: 1.6; font-weight: 540; }
`;

const Updates: React.FC = () => {
  const { lang } = useTranslation();
  const updates = getUpdatesCopy(lang);
  return (
    <PageShell>
      <PageInner>
        <PageHeading $compact>
          <PageHeadingH1>{sentenceCase(getUpdatesLabel(lang), lang)}</PageHeadingH1>
        </PageHeading>
        <UpdateList>
          {updates.map((update) => (
            <UpdateItem key={update.date}>
              <Meta className="meta"><MetaSpan className={`tag ${update.tone}`}>{update.tag}</MetaSpan><MetaTime>{update.date}</MetaTime></Meta>
              <UpdateItemH2>{update.title}</UpdateItemH2>
              <UpdateItemUl>{update.items.map((item) => <UlLi key={item}>{item}</UlLi>)}</UpdateItemUl>
            </UpdateItem>
          ))}
        </UpdateList>
      </PageInner>
    </PageShell>
  );
};

export default Updates;
