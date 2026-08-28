import React from 'react';
import { PageInner, PageShell } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/locales/casing';
import Hero from '../Home/components/Hero';
import AboutContent from './components/AboutContent';

const About: React.FC = () => {
  const { dict, lang } = useTranslation();
  return (
    <>
      <Hero
        title={sentenceCase(dict.nav.about, lang)}
        description={dict.browserDescription}
        showDownload={false}
      />
      <PageShell as="section" $afterHero>
      <PageInner>
        <AboutContent />
      </PageInner>
      </PageShell>
    </>
  );
};

export default About;
