import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from '@/contexts/LanguageContext';
import { PageWrapper } from '../styled';
import { getAboutComponent } from './content';

const AboutContent = styled.div`
  display: grid;
  gap: 22px;

  p {
    margin: 0;
  }

  a {
    color: var(--text);
    font-weight: 650;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.34);
  }

  a:hover {
    border-bottom-color: rgba(255, 255, 255, 0.78);
  }
`;

const About: React.FC = () => {
  const { lang } = useTranslation();
  const [Content, setContent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    let mounted = true;
    getAboutComponent(lang).then((module) => {
      if (!mounted) return;
      const ComponentName = `AboutContent_${lang.replace(/-/g, '_')}`;
      const Component = module[ComponentName] || module.AboutContent_en || module.AboutContent_vi || Object.values(module)[0];
      setContent(() => Component as React.ComponentType);
    }).catch(err => {
      console.error(err);
      getAboutComponent('en').then((module) => {
        if (!mounted) return;
        setContent(() => module.AboutContent_en as React.ComponentType);
      });
    });
    return () => { mounted = false; };
  }, [lang]);

  return (
    <PageWrapper>
      <AboutContent>
        {Content && <Content />}
      </AboutContent>
    </PageWrapper>
  );
};

export default About;
