import React from 'react';
import { PageHeading, PageInner, PageShell } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/locales/casing';
import PolicyContent from './components/PolicyContent';

const Policy: React.FC = () => {
  const { dict, lang } = useTranslation();
  return (
    <PageShell>
      <PageInner>
        <PageHeading $compact><h1>{sentenceCase(dict.nav.policy, lang)}</h1></PageHeading>
        <PolicyContent />
      </PageInner>
    </PageShell>
  );
};

export default Policy;
