import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from '@/contexts/LanguageContext';
import { PageWrapper } from '../styled';
import { getPolicyComponents } from './content';

const TabContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;

  @media (max-width: 860px) {
    gap: 10px;
    margin-bottom: 24px;
    padding-bottom: 20px;
  }
`;

const TabLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  padding: 8px 20px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: white;
    border-color: rgba(255, 255, 255, 0.3);
  }

  &.active {
    color: #000;
    background: white;
    border-color: white;
  }

  @media (max-width: 860px) {
    font-size: 14px;
    padding: 7px 16px;
  }
`;

const PolicyContent = styled.div`
  display: grid;
  gap: 22px;

  h2 {
    margin: 32px 0 0 0;
    font-size: 20px;
    font-weight: 600;
    color: white;

    &:first-child {
      margin-top: 0;
    }

    @media (max-width: 860px) {
      margin: 24px 0 0 0;
      font-size: 18px;
    }
  }

  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);

    @media (max-width: 860px) {
      font-size: 14px;
      line-height: 1.55;
    }
  }

  ul {
    margin: 0;
    padding-left: 20px;
    display: grid;
    gap: 8px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
    line-height: 1.6;

    @media (max-width: 860px) {
      font-size: 14px;
      line-height: 1.55;
    }
  }

  li {
    margin: 0;
  }

  strong {
    color: white;
    font-weight: 600;
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

const Policy: React.FC = () => {
  const { lang, dict } = useTranslation();
  const [Components, setComponents] = useState<any>(null);

  useEffect(() => {
    getPolicyComponents(lang).then(setComponents);
  }, [lang]);

  if (!Components) return null;

  return (
    <PageWrapper>
      <TabContainer>
        <TabLink to="/policy/data-security">
          {dict.policy?.dataSecurity}
        </TabLink>
        <TabLink to="/policy/privacy">
          {dict.policy?.privacy}
        </TabLink>
        <TabLink to="/policy/terms-of-use">
          {dict.policy?.terms}
        </TabLink>
        <TabLink to="/policy/payment-and-refund">
          {dict.policy?.payment}
        </TabLink>
      </TabContainer>

      <Routes>
        <Route path="/" element={<Navigate to="/policy/data-security" replace />} />
        <Route path="data-security" element={
          <PolicyContent>
            <Components.Security />
          </PolicyContent>
        } />
        <Route path="privacy" element={
          <PolicyContent>
            <Components.Privacy />
          </PolicyContent>
        } />
        <Route path="terms-of-use" element={
          <PolicyContent>
            <Components.Terms />
          </PolicyContent>
        } />
        <Route path="payment-and-refund" element={
          <PolicyContent>
            <Components.Payment />
          </PolicyContent>
        } />
      </Routes>
    </PageWrapper>
  );
};

export default Policy;
