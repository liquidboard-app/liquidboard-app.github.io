import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '@/contexts/LanguageContext';

const PageWrapper = styled.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 160px 24px 120px;
  min-height: 80vh;

  h1 {
    font-size: clamp(38px, 6vw, 72px);
    letter-spacing: -0.03em;
    line-height: 1.02;
    margin: 0 0 24px;
  }
  p {
    font-size: 18px;
    line-height: 1.7;
    color: var(--muted);
  }
`;

export const About: React.FC = () => {
  const { t } = useTranslation();
  return <PageWrapper><h1>{t('nav.about')}</h1><p>About page content coming soon...</p></PageWrapper>;
};

export const Pricing: React.FC = () => {
  const { t } = useTranslation();
  return <PageWrapper><h1>{t('nav.pricing')}</h1><p>Pricing information coming soon...</p></PageWrapper>;
};

export const Updates: React.FC = () => {
  const { t } = useTranslation();
  return <PageWrapper><h1>{t('nav.update')}</h1><p>Latest updates coming soon...</p></PageWrapper>;
};

export const Help: React.FC = () => {
  const { t } = useTranslation();
  return <PageWrapper><h1>{t('nav.help')}</h1><p>Help center coming soon...</p></PageWrapper>;
};
