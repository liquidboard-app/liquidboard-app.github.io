import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from '@/contexts/LanguageContext';
import { PageWrapper } from '../styled';
import { getFaqs } from './content';

const TabContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

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

const DocsPlaceholder = styled.div`
  padding: 40px 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;

  @media (max-width: 860px) {
    font-size: 14px;
  }
`;

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 860px) {
    gap: 12px;
    margin-top: 20px;
  }
`;

const FaqCard = styled.div`
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.035);
  overflow: hidden;
  transition: all 0.3s ease;
`;

const FaqHeader = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ $isOpen }) => ($isOpen ? 'rgba(255, 255, 255, 0.02)' : 'transparent')};
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }

  @media (max-width: 860px) {
    padding: 16px 18px;
    font-size: 14px;
  }
`;

const IconWrapper = styled.span<{ $isOpen: boolean }>`
  flex-shrink: 0;
  margin-left: 16px;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FaqGrid = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              padding 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  padding: ${({ $isOpen }) => ($isOpen ? '12px 24px 24px' : '0 24px')};

  @media (max-width: 860px) {
    padding: ${({ $isOpen }) => ($isOpen ? '8px 18px 18px' : '0 18px')};
  }
`;

const FaqContentInner = styled.div`
  overflow: hidden;
  
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
`;

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FaqCard>
      <FaqHeader $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {question}
        <IconWrapper $isOpen={isOpen}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </IconWrapper>
      </FaqHeader>
      <FaqGrid $isOpen={isOpen}>
        <FaqContentInner>
          <p>{answer}</p>
        </FaqContentInner>
      </FaqGrid>
    </FaqCard>
  );
};

const Help: React.FC = () => {
  const { lang, dict } = useTranslation();
  const [faqs, setFaqs] = useState<{q: string; a: string}[]>([]);

  useEffect(() => {
    getFaqs(lang).then(setFaqs);
  }, [lang]);

  return (
    <PageWrapper>
      <TabContainer>
        <TabLink to="/help/faq">{dict.help?.faqTab || 'FAQ'}</TabLink>
        <TabLink to="/help/docs">{dict.help?.docsTab || 'Docs'}</TabLink>
      </TabContainer>

      <Routes>
        <Route path="/" element={<Navigate to="/help/faq" replace />} />
        <Route path="faq" element={
          <FaqContainer>
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </FaqContainer>
        } />
        <Route path="docs" element={
          <DocsPlaceholder>
            {dict.help?.docsPlaceholder}
          </DocsPlaceholder>
        } />
      </Routes>
    </PageWrapper>
  );
};

export default Help;
