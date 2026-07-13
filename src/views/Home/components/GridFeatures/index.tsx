import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowUpDown, ClipboardPaste, Cloud, ContactRound, Copy, CopyPlus, FileDown, FileText, FileUp,
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
  [FolderTree, 'groups'], [Search, 'search'], [ArrowUpDown, 'sort'], [FileDown, 'export'], [FileUp, 'import'],
  [ClipboardPaste, 'system-pasteboard'], [TimerOff, 'expire'], [Cloud, 'cloud'],
] as const;

const GridFeatures: React.FC = () => {
  const { lang } = useTranslation();
  const gridRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const homeCopy = getHomeCopy(lang);
  const labels = homeCopy.clipboardFeatures;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let timer: number | undefined;
    let isRunning = false;

    const playItem = (index: number) => {
      if (!isRunning) return;
      setActiveIndex(index);
      timer = window.setTimeout(() => {
        if (index < items.length - 1) {
          playItem(index + 1);
          return;
        }
        setActiveIndex(null);
        timer = window.setTimeout(() => playItem(0), 4000);
      }, 1050);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.15 && !isRunning) {
        isRunning = true;
        playItem(0);
      } else if (!entry.isIntersecting && isRunning) {
        isRunning = false;
        setActiveIndex(null);
        if (timer !== undefined) window.clearTimeout(timer);
      }
    }, { threshold: [0, 0.15] });

    observer.observe(grid);
    return () => {
      isRunning = false;
      if (timer !== undefined) window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <FeatureGrid ref={gridRef}>
      <h2 className="grid-title">{homeCopy.clipboardTitle}</h2>
      {items.map(([Icon, motion], index) => (
        <FeatureItem key={motion} data-motion={motion} data-animating={activeIndex === index || undefined}>
          <span className="icon-wrap"><Icon size={58} strokeWidth={2.35} /></span>
          <h3>{sentenceCase(labels[index], lang)}</h3>
        </FeatureItem>
      ))}
    </FeatureGrid>
  );
};

export default GridFeatures;
