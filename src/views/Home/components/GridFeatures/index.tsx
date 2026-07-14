import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowUpDown, ClipboardPaste, Cloud, ContactRound, Copy, CopyPlus, FileDown, FileText, FileUp,
  Filter, FolderTree, Heart, ImagePlay, Mail, Pin, Pipette, QrCode, Search, Sparkles,
  Sticker, TimerOff,
} from 'lucide-react';
import { useTranslation } from '@/contexts/LanguageContext';
import { sentenceCase } from '@/locales/casing';
import { splitGraphemes } from '@/utils/graphemes';
import { getHomeCopy } from '../../copy';
import { FeatureGrid, FeatureItem } from '../../styled';

const items = [
  [FileText, 'typing'], [Mail, 'mail'], [ContactRound, 'contact'], [Pipette, 'color'],
  [Sparkles, 'ai'], [QrCode, 'qr'], [Heart, 'favorite'], [ImagePlay, 'meme'],
  [Sticker, 'sticker'], [Copy, 'copy'], [Pin, 'pin'], [CopyPlus, 'clone'], [Filter, 'filter'],
  [FolderTree, 'groups'], [Search, 'search'], [ArrowUpDown, 'sort'], [FileDown, 'export'], [FileUp, 'import'],
  [ClipboardPaste, 'system-pasteboard'], [TimerOff, 'expire'], [Cloud, 'cloud'],
] as const;

const GRID_REVEAL_STAGGER = 38;
const ICON_WAVE_INTERVAL = 3000;
const ICON_WAVE_STAGGER = 120;

const splitGridTitle = (text: string, locale: string): React.ReactNode[] => {
  const splitCharacters = !/\s/.test(text);
  let revealIndex = 0;

  return text.split(/(\s+)/).flatMap((part, partIndex) => {
    if (!part) return [];
    if (/^\s+$/.test(part)) return [<React.Fragment key={`grid-title-space-${partIndex}`}>{part}</React.Fragment>];

    const units = splitCharacters ? splitGraphemes(part, locale) : [part];
    return units.map((unit, unitIndex) => {
      const currentIndex = revealIndex;
      revealIndex += 1;
      return (
        <span
          className="grid-title-word"
          key={`grid-title-${partIndex}-${unitIndex}-${unit}`}
          style={{ '--grid-title-delay': `${currentIndex * GRID_REVEAL_STAGGER}ms` } as React.CSSProperties}
        >
          {unit}
        </span>
      );
    });
  });
};

const GridFeatures: React.FC = () => {
  const { lang } = useTranslation();
  const gridRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const homeCopy = getHomeCopy(lang);
  const labels = homeCopy.clipboardFeatures;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let waveInterval: number | undefined;
    let isRunning = false;
    const scheduledTimers = new Set<number>();

    const schedule = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(() => {
        scheduledTimers.delete(timer);
        callback();
      }, delay);
      scheduledTimers.add(timer);
    };

    const clearScheduledTimers = () => {
      scheduledTimers.forEach((timer) => window.clearTimeout(timer));
      scheduledTimers.clear();
    };

    const getFeatureItems = () => Array.from(grid.querySelectorAll<HTMLElement>('.grid-feature-item'));
    const restartIconAnimation = (item: HTMLElement) => {
      item.classList.remove('is-icon-animating');
      void item.offsetWidth;
      item.classList.add('is-icon-animating');
    };
    const playWave = () => {
      if (!isRunning) return;
      getFeatureItems().forEach((item, index) => {
        schedule(() => {
          if (isRunning) restartIconAnimation(item);
        }, index * ICON_WAVE_STAGGER);
      });
    };
    const stopWaves = () => {
      isRunning = false;
      if (waveInterval !== undefined) window.clearInterval(waveInterval);
      waveInterval = undefined;
      clearScheduledTimers();
      getFeatureItems().forEach((item) => item.classList.remove('is-icon-animating'));
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.15 && !isRunning) {
        isRunning = true;
        setIsRevealed(true);
        schedule(() => {
          if (!isRunning) return;
          playWave();
          waveInterval = window.setInterval(playWave, ICON_WAVE_INTERVAL);
        }, 260);
      } else if (!entry.isIntersecting && isRunning) {
        stopWaves();
      }
    }, { threshold: [0, 0.15] });

    observer.observe(grid);
    return () => {
      stopWaves();
      observer.disconnect();
    };
  }, []);

  return (
    <FeatureGrid ref={gridRef} className={`grid-reveal-ready${isRevealed ? ' is-visible' : ''}`}>
      <h2 className="grid-title">{splitGridTitle(homeCopy.clipboardTitle, lang)}</h2>
      {items.map(([Icon, motion], index) => (
        <FeatureItem
          className="grid-feature-item"
          key={motion}
          data-motion={motion}
          style={{ '--grid-item-delay': `${180 + index * GRID_REVEAL_STAGGER}ms` } as React.CSSProperties}
        >
          <span className="icon-wrap"><Icon size={58} strokeWidth={2.35} /></span>
          <h3>{sentenceCase(labels[index], lang)}</h3>
        </FeatureItem>
      ))}
    </FeatureGrid>
  );
};

export default GridFeatures;
