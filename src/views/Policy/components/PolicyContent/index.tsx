import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Tab, Tabs } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/locales/casing';
import { getPolicyComponents } from '../../locales';

type PolicyComponents = {
  Security: React.ComponentType;
  Privacy: React.ComponentType;
  Terms: React.ComponentType;
  Payment: React.ComponentType;
};

const Content = styled.div`
  padding: clamp(24px, 5dvw, 58px);
  h2 { margin: 34px 0 12px; color: #332a26; font-size: 23px; line-height: 1.25; letter-spacing: -.025em; }
  h2:first-child { margin-top: 0; }
  p, li { color: #665249; font-size: clamp(17px, 1.35dvw, 20px); line-height: 1.58; font-weight: 540; letter-spacing: -.012em; }
  p { margin: 0 0 15px; }
  ul { display: grid; gap: 8px; padding-left: 22px; }
  strong { color: #382e29; }
  a {
    margin-inline: .2em;
    color: #6f4fc7;
    font-weight: 700;
    overflow-wrap: anywhere;
    border-bottom: 1px solid currentColor;
  }
  a[href^='mailto:'] {
    display: inline-flex;
    align-items: center;
    min-width: 0;
    max-width: 100%;
    gap: 5px;
  }
  a[href^='mailto:']::before {
    width: 14px;
    height: 14px;
    flex: 0 0 14px;
    background: currentColor;
    content: '';
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z'/%3E%3C/svg%3E") center / contain no-repeat;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z'/%3E%3C/svg%3E") center / contain no-repeat;
  }
  a[href^='https://reportaproblem.apple.com'] {
    display: inline-flex;
    align-items: center;
    min-width: 0;
    max-width: 100%;
    gap: 5px;
  }
  a[href^='https://reportaproblem.apple.com']::before {
    width: 14px;
    height: 14px;
    flex: 0 0 14px;
    background: currentColor;
    content: '';
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' fill-rule='evenodd' d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM9 12c0-4.4 1.5-8 3-8s3 3.6 3 8-1.5 8-3 8-3-3.6-3-8ZM4.1 11h15.8v2H4.1z'/%3E%3C/svg%3E") center / contain no-repeat;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' fill-rule='evenodd' d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM9 12c0-4.4 1.5-8 3-8s3 3.6 3 8-1.5 8-3 8-3-3.6-3-8ZM4.1 11h15.8v2H4.1z'/%3E%3C/svg%3E") center / contain no-repeat;
  }
  @media (max-width: 650px) { h2 { font-size: 20px; } p, li { font-size: 16px; line-height: 1.55; } }
`;

const PolicyContent: React.FC = () => {
  const { lang, dict } = useTranslation();
  const [components, setComponents] = useState<PolicyComponents | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    getPolicyComponents(lang).then((module) => {
      if (active) setComponents(module as PolicyComponents);
    });
    return () => { active = false; };
  }, [lang]);

  useLayoutEffect(() => {
    contentRef.current?.querySelectorAll<HTMLElement>('h2').forEach((heading) => {
      heading.textContent = sentenceCase(heading.textContent ?? '', lang);
    });
  }, [components, lang]);

  if (!components) return null;
  const { Security, Privacy, Terms, Payment } = components;

  return (
    <>
      <Tabs>
        <Tab to="/policy/data-security">{sentenceCase(dict.policy?.dataSecurity || 'Data Security', lang)}</Tab>
        <Tab to="/policy/privacy">{sentenceCase(dict.policy?.privacy || 'Privacy', lang)}</Tab>
        <Tab to="/policy/terms-of-use">{sentenceCase(dict.policy?.terms || 'Terms of Use', lang)}</Tab>
        <Tab to="/policy/payment-and-refund">{sentenceCase(dict.policy?.payment || 'Payment & Refund', lang)}</Tab>
      </Tabs>
      <Routes>
        <Route path="" element={<Navigate to="/policy/data-security" replace />} />
        <Route path="data-security" element={<Content ref={contentRef}><Security /></Content>} />
        <Route path="privacy" element={<Content ref={contentRef}><Privacy /></Content>} />
        <Route path="terms-of-use" element={<Content ref={contentRef}><Terms /></Content>} />
        <Route path="payment-and-refund" element={<Content ref={contentRef}><Payment /></Content>} />
      </Routes>
    </>
  );
};

export default PolicyContent;
