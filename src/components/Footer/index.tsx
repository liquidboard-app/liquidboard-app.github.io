import React from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { FooterWrapper, FooterRow } from './styled';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <div className="container">
        <FooterRow>
          <span>© 2026 LiquidBoard</span>
          <span>{t('footer.tag')}</span>
        </FooterRow>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
