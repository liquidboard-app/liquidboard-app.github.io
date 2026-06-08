import React from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { PageWrapper } from '../styled';

const Help: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <h1>{t('nav.help')}</h1>
      <p>Help center coming soon...</p>
    </PageWrapper>
  );
};

export default Help;
