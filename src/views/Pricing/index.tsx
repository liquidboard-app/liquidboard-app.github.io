import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '@/contexts/LanguageContext';
import { PageWrapper } from '../styled';

const CHECKMARK_PATH =
  'M32.4727 87.9053C34.6143 87.9053 36.3076 86.959 37.5029 85.1162L84.5684 11.0068C85.4648 9.5625 85.8135 8.4668 85.8135 7.32129C85.8135 4.58203 84.0205 2.78906 81.2812 2.78906C79.2891 2.78906 78.1934 3.43652 76.998 5.3291L32.2734 76.5996L9.06445 46.2188C7.81934 44.4756 6.57422 43.7783 4.78125 43.7783C1.94238 43.7783 0 45.7207 0 48.46C0 49.6055 0.498047 50.9004 1.44434 52.0957L27.293 85.0166C28.7871 86.959 30.3311 87.9053 32.4727 87.9053Z';

const PricingShell = styled(PageWrapper)`
  max-width: 1100px;
  padding-top: 176px;

  @media (max-width: 900px) {
    padding-top: 104px;
  }
`;



const Intro = styled.p`
  max-width: 1100px;
  margin: 0 auto 40px;
  color: var(--muted);
  text-align: center;

  @media (max-width: 860px) {
    margin-bottom: 28px;
    font-size: 15px;
    line-height: 1.55;
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

const PricingCard = styled.article`
  min-height: 100%;
  padding: 16px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  @media (max-width: 900px) {
    padding: 16px;
    border-radius: 20px;
  }
`;

const PlanHeading = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

const PlanName = styled.h2<{ $tone: string }>`
  margin: 0;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.03em;
  font-weight: 760;
  color: ${({ $tone }) => ($tone === 'white' ? '#fff' : 'transparent')};
  background: ${({ $tone }) =>
    $tone === 'white'
      ? 'none'
      : $tone === 'green'
        ? 'linear-gradient(135deg, #8cff96 0%, #38e66f 52%, #00c76f 100%)'
        : $tone === 'blue'
          ? 'linear-gradient(135deg, #7fc4ff 0%, #4f86ff 50%, #4459ff 100%)'
          : 'linear-gradient(135deg, #ff9b8f 0%, #ff5a67 50%, #ff274d 100%)'};
  -webkit-background-clip: text;
  background-clip: text;
`;

const PlanPrice = styled.div`
  font-size: clamp(22px, 2.2vw, 28px);
  line-height: 1.1;
  font-weight: 720;
  color: #fff;
  white-space: nowrap;
  margin-top: 12px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Lifetime = styled.div`
  margin-top: 8px;
  padding: 0;
  font-size: 11px;
  line-height: 1;
  font-weight: 560;
  color: rgba(255, 255, 255, 0.64);
  white-space: nowrap;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 16px 0 18px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.08) 100%);
`;

const PlanDescription = styled.div`
  margin: 0 0 18px;
  font-size: 14px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.62);

  @media (max-width: 860px) {
    font-size: 13px;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 860px) {
    gap: 10px;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const CheckIcon = styled.span`
  flex: 0 0 14px;
  width: 14px;
  height: 14px;
  margin-top: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 14px;
    height: 14px;
    display: block;
  }
`;



const Pricing: React.FC = () => {
  const { lang, dict } = useTranslation();

  const currentPlans = dict.pricing.plans;

  return (
    <PricingShell>
      <Intro>
        {dict.pricing.intro.line1}
        <br />
        {dict.pricing.intro.line2}
      </Intro>

      <PricingGrid>
        {currentPlans.map((plan) => (
          <PricingCard key={`${lang}-${plan.name}`}>
            <PlanHeading>
              <PlanName $tone={plan.tone}>{plan.name}</PlanName>
            </PlanHeading>

            {plan.price ? (
              <PlanPrice>{plan.price}</PlanPrice>
            ) : (
              <PlanPrice style={{ opacity: 0 }}>$0</PlanPrice>
            )}

            <Lifetime>{plan.lifetime}</Lifetime>

            <Divider />

            {plan.description ? <PlanDescription>{plan.description}</PlanDescription> : null}

            <FeatureList>
              {plan.features.map((feature) => (
                <FeatureItem key={`${plan.name}-${feature}`}>
                  <CheckIcon aria-hidden="true">
                    <svg viewBox="0 0 85.8135 87.9053" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d={CHECKMARK_PATH} fill="white" fillOpacity="0.85" />
                    </svg>
                  </CheckIcon>
                  <span>{feature}</span>
                </FeatureItem>
              ))}
            </FeatureList>
          </PricingCard>
        ))}
      </PricingGrid>
    </PricingShell>
  );
};

export default Pricing;
