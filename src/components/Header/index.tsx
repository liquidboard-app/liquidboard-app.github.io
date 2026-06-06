import React, { useState } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  HeaderWrapper,
  Brand,
  Logo,
  Menu,
  MenuItem,
  Actions,
  Popwrap,
  IconButton,
  Popover,
  PopoverLabel,
  PopoverItem,
} from './styled';

const Header: React.FC = () => {
  const { lang, changeLang, t } = useTranslation();
  const [langOpen, setLangOpen] = useState<boolean>(false);

  const toggleLangMenu = () => setLangOpen(!langOpen);

  const handleLangChange = (newLang: string) => {
    changeLang(newLang);
    setLangOpen(false);
  };

  return (
    <HeaderWrapper>
      <Brand to="/" aria-label="LiquidBoard home">
        <Logo className="brand__logo" />
        <span>LiquidBoard</span>
      </Brand>

      <Menu aria-label="Primary">
        <MenuItem to="/" end>{t('nav.home')}</MenuItem>
        <MenuItem to="/about">{t('nav.about')}</MenuItem>
        <MenuItem to="/pricing">{t('nav.pricing')}</MenuItem>
        <MenuItem to="/updates">{t('nav.update')}</MenuItem>
        <MenuItem to="/help">{t('nav.help')}</MenuItem>
      </Menu>

      <Actions>
        <Popwrap>
          <IconButton onClick={toggleLangMenu} aria-label="Language" aria-haspopup="true" aria-expanded={langOpen}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </IconButton>
          <Popover $open={langOpen} role="menu">
            <PopoverLabel>{t('lang.label')}</PopoverLabel>
            <PopoverItem 
              $selected={lang === 'en'} 
              onClick={() => handleLangChange('en')}
              role="menuitemradio"
            >
              <span>English</span>
              <svg className="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </PopoverItem>
            <PopoverItem 
              $selected={lang === 'vi'} 
              onClick={() => handleLangChange('vi')}
              role="menuitemradio"
            >
              <span>Tiếng Việt</span>
              <svg className="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </PopoverItem>
          </Popover>
        </Popwrap>
      </Actions>
    </HeaderWrapper>
  );
};

export default Header;
