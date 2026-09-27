import React from 'react';
import { Check, Infinity as InfinityIcon, UserRound, UserRoundCog, UserRoundPlus, UsersRound } from 'lucide-react';
import styled, { keyframes } from 'styled-components';
import { GlassCard } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import { inlineCase, sentenceCase } from '@/components/Translations/Global/casing';

const FeatureNumber = styled.span``;
const CardH2 = styled.h2``;
const Price = styled.div``;
const PriceQualifier = styled.span``;
const PriceValue = styled.span``;
const PriceAmount = styled.span``;
const PlanMeta = styled.div``;
const Lifetime = styled.div``;
const Description = styled.p``;
const CardUl = styled.ul``;
const UlLi = styled.li``;
const FeatureLabel = styled.span``;


const infinityFloat = keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-2px) scale(1.1); }
`;

const userFloat = keyframes`
  0%, 100% { transform: translateY(0) rotate(0); }
  45% { transform: translateY(-3px) rotate(-7deg); }
  72% { transform: translateY(1px) rotate(4deg); }
`;

const userAddPop = keyframes`
  0%, 100% { transform: scale(1) rotate(0); }
  45% { transform: scale(1.2) rotate(-8deg); }
  72% { transform: scale(.97) rotate(3deg); }
`;

const usersGather = keyframes`
  0%, 100% { transform: scaleX(1) translateY(0); }
  45% { transform: scaleX(.82) translateY(-3px); }
  72% { transform: scaleX(1.08) translateY(1px); }
`;

const userCogPulse = keyframes`
  0%, 100% { transform: scale(1) rotate(0); }
  42% { transform: scale(1.14) rotate(9deg); }
  72% { transform: scale(.98) rotate(-4deg); }
`;

const highlightSweep = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

const planIcons = [UserRound, UserRoundPlus, UsersRound, UserRoundCog] as const;

const planHighlight = (tone: string) => (
  tone === 'green' ? '#b8dba4'
    : tone === 'blue' ? '#b3c5ef'
      : tone === 'red' ? '#edb6ac'
        : '#fff'
);

const renderFeatureLabel = (feature: string) => feature.split(/(\d+(?:[.,]\d+)*)/g).map((part, index) => (
  /^\d/.test(part)
    ? <FeatureNumber className="feature-number" key={`${part}-${index}`}>{part}</FeatureNumber>
    : <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
));

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  @media (max-width: 1050px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 700px) { gap: 10px; }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const Card = styled(GlassCard)<{ $tone: string }>`
  position: relative;
  min-height: 360px;
  padding: clamp(18px, 2.2dvw, 28px) clamp(22px, 3dvw, 38px);
  overflow: hidden;
  background: var(--surface);
  transition: transform .28s ease, box-shadow .28s ease;
  &:hover { transform: translateY(-6px); box-shadow: 0 28px 65px rgba(75, 47, 33, .14); }
  h2 { position: relative; z-index: 0; display: inline-block; margin: 0; font-size: clamp(28px, 3.4dvw, 46px); line-height: 1.1; font-weight: 860; letter-spacing: -.018em; }
  h2::after { position: absolute; right: 0; bottom: 2%; left: 0; z-index: -1; height: 26%; border-radius: 3px; background: ${({ $tone }) => planHighlight($tone)}; content: ''; transform: scaleX(0); transform-origin: left center; animation: ${highlightSweep} .64s cubic-bezier(.22, 1, .36, 1) var(--plan-highlight-delay, 0ms) forwards; }
  .price { display: flex; flex-wrap: wrap; align-items: baseline; row-gap: 5px; margin: 12px 0 0; font-size: clamp(20px, 1.8dvw, 26px); line-height: 1; letter-spacing: -.018em; }
  .price-value { display: inline-flex; align-items: baseline; white-space: nowrap; }
  .price-amount { font-size: inherit; font-weight: 870; white-space: nowrap; }
  .price-qualifier { color: var(--text); font-size: inherit; font-weight: 770; letter-spacing: -.006em; white-space: nowrap; }
  .lifetime, .description { display: flex; align-items: center; gap: 6px; color: var(--text); font-size: 14px; line-height: 1.45; font-weight: 650; letter-spacing: -.006em; }
  .lifetime svg, .description svg { flex: 0 0 auto; color: var(--text); }
  .lifetime-icon { transform-origin: center; animation: ${infinityFloat} 2.4s ease-in-out infinite; }
  .person-icon { transform-origin: center; }
  &:hover[data-plan-index='0'] .person-icon { animation: ${userFloat} .8s ease-in-out; }
  &:hover[data-plan-index='1'] .person-icon { animation: ${userAddPop} .8s cubic-bezier(.22, 1, .36, 1); }
  &:hover[data-plan-index='2'] .person-icon { animation: ${usersGather} .82s ease-in-out; }
  &:hover[data-plan-index='3'] .person-icon { animation: ${userCogPulse} .86s cubic-bezier(.22, 1, .36, 1); }
  .plan-meta { display: grid; gap: 6px; margin-top: 14px; padding: 14px 0; border-bottom: 1px solid var(--border); }
  .lifetime, .description { min-height: 20px; margin: 0; }
  ul { display: grid; grid-template-columns: 1fr; gap: 9px; margin: 0; padding: 14px 0 0; list-style: none; }
  li { display: flex; gap: 8px; color: var(--text); font-size: 14px; line-height: 1.45; font-weight: 650; }
  li svg { flex: 0 0 auto; margin-top: 2px; color: var(--text); }
  .feature-number { color: inherit; font-weight: 810; }
  @media (max-width: 560px) { min-height: 0; border-radius: 24px; }
  @media (prefers-reduced-motion: reduce) {
    h2::after { transform: scaleX(1); animation: none; }
    .lifetime-icon, .person-icon { animation: none !important; }
  }
`;

const PricingGrid: React.FC = () => {
  const { dict, lang } = useTranslation();
  return (
    <Grid>
      {dict.pricing.plans.map((plan, index) => {
        const PlanIcon = planIcons[index] || UserRound;
        const [pricePrefix = '', priceSuffix = ''] = index > 0
          ? dict.pricing.fromPrice.split('{price}')
          : ['', ''];
        return (
          <Card key={plan.name} $tone={plan.tone} data-plan-index={index} style={{ '--plan-highlight-delay': `${index * 90 + 120}ms` } as React.CSSProperties}>
            <CardH2>{plan.name}</CardH2>
            <Price className="price">
              {pricePrefix.trim() && (
                <PriceQualifier className="price-qualifier" style={{ marginInlineEnd: /\s$/.test(pricePrefix) ? 7 : 0 }}>
                  {pricePrefix.trim()}
                </PriceQualifier>
              )}
              <PriceValue className="price-value">
                <PriceAmount className="price-amount">{plan.price || '—'}</PriceAmount>
                {priceSuffix.trim() && (
                  <PriceQualifier className="price-qualifier" style={{ marginInlineStart: /^\s/.test(priceSuffix) ? 5 : 0 }}>
                    {priceSuffix.trim()}
                  </PriceQualifier>
                )}
              </PriceValue>
            </Price>
            <PlanMeta className="plan-meta">
              <Lifetime className="lifetime"><InfinityIcon className="lifetime-icon" size={16} strokeWidth={2.4} />{sentenceCase(plan.lifetime, lang)}</Lifetime>
              <Description className="description"><PlanIcon className="person-icon" size={16} strokeWidth={2.4} />{sentenceCase(plan.description, lang)}</Description>
            </PlanMeta>
            <CardUl>{plan.features.map((feature) => <UlLi key={feature}><Check size={15} strokeWidth={3} /><FeatureLabel className="feature-label">{renderFeatureLabel(inlineCase(feature, lang))}</FeatureLabel></UlLi>)}</CardUl>
          </Card>
        );
      })}
    </Grid>
  );
};

export default PricingGrid;
