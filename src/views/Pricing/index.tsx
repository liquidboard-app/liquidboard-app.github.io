import React from 'react';
import { PageHeading, PageInner, PageShell } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/locales/casing';
import PricingGrid from './components/PricingGrid';

const Pricing: React.FC = () => {
  const { dict, lang } = useTranslation();
  return (
    <PageShell>
      <PageInner $wide>
        <PageHeading $compact $fullDescription>
          <h1>{sentenceCase(dict.nav.pricing, lang)}</h1>
          <p>{dict.pricing.intro.line1}<br />{dict.pricing.intro.line2}</p>
        </PageHeading>
        <PricingGrid />
      </PageInner>
    </PageShell>
  );
};

export default Pricing;
