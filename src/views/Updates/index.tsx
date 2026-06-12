import React from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { PageWrapper } from '../styled';

const Updates: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>

      <p>Latest updates coming soon...</p>
    </PageWrapper>
  );
};

export default Updates;
