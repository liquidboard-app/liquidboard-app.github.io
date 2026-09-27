import styled from 'styled-components';
import React from 'react';
import { PageHeading, PageInner, PageShell } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/components/Translations/Global/casing';
import AboutContent from './components/AboutContent';

const PageHeadingH1 = styled.h1``;


const About: React.FC = () => {
  const { dict, lang } = useTranslation();
  return (
    <PageShell>
      <PageInner>
        <PageHeading $compact>
          <PageHeadingH1>{sentenceCase(dict.nav.about, lang)}</PageHeadingH1>
        </PageHeading>
        <AboutContent />
      </PageInner>
    </PageShell>
  );
};

export default About;
