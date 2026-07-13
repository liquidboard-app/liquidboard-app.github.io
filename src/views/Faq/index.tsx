import React from 'react';
import { PageHeading, PageInner, PageShell } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/locales/casing';
import HelpContent, { HelpSection } from './components/HelpContent';

const Faq: React.FC<{ section?: HelpSection }> = ({ section = 'faq' }) => {
  const { dict, lang } = useTranslation();
  return (
    <PageShell>
      <PageInner>
        <PageHeading $compact><h1>{sentenceCase(dict.nav.help, lang)}</h1></PageHeading>
        <HelpContent section={section} />
      </PageInner>
    </PageShell>
  );
};

export default Faq;
