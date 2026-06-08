import React from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { PageWrapper } from '../styled';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <h1>{t('nav.about')}</h1>
      <p>About page content coming soon...</p>
    </PageWrapper>
  );
};

export default About;
