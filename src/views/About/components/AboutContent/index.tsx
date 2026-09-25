import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/locales/casing';
import { getAboutComponent } from '../../locales';

const Content = styled.div`
  padding: clamp(18px, 3.5dvw, 38px);
  p { max-width: 667px; margin: 0 auto 20px; color: var(--text); font-size: clamp(16px, 1.2vw, 19px); line-height: 1.5; font-weight: 500; letter-spacing: -.02em; }
  p:last-child { margin-bottom: 0; }
  a {
    display: inline-flex;
    align-items: center;
    min-width: 0;
    max-width: 100%;
    margin: .5em 0 0;
    gap: 7px;
    color: var(--accent);
    font: inherit;
    font-weight: 750;
    line-height: 1.2;
    overflow-wrap: anywhere;
    text-decoration: none;
    transition: color .18s ease, transform .18s ease;
  }
  a:hover {
    color: color-mix(in srgb, var(--accent) 78%, var(--text));
    transform: translateY(-1px);
  }
  a[href$='/data-security']::before,
  a[href$='/privacy']::before {
    display: inline-block;
    width: 14px;
    height: 14px;
    flex: 0 0 14px;
    background: currentColor;
    content: '';
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: contain;
  }
  a[href$='/data-security']::before {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='5' y='10' width='14' height='11' rx='2' fill='black'/%3E%3Cpath d='M8 10V7a4 4 0 0 1 8 0v3' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='5' y='10' width='14' height='11' rx='2' fill='black'/%3E%3Cpath d='M8 10V7a4 4 0 0 1 8 0v3' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  }
  a[href$='/privacy']::before {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2 20 6v5c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V6l8-4Z' fill='black'/%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2 20 6v5c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V6l8-4Z' fill='black'/%3E%3C/svg%3E");
  }
  @media (max-width: 1199px) { p { font-size: 16px; } }
  @media (max-width: 700px) { p { font-size: 15px; line-height: 1.42; } }
`;

const AboutContent: React.FC = () => {
  const { lang } = useTranslation();
  const [LocalizedContent, setLocalizedContent] = useState<React.ComponentType | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    getAboutComponent(lang).then((module) => {
      if (!active) return;
      const contentModule = module as unknown as Record<string, React.ComponentType | undefined>;
      const componentName = `AboutContent_${lang.replace(/-/g, '_')}`;
      const component = contentModule[componentName]
        || contentModule.default
        || contentModule.AboutContent_en
        || Object.values(contentModule)[0];
      setLocalizedContent(() => component || null);
    });
    return () => { active = false; };
  }, [lang]);

  useLayoutEffect(() => {
    contentRef.current?.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
      link.textContent = sentenceCase(link.textContent ?? '', lang);
    });
  }, [LocalizedContent, lang]);

  return <Content ref={contentRef}>{LocalizedContent ? <LocalizedContent /> : null}</Content>;
};

export default AboutContent;
