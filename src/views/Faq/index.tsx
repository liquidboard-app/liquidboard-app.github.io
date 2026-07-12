import React from 'react';
import { PageHeading, PageInner, PageShell } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/locales/casing';
import HelpContent from './components/HelpContent';

const Faq: React.FC = () => {
  const { dict, lang } = useTranslation();
  return (
    <PageShell>
      <PageInner>
        <PageHeading $compact><h1>{sentenceCase(dict.nav.help, lang)}</h1></PageHeading>
        <HelpContent />
      </PageInner>
    </PageShell>
  );
};

export default Faq;
