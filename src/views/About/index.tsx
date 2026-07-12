import React from 'react';
import { PageHeading, PageInner, PageShell } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/locales/casing';
import AboutContent from './components/AboutContent';

const About: React.FC = () => {
  const { dict, lang } = useTranslation();
  return (
    <PageShell>
      <PageInner>
        <PageHeading $compact $tight><h1>{sentenceCase(dict.nav.about, lang)}</h1></PageHeading>
        <AboutContent />
      </PageInner>
    </PageShell>
  );
};

export default About;
