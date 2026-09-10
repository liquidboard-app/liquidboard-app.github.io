import React from 'react';
import { Pin as PinIcon } from 'lucide-react';
import { useTranslation } from '../../../../contexts/LanguageContext';
import SocialMark, { type SocialName } from '../SocialMark';
import { ActionClipboardCloneSection } from './styled';

type MockupType = 'text' | 'link' | 'image' | 'color' | 'sticker';

const GroupFolderIcon: React.FC = () => (
  <svg className="action-clone-panel-folder" viewBox="0 0 24 24" role="img" aria-label="Group folder">
    <defs>
      <linearGradient id="action-clone-folder-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#60a5fa" />
        <stop offset="1" stopColor="#2563eb" />
      </linearGradient>
    </defs>
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" fill="url(#action-clone-folder-gradient)" />
  </svg>
);

const createGroupLabels: Record<string, string> = {
  vi: 'Nhóm',
  en: 'Group',
  ja: 'グループ',
  es: 'Grupo',
  'zh-TW': '群組',
  'zh-CN': '分组',
  'pt-BR': 'Grupo',
  fr: 'Groupe',
  de: 'Gruppe',
  ru: 'Группа',
  ko: '그룹',
  hi: 'समूह',
  bn: 'গ্রুপ',
  id: 'Grup',
  it: 'Gruppo',
  th: 'กลุ่ม',
  tl: 'Grupo',
  pl: 'Grupa',
  tr: 'Grup',
};

const panels: Array<{ id: string; type: MockupType }> = [
  { id: 'text', type: 'text' },
  { id: 'link', type: 'link' },
  { id: 'color', type: 'color' },
  { id: 'image', type: 'image' },
  { id: 'sticker', type: 'sticker' },
];
const exportPanels = panels.slice(0, 3);
const actionCloneProgressValues = [0, 1, 2, 3, 4, 5];
const actionCloneFlyStart = 1500;
const actionCloneGroupCountStep = 180;
const actionCloneReturnStart = actionCloneFlyStart + (panels.length - 1) * actionCloneGroupCountStep + 180;
const actionCloneAnimationCycle = actionCloneReturnStart + (panels.length - 1) * actionCloneGroupCountStep + 500;
const actionClonePinCycle = 5200;
const actionClonePinStart = 650;
const actionClonePinReorderDuration = 400;
const actionClonePinBetweenDelay = 100;
const actionClonePinRevealDelay = 520;
const actionClonePinFirstShiftStart = actionClonePinStart + actionClonePinRevealDelay;
const actionClonePinSecondStart = actionClonePinFirstShiftStart + actionClonePinReorderDuration + actionClonePinBetweenDelay;
const actionClonePinSecondShiftStart = actionClonePinSecondStart + actionClonePinRevealDelay;
const actionClonePinReturnStart = actionClonePinSecondShiftStart + actionClonePinReorderDuration + 240;
const actionClonePinReturnDuration = 400;
const actionClonePinReturnStickerDuration = actionClonePinReorderDuration;
const actionClonePinReturnSecondShiftStart = actionClonePinReturnStart + actionClonePinRevealDelay;
const actionClonePinReturnFirstStart = actionClonePinReturnSecondShiftStart + actionClonePinReturnStickerDuration + actionClonePinBetweenDelay;
const actionClonePinReturnFirstShiftStart = actionClonePinReturnFirstStart + actionClonePinRevealDelay;
const actionCloneShareStart = 650;
const actionCloneShareCheckStep = 130;
const actionCloneShareCollectStart = actionCloneShareStart + panels.length * actionCloneShareCheckStep + 130;
const actionCloneShareExpandStart = actionCloneShareCollectStart + 1050;
const actionCloneShareSocialStep = 150;
const actionCloneShareSocialHold = 950;
const actionCloneShareSocialHideStart = actionCloneShareExpandStart + panels.length * actionCloneShareSocialStep + actionCloneShareSocialHold;
const actionCloneShareCollapseStart = actionCloneShareSocialHideStart + panels.length * actionCloneShareSocialStep + 180;
const actionCloneShareReturnStart = actionCloneShareCollapseStart + 760;
const actionCloneShareCycle = actionCloneShareReturnStart + 900;
const actionCloneExportStart = 1500;
const actionCloneExportCheckStep = 130;
const actionCloneExportCollectStart = actionCloneExportStart + exportPanels.length * actionCloneExportCheckStep + 130;
const actionCloneExportExpandStart = actionCloneExportCollectStart + 1050;
const actionCloneExportFormatStep = 180;
const actionCloneExportFormatHold = 950;
const actionCloneExportFormatHideStart = actionCloneExportExpandStart + 2 * actionCloneExportFormatStep + actionCloneExportFormatHold;
const actionCloneExportCollapseStart = actionCloneExportFormatHideStart + 2 * actionCloneExportFormatStep + 180;
const actionCloneExportReturnStart = actionCloneExportCollapseStart + 760;
const actionCloneExportCycle = actionCloneExportReturnStart + 900;

const actionCloneShareSocials: Array<{ name: SocialName; label: string }> = [
  { name: 'threads', label: 'Threads' },
  { name: 'facebook', label: 'Facebook' },
  { name: 'x', label: 'X' },
  { name: 'instagram', label: 'Instagram' },
  { name: 'tiktok', label: 'TikTok' },
];

const MockupCheck: React.FC<{ className?: string }> = ({ className }) => (
  <span className={['action-clone-mockup-check', className].filter(Boolean).join(' ')} aria-hidden="true">
    <svg viewBox="0 0 16 16">
      <path d="m3 8.5 3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const MockupPin: React.FC<{ order: number; visible: boolean }> = ({ order, visible }) => (
  <span className={`action-clone-mockup-pin${visible ? ' action-clone-mockup-pin--visible' : ''}`} aria-hidden="true">
    <span className="action-clone-mockup-pin-content">
      <PinIcon className="action-clone-mockup-pin-icon" />
      <span className="action-clone-mockup-pin-number">{order}</span>
    </span>
  </span>
);

const AnimatedProgress: React.FC<{ value: number; active: boolean; label: string }> = ({ value, active, label }) => {
  const previousValueRef = React.useRef(value);
  const distance = Math.abs(value - previousValueRef.current);
  const progressDuration = distance === 0 ? 0 : Math.min(900, 220 + distance * 130);

  React.useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return (
    <span className={`action-clone-progress${active ? ' action-clone-progress--active' : ''}`} aria-label={label}>
      <span className="action-clone-progress-stack">
        <span
          className="action-clone-progress-reel"
          style={{
            '--action-clone-progress-index': value,
            '--action-clone-progress-duration': `${progressDuration}ms`,
          } as React.CSSProperties}
          aria-hidden="true"
        >
          {actionCloneProgressValues.map((progressValue) => (
            <span className="action-clone-progress-value" key={progressValue}>{progressValue}</span>
          ))}
        </span>
      </span>
    </span>
  );
};

const DynamicPinIcon: React.FC = () => (
  <svg className="action-clone-panel-pin" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="action-clone-pin-gradient" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fdba74" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
    <path d="M12 17v5" fill="none" stroke="url(#action-clone-pin-gradient)" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" fill="url(#action-clone-pin-gradient)" stroke="url(#action-clone-pin-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DynamicShareIcon: React.FC = () => (
  <svg className="action-clone-panel-share" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="action-clone-share-gradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor="#a3a3a3" />
      </linearGradient>
    </defs>
    <path d="m10.586 5.414-5.172 5.172" fill="none" stroke="url(#action-clone-share-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m18.586 13.414-5.172 5.172" fill="none" stroke="url(#action-clone-share-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 12h12" fill="none" stroke="url(#action-clone-share-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="20" r="2" fill="url(#action-clone-share-gradient)" stroke="url(#action-clone-share-gradient)" strokeWidth="2" />
    <circle cx="12" cy="4" r="2" fill="url(#action-clone-share-gradient)" stroke="url(#action-clone-share-gradient)" strokeWidth="2" />
    <circle cx="20" cy="12" r="2" fill="url(#action-clone-share-gradient)" stroke="url(#action-clone-share-gradient)" strokeWidth="2" />
    <circle cx="4" cy="12" r="2" fill="url(#action-clone-share-gradient)" stroke="url(#action-clone-share-gradient)" strokeWidth="2" />
  </svg>
);

const DynamicExportIcon: React.FC = () => (
  <svg className="action-clone-panel-export" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="action-clone-export-gradient" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fda4af" />
        <stop offset="100%" stopColor="#dc2626" />
      </linearGradient>
    </defs>
    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" fill="url(#action-clone-export-gradient)" stroke="url(#action-clone-export-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 2v5a1 1 0 0 0 1 1h5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12v6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m15 15-3-3-3 3" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DynamicJsonIcon: React.FC = () => (
  <svg className="action-clone-export-format-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 2v5a1 1 0 0 0 1 1h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DynamicCsvIcon: React.FC = () => (
  <svg className="action-clone-export-format-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3v18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect width="18" height="18" x="3" y="3" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M3 9h18M3 15h18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MiniMockup: React.FC<{ type: MockupType; marker?: React.ReactNode }> = ({ type, marker }) => {
  if (type === 'link') {
    return (
      <div className="action-clone-mockup action-clone-mockup--link">
        <span className="action-clone-link-image">
          <svg className="action-clone-link-image-icon" viewBox="0 0 36 20" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="36" height="20" rx="2" fill="#ebebeb" />
            <circle cx="10" cy="7" r="2.5" fill="#cfcfcf" />
            <path d="m36 12.2-4.8-4.8a2 2 0 0 0-2.8 0L10 20h26Z" fill="#cfcfcf" />
          </svg>
        </span>
        <span className="action-clone-link-meta">
          <span className="action-clone-link-title" />
          <span className="action-clone-link-url" />
        </span>
        {marker}
      </div>
    );
  }

  if (type === 'color') {
    return (
      <div className="action-clone-mockup action-clone-mockup--color">
        <span className="action-clone-color-title" />
        <span className="action-clone-color-name" />
        {marker}
      </div>
    );
  }

  if (type === 'image') {
    return (
      <div className="action-clone-mockup action-clone-mockup--image">
        <span className="action-clone-image-placeholder">
          <svg className="action-clone-image-icon" viewBox="0 0 24 24" aria-hidden="true">
            <rect width="18" height="18" x="3" y="3" rx="2" fill="#ebebeb" />
            <circle cx="9" cy="9" r="2" fill="#cfcfcf" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L4 24h20Z" fill="#cfcfcf" />
          </svg>
        </span>
        {marker}
      </div>
    );
  }

  if (type === 'sticker') {
    return (
      <div className="action-clone-mockup action-clone-mockup--sticker">
        <svg className="action-clone-sticker-shape" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="7" cy="10.5" r="1.5" fill="#a9a9a9" />
          <circle cx="17" cy="10.5" r="1.5" fill="#a9a9a9" />
          <path d="M8.5 15.5s1.4 1.8 3.5 1.8c2.1 0 3.5-1.8 3.5-1.8" fill="none" stroke="#a9a9a9" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        {marker}
      </div>
    );
  }

  return (
    <div className="action-clone-mockup action-clone-mockup--text">
      <span className="action-clone-text-title" />
      <span className="action-clone-text-lines"><i /><i /><i /><i /><i /><i /></span>
      {marker}
    </div>
  );
};

const ActionClipboardClone: React.FC = () => {
  const { lang, dict } = useTranslation();
  const [groupCount, setGroupCount] = React.useState(0);
  const [animationCycle, setAnimationCycle] = React.useState(0);
  const [isFlying, setIsFlying] = React.useState(false);
  const [isReturning, setIsReturning] = React.useState(false);
  const [pinCount, setPinCount] = React.useState(0);
  const [pinShakeCycle, setPinShakeCycle] = React.useState(0);
  const [pinPhase, setPinPhase] = React.useState<'idle' | 'pinning-one' | 'pinning-one-shifting' | 'pinning-two' | 'pinning-two-shifting' | 'returning-two' | 'returning-two-shifting' | 'returning-one' | 'returning-one-shifting'>('idle');
  const [shareCount, setShareCount] = React.useState(0);
  const [shareCheckCount, setShareCheckCount] = React.useState(0);
  const [shareShakeCycle, setShareShakeCycle] = React.useState(0);
  const [sharePhase, setSharePhase] = React.useState<'idle' | 'selecting' | 'flying' | 'expanded' | 'collapsing' | 'returning'>('idle');
  const [shareExpanded, setShareExpanded] = React.useState(false);
  const [shareSocialCount, setShareSocialCount] = React.useState(0);
  const [exportCount, setExportCount] = React.useState(0);
  const [exportCheckCount, setExportCheckCount] = React.useState(0);
  const [exportShakeCycle, setExportShakeCycle] = React.useState(0);
  const [exportPhase, setExportPhase] = React.useState<'idle' | 'selecting' | 'flying' | 'expanded' | 'collapsing' | 'returning'>('idle');
  const [exportExpanded, setExportExpanded] = React.useState(false);
  const [exportFormatCount, setExportFormatCount] = React.useState(0);
  const groupShakeCount = isReturning ? panels.length : groupCount;
  const islandShakeStyle = {
    '--action-clone-shake-scale': 0.02 + groupShakeCount * 0.006,
    '--action-clone-shake-offset': `${0.9 + groupShakeCount * 0.35}px`,
    '--action-clone-shake-duration': '640ms',
  } as React.CSSProperties;
  const pinIslandShakeStyle = {
    '--action-clone-shake-scale': 0.025 + pinCount * 0.005,
    '--action-clone-shake-offset': `${0.9 + pinCount * 0.3}px`,
    '--action-clone-shake-duration': `${Math.max(500, 620 - pinCount * 30)}ms`,
  } as React.CSSProperties;
  const shareIslandShakeStyle = {
    '--action-clone-shake-scale': 0.02 + shareCount * 0.006,
    '--action-clone-shake-offset': `${0.9 + shareCount * 0.35}px`,
    '--action-clone-shake-duration': '640ms',
  } as React.CSSProperties;
  const exportIslandShakeStyle = {
    '--action-clone-shake-scale': 0.02 + exportCount * 0.006,
    '--action-clone-shake-offset': `${0.9 + exportCount * 0.35}px`,
    '--action-clone-shake-duration': '640ms',
  } as React.CSSProperties;

  React.useEffect(() => {
    let timers: number[] = [];
    let pinTimers: number[] = [];
    let shareTimers: number[] = [];
    let exportTimers: number[] = [];
    const scheduleCycle = () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      setGroupCount(0);
      setIsFlying(false);
      setIsReturning(false);
      setAnimationCycle((cycle) => cycle + 1);
      timers = [window.setTimeout(() => {
        setIsFlying(true);
      }, actionCloneFlyStart)];
      timers.push(window.setTimeout(() => {
        setGroupCount(panels.length);
      }, actionCloneFlyStart));
      timers.push(window.setTimeout(() => {
        setIsReturning(true);
        setGroupCount(0);
      }, actionCloneReturnStart));
    };
    const schedulePinCycle = () => {
      pinTimers.forEach((timer) => window.clearTimeout(timer));
      setPinCount(0);
      setPinPhase('idle');
      pinTimers = [window.setTimeout(() => {
        setPinPhase('pinning-one');
        setPinCount(1);
        setPinShakeCycle((cycle) => cycle + 1);
      }, actionClonePinStart)];
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('pinning-one-shifting');
      }, actionClonePinFirstShiftStart));
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('pinning-two');
        setPinCount(2);
        setPinShakeCycle((cycle) => cycle + 1);
      }, actionClonePinSecondStart));
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('pinning-two-shifting');
      }, actionClonePinSecondShiftStart));
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('returning-two');
        setPinCount(1);
        setPinShakeCycle((cycle) => cycle + 1);
      }, actionClonePinReturnStart));
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('returning-two-shifting');
      }, actionClonePinReturnSecondShiftStart));
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('returning-one');
        setPinCount(0);
        setPinShakeCycle((cycle) => cycle + 1);
      }, actionClonePinReturnFirstStart));
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('returning-one-shifting');
      }, actionClonePinReturnFirstShiftStart));
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('idle');
      }, actionClonePinReturnFirstShiftStart + actionClonePinReturnDuration));
    };
    const scheduleShareCycle = () => {
      shareTimers.forEach((timer) => window.clearTimeout(timer));
      setShareCount(0);
      setShareCheckCount(0);
      setShareShakeCycle(0);
      setSharePhase('idle');
      setShareExpanded(false);
      setShareSocialCount(0);
      shareTimers = [window.setTimeout(() => {
        setSharePhase('selecting');
      }, actionCloneShareStart)];
      for (let index = 0; index < panels.length; index += 1) {
        shareTimers.push(window.setTimeout(() => {
          setShareCheckCount(index + 1);
        }, actionCloneShareStart + index * actionCloneShareCheckStep));
      }
      shareTimers.push(window.setTimeout(() => {
        setSharePhase('flying');
        setShareCount(panels.length);
        setShareShakeCycle((cycle) => cycle + 1);
      }, actionCloneShareCollectStart));
      shareTimers.push(window.setTimeout(() => {
        setSharePhase('expanded');
        setShareExpanded(true);
        setShareSocialCount(0);
      }, actionCloneShareExpandStart));
      for (let index = 0; index < panels.length; index += 1) {
        shareTimers.push(window.setTimeout(() => {
          setShareSocialCount(index + 1);
        }, actionCloneShareExpandStart + 180 + index * actionCloneShareSocialStep));
      }
      for (let index = 0; index < panels.length; index += 1) {
        shareTimers.push(window.setTimeout(() => {
          setShareSocialCount(panels.length - index - 1);
        }, actionCloneShareSocialHideStart + index * actionCloneShareSocialStep));
      }
      shareTimers.push(window.setTimeout(() => {
        setSharePhase('collapsing');
        setShareExpanded(false);
        setShareCount(0);
        setShareCheckCount(0);
      }, actionCloneShareCollapseStart));
      shareTimers.push(window.setTimeout(() => {
        setSharePhase('returning');
      }, actionCloneShareReturnStart));
      shareTimers.push(window.setTimeout(() => {
        setSharePhase('idle');
        setShareCheckCount(0);
      }, actionCloneShareReturnStart + 700));
    };
    const scheduleExportCycle = () => {
      exportTimers.forEach((timer) => window.clearTimeout(timer));
      setExportCount(0);
      setExportCheckCount(0);
      setExportShakeCycle(0);
      setExportPhase('idle');
      setExportExpanded(false);
      setExportFormatCount(0);
      exportTimers = [window.setTimeout(() => {
        setExportPhase('selecting');
      }, actionCloneExportStart)];
      for (let index = 0; index < exportPanels.length; index += 1) {
        exportTimers.push(window.setTimeout(() => {
          setExportCheckCount(index + 1);
        }, actionCloneExportStart + index * actionCloneExportCheckStep));
      }
      exportTimers.push(window.setTimeout(() => {
        setExportPhase('flying');
        setExportCount(exportPanels.length);
        setExportShakeCycle((cycle) => cycle + 1);
      }, actionCloneExportCollectStart));
      exportTimers.push(window.setTimeout(() => {
        setExportPhase('expanded');
        setExportExpanded(true);
        setExportFormatCount(0);
      }, actionCloneExportExpandStart));
      for (let index = 0; index < 2; index += 1) {
        exportTimers.push(window.setTimeout(() => {
          setExportFormatCount(index + 1);
        }, actionCloneExportExpandStart + 180 + index * actionCloneExportFormatStep));
      }
      for (let index = 0; index < 2; index += 1) {
        exportTimers.push(window.setTimeout(() => {
          setExportFormatCount(2 - index - 1);
        }, actionCloneExportFormatHideStart + index * actionCloneExportFormatStep));
      }
      exportTimers.push(window.setTimeout(() => {
        setExportPhase('collapsing');
        setExportExpanded(false);
        setExportCount(0);
        setExportCheckCount(0);
      }, actionCloneExportCollapseStart));
      exportTimers.push(window.setTimeout(() => {
        setExportPhase('returning');
        setExportShakeCycle((cycle) => cycle + 1);
      }, actionCloneExportReturnStart));
      exportTimers.push(window.setTimeout(() => {
        setExportPhase('idle');
        setExportFormatCount(0);
      }, actionCloneExportReturnStart + 700));
    };

    scheduleCycle();
    schedulePinCycle();
    scheduleShareCycle();
    scheduleExportCycle();
    const cycleTimer = window.setInterval(scheduleCycle, actionCloneAnimationCycle);
    const pinCycleTimer = window.setInterval(schedulePinCycle, actionClonePinCycle);
    const shareCycleTimer = window.setInterval(scheduleShareCycle, actionCloneShareCycle);
    const exportCycleTimer = window.setInterval(scheduleExportCycle, actionCloneExportCycle);

    return () => {
      window.clearInterval(cycleTimer);
      window.clearInterval(pinCycleTimer);
      window.clearInterval(shareCycleTimer);
      window.clearInterval(exportCycleTimer);
      timers.forEach((timer) => window.clearTimeout(timer));
      pinTimers.forEach((timer) => window.clearTimeout(timer));
      shareTimers.forEach((timer) => window.clearTimeout(timer));
      exportTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <ActionClipboardCloneSection aria-label="Action clipboard previews">
      <div className="container">
        <div className="action-clone-grid">
          <article className="action-clone-panel" key="group">
                  <div className="action-clone-panel-bar-shell">
                    <div
                      className={`action-clone-panel-bar-motion${isReturning ? ' action-clone-panel-bar-motion--returning' : isFlying ? ' action-clone-panel-bar-motion--flying' : ''}`}
                      style={isFlying || isReturning ? islandShakeStyle : undefined}
                    >
                      <div key={animationCycle} className="action-clone-panel-bar" />
                    </div>
                    <div className="action-clone-panel-bar-foreground">
                      <span className="action-clone-panel-folder-wrap">
                        <GroupFolderIcon />
                      </span>
                      <AnimatedProgress value={groupCount} active={groupCount > 0} label={`${groupCount} items collected`} />
                    </div>
                  </div>
                  <div className="action-clone-panel-content action-clone-panel-content--group">
                    <div className={`action-clone-group-mockups action-clone-group-mockups--collecting${animationCycle > 1 ? ' action-clone-group-mockups--repeat' : ''}${isReturning ? ' action-clone-group-mockups--returning' : isFlying ? ' action-clone-group-mockups--flying' : ''}`}>
                      {panels.map((groupPanel) => (
                        <MiniMockup
                          type={groupPanel.type}
                          key={`${groupPanel.id}-${animationCycle}`}
                          marker={<MockupCheck />}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="action-clone-panel-title">{createGroupLabels[lang] ?? 'Group'}</div>
                  <div className="action-clone-panel-description">{dict.actionClipboard.groupDescription}</div>
          </article>

          <article className="action-clone-panel" key="pin">
                  <div className="action-clone-panel-bar-shell">
                    <div
                      className={`action-clone-panel-bar-motion${pinShakeCycle > 0 ? ` action-clone-panel-bar-motion--pin-shaking-${pinShakeCycle % 2 === 0 ? 'even' : 'odd'}` : ''}`}
                      style={pinShakeCycle > 0 ? pinIslandShakeStyle : undefined}
                    >
                      <div className="action-clone-panel-bar" />
                    </div>
                    <div className="action-clone-panel-bar-foreground">
                      <span className="action-clone-panel-folder-wrap">
                        <DynamicPinIcon />
                      </span>
                      <AnimatedProgress value={pinCount} active={pinCount > 0} label={`${pinCount} pinned items`} />
                    </div>
                  </div>
                  <div className="action-clone-panel-content action-clone-panel-content--group">
                    <div className={`action-clone-group-mockups action-clone-group-mockups--pin-${pinPhase}`}>
                      {panels.map((pinPanel) => {
                        const pinOrder = pinPanel.type === 'color' ? 1 : pinPanel.type === 'sticker' ? 2 : undefined;
                        return (
                          <MiniMockup
                            type={pinPanel.type}
                            key={`pin-${pinPanel.id}`}
                            marker={pinOrder ? <MockupPin order={pinOrder} visible={pinCount >= pinOrder} /> : undefined}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="action-clone-panel-title">{dict.actionClipboard.featureLabels.pin}</div>
                  <div className="action-clone-panel-description">{dict.actionClipboard.pinDescription}</div>
          </article>

          <article className="action-clone-panel" key="share">
                  <div className={`action-clone-panel-bar-shell${shareExpanded ? ' action-clone-panel-bar-shell--share-expanded' : ''}`}>
                    <div
                      className={`action-clone-panel-bar-motion${shareExpanded ? ' action-clone-panel-bar-motion--share-expanded' : ''}${shareShakeCycle > 0 ? ` action-clone-panel-bar-motion--share-shaking-${shareShakeCycle % 2 === 0 ? 'even' : 'odd'}` : ''}`}
                      style={shareShakeCycle > 0 ? shareIslandShakeStyle : undefined}
                    >
                      <div className="action-clone-panel-bar" />
                    </div>
                    <div className={`action-clone-panel-bar-foreground${shareExpanded ? ' action-clone-panel-bar-foreground--share-expanded' : ''}`}>
                      <span className="action-clone-panel-folder-wrap">
                        <DynamicShareIcon />
                      </span>
                      <AnimatedProgress value={shareCount} active={shareCount > 0} label={`${shareCount} items ready to share`} />
                      <div className="action-clone-share-socials" aria-hidden="true">
                        {actionCloneShareSocials.map((social, index) => (
                          <span className={shareSocialCount > index ? 'action-clone-share-social--visible' : ''} key={social.name} aria-label={social.label}>
                            <SocialMark className="action-clone-share-social-mark" name={social.name} />
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="action-clone-panel-content action-clone-panel-content--group">
                    <div className={`action-clone-group-mockups action-clone-group-mockups--share${sharePhase === 'selecting' ? ' action-clone-group-mockups--share-selecting' : ''}${sharePhase === 'flying' || sharePhase === 'expanded' || sharePhase === 'collapsing' ? ' action-clone-group-mockups--share-flying' : ''}${sharePhase === 'returning' ? ' action-clone-group-mockups--share-returning' : ''}`}>
                      {panels.map((sharePanel, index) => (
                        <MiniMockup
                          type={sharePanel.type}
                          key={`share-${sharePanel.id}`}
                          marker={<MockupCheck className={`action-clone-share-check${shareCheckCount > index ? ' action-clone-share-check--visible' : ''}`} />}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="action-clone-panel-title">{dict.actionClipboard.featureLabels.share}</div>
                  <div className="action-clone-panel-description">{dict.actionClipboard.shareDescription}</div>
          </article>

          <article className="action-clone-panel" key="export">
                  <div className={`action-clone-panel-bar-shell${exportExpanded ? ' action-clone-panel-bar-shell--export-expanded' : ''}`}>
                    <div
                      className={`action-clone-panel-bar-motion${exportExpanded ? ' action-clone-panel-bar-motion--export-expanded' : ''}${exportShakeCycle > 0 ? ` action-clone-panel-bar-motion--export-shaking-${exportShakeCycle % 2 === 0 ? 'even' : 'odd'}` : ''}`}
                      style={exportShakeCycle > 0 ? exportIslandShakeStyle : undefined}
                    >
                      <div className="action-clone-panel-bar" />
                    </div>
                    <div className={`action-clone-panel-bar-foreground${exportExpanded ? ' action-clone-panel-bar-foreground--export-expanded' : ''}`}>
                      <span className="action-clone-panel-folder-wrap">
                        <DynamicExportIcon />
                      </span>
                      <AnimatedProgress value={exportCount} active={exportCount > 0} label={`${exportCount} files ready to export`} />
                      <div className="action-clone-export-formats" aria-hidden="true">
                        <span className={exportFormatCount > 0 ? 'action-clone-export-format--visible' : ''}>
                          <DynamicJsonIcon />
                          <strong>JSON</strong>
                        </span>
                        <span className={exportFormatCount > 1 ? 'action-clone-export-format--visible' : ''}>
                          <DynamicCsvIcon />
                          <strong>CSV</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="action-clone-panel-content action-clone-panel-content--group">
                    <div className={`action-clone-group-mockups action-clone-group-mockups--export${exportPhase === 'selecting' ? ' action-clone-group-mockups--export-selecting' : ''}${exportPhase === 'flying' || exportPhase === 'expanded' || exportPhase === 'collapsing' ? ' action-clone-group-mockups--export-flying' : ''}${exportPhase === 'returning' ? ' action-clone-group-mockups--export-returning' : ''}`}>
                      {exportPanels.map((exportPanel, index) => (
                        <MiniMockup
                          type={exportPanel.type}
                          key={`export-${exportPanel.id}`}
                          marker={<MockupCheck className={`action-clone-export-check${exportCheckCount > index ? ' action-clone-export-check--visible' : ''}`} />}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="action-clone-panel-title">{dict.actionClipboard.exportTitle}</div>
                  <div className="action-clone-panel-description">{dict.actionClipboard.exportDescription}</div>
          </article>
        </div>
      </div>
    </ActionClipboardCloneSection>
  );
};

export default ActionClipboardClone;
