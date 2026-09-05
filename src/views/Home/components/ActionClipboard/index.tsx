import React, { useLayoutEffect, useRef, useState } from 'react';
import { Check, ClipboardPenLine, Cloud, Download, Folder, Mic, Pin as PinIcon, ScanSearch, ScanText, Send, Share2 } from 'lucide-react';
import SocialMark from '../SocialMark';
import { ActionClipboardSection } from './styled';
import { useTranslation } from '@/contexts/LanguageContext';

const actionFeatureDefinitions = [
  { key: 'group', icon: Folder },
  { key: 'pin', icon: PinIcon },
  { key: 'share', icon: Share2 },
  { key: 'export', icon: Download },
  { key: 'voice', icon: Mic },
  { key: 'scanText', icon: ScanText },
  { key: 'systemPasteboard', icon: ClipboardPenLine },
  { key: 'iCloud', icon: Cloud },
] as const;

const mockupTypes = ['text', 'link', 'color', 'image'] as const;
const exportMockupTypes = mockupTypes.slice(0, 3);

type MockupType = (typeof mockupTypes)[number];

const MockupCard: React.FC<{ type: MockupType; marker?: React.ReactNode }> = ({ type, marker }) => {
  if (type === 'link') {
    return (
      <div className="action-clipboard-mockup action-clipboard-mockup--link">
        <span className="action-clipboard-mockup-link-thumbnail" aria-hidden="true"><i /><i /></span>
        <span className="action-clipboard-mockup-link-title" aria-hidden="true" />
        <span className="action-clipboard-mockup-link-url" aria-hidden="true" />
        {marker}
      </div>
    );
  }

  if (type === 'color') {
    return (
      <div className="action-clipboard-mockup action-clipboard-mockup--color" aria-hidden="true">
        <span className="action-clipboard-mockup-color-title" />
        <span className="action-clipboard-mockup-color-name" />
        {marker}
      </div>
    );
  }

  if (type === 'image') {
    return (
      <div className="action-clipboard-mockup action-clipboard-mockup--image" aria-hidden="true">
        <span className="action-clipboard-mockup-image-placeholder"><i /><i /></span>
        {marker}
      </div>
    );
  }

  return (
    <div className="action-clipboard-mockup action-clipboard-mockup--text" aria-hidden="true">
      <span className="action-clipboard-mockup-skeleton action-clipboard-mockup-skeleton--title" />
      <span className="action-clipboard-mockup-skeleton-lines"><i /><i /><i /><i /><i /></span>
      {marker}
    </div>
  );
};

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
const PHASE_LABEL_PREFIX = 'action-phase-';
const SCROLL_TUNING = {
  pixelsPerPhase: 270,
  scrub: .46,
  snapDelay: .12,
  snapDuration: { min: .38, max: 1.05 },
} as const;

const ActionClipboard: React.FC = () => {
  const { dict } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return undefined;

    let active = true;
    let cleanup: (() => void) | undefined;

    const initialize = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (!active) return;

      gsap.registerPlugin(ScrollTrigger);
      if (window.matchMedia('(pointer: coarse)').matches) {
        ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });
      }
      const contentFrame = pin.querySelector<HTMLElement>('.action-clipboard-content-frame');
      const content = pin.querySelector<HTMLElement>('.action-clipboard-content');
      const tabScroll = pin.querySelector<HTMLElement>('.action-clipboard-tab-scroll');
      const tabs = Array.from(pin.querySelectorAll<HTMLElement>('.action-clipboard-tab'));
      if (!content || !contentFrame || !tabScroll) return;

      const reduceViewportMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const groupScene = pin.querySelector<HTMLElement>('.action-clipboard-scene--group');
      const pinScene = pin.querySelector<HTMLElement>('.action-clipboard-scene--pin');
      const shareScene = pin.querySelector<HTMLElement>('.action-clipboard-scene--share');
      const exportScene = pin.querySelector<HTMLElement>('.action-clipboard-scene--export');
      const voiceScene = pin.querySelector<HTMLElement>('.action-clipboard-scene--voice');
      const scanScene = pin.querySelector<HTMLElement>('.action-clipboard-scene--scan');
      const systemScene = pin.querySelector<HTMLElement>('.action-clipboard-scene--system');
      const cloudScene = pin.querySelector<HTMLElement>('.action-clipboard-scene--cloud');
      const groupTitle = groupScene?.querySelector<HTMLElement>('.action-clipboard-scene-title');
      const pinTitle = pinScene?.querySelector<HTMLElement>('.action-clipboard-scene-title');
      const shareTitle = shareScene?.querySelector<HTMLElement>('.action-clipboard-scene-title');
      const exportTitle = exportScene?.querySelector<HTMLElement>('.action-clipboard-scene-title');
      const voiceTitle = voiceScene?.querySelector<HTMLElement>('.action-clipboard-scene-title');
      const scanTitle = scanScene?.querySelector<HTMLElement>('.action-clipboard-scene-title');
      const scanMotion = scanScene?.querySelector<HTMLElement>('.action-clipboard-scan-motion');
      const systemTitle = systemScene?.querySelector<HTMLElement>('.action-clipboard-scene-title');
      const cloudTitle = cloudScene?.querySelector<HTMLElement>('.action-clipboard-scene-title');
      const groupIcon = groupScene?.querySelector<HTMLElement>('.action-clipboard-scene-icon');
      const pinIcon = pinScene?.querySelector<HTMLElement>('.action-clipboard-scene-icon');
      const shareIcon = shareScene?.querySelector<HTMLElement>('.action-clipboard-scene-icon');
      const exportIcon = exportScene?.querySelector<HTMLElement>('.action-clipboard-scene-icon');
      const voiceIcon = voiceScene?.querySelector<HTMLElement>('.action-clipboard-scene-icon');
      const scanIcon = scanScene?.querySelector<HTMLElement>('.action-clipboard-scene-icon');
      const systemIcon = systemScene?.querySelector<HTMLElement>('.action-clipboard-scene-icon');
      const cloudIcon = cloudScene?.querySelector<HTMLElement>('.action-clipboard-scene-icon');
      const groupWords = groupScene?.querySelector<HTMLElement>('.action-clipboard-title-words');
      const pinWords = pinScene?.querySelector<HTMLElement>('.action-clipboard-title-words');
      const shareWords = shareScene?.querySelector<HTMLElement>('.action-clipboard-title-words');
      const exportWords = exportScene?.querySelector<HTMLElement>('.action-clipboard-title-words');
      const voiceWords = voiceScene?.querySelector<HTMLElement>('.action-clipboard-title-words');
      const scanWords = scanScene?.querySelector<HTMLElement>('.action-clipboard-title-words');
      const systemWords = systemScene?.querySelector<HTMLElement>('.action-clipboard-title-words');
      const cloudWords = cloudScene?.querySelector<HTMLElement>('.action-clipboard-title-words');
      const groupWordItems = Array.from(groupScene?.querySelectorAll<HTMLElement>('.action-clipboard-title-word-track > span') ?? []);
      const exportWordItems = Array.from(exportScene?.querySelectorAll<HTMLElement>('.action-clipboard-title-word-track > span') ?? []);
      const groupMockups = Array.from(groupScene?.querySelectorAll<HTMLElement>('.action-clipboard-mockup') ?? []);
      const pinMockups = Array.from(pinScene?.querySelectorAll<HTMLElement>('.action-clipboard-mockup') ?? []);
      const shareMockups = Array.from(shareScene?.querySelectorAll<HTMLElement>('.action-clipboard-mockup') ?? []);
      const exportMockups = Array.from(exportScene?.querySelectorAll<HTMLElement>('.action-clipboard-mockup') ?? []);
      const pinOrb = pinScene?.querySelector<HTMLElement>('.action-clipboard-pin-orb');
      const groupChecks = Array.from(groupScene?.querySelectorAll<HTMLElement>('.action-clipboard-share-orb') ?? []);
      const exportChecks = Array.from(exportScene?.querySelectorAll<HTMLElement>('.action-clipboard-share-orb') ?? []);
      const shareChecks = Array.from(shareScene?.querySelectorAll<HTMLElement>('.action-clipboard-share-orb') ?? []);
      const shareAction = shareScene?.querySelector<HTMLElement>('.action-clipboard-share-action');
      const sharePlane = shareScene?.querySelector<SVGSVGElement>('.action-clipboard-share-plane');
      const shareSocialList = shareScene?.querySelector<HTMLElement>('.action-clipboard-share-socials');
      const shareSocials = Array.from(shareScene?.querySelectorAll<HTMLElement>('.action-clipboard-share-socials > span') ?? []);
      const shareSocialMarks = shareSocials.map(social => social.querySelector<SVGSVGElement>('.action-clipboard-social-mark'));
      const exportOptions = Array.from(exportScene?.querySelectorAll<HTMLElement>('.action-clipboard-export-options > span') ?? []);
      const exportOptionLabels = Array.from(exportScene?.querySelectorAll<HTMLElement>('.action-clipboard-export-option-label') ?? []);
      const exportPreviews = Array.from(exportScene?.querySelectorAll<HTMLElement>('.action-clipboard-export-previews > span') ?? []);
      const voiceLines = Array.from(voiceScene?.querySelectorAll<HTMLElement>('.action-clipboard-voice-line') ?? []);
      const voiceTranscript = voiceScene?.querySelector<HTMLElement>('.action-clipboard-voice-transcript');
      const voiceTranscriptTitle = voiceScene?.querySelector<HTMLElement>('.action-clipboard-voice-transcript-title');
      const voiceTranscriptLines = Array.from(voiceScene?.querySelectorAll<HTMLElement>('.action-clipboard-voice-transcript-lines i') ?? []);
      const scanSearch = scanScene?.querySelector<HTMLElement>('.action-clipboard-scan-search');
      const scanPhone = scanScene?.querySelector<HTMLElement>('.action-clipboard-scan-phone');
      const scanResult = scanScene?.querySelector<HTMLElement>('.action-clipboard-scan-result');
      const scanResultTitle = scanScene?.querySelector<HTMLElement>('.action-clipboard-scan-result-title');
      const scanResultLines = Array.from(scanScene?.querySelectorAll<HTMLElement>('.action-clipboard-scan-result-lines i') ?? []);
      const systemMockups = Array.from(systemScene?.querySelectorAll<HTMLElement>('.action-clipboard-mockup') ?? []);
      const cloudMockups = Array.from(cloudScene?.querySelectorAll<HTMLElement>('.action-clipboard-mockup') ?? []);
      if (!groupScene || !pinScene || !shareScene || !exportScene || !voiceScene || !scanScene || !systemScene || !cloudScene || !groupTitle || !pinTitle || !shareTitle || !exportTitle || !voiceTitle || !scanTitle || !scanMotion || !systemTitle || !cloudTitle || !groupIcon || !pinIcon || !shareIcon || !exportIcon || !voiceIcon || !scanIcon || !systemIcon || !cloudIcon || !groupWords || !pinWords || !shareWords || !exportWords || !voiceWords || !scanWords || !systemWords || !cloudWords || !pinOrb || !shareAction || !sharePlane || !shareSocialList || !voiceTranscript || !voiceTranscriptTitle || !scanSearch || !scanPhone || !scanResult || !scanResultTitle || groupWordItems.length < 2 || exportWordItems.length < 2 || pinMockups.length < 4 || shareMockups.length < 4 || shareSocials.length < 4 || exportMockups.length < 3 || systemMockups.length < 4 || cloudMockups.length < 4 || exportOptions.length < 1 || exportOptionLabels.length < 1 || exportPreviews.length < 2 || voiceLines.length < 10 || voiceTranscriptLines.length < 5 || scanResultLines.length < 5) return;

      let introProgress = 0;

      const updateFeatureProgress = (progress: number) => {
        const nextProgress = clamp01(progress);
        const nextIndex = Math.min(actionFeatureDefinitions.length - 1, Math.floor(nextProgress * actionFeatureDefinitions.length));
        // This runs on every scrub frame. Updating the custom properties
        // directly avoids rerendering the entire scene tree and guarantees
        // that completed tabs are cleared immediately while scrolling back.
        tabs.forEach((tab, index) => {
          const tabProgress = clamp01((nextProgress * actionFeatureDefinitions.length) - index);
          tab.style.setProperty('--tab-progress', String(tabProgress));
        });
        setActiveIndex((currentIndex) => currentIndex === nextIndex ? currentIndex : nextIndex);
      };

      const context = gsap.context(() => {
        const isMobile = () => window.innerWidth <= 760;
        const expandedTitleGap = () => isMobile() ? 8 : 18;
        const expandedTitlePadding = () => isMobile() ? '16px 24px' : '28px 56px';
        const liftedTitleScale = () => isMobile() ? .88 : .4;
        const liftedScanScale = () => isMobile() ? .7 : .5;
        // Group is the reference: every single result card uses its card width.
        const standardMockupWidth = () => groupMockups[0]?.offsetWidth ?? 0;
        const sectionPixelValue = (property: string, fallback: number) => {
          const value = Number.parseFloat(getComputedStyle(section).getPropertyValue(property));
          return Number.isFinite(value) ? value : fallback;
        };
        const expandedShareWidth = () => Math.min(
          sectionPixelValue('--action-share-expanded-width', 340),
          contentFrame.clientWidth,
        );
        const expandedSharePlaneX = () => -(
          (expandedShareWidth() - sectionPixelValue('--action-share-plane-size', 35)) / 2
          - sectionPixelValue('--action-share-plane-edge', 32)
        );
        const compactShareWidth = () => Math.min(
          (sectionPixelValue('--action-share-social-size', 42) * shareSocials.length)
          + (sectionPixelValue('--action-share-social-gap', 16) * (shareSocials.length - 1))
          + (sectionPixelValue('--action-share-edge', 18) * 2),
          contentFrame.clientWidth,
        );
        const sharePlaneItemX = (index: number) => {
          const socialSize = sectionPixelValue('--action-share-social-size', 42);
          const socialGap = sectionPixelValue('--action-share-social-gap', 16);
          const edge = sectionPixelValue('--action-share-edge', 18);
          return -(compactShareWidth() / 2)
            + edge
            + (socialSize / 2)
            + (index * (socialSize + socialGap));
        };
        const sharePlaneExitX = () => (
          (shareAction.clientWidth / 2) + sectionPixelValue('--action-share-plane-size', 35)
        );
        gsap.set(content, {
          autoAlpha: 0,
          filter: 'blur(18px)',
          width: 32,
          height: 32,
          borderRadius: 16,
        });
        gsap.set(tabs, { autoAlpha: 0, filter: 'blur(13px)', y: 28 });
        gsap.set([groupScene, pinScene, shareScene, exportScene, voiceScene, scanScene, systemScene, cloudScene], { autoAlpha: 0 });
        gsap.set([groupTitle, pinTitle, shareTitle, exportTitle, voiceTitle, scanTitle, systemTitle, cloudTitle], { gap: 0 });
        gsap.set([groupIcon, pinIcon, shareIcon, exportIcon, voiceIcon, scanIcon, systemIcon, cloudIcon], { autoAlpha: 0, scale: .72, filter: 'blur(12px)' });
        gsap.set([groupWords, pinWords, shareWords, exportWords, voiceWords, scanWords, systemWords, cloudWords], { autoAlpha: 0, width: 0, x: 42, filter: 'blur(12px)' });
        gsap.set(groupWordItems, { autoAlpha: 0, x: 26, filter: 'blur(12px)' });
        gsap.set(groupWordItems[0], { autoAlpha: 1, x: 0, filter: 'blur(0px)' });
        gsap.set(exportWordItems, { autoAlpha: 0, y: 16, filter: 'blur(10px)' });
        gsap.set(exportWordItems[0], { autoAlpha: 1, y: 0, filter: 'blur(0px)' });
        gsap.set([...groupMockups, ...pinMockups, ...shareMockups, ...exportMockups, ...systemMockups, ...cloudMockups], { autoAlpha: 0, y: 56, filter: 'blur(18px)', scale: .94 });
        gsap.set(pinOrb, { autoAlpha: 0, scale: .5, filter: 'blur(10px)' });
        gsap.set(groupChecks, { autoAlpha: 0, scale: .5, filter: 'blur(10px)' });
        gsap.set(exportChecks, { autoAlpha: 0, scale: .5, filter: 'blur(10px)' });
        gsap.set(shareChecks, { autoAlpha: 0, scale: .5, filter: 'blur(10px)' });
        // Clear a value left by hot reload before the reversible timeline owns
        // the action width again.
        gsap.set(shareAction, { clearProps: 'width' });
        gsap.set(shareAction, { autoAlpha: 0, scale: .76, filter: 'blur(12px)' });
        gsap.set(sharePlane, { autoAlpha: 0, x: -28, filter: 'blur(10px)' });
        gsap.set(shareSocials, { autoAlpha: 0, x: 52, filter: 'blur(10px)' });
        gsap.set(exportOptions, {
          autoAlpha: 0,
          scale: liftedTitleScale,
          x: 0,
          y: () => -contentFrame.clientHeight * .34,
          filter: 'blur(12px)',
        });
        gsap.set(exportPreviews, { autoAlpha: 0, y: 28, filter: 'blur(14px)' });
        gsap.set(exportOptionLabels, { autoAlpha: 0, y: 10, filter: 'blur(10px)' });
        gsap.set(voiceLines, { autoAlpha: 0, scaleY: .18, filter: 'blur(10px)', transformOrigin: 'center' });
        gsap.set(voiceTranscript, { autoAlpha: 0, y: 52, filter: 'blur(16px)' });
        gsap.set(voiceTranscriptTitle, { scaleX: 0, transformOrigin: 'left center' });
        gsap.set(voiceTranscriptLines, { scaleX: 0, transformOrigin: 'left center' });
        gsap.set(scanSearch, { autoAlpha: 0, scale: .65, filter: 'blur(12px)' });
        gsap.set(scanPhone, { autoAlpha: 0, scale: .92, filter: 'blur(14px)' });
        gsap.set(scanResult, { autoAlpha: 0, y: -64, filter: 'blur(16px)' });
        gsap.set(scanResultTitle, { scaleX: 0, transformOrigin: 'left center' });
        gsap.set(scanResultLines, { scaleX: 0, transformOrigin: 'left center' });

        let phaseIndex = 0;
        // Every phase must remain available when scrubbing backwards.
        const reveal = gsap.timeline({ paused: true, defaults: { overwrite: false } });
        const phase = (name: string) => {
          reveal.addLabel(`${PHASE_LABEL_PREFIX}${String(phaseIndex).padStart(2, '0')}-${name}`);
          phaseIndex += 1;
          return reveal;
        };

        phase('intro-dot')
          .to(content, { autoAlpha: 1, filter: 'blur(0px)', duration: .42, ease: 'power2.out' });
        phase('intro-height')
          .to(content, { height: () => contentFrame.clientHeight, borderRadius: 16, duration: .7, ease: 'power2.inOut' });
        phase('intro-width')
          .to(content, { width: () => contentFrame.clientWidth, borderRadius: 40, duration: .78, ease: 'power3.inOut' });
        phase('intro-tabs')
          .to(tabs, { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: .42, stagger: .08, ease: 'power3.out' });
        const revealDuration = reveal.duration();

        const groupWordWidth = (index: number) => (groupWordItems[index]?.scrollWidth ?? 0) + 12;
        const groupNameWidth = () => groupWordItems.reduce((width, item) => width + item.scrollWidth, 0) + 28;
        const scanInitialTitleWidth = () => scanIcon.offsetWidth;
        const pullMockupX = (_: number, mockup: HTMLElement) => {
          const itemBounds = mockup.getBoundingClientRect();
          const titleBounds = groupTitle.getBoundingClientRect();
          return titleBounds.left + (titleBounds.width / 2) - (itemBounds.left + (itemBounds.width / 2));
        };
        const pullMockupY = (_: number, mockup: HTMLElement) => {
          const itemBounds = mockup.getBoundingClientRect();
          const titleBounds = groupTitle.getBoundingClientRect();
          return titleBounds.top + (titleBounds.height / 2) - (itemBounds.top + (itemBounds.height / 2));
        };
        const pullShareMockupX = (_: number, mockup: HTMLElement) => {
          const itemBounds = mockup.getBoundingClientRect();
          const titleBounds = shareTitle.getBoundingClientRect();
          return titleBounds.left + (titleBounds.width / 2) - (itemBounds.left + (itemBounds.width / 2));
        };
        const pullShareMockupY = (_: number, mockup: HTMLElement) => {
          const itemBounds = mockup.getBoundingClientRect();
          const titleBounds = shareTitle.getBoundingClientRect();
          return titleBounds.top + (titleBounds.height / 2) - (itemBounds.top + (itemBounds.height / 2));
        };
        const pullExportMockupX = (_: number, mockup: HTMLElement) => {
          const itemBounds = mockup.getBoundingClientRect();
          const titleBounds = exportTitle.getBoundingClientRect();
          return titleBounds.left + (titleBounds.width / 2) - (itemBounds.left + (itemBounds.width / 2));
        };
        const pullExportMockupY = (_: number, mockup: HTMLElement) => {
          const itemBounds = mockup.getBoundingClientRect();
          const titleBounds = exportTitle.getBoundingClientRect();
          return titleBounds.top + (titleBounds.height / 2) - (itemBounds.top + (itemBounds.height / 2));
        };
        const exportFrameCenterX = () => {
          const frameBounds = contentFrame.getBoundingClientRect();
          return frameBounds.left + (frameBounds.width / 2);
        };
        const exportLeftPillX = () => {
          const previewBounds = exportPreviews[0]?.getBoundingClientRect();
          if (!previewBounds) return 0;
          return previewBounds.left + (previewBounds.width / 2) - exportFrameCenterX();
        };
        const exportRightPillX = () => {
          const previewBounds = exportPreviews[1]?.getBoundingClientRect();
          if (!previewBounds) return 0;
          return previewBounds.left + (previewBounds.width / 2) - exportFrameCenterX();
        };
        const exportCsvPillWidth = standardMockupWidth;
        const pinSlotOffset = (fromIndex: number, toIndex: number) => {
          const fromBounds = pinMockups[fromIndex]?.getBoundingClientRect();
          const toBounds = pinMockups[toIndex]?.getBoundingClientRect();
          if (!fromBounds || !toBounds) return 0;
          return toBounds.left - fromBounds.left;
        };
        const pinShiftRight = (_: number, mockup: HTMLElement) => {
          const index = pinMockups.indexOf(mockup);
          if (index < 0) return 0;
          if (index < pinMockups.length - 1) return pinSlotOffset(index, index + 1);
          const bounds = mockup.getBoundingClientRect();
          const previousBounds = pinMockups[index - 1]?.getBoundingClientRect();
          return bounds.width + (bounds.left - (previousBounds?.left ?? bounds.left) - bounds.width);
        };
        const pinBetweenSecondAndThirdX = () => {
          const baseCenterX = (mockup: HTMLElement) => {
            const bounds = mockup.getBoundingClientRect();
            return bounds.left + (bounds.width / 2) - Number(gsap.getProperty(mockup, 'x'));
          };
          const pinnedBaseCenter = baseCenterX(pinMockups[2]!);
          const targetCenter = (baseCenterX(pinMockups[1]!) + pinnedBaseCenter) / 2;
          return targetCenter - pinnedBaseCenter;
        };
        gsap.set(scanTitle, { width: scanInitialTitleWidth });
        const pinnedMockup = pinMockups[2]!;
        const remainingPinMockups = pinMockups.filter((_, index) => index !== 2);
        const shiftedPinMockups = pinMockups.slice(0, 2);
        phase('group-icon')
          .to(groupScene, { autoAlpha: 1, duration: .01 })
          .to(groupIcon, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .48, ease: 'power3.out' });
        phase('group-title')
          .to(groupWords, { autoAlpha: 1, width: () => groupWordWidth(0), x: 0, filter: 'blur(0px)', duration: .58, ease: 'power3.out' })
          .to(groupTitle, { gap: expandedTitleGap, duration: .58, ease: 'power3.out' }, '<');
        phase('group-background')
          .to(groupTitle, {
            backgroundColor: '#fff',
            color: '#151515',
            padding: expandedTitlePadding,
            duration: .78,
            ease: 'power3.inOut',
          });
        phase('group-lift')
          .to(groupTitle, { scale: liftedTitleScale, y: () => -contentFrame.clientHeight * .34, duration: .72, ease: 'power3.inOut' });
        phase('group-hide-icon')
          .to(groupIcon, { autoAlpha: 0, width: 0, height: 0, filter: 'blur(12px)', duration: .46, ease: 'power2.inOut' })
          .to(groupTitle, { gap: 0, duration: .46, ease: 'power2.inOut' }, '<');
        phase('group-items')
          .to(groupMockups, { autoAlpha: 1, y: 0, filter: 'blur(0px)', scale: 1, duration: .7, stagger: .21, ease: 'power2.out' });
        phase('group-name')
          .to(groupWords, { width: groupNameWidth, duration: .9, ease: 'power3.inOut' })
          .to(groupWordItems[1], { autoAlpha: 1, x: 0, filter: 'blur(0px)', duration: .9, ease: 'power3.out' }, '<.12');
        phase('group-select')
          .to(groupChecks, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .4, stagger: .14, ease: 'back.out(1.8)' });
        phase('group-collapse')
          .to(groupMockups, { x: pullMockupX, y: pullMockupY, scale: .1, autoAlpha: 0, filter: 'blur(12px)', duration: 1.05, stagger: .12, ease: 'power4.in' });
        phase('group-exit')
          .to(groupTitle, { autoAlpha: 0, y: () => -contentFrame.clientHeight * .78, filter: 'blur(12px)', duration: .54, ease: 'power2.in' })
          .to(groupScene, { autoAlpha: 0, duration: .01 });
        phase('pin-icon')
          .to(pinScene, { autoAlpha: 1, duration: .01 })
          .to(pinIcon, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .48, ease: 'power3.out' });
        phase('pin-title')
          .to(pinWords, { autoAlpha: 1, width: () => pinWords.scrollWidth + 12, x: 0, filter: 'blur(0px)', duration: .58, ease: 'power3.out' })
          .to(pinTitle, { gap: expandedTitleGap, duration: .58, ease: 'power3.out' }, '<');
        phase('pin-background')
          .to(pinTitle, { backgroundColor: '#fff', color: '#151515', padding: expandedTitlePadding, duration: .78, ease: 'power3.inOut' });
        phase('pin-lift')
          .to(pinTitle, { scale: liftedTitleScale, y: () => -contentFrame.clientHeight * .34, duration: .72, ease: 'power3.inOut' });
        phase('pin-hide-icon')
          .to(pinIcon, { autoAlpha: 0, width: 0, height: 0, filter: 'blur(12px)', duration: .46, ease: 'power2.inOut' })
          .to(pinTitle, { gap: 0, duration: .46, ease: 'power2.inOut' }, '<');
        phase('pin-items')
          .to(pinMockups, { autoAlpha: 1, y: 0, filter: 'blur(0px)', scale: 1, duration: .7, stagger: .21, ease: 'power2.out' });
        phase('pin-mark')
          .to(pinOrb, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .48, ease: 'back.out(1.8)' });
        phase('pin-reorder')
          .to(pinnedMockup, { x: () => pinSlotOffset(2, 0), duration: .82, ease: 'power3.inOut' })
          .to(shiftedPinMockups, { x: pinShiftRight, duration: .82, ease: 'power3.inOut' }, '<');
        phase('pin-filter')
          .to(remainingPinMockups, { y: () => contentFrame.clientHeight * .58, autoAlpha: 0, filter: 'blur(14px)', duration: .76, stagger: .12, ease: 'power3.in' });
        phase('pin-center')
          .to(pinnedMockup, { x: pinBetweenSecondAndThirdX, y: 0, duration: .82, ease: 'power3.inOut' });
        phase('pin-exit')
          .to(pinnedMockup, { y: () => Number(gsap.getProperty(pinnedMockup, 'y')) + contentFrame.clientHeight * .72, autoAlpha: 0, filter: 'blur(14px)', duration: .64, ease: 'power3.in' })
          .to(pinTitle, { y: () => -contentFrame.clientHeight * .82, autoAlpha: 0, filter: 'blur(12px)', duration: .64, ease: 'power3.in' }, '<')
          .to(pinScene, { autoAlpha: 0, duration: .01 });
        phase('share-icon')
          .to(shareScene, { autoAlpha: 1, duration: .01 })
          .to(shareIcon, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .48, ease: 'power3.out' });
        phase('share-title')
          .to(shareWords, { autoAlpha: 1, width: () => shareWords.scrollWidth + 12, x: 0, filter: 'blur(0px)', duration: .58, ease: 'power3.out' })
          .to(shareTitle, { gap: expandedTitleGap, duration: .58, ease: 'power3.out' }, '<');
        phase('share-background')
          .to(shareTitle, { backgroundColor: '#fff', color: '#151515', padding: expandedTitlePadding, duration: .78, ease: 'power3.inOut' });
        phase('share-lift')
          .to(shareTitle, { scale: liftedTitleScale, y: () => -contentFrame.clientHeight * .34, duration: .72, ease: 'power3.inOut' });
        phase('share-hide-icon')
          .to(shareIcon, { autoAlpha: 0, width: 0, height: 0, filter: 'blur(12px)', duration: .46, ease: 'power2.inOut' })
          .to(shareTitle, { gap: 0, duration: .46, ease: 'power2.inOut' }, '<');
        phase('share-items')
          .to(shareMockups, { autoAlpha: 1, y: 0, filter: 'blur(0px)', scale: 1, duration: .7, stagger: .21, ease: 'power2.out' });
        phase('share-select')
          .to(shareChecks, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .4, stagger: .14, ease: 'back.out(1.8)' });
        phase('share-collapse')
          .to(shareMockups, { x: pullShareMockupX, y: pullShareMockupY, scale: .1, autoAlpha: 0, filter: 'blur(12px)', duration: .82, stagger: .1, ease: 'power4.in' });
        phase('share-action')
          .to(shareTitle, { scale: 1, y: 0, duration: .52, ease: 'power3.inOut' })
          .to(shareWords, { autoAlpha: 0, width: 0, filter: 'blur(10px)', duration: .28, ease: 'power2.inOut' }, '<.04')
          .to(shareTitle, { autoAlpha: 0, filter: 'blur(10px)', duration: .22, ease: 'power2.in' })
          .to(shareAction, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .4, ease: 'power3.out' }, '<')
          .to(sharePlane, { autoAlpha: 1, x: 0, filter: 'blur(0px)', duration: .42, ease: 'power3.out' }, '<.06');
        phase('share-socials')
          .to(shareAction, { width: expandedShareWidth, duration: .56, ease: 'power3.inOut' })
          .to(sharePlane, { x: expandedSharePlaneX, duration: .42, ease: 'power3.inOut' }, '<')
          .to(shareSocials, {
            autoAlpha: 1,
            x: 0,
            filter: 'blur(0px)',
            duration: .42,
            stagger: { each: .09, from: 'end' },
            ease: 'power3.out',
          }, '<.28');
        phase('share-send')
          .to(sharePlane, {
            rotation: 45,
            scale: .62,
            y: 0,
            transformOrigin: 'center',
            duration: .34,
            ease: 'power3.inOut',
          })
          .to(sharePlane, {
            x: () => sharePlaneItemX(0),
            y: 0,
            duration: .62,
            ease: 'power2.inOut',
          })
          .to(shareAction, { width: compactShareWidth, duration: .5, ease: 'power3.inOut' }, '<.12')
          .to(shareSocialList, {
            left: () => sectionPixelValue('--action-share-edge', 18),
            gap: () => sectionPixelValue('--action-share-social-gap', 16),
            duration: .5,
            ease: 'power3.inOut',
          }, '<')
          .to(shareSocials[0], {
            backgroundColor: '#151515',
            duration: .18,
            ease: 'power2.out',
          })
          .to(shareSocialMarks[0], {
            color: '#fff',
            duration: .18,
            ease: 'power2.out',
          }, '<');
        shareSocials.slice(1).forEach((_, index) => {
          reveal
            .to(sharePlane, {
              x: () => sharePlaneItemX(index + 1),
              y: 0,
              duration: .34,
              ease: 'power2.inOut',
            })
            .to(shareSocials[index + 1], {
              backgroundColor: '#151515',
              duration: .18,
              ease: 'power2.out',
            }, '>-.1')
            .to(shareSocialMarks[index + 1], {
              color: '#fff',
              duration: .18,
              ease: 'power2.out',
            }, '<');
        });
        reveal.to(sharePlane, {
          x: sharePlaneExitX,
          y: 0,
          rotation: 45,
          autoAlpha: 0,
          duration: .48,
          ease: 'power3.in',
        });
        phase('share-exit')
          .to(shareAction, { y: () => -contentFrame.clientHeight * .68, autoAlpha: 0, filter: 'blur(12px)', duration: .62, ease: 'power3.in' })
          .to(shareScene, { autoAlpha: 0, duration: .01 });

        phase('export-icon')
          .to(exportScene, { autoAlpha: 1, duration: .01 })
          .to(exportIcon, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .48, ease: 'power3.out' });
        phase('export-title')
          .to(exportWords, { autoAlpha: 1, width: () => (exportWordItems[0]?.scrollWidth ?? 0) + 12, x: 0, filter: 'blur(0px)', duration: .58, ease: 'power3.out' })
          .to(exportTitle, { gap: expandedTitleGap, duration: .58, ease: 'power3.out' }, '<');
        phase('export-background')
          .to(exportTitle, { backgroundColor: '#fff', color: '#151515', padding: expandedTitlePadding, duration: .78, ease: 'power3.inOut' });
        phase('export-lift')
          .to(exportTitle, { scale: liftedTitleScale, y: () => -contentFrame.clientHeight * .34, duration: .72, ease: 'power3.inOut' });
        phase('export-hide-icon')
          .to(exportIcon, { autoAlpha: 0, width: 0, height: 0, filter: 'blur(12px)', duration: .46, ease: 'power2.inOut' })
          .to(exportTitle, { gap: 0, duration: .46, ease: 'power2.inOut' }, '<');
        phase('export-items')
          .to(exportMockups, { autoAlpha: 1, y: 0, filter: 'blur(0px)', scale: 1, duration: .7, stagger: .21, ease: 'power2.out' });
        phase('export-select')
          .to(exportChecks, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .4, stagger: .14, ease: 'back.out(1.8)' });
        phase('export-collapse')
          .to(exportMockups, { x: pullExportMockupX, y: pullExportMockupY, scale: .1, autoAlpha: 0, filter: 'blur(12px)', duration: .82, stagger: .1, ease: 'power4.in' });
        phase('export-formats')
          .to(exportWordItems[0], { autoAlpha: 0, y: -16, filter: 'blur(10px)', duration: .28, ease: 'power2.inOut' })
          .to(exportWords, { width: 150, duration: .34, ease: 'power3.inOut' }, '<')
          .set(exportOptions, { width: standardMockupWidth })
          .to(exportTitle, { x: exportLeftPillX, duration: .5, ease: 'power3.inOut' }, '>.18')
          .to(exportOptions, { autoAlpha: 1, x: exportRightPillX, filter: 'blur(0px)', duration: .5, ease: 'power3.inOut' }, '<')
          .to(exportWords, { width: () => (exportWordItems[1]?.scrollWidth ?? 0) + 12, duration: .42, ease: 'power3.inOut' }, '>.16')
          .to(exportTitle, { x: exportLeftPillX, duration: .42, ease: 'power3.inOut' }, '<')
          .to(exportOptions, { width: exportCsvPillWidth, duration: .42, ease: 'power3.inOut' }, '<')
          .to(exportOptions, { x: exportRightPillX, duration: .42, ease: 'power3.inOut' }, '<')
          .to(exportWordItems[1], { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: .36, ease: 'power3.out' }, '<.06')
          .to(exportOptionLabels, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: .36, ease: 'power3.out' }, '<');
        phase('export-previews')
          .to(exportPreviews, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: .52, stagger: .14, ease: 'power3.out' });
        phase('export-exit')
          .to([exportTitle, ...exportOptions], { y: () => -contentFrame.clientHeight * .78, autoAlpha: 0, filter: 'blur(12px)', duration: .62, ease: 'power3.in' })
          .to(exportPreviews, { y: () => contentFrame.clientHeight * .72, autoAlpha: 0, filter: 'blur(14px)', duration: .58, stagger: .08, ease: 'power3.in' }, '<')
          .to(exportScene, { autoAlpha: 0, duration: .01 });

        phase('voice-icon')
          .to(voiceScene, { autoAlpha: 1, duration: .01 })
          .to(voiceIcon, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .48, ease: 'power3.out' });
        phase('voice-title')
          .to(voiceWords, { autoAlpha: 1, width: () => voiceWords.scrollWidth + 12, x: 0, filter: 'blur(0px)', duration: .58, ease: 'power3.out' })
          .to(voiceTitle, { gap: expandedTitleGap, duration: .58, ease: 'power3.out' }, '<');
        phase('voice-background')
          .to(voiceTitle, { backgroundColor: '#fff', color: '#151515', padding: expandedTitlePadding, duration: .78, ease: 'power3.inOut' });
        phase('voice-waveform')
          .to(voiceIcon, { autoAlpha: 0, x: -58, filter: 'blur(12px)', duration: .44, ease: 'power2.inOut' }, '>.42')
          .to(voiceWords, { autoAlpha: 0, x: 58, filter: 'blur(12px)', duration: .44, ease: 'power2.inOut' }, '<')
          .to(voiceLines, { autoAlpha: 1, scaleY: 1, filter: 'blur(0px)', duration: .36, stagger: .025, ease: 'power3.out' }, '>.1');
        phase('voice-lift')
          .to(voiceTitle, { scale: liftedTitleScale, y: () => -contentFrame.clientHeight * .34, duration: .9, ease: 'power3.inOut' })
          .to(voiceTranscript, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: .76, ease: 'power3.out' }, '<')
          .to(voiceTranscriptTitle, { scaleX: 1, duration: .5, ease: 'power3.out' }, '<.12')
          .to(voiceLines, { backgroundColor: '#d94c4c', duration: .28, ease: 'power2.out' }, '<');
        phase('voice-transcript')
          .to(voiceTranscriptLines, { scaleX: 1, duration: .24, stagger: .18, ease: 'power2.out' });
        phase('voice-exit')
          .to(voiceTitle, { y: () => -contentFrame.clientHeight * .78, autoAlpha: 0, filter: 'blur(12px)', duration: .62, ease: 'power3.in' })
          .to(voiceTranscript, { y: () => contentFrame.clientHeight * .72, autoAlpha: 0, filter: 'blur(14px)', duration: .58, ease: 'power3.in' }, '<')
          .to(voiceScene, { autoAlpha: 0, duration: .01 });

        phase('scan-icon')
          .to(scanScene, { autoAlpha: 1, duration: .01 })
          .to(scanIcon, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .48, ease: 'power3.out' })
          .set(scanTitle, { clearProps: 'width' });
        phase('scan-title')
          .to(scanWords, { autoAlpha: 1, width: () => scanWords.scrollWidth + 12, x: 0, filter: 'blur(0px)', duration: .58, ease: 'power3.out' })
          .to(scanTitle, { gap: expandedTitleGap, duration: .58, ease: 'power3.out' }, '<');
        phase('scan-background')
          .to(scanTitle, { backgroundColor: '#fff', color: '#151515', padding: expandedTitlePadding, duration: .78, ease: 'power3.inOut' });
        phase('scan-search')
          .to(scanIcon, { autoAlpha: 0, x: -58, filter: 'blur(12px)', duration: .42, ease: 'power2.inOut' }, '>.42')
          .to(scanWords, { autoAlpha: 0, x: 58, filter: 'blur(12px)', duration: .42, ease: 'power2.inOut' }, '<')
          .to(scanTitle, { width: 100, height: 100, padding: 0, borderRadius: 50, duration: .5, ease: 'power3.inOut' }, '>.06')
          .to(scanSearch, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .38, ease: 'power3.out' }, '<.08');
        phase('scan-phone')
          .to(scanPhone, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .52, ease: 'power3.out' });
        phase('scan-pass')
          .to(scanMotion, { x: -56, y: -116, duration: .34, ease: 'sine.inOut' })
          .to(scanMotion, { x: 58, y: -52, duration: .34, ease: 'sine.inOut' })
          .to(scanMotion, { x: -62, y: 16, duration: .34, ease: 'sine.inOut' })
          .to(scanMotion, { x: 56, y: 82, duration: .34, ease: 'sine.inOut' })
          .to(scanMotion, { x: 0, y: 132, duration: .34, ease: 'sine.inOut' });
        phase('scan-result')
          .to(scanPhone, { autoAlpha: 0, scale: .94, filter: 'blur(14px)', duration: .46, ease: 'power2.in' }, '>.12')
          .to(scanResult, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: .46, ease: 'power3.out' }, '<.12')
          .to(scanMotion, { x: 0, y: 0, duration: .46, ease: 'power3.inOut' }, '<');
        phase('scan-extract')
          .to(scanMotion, { scale: liftedScanScale, y: () => -contentFrame.clientHeight * .34, duration: .5, ease: 'power3.inOut' })
          .to(scanResultTitle, { scaleX: 1, duration: .34, ease: 'power3.out' }, '<.08')
          .to(scanResultLines, { scaleX: 1, duration: .22, stagger: .18, ease: 'power2.out' }, '>.08');
        phase('scan-exit')
          .to(scanMotion, { scale: 1.3, autoAlpha: 0, filter: 'blur(14px)', duration: .42, ease: 'power2.in' })
          .to(scanResult, { autoAlpha: 0, filter: 'blur(14px)', duration: .42, ease: 'power2.in' }, '<')
          .to(scanScene, { autoAlpha: 0, duration: .01 });

        phase('system-icon')
          .to(systemScene, { autoAlpha: 1, duration: .01 })
          .to(systemIcon, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .48, ease: 'power3.out' });
        phase('system-title')
          .to(systemWords, { autoAlpha: 1, width: () => systemWords.scrollWidth + 12, x: 0, filter: 'blur(0px)', duration: .58, ease: 'power3.out' })
          .to(systemTitle, { gap: expandedTitleGap, duration: .58, ease: 'power3.out' }, '<');
        phase('system-background')
          .to(systemTitle, { backgroundColor: '#fff', color: '#151515', padding: expandedTitlePadding, duration: .78, ease: 'power3.inOut' });
        phase('system-lift')
          .to(systemTitle, { scale: liftedTitleScale, y: () => -contentFrame.clientHeight * .34, duration: .72, ease: 'power3.inOut' });
        phase('system-hide-icon')
          .to(systemIcon, { autoAlpha: 0, width: 0, height: 0, filter: 'blur(12px)', duration: .46, ease: 'power2.inOut' })
          .to(systemTitle, { gap: 0, duration: .46, ease: 'power2.inOut' }, '<');
        phase('system-items')
          .to(systemMockups, { autoAlpha: 1, y: 0, filter: 'blur(0px)', scale: 1, duration: .7, stagger: .21, ease: 'power2.out' });
        phase('system-exit')
          .to(systemTitle, { autoAlpha: 0, y: () => -contentFrame.clientHeight * .78, filter: 'blur(12px)', duration: .62, ease: 'power3.in' })
          .to(systemMockups, { y: () => contentFrame.clientHeight * .72, autoAlpha: 0, filter: 'blur(14px)', duration: .58, stagger: .08, ease: 'power3.in' }, '<')
          .to(systemScene, { autoAlpha: 0, duration: .01 });

        phase('cloud-icon')
          .to(cloudScene, { autoAlpha: 1, duration: .01 })
          .to(cloudIcon, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .48, ease: 'power3.out' });
        phase('cloud-title')
          .to(cloudWords, { autoAlpha: 1, width: () => cloudWords.scrollWidth + 12, x: 0, filter: 'blur(0px)', duration: .58, ease: 'power3.out' })
          .to(cloudTitle, { gap: expandedTitleGap, duration: .58, ease: 'power3.out' }, '<');
        phase('cloud-background')
          .to(cloudTitle, { backgroundColor: '#fff', color: '#151515', padding: expandedTitlePadding, duration: .78, ease: 'power3.inOut' });
        phase('cloud-lift')
          .to(cloudTitle, { scale: liftedTitleScale, y: () => -contentFrame.clientHeight * .34, duration: .72, ease: 'power3.inOut' });
        phase('cloud-hide-icon')
          .to(cloudIcon, { autoAlpha: 0, width: 0, height: 0, filter: 'blur(12px)', duration: .46, ease: 'power2.inOut' })
          .to(cloudTitle, { gap: 0, duration: .46, ease: 'power2.inOut' }, '<');
        phase('cloud-items')
          .to(cloudMockups, { autoAlpha: 1, y: 0, filter: 'blur(0px)', scale: 1, duration: .7, stagger: .21, ease: 'power2.out' });
        phase('complete');

        const timelineDuration = reveal.duration();
        const phaseTimes = Object.entries(reveal.labels)
          .filter(([label]) => label.startsWith(PHASE_LABEL_PREFIX))
          .map(([, time]) => time)
          .sort((first, second) => first - second);
        const phaseCount = phaseTimes.length;
        const snapPoints = phaseTimes.map((_, index) => index / Math.max(phaseCount - 1, 1));
        const snapToPhase = ScrollTrigger.snapDirectional(snapPoints);
        const findPhaseProgress = (suffix: string) => {
          const entry = Object.entries(reveal.labels).find(([label]) => label.endsWith(`-${suffix}`));
          return entry ? entry[1] / timelineDuration : 1;
        };
        const findPhaseTime = (suffix: string) => {
          const entry = Object.entries(reveal.labels).find(([label]) => label.endsWith(`-${suffix}`));
          return entry?.[1] ?? timelineDuration;
        };
        const voiceLoopStartTime = findPhaseTime('voice-lift');
        const voiceLoopEndTime = findPhaseTime('voice-exit');
        const voiceWaveLoop = gsap.timeline({ paused: true, repeat: -1, yoyo: true })
          .to(voiceLines, {
            scaleY: (index) => .34 + ((index * 7) % 10) / 14,
            duration: .32,
            stagger: .02,
            ease: 'sine.inOut',
          });
        let isVoiceWaveLooping = false;
        const syncVoiceWaveLoop = () => {
          const shouldLoop = !reduceViewportMotion
            && reveal.time() >= voiceLoopStartTime
            && reveal.time() < voiceLoopEndTime;
          if (shouldLoop === isVoiceWaveLooping) return;
          isVoiceWaveLooping = shouldLoop;
          if (shouldLoop) {
            voiceWaveLoop.play(0);
            return;
          }
          voiceWaveLoop.pause(0);
        };
        const featureStarts = ['group-icon', 'pin-icon', 'share-icon', 'export-icon', 'voice-icon', 'scan-icon', 'system-icon', 'cloud-icon']
          .map(findPhaseProgress);
        introProgress = revealDuration / timelineDuration;
        reveal.pause(0);
        let visibleTabIndex = -1;

        const focusTab = (index: number) => {
          if (visibleTabIndex === index) return;
          visibleTabIndex = index;
          const tab = tabs[index];
          if (!tab) return;
          const targetScrollLeft = tab.offsetLeft - ((tabScroll.clientWidth - tab.offsetWidth) / 2);
          gsap.to(tabScroll, {
            scrollLeft: Math.max(0, targetScrollLeft),
            duration: .52,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        };

        const syncUi = () => {
          syncVoiceWaveLoop();
          const timelineProgress = reveal.progress();
          const isContentRevealed = timelineProgress >= introProgress;
          setIntroComplete((current) => current === isContentRevealed ? current : isContentRevealed);
          if (!isContentRevealed) {
            updateFeatureProgress(0);
            return;
          }

          let featureIndex = 0;
          featureStarts.forEach((start, index) => {
            if (timelineProgress >= start) featureIndex = index;
          });
          focusTab(featureIndex);
          const currentStart = featureStarts[featureIndex] ?? introProgress;
          const nextStart = featureStarts[featureIndex + 1] ?? 1;
          const localProgress = clamp01((timelineProgress - currentStart) / Math.max(nextStart - currentStart, .001));
          updateFeatureProgress((featureIndex + localProgress) / actionFeatureDefinitions.length);
        };
        reveal.eventCallback('onUpdate', syncUi);

        // ScrollTrigger drives a normalized timeline so every logical phase
        // receives the same physical scroll distance, regardless of its GSAP
        // duration or stagger count.
        const renderScrollProgress = (progress: number) => {
          const scaledProgress = clamp01(progress) * (phaseCount - 1);
          const segmentIndex = Math.min(Math.floor(scaledProgress), phaseCount - 2);
          const segmentProgress = scaledProgress - segmentIndex;
          reveal.time(gsap.utils.interpolate(
            phaseTimes[segmentIndex] ?? 0,
            phaseTimes[segmentIndex + 1] ?? timelineDuration,
            segmentProgress,
          ));
        };
        const scrollDriver = { progress: 0 };
        const scrollTimeline = gsap.timeline({ paused: true })
          .to(scrollDriver, {
            progress: 1,
            duration: 1,
            ease: 'none',
            onUpdate: () => {
              renderScrollProgress(scrollDriver.progress);
            },
          });

        ScrollTrigger.create({
          id: 'action-clipboard',
          // The section stays in document flow when GSAP wraps the pin.
          // Its top reaches the viewport exactly when the padded pin should lock.
          trigger: section,
          start: 'top top',
          end: () => `+=${Math.max((phaseCount - 1) * SCROLL_TUNING.pixelsPerPhase, window.innerHeight)}`,
          pin,
          pinSpacing: true,
          anticipatePin: 0,
          refreshPriority: -1,
          animation: scrollTimeline,
          scrub: SCROLL_TUNING.scrub,
          snap: {
            snapTo: (value, self) => snapToPhase(value, self?.direction ?? 0),
            delay: SCROLL_TUNING.snapDelay,
            duration: SCROLL_TUNING.snapDuration,
            ease: 'power3.inOut',
            inertia: false,
          },
          onRefresh: (self) => {
            // Re-evaluate function-based widths after a breakpoint or browser
            // viewport change, then render the real scroll position. This keeps
            // Share's final action and the standard cards in the same scale.
            reveal.invalidate();
            renderScrollProgress(self.progress);
            syncUi();
          },
        });
      }, sectionRef);

      cleanup = () => {
        tabs.forEach(tab => tab.style.removeProperty('--tab-progress'));
        context.revert();
      };
      ScrollTrigger.refresh();
    };

    void initialize();
    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  return (
    <ActionClipboardSection ref={sectionRef} aria-label={dict.actionClipboard.sectionLabel}>
      <div
        ref={pinRef}
        className={`action-clipboard-pin${introComplete ? ' is-content-revealed' : ''}`}
      >
        <div className="action-clipboard-content-frame">
          <div className="action-clipboard-content">
            <article className="action-clipboard-scene action-clipboard-scene--group" aria-hidden={activeIndex !== 0}>
              <div className="action-clipboard-scene-title-anchor">
                <div className="action-clipboard-scene-title">
                  <span className="action-clipboard-scene-icon"><Folder aria-hidden="true" /></span>
                  <span className="action-clipboard-title-words" aria-label={`${dict.actionClipboard.groupTitle.primary} ${dict.actionClipboard.groupTitle.secondary}`}>
                    <span className="action-clipboard-title-word-track">
                      <span>{dict.actionClipboard.groupTitle.primary}</span>
                      <span>{dict.actionClipboard.groupTitle.secondary}</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="action-clipboard-mockups">
                {mockupTypes.map((type) => (
                  <MockupCard
                    type={type}
                    key={`group-${type}`}
                    marker={<span className="action-clipboard-share-orb"><Check aria-hidden="true" /></span>}
                  />
                ))}
              </div>
            </article>

            <article className="action-clipboard-scene action-clipboard-scene--pin" aria-hidden={activeIndex !== 1}>
              <div className="action-clipboard-scene-title-anchor">
                <div className="action-clipboard-scene-title">
                  <span className="action-clipboard-scene-icon"><PinIcon aria-hidden="true" /></span>
                  <span className="action-clipboard-title-words" aria-label={dict.actionClipboard.featureLabels.pin}>
                    <span className="action-clipboard-title-word-track"><span>{dict.actionClipboard.featureLabels.pin}</span></span>
                  </span>
                </div>
              </div>
              <div className="action-clipboard-mockups">
                {mockupTypes.map((type, index) => (
                  <MockupCard
                    type={type}
                    key={`pin-${type}`}
                    marker={index === 2 ? <span className="action-clipboard-pin-orb"><PinIcon aria-hidden="true" /></span> : undefined}
                  />
                ))}
              </div>
            </article>

            <article className="action-clipboard-scene action-clipboard-scene--share" aria-hidden={activeIndex !== 2}>
              <div className="action-clipboard-scene-title-anchor">
                <div className="action-clipboard-scene-title">
                  <span className="action-clipboard-scene-icon"><Share2 aria-hidden="true" /></span>
                  <span className="action-clipboard-title-words" aria-label={dict.actionClipboard.featureLabels.share}>
                    <span className="action-clipboard-title-word-track"><span>{dict.actionClipboard.featureLabels.share}</span></span>
                  </span>
                </div>
              </div>
              <div className="action-clipboard-mockups">
                {mockupTypes.map((type) => (
                  <MockupCard
                    type={type}
                    key={`share-${type}`}
                    marker={<span className="action-clipboard-share-orb"><Check aria-hidden="true" /></span>}
                  />
                ))}
              </div>
              <div className="action-clipboard-share-action" aria-hidden="true">
                <Send className="action-clipboard-share-plane" aria-hidden="true" />
                <span className="action-clipboard-share-socials">
                  <span aria-label="Threads"><SocialMark className="action-clipboard-social-mark" name="threads" /></span>
                  <span aria-label="Facebook"><SocialMark className="action-clipboard-social-mark" name="facebook" /></span>
                  <span aria-label="X"><SocialMark className="action-clipboard-social-mark" name="x" /></span>
                  <span aria-label="Instagram"><SocialMark className="action-clipboard-social-mark action-clipboard-social-instagram" name="instagram" /></span>
                  <span aria-label="TikTok"><SocialMark className="action-clipboard-social-mark" name="tiktok" /></span>
                </span>
              </div>
            </article>

            <article className="action-clipboard-scene action-clipboard-scene--export" aria-hidden={activeIndex !== 3}>
              <div className="action-clipboard-scene-title-anchor">
                <div className="action-clipboard-scene-title">
                  <span className="action-clipboard-scene-icon"><Download aria-hidden="true" /></span>
                  <span className="action-clipboard-title-words" aria-label={dict.actionClipboard.featureLabels.export}>
                    <span className="action-clipboard-title-word-track"><span>{dict.actionClipboard.featureLabels.export}</span><span>JSON</span></span>
                  </span>
                </div>
              </div>
              <div className="action-clipboard-mockups">
                {exportMockupTypes.map((type) => (
                  <MockupCard
                    type={type}
                    key={`export-${type}`}
                    marker={<span className="action-clipboard-share-orb"><Check aria-hidden="true" /></span>}
                  />
                ))}
              </div>
              <div className="action-clipboard-export-options" aria-hidden="true">
                <span><span className="action-clipboard-export-option-label">CSV</span></span>
              </div>
              <div className="action-clipboard-export-previews" aria-hidden="true">
                <span className="action-clipboard-export-preview action-clipboard-export-preview--json">
                  <span className="action-clipboard-json-skeleton">
                    <i className="action-clipboard-json-bracket" />
                    {[0, 1].map((objectIndex) => (
                      <span className="action-clipboard-json-object" key={`json-object-${objectIndex}`}>
                        <i className="action-clipboard-json-brace" />
                        <span className="action-clipboard-json-property"><i /><i /><i /></span>
                        <span className="action-clipboard-json-property"><i /><i /><i /></span>
                        <i className="action-clipboard-json-brace" />
                      </span>
                    ))}
                    <i className="action-clipboard-json-bracket" />
                  </span>
                </span>
                <span className="action-clipboard-export-preview action-clipboard-export-preview--csv">
                  <span className="action-clipboard-csv-row action-clipboard-csv-row--header"><i /><i /><i /></span>
                  {Array.from({ length: 4 }, (_, index) => (
                    <span className="action-clipboard-csv-row" key={`csv-${index}`}><i /><i /><i /></span>
                  ))}
                </span>
              </div>
            </article>

            <article className="action-clipboard-scene action-clipboard-scene--voice" aria-hidden={activeIndex !== 4}>
              <div className="action-clipboard-scene-title-anchor">
                <div className="action-clipboard-scene-title">
                  <span className="action-clipboard-scene-icon"><Mic aria-hidden="true" /></span>
                  <span className="action-clipboard-title-words" aria-label={dict.actionClipboard.featureLabels.voice}>
                    <span className="action-clipboard-title-word-track"><span>{dict.actionClipboard.featureLabels.voice}</span></span>
                  </span>
                  <span className="action-clipboard-voice-lines" aria-hidden="true">
                    {Array.from({ length: 11 }, (_, index) => <i className="action-clipboard-voice-line" key={`voice-line-${index}`} />)}
                  </span>
                </div>
              </div>
              <div className="action-clipboard-voice-transcript" aria-hidden="true">
                <span className="action-clipboard-voice-transcript-title" />
                <span className="action-clipboard-voice-transcript-lines"><i /><i /><i /><i /><i /></span>
              </div>
            </article>

            <article className="action-clipboard-scene action-clipboard-scene--scan" aria-hidden={activeIndex !== 5}>
              <div className="action-clipboard-scene-title-anchor">
                <div className="action-clipboard-scan-motion">
                  <div className="action-clipboard-scene-title">
                    <span className="action-clipboard-scan-heading">
                      <span className="action-clipboard-scene-icon"><ScanText aria-hidden="true" /></span>
                      <span className="action-clipboard-title-words" aria-label={dict.actionClipboard.featureLabels.scanText}>
                        <span className="action-clipboard-title-word-track"><span>{dict.actionClipboard.featureLabels.scanText}</span></span>
                      </span>
                    </span>
                  </div>
                  <span className="action-clipboard-scan-search"><ScanSearch aria-hidden="true" /></span>
                </div>
              </div>
              <div className="action-clipboard-scan-phone" aria-hidden="true"><span /></div>
              <div className="action-clipboard-scan-result" aria-hidden="true">
                <span className="action-clipboard-scan-result-title" />
                <span className="action-clipboard-scan-result-lines"><i /><i /><i /><i /><i /></span>
              </div>
            </article>

            <article className="action-clipboard-scene action-clipboard-scene--system" aria-hidden={activeIndex !== 6}>
              <div className="action-clipboard-scene-title-anchor">
                <div className="action-clipboard-scene-title">
                  <span className="action-clipboard-scene-icon"><ClipboardPenLine aria-hidden="true" /></span>
                  <span className="action-clipboard-title-words" aria-label={dict.actionClipboard.featureLabels.systemPasteboard}>
                    <span className="action-clipboard-title-word-track"><span>{dict.actionClipboard.featureLabels.systemPasteboard}</span></span>
                  </span>
                </div>
              </div>
              <div className="action-clipboard-mockups">
                {mockupTypes.map((type) => <MockupCard type={type} key={`system-${type}`} />)}
              </div>
            </article>

            <article className="action-clipboard-scene action-clipboard-scene--cloud" aria-hidden={activeIndex !== 7}>
              <div className="action-clipboard-scene-title-anchor">
                <div className="action-clipboard-scene-title">
                  <span className="action-clipboard-scene-icon"><Cloud aria-hidden="true" /></span>
                  <span className="action-clipboard-title-words" aria-label={dict.actionClipboard.featureLabels.iCloud}>
                    <span className="action-clipboard-title-word-track"><span>{dict.actionClipboard.featureLabels.iCloud}</span></span>
                  </span>
                </div>
              </div>
              <div className="action-clipboard-mockups">
                {mockupTypes.map((type) => <MockupCard type={type} key={`cloud-${type}`} />)}
              </div>
            </article>
          </div>
        </div>

        <div className="action-clipboard-tab-viewport" aria-label={dict.actionClipboard.progressLabel}>
          <div className="action-clipboard-tab-scroll">
            <div className="action-clipboard-tabs">
              {actionFeatureDefinitions.map((feature, index) => {
                const FeatureIcon = feature.icon;
                const label = dict.actionClipboard.featureLabels[feature.key];
                return (
                  <div
                    className="action-clipboard-tab"
                    key={feature.key}
                    aria-label={label}
                    aria-current={activeIndex === index ? 'step' : undefined}
                  >
                    <span className="action-clipboard-tab-label" aria-hidden="true"><FeatureIcon /></span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ActionClipboardSection>
  );
};

export default ActionClipboard;
