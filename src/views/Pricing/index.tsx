import React from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { PageWrapper } from '../styled';

const Pricing: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <h1>{t('nav.pricing')}</h1>
      <p>Pricing information coming soon...</p>
    </PageWrapper>
  );
};

export default Pricing;
