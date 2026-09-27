import styled from 'styled-components';
import React from 'react';
import { PageHeading, PageInner, PageShell } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/components/Translations/Global/casing';
import PolicyContent from './components/PolicyContent';

const PageHeadingH1 = styled.h1``;


const Policy: React.FC = () => {
  const { dict, lang } = useTranslation();
  return (
    <PageShell>
      <PageInner>
        <PageHeading $compact><PageHeadingH1>{sentenceCase(dict.nav.policy, lang)}</PageHeadingH1></PageHeading>
        <PolicyContent />
      </PageInner>
    </PageShell>
  );
};

export default Policy;
