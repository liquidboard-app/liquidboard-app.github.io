import styled from 'styled-components';
import React from 'react';
import { PageHeading, PageInner, PageShell } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/components/Translations/Global/casing';
import HelpContent, { HelpSection } from './components/HelpContent';

const PageHeadingH1 = styled.h1``;


const Faq: React.FC<{ section?: HelpSection }> = ({ section = 'faq' }) => {
  const { dict, lang } = useTranslation();
  return (
    <PageShell>
      <PageInner>
        <PageHeading $compact><PageHeadingH1>{sentenceCase(dict.nav.help, lang)}</PageHeadingH1></PageHeading>
        <HelpContent section={section} />
      </PageInner>
    </PageShell>
  );
};

export default Faq;
