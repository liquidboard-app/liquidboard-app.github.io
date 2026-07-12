import React, { useEffect, useRef } from 'react';
import {
  ArrowUpDown, ClipboardPaste, Cloud, ContactRound, Copy, CopyPlus, FileDown, FileText,
  Filter, FolderTree, Heart, ImagePlay, Mail, Pin, Pipette, QrCode, Search, Sparkles,
  Sticker, TimerOff,
} from 'lucide-react';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/locales/casing';
import { getHomeCopy } from '../../copy';
import { FeatureGrid, FeatureItem } from '../../styled';

const items = [
  [FileText, 'typing'], [Mail, 'mail'], [ContactRound, 'contact'], [Pipette, 'color'],
  [Sparkles, 'ai'], [QrCode, 'qr'], [Heart, 'favorite'], [ImagePlay, 'meme'],
  [Sticker, 'sticker'], [Copy, 'copy'], [Pin, 'pin'], [CopyPlus, 'clone'], [Filter, 'filter'],
  [FolderTree, 'groups'], [Search, 'search'], [ArrowUpDown, 'sort'], [FileDown, 'export'],
  [ClipboardPaste, 'system-pasteboard'], [TimerOff, 'expire'], [Cloud, 'cloud'],
] as const;

const GridFeatures: React.FC = () => {
  const { lang } = useTranslation();
  const gridRef = useRef<HTMLElement>(null);
  const homeCopy = getHomeCopy(lang);
  const labels = homeCopy.clipboardFeatures;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.matchMedia('(min-width: 761px), (prefers-reduced-motion: reduce)').matches) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.15) return;
        (entry.target as HTMLElement).classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: [0, 0.15] });

    grid.querySelectorAll<HTMLElement>('article').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <FeatureGrid ref={gridRef}>
      <h2 className="grid-title">{homeCopy.clipboardTitle}</h2>
      {items.map(([Icon, motion], index) => (
        <FeatureItem key={motion} data-motion={motion} style={{ '--grid-delay': `${index * 70}ms` } as React.CSSProperties}>
          <span className="icon-wrap"><Icon size={58} strokeWidth={2.35} /></span>
          <h3>{sentenceCase(labels[index], lang)}</h3>
        </FeatureItem>
      ))}
    </FeatureGrid>
  );
};

export default GridFeatures;
