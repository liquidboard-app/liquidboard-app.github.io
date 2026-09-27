import styled from 'styled-components';
import React from 'react';
import { PageHeading, PageInner, PageShell } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/components/Translations/Global/casing';
import PricingGrid from './components/PricingGrid';

const PageHeadingH1 = styled.h1``;
const PageHeadingP = styled.p``;
const PBr = styled.br``;


const Pricing: React.FC = () => {
  const { dict, lang } = useTranslation();
  return (
    <PageShell>
      <PageInner $wide>
        <PageHeading $compact $fullDescription>
          <PageHeadingH1>{sentenceCase(dict.nav.pricing, lang)}</PageHeadingH1>
          <PageHeadingP>{dict.pricing.intro.line1}<PBr />{dict.pricing.intro.line2}</PageHeadingP>
        </PageHeading>
        <PricingGrid />
      </PageInner>
    </PageShell>
  );
};

export default Pricing;
