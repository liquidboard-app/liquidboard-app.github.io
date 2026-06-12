import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useTranslation } from '@/contexts/LanguageContext';
import { PageWrapper } from '../styled';

const CHECKMARK_PATH =
  'M32.4727 87.9053C34.6143 87.9053 36.3076 86.959 37.5029 85.1162L84.5684 11.0068C85.4648 9.5625 85.8135 8.4668 85.8135 7.32129C85.8135 4.58203 84.0205 2.78906 81.2812 2.78906C79.2891 2.78906 78.1934 3.43652 76.998 5.3291L32.2734 76.5996L9.06445 46.2188C7.81934 44.4756 6.57422 43.7783 4.78125 43.7783C1.94238 43.7783 0 45.7207 0 48.46C0 49.6055 0.498047 50.9004 1.44434 52.0957L27.293 85.0166C28.7871 86.959 30.3311 87.9053 32.4727 87.9053Z';

const PricingShell = styled(PageWrapper)`
  padding-top: 176px;

  h1 {
    margin-bottom: 8px;
  }

  @media (max-width: 900px) {
    padding-top: 148px;
  }
`;



const Intro = styled.p`
  max-width: 760px;
  margin: 0 0 40px;
  color: var(--muted);
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const PricingCard = styled.article`
  min-height: 100%;
  padding: 20px;
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
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`;

const PlanName = styled.h2<{ $tone: string }>`
  margin: 0;
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1;
  letter-spacing: -0.03em;
  font-weight: 760;
  color: ${({ $tone }) => ($tone === 'white' ? '#fff' : 'transparent')};
  background: ${({ $tone }) =>
    $tone === 'white'
      ? 'none'
      : $tone === 'green'
        ? 'linear-gradient(135deg, #d8ff7d 0%, #62f86d 55%, #00c76f 100%)'
        : $tone === 'blue'
          ? 'linear-gradient(135deg, #9ddcff 0%, #58a9ff 45%, #4459ff 100%)'
          : 'linear-gradient(135deg, #ffcfb2 0%, #ff7262 48%, #ff274d 100%)'};
  -webkit-background-clip: text;
  background-clip: text;
`;

const PlanPrice = styled.div`
  font-size: clamp(20px, 2vw, 28px);
  line-height: 1.1;
  font-weight: 720;
  color: #fff;
  white-space: nowrap;
  margin-top: 8px;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 8px;
`;

const Lifetime = styled.div`
  font-size: 13px;
  line-height: 1.35;
  font-weight: 560;
  color: rgba(255, 255, 255, 0.84);
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px 0 18px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.08) 100%);
`;

const PlanDescription = styled.div`
  margin: 0 0 18px;
  font-size: 16px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.62);
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
`;

const CheckIcon = styled.span`
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
  margin-top: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
`;

type Plan = {
  name: string;
  tone: 'white' | 'green' | 'blue' | 'red';
  lifetime: string;
  price?: string;
  description?: string;
  features: string[];
};

const Pricing: React.FC = () => {
  const { lang, t } = useTranslation();

  const plans = useMemo<Record<'en' | 'vi', Plan[]>>(
    () => ({
      en: [
        {
          name: 'Free',
          tone: 'white',
          lifetime: 'Lifetime',
          price: '$0',
          description: 'For trial users',
          features: ['25 Texts', '25 Images', '25 Stickers', '2 Groups Per Type', '2 Pins Per Group'],
        },
        {
          name: 'Plus',
          tone: 'green',
          lifetime: 'Lifetime',
          price: '$2.99',
          description: 'For casual users',
          features: ['100 Texts', '100 Images', '100 Stickers', '5 Groups Per Type', '5 Pins Per Group'],
        },
        {
          name: 'Pro',
          tone: 'blue',
          lifetime: 'Lifetime',
          price: '$5.99',
          description: 'For multitasking users',
          features: ['250 Texts', '250 Images', '250 Stickers', '15 Groups Per Type', '15 Pins Per Group'],
        },
        {
          name: 'Max',
          tone: 'red',
          lifetime: 'Lifetime',
          price: '$10.99',
          description: 'For professional users',
          features: ['500 Texts', '500 Images', '500 Stickers', '40 Groups Per Type', '40 Pins Per Group'],
        },
      ],
      vi: [
        {
          name: 'Free',
          tone: 'white',
          lifetime: 'Trọn Đời',
          price: '$0',
          description: 'Cho người dùng Trải Nghiệm',
          features: ['25 Văn Bản', '25 Ảnh', '25 Nhãn Dán', '2 Nhóm Mỗi Loại', '2 Ghim Mỗi Nhóm'],
        },
        {
          name: 'Plus',
          tone: 'green',
          lifetime: 'Trọn Đời',
          price: '₫79.000',
          description: 'Cho người dùng Cơ Bản',
          features: ['100 Văn Bản', '100 Ảnh', '100 Nhãn Dán', '5 Nhóm Mỗi Loại', '5 Ghim Mỗi Nhóm'],
        },
        {
          name: 'Pro',
          tone: 'blue',
          lifetime: 'Trọn Đời',
          price: '₫159.000',
          description: 'Cho người dùng Đa Tác Vụ',
          features: ['250 Văn Bản', '250 Ảnh', '250 Nhãn Dán', '15 Nhóm Mỗi Loại', '15 Ghim Mỗi Nhóm'],
        },
        {
          name: 'Max',
          tone: 'red',
          lifetime: 'Trọn Đời',
          price: '₫289.000',
          description: 'Cho người dùng Chuyên Nghiệp',
          features: ['500 Văn Bản', '500 Ảnh', '500 Nhãn Dán', '40 Nhóm Mỗi Loại', '40 Ghim Mỗi Nhóm'],
        },
      ],
    }),
    []
  );

  const currentPlans = lang === 'vi' ? plans.vi : plans.en;

  return (
    <PricingShell>

      <h1>{t('nav.pricing')}</h1>
      <Intro>
        {lang === 'vi'
          ? 'Các gói được phân phối cho nhu cầu công việc. Các gói đều thanh toán một lần. Luỹ tiến khi nâng cấp lên các gói cao hơn.'
          : 'Choose the right plan for how you save, organize, and share content every day. Every plan is a one-time purchase for lifetime access.'}
      </Intro>

      <PricingGrid>
        {currentPlans.map((plan) => (
          <PricingCard key={`${lang}-${plan.name}`}>
            <PlanHeading>
              <PlanName $tone={plan.tone}>{plan.name}</PlanName>
            </PlanHeading>

            <MetaRow>
              <Lifetime>{plan.lifetime}</Lifetime>
            </MetaRow>

            {plan.price ? (
              <PlanPrice>{plan.price}</PlanPrice>
            ) : (
              <PlanPrice style={{ opacity: 0 }}>$0</PlanPrice>
            )}

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
