import styled from 'styled-components';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard, faArrowRightArrowLeft, faCloudArrowUp, faCode, faCopy, faCrop,
  faDatabase, faEyeDropper, faFileExport, faFileImage, faFileLines, faFilter,
  faFolder, faFolderOpen, faFolderTree, faGlobe, faHighlighter, faHourglassEnd,
  faKeyboard, faLayerGroup, faMagnifyingGlass, faMicrophone, faPalette, faPenToSquare,
  faShareNodes, faSliders, faSquareCheck, faSwatchbook, faTable, faTableCells,
  faTextWidth, faThumbtack, faWaveSquare, faCircleHalfStroke, faCircleInfo,
  faClone, faNoteSticky, faCamera, faLocationArrow,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '@/contexts/LanguageContext';
import { getHomeCopy } from '@/components/Translations/Home/homeCopy';
import { getListActionCopy, getListActionFilterLabel } from '@/components/Translations/Home/listActionCopy';
import { ListActionSection } from './styled';

const ActionIntro = styled.header``;
const ListActionHeading = styled.h2``;
const CounterWindow = styled.span``;
const CounterTrack = styled.span``;
const CounterDigit = styled.span``;
const ActionIntroP = styled.p``;
const ActionFilters = styled.div``;
const Active = styled.button``;
const SwitchTrack = styled.span``;
const SwitchTrackSpan = styled.span``;
const ListActionSectionDiv = styled.div``;
const ActionTrack = styled.div``;
const ActionSet = styled.div``;
const ActionItemDivElement = styled.div``;
const ActionCustomIcon = styled.img``;
const ICloud = styled.span``;


type Filter = 'text' | 'image' | 'sticker';
type ActionItem = { label: string; Icon: IconDefinition; color: string; asset?: string };

const items: ActionItem[] = [
  { label: 'Text Snippets', Icon: faFileLines, color: '#7c3aed' },
  { label: 'Website Link', Icon: faGlobe, color: '#0284c7' },
  { label: 'Color Codes', Icon: faPalette, color: '#db2777' },
  { label: 'Contact', Icon: faAddressCard, color: '#059669' },
  { label: 'Files', Icon: faFolderOpen, color: '#d97706' },
  { label: 'Voice', Icon: faMicrophone, color: '#e11d48' },
  { label: 'Scan Documents', Icon: faFileImage, color: '#4f46e5' },
  { label: 'JSON', Icon: faCode, color: '#0891b2' },
  { label: 'CSV', Icon: faTable, color: '#16a34a' },
  { label: 'Copy', Icon: faCopy, color: '#ea580c' },
  { label: 'Share', Icon: faShareNodes, color: '#7c3aed' },
  { label: 'Select', Icon: faSquareCheck, color: '#0284c7' },
  { label: 'Pin', Icon: faThumbtack, color: '#d97706' },
  { label: 'Search', Icon: faMagnifyingGlass, color: '#db2777' },
  { label: 'Export File', Icon: faFileExport, color: '#059669' },
  { label: 'Group', Icon: faLayerGroup, color: '#4f46e5' },
  { label: 'Clone', Icon: faClone, color: '#e11d48' },
  { label: 'Information', Icon: faCircleInfo, color: '#0284c7' },
  { label: 'Pin Group', Icon: faFolder, color: '#7c3aed' },
  { label: 'Move Group', Icon: faFolderTree, color: '#d97706' },
  { label: 'Sort', Icon: faArrowRightArrowLeft, color: '#0891b2' },
  { label: 'Color System', Icon: faSwatchbook, color: '#db2777' },
  { label: 'Custom Color', Icon: faEyeDropper, color: '#16a34a' },
  { label: 'Crop', Icon: faCrop, color: '#4f46e5' },
  { label: 'Filter', Icon: faFilter, color: '#ea580c' },
  { label: 'Marker', Icon: faHighlighter, color: '#059669' },
  { label: 'Blur', Icon: faCircleHalfStroke, color: '#7c3aed' },
  { label: 'Pixelation', Icon: faTableCells, color: '#0284c7' },
  { label: 'Noise', Icon: faWaveSquare, color: '#e11d48' },
  { label: 'System Pasteboard', Icon: faFileLines, color: '#d97706' },
  { label: 'iCloud Sync', Icon: faCloudArrowUp, color: '#4f46e5' },
  { label: 'Data & Storage', Icon: faDatabase, color: '#0891b2' },
  { label: 'Text Toolbar', Icon: faTextWidth, color: '#db2777' },
  { label: 'Writing Tool', Icon: faPenToSquare, color: '#16a34a', asset: '/assets/apple.writing.tools.svg' },
  { label: 'Self-Destructing Content', Icon: faHourglassEnd, color: '#ea580c' },
  { label: 'Keyboard Customization', Icon: faKeyboard, color: '#0284c7' },
  { label: 'App Customization', Icon: faSliders, color: '#7c3aed' },
  { label: 'Create Sticker', Icon: faNoteSticky, color: '#db2777' },
  { label: 'Camera Sticker', Icon: faCamera, color: '#ea580c' },
];

const textOnlyFeatures = new Set([
  'Text Snippets',
  'Website Link',
  'Color Codes',
  'Contact',
  'Files',
  'Voice',
  'Scan Documents',
  'JSON',
  'CSV',
  'Custom Color',
  'Color System',
  'Text Toolbar',
  'Writing Tool',
]);
const stickerOnlyFeatures = new Set(['Create Sticker', 'Camera Sticker']);
const imageAndStickerFeatures = new Set([
  'Crop',
  'Filter',
  'Marker',
  'Blur',
  'Pixelation',
  'Noise',
]);
const textAndImageFeatures = new Set(['Self-Destructing Content']);

const getItemsForFilter = (filter: Filter | null) => items.filter((item) => {
  if (textOnlyFeatures.has(item.label) && filter !== null && filter !== 'text') return false;
  if (stickerOnlyFeatures.has(item.label) && filter !== null && filter !== 'sticker') return false;
  if (imageAndStickerFeatures.has(item.label) && filter === 'text') return false;
  if (textAndImageFeatures.has(item.label) && filter === 'sticker') return false;
  return true;
});

const shuffleItems = (source: ActionItem[]) => {
  const shuffled = [...source];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
  }
  return shuffled;
};

const distributeRows = (source: ActionItem[]) => {
  const result: ActionItem[][] = [[], [], []];
  source.forEach((item, index) => result[index % result.length].push(item));
  return result;
};

const ListAction: React.FC = () => {
  const { lang } = useTranslation();
  const copy = getHomeCopy(lang);
  const actionCopy = getListActionCopy(lang);
  const [filter, setFilter] = useState<Filter | null>(null);
  const [counterCount, setCounterCount] = useState(items.length);
  const featureCount = counterCount;
  const [filterPhase, setFilterPhase] = useState<'idle' | 'accelerating' | 'swapping' | 'decelerating'>('idle');
  const [rows, setRows] = useState<ActionItem[][]>(() => distributeRows(shuffleItems(items)));
  const filterTimers = useRef<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeTweensRef = useRef<gsap.core.Tween[]>([]);
  const marqueeSpeedRef = useRef(1);
  const marqueeSpeedTweenRef = useRef<gsap.core.Tween | null>(null);
  const counterHeadingRef = useRef<HTMLHeadingElement>(null);
  const counterTrackRef = useRef<HTMLSpanElement>(null);
  const counterStartedRef = useRef(false);

  useEffect(() => () => {
    filterTimers.current.forEach((timer) => window.clearTimeout(timer));
    marqueeSpeedTweenRef.current?.kill();
  }, []);

  useLayoutEffect(() => {
    const tracks = sectionRef.current?.querySelectorAll<HTMLElement>('.action-track');
    if (!tracks) return undefined;

    marqueeTweensRef.current.forEach((tween) => tween.kill());
    marqueeTweensRef.current = Array.from(tracks, (track, index) => {
      const distance = track.scrollWidth / 2;
      const forward = index % 2 === 0;
      const tween = gsap.fromTo(track,
        { x: forward ? -distance : 0 },
        { x: forward ? 0 : -distance, duration: 48, ease: 'none', repeat: -1 },
      );
      tween.timeScale(marqueeSpeedRef.current);
      return tween;
    });

    return () => {
      marqueeTweensRef.current.forEach((tween) => tween.kill());
      marqueeTweensRef.current = [];
    };
  }, [rows]);

  const animateMarqueeSpeed = (target: number, duration: number, ease: string) => {
    marqueeSpeedTweenRef.current?.kill();
    const speed = { value: marqueeSpeedRef.current };
    marqueeSpeedTweenRef.current = gsap.to(speed, {
      value: target,
      duration,
      ease,
      onUpdate: () => {
        marqueeSpeedRef.current = speed.value;
        marqueeTweensRef.current.forEach((tween) => tween.timeScale(speed.value));
      },
    });
  };

  useEffect(() => {
    const heading = counterHeadingRef.current;
    const track = counterTrackRef.current;
    if (!heading || !track) return undefined;

    let timeline: gsap.core.Timeline | null = null;
    const startCounter = () => {
      if (timeline) return;
      const digitCount = items.length + 1;
      const targetPercent = -100 * featureCount / digitCount;
      const currentPercent = Number(gsap.getProperty(track, 'yPercent')) || 0;
      const remainingDigits = Math.abs((targetPercent - currentPercent) * digitCount / 100);
      const duration = Math.max(0.55, 3.2 * remainingDigits / items.length);
      counterStartedRef.current = true;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(track, { yPercent: targetPercent, filter: 'blur(0px)' });
        return;
      }

      gsap.set(track, { filter: 'blur(0px)' });
      timeline = gsap.timeline();
      timeline.to(track, { yPercent: targetPercent, duration, ease: 'power2.inOut', onComplete: () => gsap.set(track, { yPercent: targetPercent, filter: 'blur(0px)' }) }, 0);
      timeline.to(track, { filter: 'blur(10px)', duration: duration * 0.375, ease: 'power1.in' }, duration * 0.094);
      timeline.to(track, { filter: 'blur(0px)', duration: duration * 0.5, ease: 'power1.out' }, duration * 0.438);
    };

    if (counterStartedRef.current) {
      startCounter();
      return () => timeline?.kill();
    }

    const observer = typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        startCounter();
        observer?.disconnect();
      }, { threshold: 0.6 });
    if (!observer) startCounter();
    else observer.observe(heading);

    return () => {
      observer?.disconnect();
      timeline?.kill();
    };
  }, [featureCount]);

  const changeFilter = (nextFilter: Filter) => {
    if (filterPhase !== 'idle') return;
    const selectedFilter = filter === nextFilter ? null : nextFilter;
    counterStartedRef.current = true;
    setCounterCount(getItemsForFilter(selectedFilter).length);
    filterTimers.current.forEach((timer) => window.clearTimeout(timer));
    setFilterPhase('accelerating');
    animateMarqueeSpeed(16, 0.45, 'power3.in');
    filterTimers.current = [window.setTimeout(() => {
      setFilterPhase('swapping');
      filterTimers.current = [window.setTimeout(() => {
        setRows(distributeRows(shuffleItems(getItemsForFilter(selectedFilter))));
        setFilter(selectedFilter);
        setFilterPhase('decelerating');
        animateMarqueeSpeed(1, 1.5, 'power2.out');
        filterTimers.current = [window.setTimeout(() => setFilterPhase('idle'), 1500)];
      }, 180)];
    }, 700)];
  };

  return <ListActionSection ref={sectionRef} aria-labelledby="list-action-heading" data-filter-phase={filterPhase}>
    <ActionIntro className="action-intro">
      <ListActionHeading id="list-action-heading" ref={counterHeadingRef} aria-label={String(featureCount)}>
        <FontAwesomeIcon className="counter-cursor-icon counter-cursor-icon-left" icon={faLocationArrow} aria-hidden="true" />
        <CounterWindow className="counter-window" aria-hidden="true">
          <CounterTrack className="counter-track" ref={counterTrackRef}>
            {Array.from({ length: items.length + 1 }, (_, digit) => <CounterDigit className="counter-digit" data-counter-value={digit} key={digit}>{digit}</CounterDigit>)}
          </CounterTrack>
        </CounterWindow>
        <FontAwesomeIcon className="counter-cursor-icon counter-cursor-icon-right" icon={faLocationArrow} aria-hidden="true" />
      </ListActionHeading>
      <ActionIntroP>{actionCopy.description}</ActionIntroP>
    </ActionIntro>
    <ActionFilters className="action-filters" aria-label={getListActionFilterLabel(lang)}>
      {(['text', 'image', 'sticker'] as Filter[]).map((type, index) => <Active key={type} type="button" className={filter === type ? 'active' : ''} aria-pressed={filter === type} disabled={filterPhase !== 'idle'} onClick={() => changeFilter(type)}>
        {copy.filters[index]}<SwitchTrack className="switch-track" aria-hidden="true"><SwitchTrackSpan /></SwitchTrack>
      </Active>)}
    </ActionFilters>
    {rows.map((row, rowIndex) => <ListActionSectionDiv className={`action-row action-row-${rowIndex + 1}`} key={rowIndex}>
      <ActionTrack className="action-track">
        {[0, 1].map((copyIndex) => <ActionSet className="action-set" aria-hidden={copyIndex === 1} key={copyIndex}>
          {row.map(({ label, Icon, color, asset }, itemIndex) => <ActionItemDivElement className="action-item" key={`${rowIndex}-${copyIndex}-${itemIndex}-${filter ?? 'all'}`} title={label}>
            {asset
              ? <ActionCustomIcon className="action-custom-icon" src={asset} alt="" aria-hidden="true" />
              : <FontAwesomeIcon aria-hidden="true" icon={Icon} style={{ color }} />}
            <ICloud className={(actionCopy.labels[label] ?? label).includes('iCloud') ? 'preserve-brand-case' : undefined} aria-label={actionCopy.labels[label] ?? label}>{actionCopy.labels[label] ?? label}</ICloud>
          </ActionItemDivElement>)}
        </ActionSet>)}
      </ActionTrack>
    </ListActionSectionDiv>)}
  </ListActionSection>;
};

export default ListAction;
