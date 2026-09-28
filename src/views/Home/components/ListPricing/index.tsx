import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Check } from 'lucide-react';
import { useTranslation } from '@/contexts/LanguageContext';
import { getListPricingCopy } from '@/components/Translations/Home/listPricingCopy';
import { getListPricingPlanNote } from '@/components/Translations/Home/listPricingPlanNotes';
import { inlineCase } from '@/components/Translations/Global/casing';

const Section = styled.section<{ $tone: string; $index: number }>`
  --pricing-green: #22c55e;
  --pricing-blue: #1478ee;
  --pricing-red: #ed5146;
  padding: 132px var(--page-gutter) 150px;
  background: var(--bg);
  color: var(--text);
  .pricing-intro { max-width: 780px; margin: 0 auto 54px; text-align: center; }
  .pricing-title { margin: 0; font-size: clamp(38px, 4vw, 58px); font-weight: 820; letter-spacing: -.05em; line-height: 1.08; }
  .pricing-intro p { max-width: 690px; margin: 20px auto 0; color: var(--muted-text); font-size: 17px; font-weight: 500; line-height: 1.55; }
  .pricing-cards { display: grid; grid-auto-rows: 1fr; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: stretch; gap: 20px; width: min(680px, 100%); margin: 0 auto; box-sizing: border-box; }
  .plan-card { display: flex; flex-direction: column; width: 100%; min-width: 0; height: 100%; box-sizing: border-box; border-radius: 26px; }
  .free-card { padding: 24px; border: 0; background: var(--surface); box-shadow: var(--shadow-card); }
  :root[data-theme='light'] & .free-card { background: #fff; }
  .free-card .plan-name { display: inline-flex; width: 78px; box-sizing: border-box; justify-content: center; min-height: 50px; align-items: center; margin: -2px 0 23px; padding: 0 18px; border-radius: 999px; background: #fff; color: #080909; font-size: 17px; font-weight: 760; }
  :root[data-theme='light'] & .free-card .plan-name { background: #080909; color: #fff; }
  .paid-card { --plan-check-color: ${({ $tone }: { $tone: string }) => $tone === 'green' ? '#22c55e' : $tone === 'blue' ? '#1478ee' : '#ed5146'}; padding: 24px; background-color: ${({ $tone }: { $tone: string }) => $tone === 'green' ? 'var(--pricing-green)' : $tone === 'blue' ? 'var(--pricing-blue)' : 'var(--pricing-red)'}; color: #fff; transition: background-color .8s cubic-bezier(.22,1,.36,1); }
  .plan-name { margin: 0; font-size: 18px; font-weight: 720; }
  .plan-price { margin: 0 0 22px; font-size: clamp(32px, 3.2vw, 44px); font-weight: 780; letter-spacing: -.045em; line-height: 1.05; }
  .plan-divider { height: 1px; margin: -5px 0 18px; border: 0; background: color-mix(in srgb, var(--text) 9%, transparent); }
  .paid-card .plan-divider { background: rgba(255,255,255,.18); }
  .plan-features { display: grid; gap: 13px; margin: 0; padding: 0; list-style: none; }
  .plan-note { flex: 0 0 80px; box-sizing: border-box; margin: 24px 0 0; padding-top: 18px; border-top: 1px solid color-mix(in srgb, var(--text) 12%, transparent); font-size: 14px; line-height: 1.45; font-weight: 600; }
  .paid-card .plan-note { border-color: rgba(255,255,255,.22); }
  .plan-features li { display: flex; align-items: center; gap: 11px; font-size: 16px; line-height: 1.4; }
  .plan-features strong { font-weight: 720; }
  .check-badge { display: grid; width: 20px; height: 20px; flex: 0 0 20px; place-items: center; border-radius: 50%; background: #080909; color: #fff; }
  .check-badge svg { width: 10px; height: 10px; }
  .free-card .check-badge { background: var(--text); color: var(--bg); }
  .paid-card .check-badge { background: #fff; color: var(--plan-check-color); }
  .plan-tabs { position: relative; display: grid; width: max-content; grid-template-columns: repeat(3, minmax(68px, 1fr)); gap: 2px; margin: -2px 0 23px; padding: 4px; border-radius: 999px; background: rgba(0,0,0,.2); isolation: isolate; }
  .plan-tab-indicator { position: absolute; z-index: 0; top: 4px; bottom: 4px; left: 4px; width: calc((100% - 8px) / 3); border-radius: 999px; background: ${({ $tone }: { $tone: string }) => $tone === 'green' ? '#22c55e' : $tone === 'blue' ? '#1478ee' : '#ed5146'}; transform: translateX(${({ $index }: { $index: number }) => `${$index * 100}%`}); transition: transform .38s cubic-bezier(.22,1,.36,1), background-color .8s cubic-bezier(.22,1,.36,1); }
  .plan-tab { position: relative; z-index: 1; min-height: 42px; padding: 0 12px; border: 0; border-radius: 999px; background: transparent; color: rgba(255,255,255,.72); font: inherit; font-size: 17px; font-weight: 760; cursor: pointer; -webkit-tap-highlight-color: transparent; }
  .plan-tab[aria-selected='true'] { color: #fff; }
  .plan-content { animation: pricing-reveal .58s cubic-bezier(.22,1,.36,1) both; }
  .plan-content.is-exiting { animation: pricing-hide .18s ease-in both; pointer-events: none; }
  @keyframes pricing-reveal { from { opacity: 0; filter: blur(14px); transform: translateY(8px); } to { opacity: 1; filter: blur(0); transform: translateY(0); } }
  @keyframes pricing-hide { from { opacity: 1; filter: blur(0); transform: translateY(0); } to { opacity: 0; filter: blur(12px); transform: translateY(-4px); } }
  @media (max-width: 760px) {
    padding-block: 92px 104px;
    .pricing-intro { margin-bottom: 34px; }
    .pricing-title { font-size: clamp(28px, 6vw, 36px); line-height: 1.12; }
    .pricing-intro p { margin-top: 15px; font-size: 14px; line-height: 1.45; }
    .pricing-cards { grid-template-columns: 1fr; gap: 12px; }
    .free-card, .paid-card { padding: 20px; border-radius: 22px; }
    .plan-price { margin-bottom: 18px; font-size: 36px; }
    .plan-features { gap: 11px; }
  }
  @media (prefers-reduced-motion: reduce) { .plan-tab-indicator, .paid-card { transition: none; } .plan-content, .plan-content.is-exiting { animation: none; } }
`;

const ListPricing: React.FC = () => {
  const { dict, lang } = useTranslation();
  const copy = getListPricingCopy(lang);
  const [activeName, setActiveName] = useState('Plus');
  const [isContentExiting, setIsContentExiting] = useState(false);
  const contentTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (contentTimeout.current) clearTimeout(contentTimeout.current);
  }, []);
  const freePlan = dict.pricing.plans.find((plan) => plan.name === 'Free') ?? dict.pricing.plans[0];
  const paidPlans = dict.pricing.plans.filter((plan) => ['Plus', 'Pro', 'Max'].includes(plan.name));
  const activeIndex = Math.max(0, paidPlans.findIndex((plan) => plan.name === activeName));
  const activePlan = paidPlans[activeIndex] ?? paidPlans[0];
  const activeTone = activePlan?.tone ?? 'green';
  const renderPlanFeatures = (plan: typeof freePlan, highlightFrom = 0) => plan.features.map((feature, index) => (
    <li key={`${plan.name}-${feature}`}>
      <span className="check-badge" aria-hidden="true"><Check strokeWidth={3} /></span>
      <span>{index >= highlightFrom ? <strong>{inlineCase(feature, lang)}</strong> : inlineCase(feature, lang)}</span>
    </li>
  ));

  return <Section id="pricing" aria-labelledby="list-pricing-title" $tone={activeTone} $index={activeIndex}>
    <header className="pricing-intro">
      <h2 className="pricing-title" id="list-pricing-title">{copy.title}</h2>
      <p>{copy.description}</p>
    </header>
    <div className="pricing-cards">
      <article className="plan-card free-card">
        <h3 className="plan-name">{freePlan.name}</h3>
        <p className="plan-price">{freePlan.price || '—'}</p>
        <hr className="plan-divider" />
        <ul className="plan-features">{renderPlanFeatures(freePlan)}</ul>
        <p className="plan-note">{getListPricingPlanNote(lang, 'Free')}</p>
      </article>
      {activePlan && <article className="plan-card paid-card">
        <div className="plan-tabs" role="tablist" aria-label="Upgrade plan">
          <span className="plan-tab-indicator" aria-hidden="true" />
          {paidPlans.map((plan) => <button
            key={plan.name}
            className="plan-tab"
            type="button"
            role="tab"
            aria-selected={activePlan.name === plan.name}
            onClick={() => {
              if (plan.name === activeName) return;
              if (contentTimeout.current) clearTimeout(contentTimeout.current);
              setIsContentExiting(true);
              contentTimeout.current = setTimeout(() => {
                setActiveName(plan.name);
                setIsContentExiting(false);
                contentTimeout.current = null;
              }, 180);
            }}
          >{plan.name}</button>)}
        </div>
        <div className={`plan-content${isContentExiting ? ' is-exiting' : ''}`} key={activePlan.name}>
          <p className="plan-price">{activePlan.price || '—'}</p>
          <hr className="plan-divider" />
          <ul className="plan-features">{renderPlanFeatures(activePlan)}</ul>
        </div>
        <p className="plan-note">{getListPricingPlanNote(lang, activePlan.name)}</p>
      </article>}
    </div>
  </Section>;
};

export default ListPricing;
