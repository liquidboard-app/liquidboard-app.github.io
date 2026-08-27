import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styled from 'styled-components';
import { GlassCard } from '@/components/PageLayout';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/locales/casing';
import { getFaqs } from '../../locales';

const List = styled.div`display: grid; gap: 12px;`;
const Card = styled(GlassCard)`overflow: hidden;`;
const Question = styled.button<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  padding: 22px 24px;
  border: 0;
  background: ${({ $open }) => $open ? 'rgba(255, 255, 255, .5)' : 'transparent'};
  color: #302824;
  font-size: clamp(18px, 1.4dvw, 21px);
  font-weight: 750;
  text-align: left;
  svg { flex: 0 0 auto; transform: rotate(${({ $open }) => $open ? '180deg' : '0'}); transition: transform .25s ease; }
  @media (max-width: 650px) { padding: 18px; font-size: 16px; }
`;
const Answer = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => $open ? '1fr' : '0fr'};
  opacity: ${({ $open }) => $open ? 1 : 0};
  transition: grid-template-rows .28s ease, opacity .25s ease;
  > div { overflow: hidden; }
  p { margin: 0; padding: 22px 24px; color: #000; font-size: clamp(17px, 1.35dvw, 20px); line-height: 1.58; font-weight: 540; letter-spacing: -.012em; }
  @media (max-width: 650px) { p { padding: 18px; font-size: 16px; line-height: 1.55; } }
`;

const FaqList: React.FC = () => {
  const { lang } = useTranslation();
  const [faqs, setFaqs] = useState<{ q: string; a: string }[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    let active = true;
    getFaqs(lang).then((items) => { if (active) setFaqs(items); });
    return () => { active = false; };
  }, [lang]);

  return (
    <List>
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        return (
          <Card key={`${faq.q}-${index}`}>
            <Question $open={open} onClick={() => setOpenIndex(open ? null : index)} aria-expanded={open}>
              {sentenceCase(faq.q, lang)}<ChevronDown size={20} />
            </Question>
            <Answer $open={open}><div><p>{faq.a}</p></div></Answer>
          </Card>
        );
      })}
    </List>
  );
};

export default FaqList;
