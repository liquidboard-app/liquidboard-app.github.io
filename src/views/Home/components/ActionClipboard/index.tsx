import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { bindPhaseScrollInput } from '@/utils/scrollPhases';
import { Pin as PinIcon } from 'lucide-react';
import { useTranslation } from '../../../../contexts/LanguageContext';
import SocialMark, { type SocialName } from '../SocialMark';
import { ActionClipboardSection } from './styled';

type MockupType = 'text' | 'link' | 'image' | 'color' | 'sticker';

const GroupFolderIcon: React.FC<{ label: string }> = ({ label }) => (
  <svg className="action-clipboard-panel-folder" viewBox="0 0 24 24" role="img" aria-label={label}>
    <defs>
      <linearGradient id="action-clipboard-folder-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#60a5fa" />
        <stop offset="1" stopColor="#2563eb" />
      </linearGradient>
    </defs>
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" fill="url(#action-clipboard-folder-gradient)" />
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
const actionClipboardProgressValues = [0, 1, 2, 3, 4, 5];
const actionClipboardFlyStart = 1500;
const actionClipboardGroupCountStep = 180;
const actionClipboardReturnStart = actionClipboardFlyStart + (panels.length - 1) * actionClipboardGroupCountStep + 180;
const actionClipboardAnimationCycle = actionClipboardReturnStart + (panels.length - 1) * actionClipboardGroupCountStep + 500;
const actionClipboardPinCycle = 5200;
const actionClipboardPinStart = 650;
const actionClipboardPinReorderDuration = 400;
const actionClipboardPinBetweenDelay = 100;
const actionClipboardPinRevealDelay = 520;
const actionClipboardPinFirstShiftStart = actionClipboardPinStart + actionClipboardPinRevealDelay;
const actionClipboardPinSecondStart = actionClipboardPinFirstShiftStart + actionClipboardPinReorderDuration + actionClipboardPinBetweenDelay;
const actionClipboardPinSecondShiftStart = actionClipboardPinSecondStart + actionClipboardPinRevealDelay;
const actionClipboardPinReturnStart = actionClipboardPinSecondShiftStart + actionClipboardPinReorderDuration + 240;
const actionClipboardPinReturnDuration = 400;
const actionClipboardPinReturnStickerDuration = actionClipboardPinReorderDuration;
const actionClipboardPinReturnSecondShiftStart = actionClipboardPinReturnStart + actionClipboardPinRevealDelay;
const actionClipboardPinReturnFirstStart = actionClipboardPinReturnSecondShiftStart + actionClipboardPinReturnStickerDuration + actionClipboardPinBetweenDelay;
const actionClipboardPinReturnFirstShiftStart = actionClipboardPinReturnFirstStart + actionClipboardPinRevealDelay;
const actionClipboardShareStart = 650;
const actionClipboardShareCheckStep = 130;
const actionClipboardShareCollectStart = actionClipboardShareStart + panels.length * actionClipboardShareCheckStep + 130;
const actionClipboardShareExpandStart = actionClipboardShareCollectStart + 1050;
const actionClipboardShareSocialStep = 150;
const actionClipboardShareSocialHold = 950;
const actionClipboardShareSocialHideStart = actionClipboardShareExpandStart + panels.length * actionClipboardShareSocialStep + actionClipboardShareSocialHold;
const actionClipboardShareCollapseStart = actionClipboardShareSocialHideStart + panels.length * actionClipboardShareSocialStep + 180;
const actionClipboardShareReturnStart = actionClipboardShareCollapseStart + 760;
const actionClipboardShareReturnDuration = 520;
const actionClipboardShareReturnStep = 100;
const actionClipboardShareReturnTotal = actionClipboardShareReturnDuration + (panels.length - 1) * actionClipboardShareReturnStep;
const actionClipboardShareCycle = actionClipboardShareReturnStart + actionClipboardShareReturnTotal + 200;
const shareMockupsStyle = {
  '--action-clipboard-share-return-duration': `${actionClipboardShareReturnDuration}ms`,
  '--action-clipboard-share-return-step': `${actionClipboardShareReturnStep}ms`,
} as React.CSSProperties;
const actionClipboardExportStart = 1500;
const actionClipboardExportCheckStep = 130;
const actionClipboardExportCollectStart = actionClipboardExportStart + exportPanels.length * actionClipboardExportCheckStep + 130;
const actionClipboardExportExpandStart = actionClipboardExportCollectStart + 1050;
const actionClipboardExportFormatStep = 180;
const actionClipboardExportFormatHold = 950;
const actionClipboardExportFormatHideStart = actionClipboardExportExpandStart + 2 * actionClipboardExportFormatStep + actionClipboardExportFormatHold;
const actionClipboardExportCollapseStart = actionClipboardExportFormatHideStart + 2 * actionClipboardExportFormatStep + 180;
const actionClipboardExportReturnStart = actionClipboardExportCollapseStart + 760;
const actionClipboardExportCycle = actionClipboardExportReturnStart + 900;
const actionClipboardClipboardStart = 650;
const actionClipboardClipboardCopyStart = actionClipboardClipboardStart + 1450;
const actionClipboardClipboardCopyStep = 680;
const actionClipboardClipboardCheckDelay = 560;
const actionClipboardClipboardSocialReturnStart = actionClipboardClipboardCopyStart + (panels.length - 1) * actionClipboardClipboardCopyStep + actionClipboardClipboardCheckDelay + 980;
const actionClipboardClipboardReturnDuration = 600;
const actionClipboardClipboardReturnStep = 100;
const actionClipboardClipboardReturnTotal = actionClipboardClipboardReturnDuration + (panels.length - 1) * actionClipboardClipboardReturnStep;
const actionClipboardClipboardContentStart = actionClipboardClipboardSocialReturnStart + actionClipboardClipboardReturnTotal + 180;
const actionClipboardClipboardContentReturnStart = actionClipboardClipboardContentStart + 1650;
const actionClipboardClipboardCycle = actionClipboardClipboardContentReturnStart + actionClipboardClipboardReturnTotal + 250;
const actionClipboardICloudStart = 850;
const actionClipboardICloudCheckStep = 130;
const actionClipboardICloudCollectStart = actionClipboardICloudStart + panels.length * actionClipboardICloudCheckStep + 1050;
const actionClipboardICloudSyncStart = actionClipboardICloudCollectStart + 760;
const actionClipboardICloudSyncDuration = 1250;
const actionClipboardICloudNumbersStart = actionClipboardICloudSyncStart + actionClipboardICloudSyncDuration + 260;
const actionClipboardICloudReturnStart = actionClipboardICloudNumbersStart + 850;
const actionClipboardICloudReturnDuration = 520;
const actionClipboardICloudReturnStep = 100;
const actionClipboardICloudReturnTotal = actionClipboardICloudReturnDuration + (panels.length - 1) * actionClipboardICloudReturnStep;
const actionClipboardICloudCycle = actionClipboardICloudReturnStart + actionClipboardICloudReturnTotal + 450;

const actionClipboardShareSocials: Array<{ name: SocialName; label: string }> = [
  { name: 'threads', label: 'Threads' },
  { name: 'facebook', label: 'Facebook' },
  { name: 'x', label: 'X' },
  { name: 'instagram', label: 'Instagram' },
  { name: 'tiktok', label: 'TikTok' },
];

const clipboardContentPanels: Array<{ type: MockupType; social: SocialName }> = [
  { type: 'text', social: 'threads' },
  { type: 'link', social: 'facebook' },
  { type: 'image', social: 'x' },
  { type: 'text', social: 'instagram' },
  { type: 'link', social: 'tiktok' },
];

const MockupCheck: React.FC<{ className?: string }> = ({ className }) => (
  <span className={['action-clipboard-mockup-check', className].filter(Boolean).join(' ')} aria-hidden="true">
    <svg viewBox="0 0 16 16">
      <path d="m3 8.5 3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const MockupPin: React.FC<{ order: number; visible: boolean }> = ({ order, visible }) => (
  <span className={`action-clipboard-mockup-pin${visible ? ' action-clipboard-mockup-pin--visible' : ''}`} aria-hidden="true">
    <span className="action-clipboard-mockup-pin-content">
      <PinIcon className="action-clipboard-mockup-pin-icon" />
      <span className="action-clipboard-mockup-pin-number">{order}</span>
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
    <span className={`action-clipboard-progress${active ? ' action-clipboard-progress--active' : ''}`} aria-label={label}>
      <span className="action-clipboard-progress-stack">
        <span
          className="action-clipboard-progress-reel"
          style={{
            '--action-clipboard-progress-index': value,
            '--action-clipboard-progress-duration': `${progressDuration}ms`,
          } as React.CSSProperties}
          aria-hidden="true"
        >
          {actionClipboardProgressValues.map((progressValue) => (
            <span className="action-clipboard-progress-value" key={progressValue}>{progressValue}</span>
          ))}
        </span>
      </span>
    </span>
  );
};

const DynamicPinIcon: React.FC = () => (
  <svg className="action-clipboard-panel-pin" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="action-clipboard-pin-gradient" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fdba74" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
    <path d="M12 17v5" fill="none" stroke="url(#action-clipboard-pin-gradient)" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" fill="url(#action-clipboard-pin-gradient)" stroke="url(#action-clipboard-pin-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DynamicShareIcon: React.FC = () => (
  <svg className="action-clipboard-panel-share" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="action-clipboard-share-gradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor="#a3a3a3" />
      </linearGradient>
    </defs>
    <path d="m10.586 5.414-5.172 5.172" fill="none" stroke="url(#action-clipboard-share-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m18.586 13.414-5.172 5.172" fill="none" stroke="url(#action-clipboard-share-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 12h12" fill="none" stroke="url(#action-clipboard-share-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="20" r="2" fill="url(#action-clipboard-share-gradient)" stroke="url(#action-clipboard-share-gradient)" strokeWidth="2" />
    <circle cx="12" cy="4" r="2" fill="url(#action-clipboard-share-gradient)" stroke="url(#action-clipboard-share-gradient)" strokeWidth="2" />
    <circle cx="20" cy="12" r="2" fill="url(#action-clipboard-share-gradient)" stroke="url(#action-clipboard-share-gradient)" strokeWidth="2" />
    <circle cx="4" cy="12" r="2" fill="url(#action-clipboard-share-gradient)" stroke="url(#action-clipboard-share-gradient)" strokeWidth="2" />
  </svg>
);

const DynamicExportIcon: React.FC = () => (
  <svg className="action-clipboard-panel-export" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="action-clipboard-export-gradient" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fda4af" />
        <stop offset="100%" stopColor="#dc2626" />
      </linearGradient>
    </defs>
    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" fill="url(#action-clipboard-export-gradient)" stroke="url(#action-clipboard-export-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 2v5a1 1 0 0 0 1 1h5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12v6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m15 15-3-3-3 3" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DynamicVoiceIcon: React.FC = () => (
  <svg className="action-clipboard-panel-voice" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#action-clipboard-voice-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <defs>
      <linearGradient id="action-clipboard-voice-gradient" x1="5" y1="2" x2="19" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
    </defs>
    <path d="M12 19v3" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <rect x="9" y="2" width="6" height="13" rx="3" fill="url(#action-clipboard-voice-gradient)" />
  </svg>
);

const DynamicScanIcon: React.FC = () => (
  <svg className="action-clipboard-panel-scan" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#action-clipboard-scan-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <defs>
      <linearGradient id="action-clipboard-scan-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#86efac" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
    </defs>
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <rect width="8" height="8" x="8" y="8" rx="1" fill="url(#action-clipboard-scan-gradient)" />
  </svg>
);

const DynamicScanViewIcon: React.FC = () => (
  <svg className="action-clipboard-panel-scan-view" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  </svg>
);

const DynamicClipboardIcon: React.FC = () => (
  <svg className="action-clipboard-panel-clipboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#action-clipboard-clipboard-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <defs>
      <linearGradient id="action-clipboard-clipboard-gradient" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fde68a" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="16" height="18" rx="2" fill="url(#action-clipboard-clipboard-gradient)" stroke="url(#action-clipboard-clipboard-gradient)" />
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" fill="url(#action-clipboard-clipboard-gradient)" stroke="url(#action-clipboard-clipboard-gradient)" />
    <path d="M8 10h8M8 14h6" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity=".78" />
  </svg>
);

const DynamicClipboardChevronIcon: React.FC = () => (
  <span className="action-clipboard-clipboard-chevron-track" aria-hidden="true">
    <span className="action-clipboard-clipboard-chevron-stack">
      {[0, 1, 2, 3, 0].map((arrow, index) => (
        <svg className="action-clipboard-clipboard-chevron-arrow" key={`${arrow}-${index}`} xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m17 9-5-5-5 5" />
        </svg>
      ))}
    </span>
  </span>
);

const DynamicICloudIcon: React.FC = () => (
  <svg className="action-clipboard-panel-icloud" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#action-clipboard-icloud-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <defs>
      <linearGradient id="action-clipboard-icloud-gradient" x1="4" y1="4" x2="20" y2="21" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#bfdbfe" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
    </defs>
    <path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" fill="url(#action-clipboard-icloud-gradient)" />
    <path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" />
  </svg>
);

const DynamicICloudRefreshIcon: React.FC = () => (
  <svg className="action-clipboard-panel-icloud-refresh" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 16h5v5" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);

const ScanSearchCodeIcon: React.FC = () => (
  <svg className="action-clipboard-scan-search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m13 13.5 2-2.5-2-2.5" />
    <path d="m21 21-4.3-4.3" />
    <path d="M9 8.5 7 11l2 2.5" />
    <circle cx="11" cy="11" r="8" />
  </svg>
);

const ClipboardCopyIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9 7h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3Z" fill="currentColor" />
    <path d="M16 5V4a2 2 0 0 0-2-2H5a3 3 0 0 0-3 3v9a2 2 0 0 0 2 2h1v-2H4V5a1 1 0 0 1 1-1h9v1Z" fill="currentColor" />
  </svg>
);

const ClipboardCheckIcon: React.FC = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="m3 8.5 3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClipboardStatus: React.FC<{ copyVisible: boolean; checkVisible: boolean }> = ({ copyVisible, checkVisible }) => (
  <span className={`action-clipboard-clipboard-status${copyVisible ? ' action-clipboard-clipboard-status--copy' : ''}${checkVisible ? ' action-clipboard-clipboard-status--check' : ''}`} aria-hidden="true">
    <span className="action-clipboard-clipboard-copy-icon"><ClipboardCopyIcon /></span>
    <span className="action-clipboard-clipboard-check-icon"><ClipboardCheckIcon /></span>
  </span>
);

const ClipboardSocialCard: React.FC<{ social: { name: SocialName; label: string }; index: number; copyCount: number; checkCount: number; cycle: number }> = ({ social, index, copyCount, checkCount, cycle }) => (
  <div className="action-clipboard-clipboard-social-card" key={`${social.name}-${cycle}`} aria-label={social.label}>
    <SocialMark className="action-clipboard-clipboard-social-mark" name={social.name} />
    <ClipboardStatus copyVisible={copyCount > index} checkVisible={checkCount > index} />
  </div>
);

const ClipboardSocialBadge: React.FC<{ social: SocialName }> = ({ social }) => (
  <span className="action-clipboard-clipboard-social-badge" aria-hidden="true">
    <SocialMark name={social} />
  </span>
);

const DynamicJsonIcon: React.FC = () => (
  <svg className="action-clipboard-export-format-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 2v5a1 1 0 0 0 1 1h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DynamicCsvIcon: React.FC = () => (
  <svg className="action-clipboard-export-format-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3v18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect width="18" height="18" x="3" y="3" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M3 9h18M3 15h18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MiniMockup: React.FC<{ type: MockupType; marker?: React.ReactNode }> = ({ type, marker }) => {
  if (type === 'link') {
    return (
      <div className="action-clipboard-mockup action-clipboard-mockup--link">
        <span className="action-clipboard-link-image">
          <svg className="action-clipboard-link-image-icon" viewBox="0 0 36 20" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="36" height="20" rx="2" fill="#ebebeb" />
            <circle cx="10" cy="7" r="2.5" fill="#cfcfcf" />
            <path d="m36 12.2-4.8-4.8a2 2 0 0 0-2.8 0L10 20h26Z" fill="#cfcfcf" />
          </svg>
        </span>
        <span className="action-clipboard-link-meta">
          <span className="action-clipboard-link-title" />
          <span className="action-clipboard-link-url" />
        </span>
        {marker}
      </div>
    );
  }

  if (type === 'color') {
    return (
      <div className="action-clipboard-mockup action-clipboard-mockup--color">
        <span className="action-clipboard-color-title" />
        <span className="action-clipboard-color-name" />
        {marker}
      </div>
    );
  }

  if (type === 'image') {
    return (
      <div className="action-clipboard-mockup action-clipboard-mockup--image">
        <span className="action-clipboard-image-placeholder">
          <svg className="action-clipboard-image-icon" viewBox="0 0 24 24" aria-hidden="true">
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
      <div className="action-clipboard-mockup action-clipboard-mockup--sticker">
        <svg className="action-clipboard-sticker-shape" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="7" cy="10.5" r="1.5" fill="#a9a9a9" />
          <circle cx="17" cy="10.5" r="1.5" fill="#a9a9a9" />
          <path d="M8.5 15.5s1.4 1.8 3.5 1.8c2.1 0 3.5-1.8 3.5-1.8" fill="none" stroke="#a9a9a9" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        {marker}
      </div>
    );
  }

  return (
    <div className="action-clipboard-mockup action-clipboard-mockup--text">
      <span className="action-clipboard-text-title" />
      <span className="action-clipboard-text-lines"><i /><i /><i /><i /><i /><i /></span>
      {marker}
    </div>
  );
};

const VoicePreview: React.FC = () => {
  const { dict } = useTranslation();
  const panelRef = React.useRef<HTMLElement>(null);

  React.useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const island = panel.querySelector<HTMLElement>('.action-clipboard-panel-bar-shell')!;
      const mockups = panel.querySelector<HTMLElement>('.action-clipboard-group-mockups')!;
      const mockup = panel.querySelector<HTMLElement>('.action-clipboard-mockup')!;
      const voiceCheck = mockup.querySelector<HTMLElement>('.action-clipboard-voice-check')!;
      const audio = panel.querySelector<HTMLElement>('.action-clipboard-voice-audio')!;
      const bars = audio.querySelectorAll('i');
      const skeletons = mockup.querySelectorAll('.action-clipboard-text-title, .action-clipboard-text-lines i');
      // Measure the untransformed wrapper so the flight meets the island at
      // every viewport size, including after a resize between cycles.
      const islandY = () => {
        const origin = island.getBoundingClientRect();
        const destination = mockups.getBoundingClientRect();
        return origin.top + origin.height / 2 - destination.top - destination.height / 2;
      };
      const wave = gsap.timeline({ paused: true });
      const amplitudes = [2.4, .35, .4, 1.8, .35, 2.4];
      bars.forEach((bar, index) => {
        wave.to(bar, {
          scaleY: amplitudes[index],
          duration: .24 + index * .035,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }, 0);
      });

      gsap.set(mockup, { autoAlpha: 0 });
      gsap.set(voiceCheck, { autoAlpha: 0, scale: .45 });
      gsap.set(skeletons, { scaleX: 0, transformOrigin: 'left center' });
      gsap.timeline({ delay: .65, repeat: -1, repeatDelay: .9, repeatRefresh: true })
        .call(() => { wave.restart(); })
        .to(audio, { color: '#fff', duration: .2 }, 0)
        .set(skeletons, { scaleX: 0 }, 0)
        .set(voiceCheck, { autoAlpha: 0, scale: .45 }, 0)
        .fromTo(mockup,
          { y: islandY, scale: .16, autoAlpha: 0, filter: 'blur(8px)' },
          { y: 0, scale: 1, autoAlpha: 1, filter: 'blur(0px)', duration: .52, ease: 'power3.out' }, .12)
        .to(skeletons, { scaleX: 1, duration: .32, stagger: .36, ease: 'none' })
        .to(voiceCheck, { autoAlpha: 1, scale: 1.08, duration: .2, ease: 'back.out(2)' }, '+=.12')
        .to(voiceCheck, { scale: 1, duration: .16, ease: 'power2.out' })
        .to(mockup, { y: islandY, scale: .16, autoAlpha: 0, filter: 'blur(8px)', duration: .5, ease: 'power3.in' }, '+=.85')
        .call(() => { wave.pause(); })
        .to(bars, { scaleY: 1, duration: .16, ease: 'sine.out' })
        .to(audio, { color: '#737373', duration: .2 }, '<');
    }, panel);

    return () => media.revert();
  }, []);

  return (
    <article className="action-clipboard-panel action-clipboard-panel--voice" ref={panelRef}>
      <div className="action-clipboard-panel-bar-shell">
        <div className="action-clipboard-panel-bar-motion">
          <div className="action-clipboard-panel-bar" />
        </div>
        <div className="action-clipboard-panel-bar-foreground">
          <span className="action-clipboard-panel-folder-wrap"><DynamicVoiceIcon /></span>
          <span className="action-clipboard-voice-audio" aria-hidden="true">
            <span className="action-clipboard-voice-waveform">
              {[3, 11, 18, 7, 13, 3].map((height, index) => (
                <i key={index} style={{ height: `${height / 24 * 100}%` }} />
              ))}
            </span>
          </span>
        </div>
      </div>
      <div className="action-clipboard-panel-content action-clipboard-panel-content--group">
        <div className="action-clipboard-group-mockups"><MiniMockup type="text" marker={<MockupCheck className="action-clipboard-voice-check" />} /></div>
      </div>
      <div className="action-clipboard-panel-title">{dict.actionClipboard.voiceTitle}</div>
      <div className="action-clipboard-panel-description">{dict.actionClipboard.voiceDescription}</div>
    </article>
  );
};

const ScanPreview: React.FC = () => {
  const { dict } = useTranslation();
  const panelRef = React.useRef<HTMLElement>(null);

  React.useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const island = panel.querySelector<HTMLElement>('.action-clipboard-panel-bar-shell')!;
      const stage = panel.querySelector<HTMLElement>('.action-clipboard-scan-stage')!;
      const phone = panel.querySelector<HTMLElement>('.action-clipboard-scan-phone')!;
      const search = panel.querySelector<HTMLElement>('.action-clipboard-scan-search')!;
      const view = panel.querySelector<HTMLElement>('.action-clipboard-scan-view')!;
      const viewIcon = view.querySelector<SVGSVGElement>('svg')!;
      const mockup = panel.querySelector<HTMLElement>('.action-clipboard-mockup')!;
      const check = mockup.querySelector<HTMLElement>('.action-clipboard-scan-check')!;
      const skeletons = mockup.querySelectorAll('.action-clipboard-text-title, .action-clipboard-text-lines i');
      const flightY = () => {
        const origin = island.getBoundingClientRect();
        const destination = stage.getBoundingClientRect();
        return origin.top + origin.height / 2 - destination.top - destination.height / 2;
      };

      gsap.set(phone, { autoAlpha: 0, scale: .84, filter: 'blur(12px)' });
      gsap.set(search, { autoAlpha: 0, x: 0, y: 0, scale: .68, filter: 'blur(8px)' });
      const scanViewIdleScale = .9;
      const scanViewPulseMinScale = .9;
      const scanViewPulseMaxScale = 1.1;
      gsap.set(viewIcon, { scale: scanViewIdleScale });
      gsap.set(mockup, { autoAlpha: 0 });
      gsap.set(check, { autoAlpha: 0, scale: .45 });
      gsap.set(skeletons, { scaleX: 0, transformOrigin: 'left center' });
      const viewPulse = gsap.timeline({ paused: true });
      viewPulse
        .to(viewIcon, { scale: scanViewPulseMaxScale, duration: .52, repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0)
        .to(view, { color: '#fff', duration: .52, repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0);

      const timeline = gsap.timeline({ delay: .75, repeat: -1, repeatDelay: .95, repeatRefresh: true });
      timeline
        .set(view, { color: '#737373' }, 0)
        .set(viewIcon, { scale: scanViewIdleScale }, 0)
        .set(phone, { autoAlpha: 0, scale: .84, filter: 'blur(12px)' }, 0)
        .set(search, { autoAlpha: 0, x: 0, y: 0, scale: .68, filter: 'blur(8px)' }, 0)
        .set(mockup, { autoAlpha: 0, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }, 0)
        .set(check, { autoAlpha: 0, scale: .45 }, 0)
        .set(skeletons, { scaleX: 0 }, 0)
        .to(phone, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .62, ease: 'power3.out' }, .16)
        .call(() => {
          gsap.set(viewIcon, { scale: scanViewPulseMinScale });
          gsap.set(view, { color: '#737373' });
          viewPulse.restart();
        }, [], .16)
        .to(search, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .32, ease: 'back.out(1.5)' }, .62)
        .to(search, { x: -10, y: -23, duration: .28, ease: 'sine.inOut' }, '+=.08')
        .to(search, { x: 11, y: -9, duration: .28, ease: 'sine.inOut' })
        .to(search, { x: -12, y: 8, duration: .28, ease: 'sine.inOut' })
        .to(search, { x: 10, y: 22, duration: .28, ease: 'sine.inOut' })
        .to(search, { autoAlpha: 0, scale: .68, filter: 'blur(8px)', duration: .3, ease: 'power2.in' }, '+=.12')
        .to(phone, { autoAlpha: 0, scale: .94, filter: 'blur(12px)', duration: .44, ease: 'power2.in' }, '+=.08')
        .fromTo(mockup,
          { y: flightY, scale: .16, autoAlpha: 0, filter: 'blur(8px)' },
          { y: 0, scale: 1, autoAlpha: 1, filter: 'blur(0px)', duration: .52, ease: 'power3.out' }, '+=.08')
        .to(skeletons, { scaleX: 1, duration: .32, stagger: .36, ease: 'none' })
        .to(check, { autoAlpha: 1, scale: 1.08, duration: .2, ease: 'back.out(2)' }, '+=.12')
        .to(check, { scale: 1, duration: .16, ease: 'power2.out' })
        .to(mockup, { y: flightY, scale: .16, autoAlpha: 0, filter: 'blur(8px)', duration: .5, ease: 'power3.in' }, '+=.85')
        .call(() => { viewPulse.pause(); })
        .to(viewIcon, { scale: scanViewIdleScale, duration: .42, ease: 'sine.inOut' })
        .to(view, { color: '#737373', duration: .42, ease: 'sine.inOut' }, '<');
    }, panel);

    return () => media.revert();
  }, []);

  return (
    <article className="action-clipboard-panel action-clipboard-panel--scan" ref={panelRef}>
      <div className="action-clipboard-panel-bar-shell">
        <div className="action-clipboard-panel-bar-motion"><div className="action-clipboard-panel-bar" /></div>
        <div className="action-clipboard-panel-bar-foreground">
          <span className="action-clipboard-panel-folder-wrap"><DynamicScanIcon /></span>
          <span className="action-clipboard-scan-view"><DynamicScanViewIcon /></span>
        </div>
      </div>
      <div className="action-clipboard-panel-content action-clipboard-panel-content--scan">
        <div className="action-clipboard-scan-stage">
          <div className="action-clipboard-scan-phone">
            <span className="action-clipboard-scan-screen" />
            <span className="action-clipboard-scan-speaker" />
            <span className="action-clipboard-scan-search"><ScanSearchCodeIcon /></span>
          </div>
          <div className="action-clipboard-scan-text-stage">
            <MiniMockup type="text" marker={<MockupCheck className="action-clipboard-scan-check" />} />
          </div>
        </div>
      </div>
      <div className="action-clipboard-panel-title">{dict.actionClipboard.scanTitle}</div>
      <div className="action-clipboard-panel-description">{dict.actionClipboard.scanDescription}</div>
    </article>
  );
};

type ClipboardPhase = 'idle' | 'social' | 'social-returning' | 'content' | 'content-returning';

type ICloudPhase = 'idle' | 'collecting' | 'flying' | 'syncing' | 'numbers' | 'returning';

const ICloudPreview: React.FC<{
  phase: ICloudPhase;
  count: number;
  checkCount: number;
  shakeCycle: number;
  cycle: number;
}> = ({ phase, count, checkCount, shakeCycle, cycle }) => {
  const { dict } = useTranslation();
  const shakeClass = shakeCycle > 0
    ? ` action-clipboard-panel-bar-motion--icloud-shaking-${shakeCycle % 2 === 0 ? 'even' : 'odd'}`
    : '';
  const isSyncing = phase === 'syncing';
  const mockupPhase = phase === 'collecting' || phase === 'flying' || phase === 'returning' ? phase : phase === 'idle' ? 'idle' : 'hidden';

  return (
    <article className={`action-clipboard-panel action-clipboard-panel--icloud action-clipboard-panel--icloud-${phase}`}>
      <div className="action-clipboard-panel-bar-shell">
        <div className={`action-clipboard-panel-bar-motion${shakeClass}`}>
          <div className="action-clipboard-panel-bar" />
        </div>
        <div className={`action-clipboard-panel-bar-foreground${isSyncing ? ' action-clipboard-panel-bar-foreground--icloud-syncing' : ''}`}>
          <span className="action-clipboard-panel-folder-wrap"><DynamicICloudIcon /></span>
          <span className="action-clipboard-icloud-progress"><AnimatedProgress value={count} active={count > 0} label={`${count} iCloud items`} /></span>
          <span className="action-clipboard-icloud-refresh-wrap"><DynamicICloudRefreshIcon /></span>
        </div>
      </div>
      <div className="action-clipboard-panel-content action-clipboard-panel-content--group">
        <div className={`action-clipboard-group-mockups action-clipboard-icloud-mockups action-clipboard-icloud-mockups--${mockupPhase}${cycle > 1 ? ' action-clipboard-icloud-mockups--repeat' : ''}`}>
          {panels.map((panel, index) => (
            <MiniMockup
              type={panel.type}
              key={`icloud-${panel.id}-${cycle}`}
              marker={<MockupCheck className={`action-clipboard-icloud-check${checkCount > index ? ' action-clipboard-icloud-check--visible' : ''}`} />}
            />
          ))}
        </div>
      </div>
      <div className="action-clipboard-panel-title">{dict.actionClipboard.icloudTitle}</div>
      <div className="action-clipboard-panel-description">{dict.actionClipboard.icloudDescription}</div>
    </article>
  );
};

const ClipboardPreview: React.FC<{
  phase: ClipboardPhase;
  copyCount: number;
  checkCount: number;
  shakeCycle: number;
  cycle: number;
}> = ({ phase, copyCount, checkCount, shakeCycle, cycle }) => {
  const { dict } = useTranslation();
  const active = phase !== 'idle';
  const shakeClass = shakeCycle > 0
    ? ` action-clipboard-panel-bar-motion--clipboard-shaking-${shakeCycle % 2 === 0 ? 'even' : 'odd'}`
    : '';

  return (
    <article className={`action-clipboard-panel action-clipboard-panel--clipboard action-clipboard-panel--clipboard-${phase}`}>
      <div className="action-clipboard-panel-bar-shell">
        <div className={`action-clipboard-panel-bar-motion${shakeClass}`}>
          <div className="action-clipboard-panel-bar" />
        </div>
        <div className={`action-clipboard-panel-bar-foreground${active ? ' action-clipboard-panel-bar-foreground--clipboard-active' : ''}`}>
          <span className="action-clipboard-panel-folder-wrap"><DynamicClipboardIcon /></span>
          <span className="action-clipboard-clipboard-chevron"><DynamicClipboardChevronIcon /></span>
        </div>
      </div>
      <div className="action-clipboard-panel-content action-clipboard-panel-content--group action-clipboard-panel-content--clipboard">
        <div className={`action-clipboard-clipboard-stage action-clipboard-clipboard-stage--${phase}`}>
          <div className={`action-clipboard-clipboard-set action-clipboard-clipboard-socials${phase === 'social' || phase === 'social-returning' ? ' action-clipboard-clipboard-set--visible' : ''}`}>
            {actionClipboardShareSocials.map((social, index) => (
              <ClipboardSocialCard
                key={`${social.name}-${cycle}`}
                social={social}
                index={index}
                copyCount={copyCount}
                checkCount={checkCount}
                cycle={cycle}
              />
            ))}
          </div>
          <div className={`action-clipboard-clipboard-set action-clipboard-clipboard-items${phase === 'content' || phase === 'content-returning' ? ' action-clipboard-clipboard-set--visible' : ''}`}>
            {clipboardContentPanels.map((item) => (
              <MiniMockup
                type={item.type}
                key={`${item.type}-${item.social}-${cycle}`}
                marker={<ClipboardSocialBadge social={item.social} />}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="action-clipboard-panel-title">{dict.actionClipboard.clipboardTitle}</div>
      <div className="action-clipboard-panel-description">{dict.actionClipboard.clipboardDescription}</div>
    </article>
  );
};

const ActionClipboard: React.FC = () => {
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const heading = section.querySelector('.action-clipboard-heading');
      const grid = section.querySelector('.action-clipboard-grid');
      const panels = section.querySelectorAll('.action-clipboard-panel');
      const reveal = gsap.timeline({ paused: true });
      const panelReveal = gsap.timeline({ paused: true });
      let headingRevealing = false;
      reveal.eventCallback('onComplete', () => { headingRevealing = false; });
      const revealHeading = () => {
        headingRevealing = reveal.progress() < 1;
        reveal.play();
      };
      const headingLift = () => Math.min(96, window.innerHeight * .12);
      gsap.set([heading, ...panels], { autoAlpha: 0, filter: 'blur(14px)' });
      gsap.set(grid, { autoAlpha: 0 });
      reveal
        .to(heading, { autoAlpha: 1, filter: 'blur(0px)', duration: .7, ease: 'power2.out' }, .12)
        .set(heading, { clearProps: 'filter' });
      panelReveal
        // Keep the centered reading phase, then blend movement and reveal over
        // a scroll range instead of switching a timed animation on at one point.
        .to(heading, { y: () => -headingLift(), duration: .22, ease: 'sine.inOut' }, .75)
        .to(grid, { y: () => -headingLift(), duration: .22, ease: 'sine.inOut' }, .75)
        .to(grid, { autoAlpha: 1, duration: .18, ease: 'sine.inOut' }, .77)
        .to(panels, {
          autoAlpha: 1, filter: 'blur(0px)', duration: .18,
          stagger: { amount: .04 }, ease: 'sine.inOut',
        }, .77)
        .to({}, { duration: .01 }, .99);
      const scene = ScrollTrigger.create({
        trigger: section,
        animation: panelReveal,
        scrub: .65,
        start: () => `top ${(window.innerHeight - (heading?.getBoundingClientRect().height ?? 0)) / 2 - parseFloat(getComputedStyle(section).paddingTop)}px`,
        end: () => `+=${Math.max(1700, window.innerHeight * 2.3)}`,
        pin: section,
        // FeatureClipboard loads its pin asynchronously. Measure this section
        // after upstream pins have added their scroll spacing on every refresh.
        refreshPriority: -10,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onEnter: revealHeading,
        onEnterBack: revealHeading,
        onLeaveBack: () => {
          headingRevealing = false;
          reveal.pause(0);
        },
      });
      return bindPhaseScrollInput({
        range: () => ({ start: scene.start, end: scene.end }),
        checkpoints: () => [1, (scene.end - scene.start) * .75, scene.end - scene.start],
        busy: () => headingRevealing,
        afterScroll: () => ScrollTrigger.update(),
      });
    }, section);
    return () => media.revert();
  }, []);
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
  const [clipboardPhase, setClipboardPhase] = React.useState<ClipboardPhase>('idle');
  const [clipboardCopyCount, setClipboardCopyCount] = React.useState(0);
  const [clipboardCheckCount, setClipboardCheckCount] = React.useState(0);
  const [clipboardShakeCycle, setClipboardShakeCycle] = React.useState(0);
  const [clipboardCycle, setClipboardCycle] = React.useState(0);
  const [icloudPhase, setICloudPhase] = React.useState<ICloudPhase>('idle');
  const [icloudCount, setICloudCount] = React.useState(0);
  const [icloudCheckCount, setICloudCheckCount] = React.useState(0);
  const [icloudShakeCycle, setICloudShakeCycle] = React.useState(0);
  const [icloudCycle, setICloudCycle] = React.useState(0);
  const groupShakeCount = isReturning ? panels.length : groupCount;
  const islandShakeStyle = {
    '--action-clipboard-shake-scale': 0.02 + groupShakeCount * 0.006,
    '--action-clipboard-shake-offset': `${0.9 + groupShakeCount * 0.35}px`,
    '--action-clipboard-shake-duration': '640ms',
  } as React.CSSProperties;
  const pinIslandShakeStyle = {
    '--action-clipboard-shake-scale': 0.025 + pinCount * 0.005,
    '--action-clipboard-shake-offset': `${0.9 + pinCount * 0.3}px`,
    '--action-clipboard-shake-duration': `${Math.max(500, 620 - pinCount * 30)}ms`,
  } as React.CSSProperties;
  const shareIslandShakeStyle = {
    '--action-clipboard-shake-scale': 0.02 + shareCount * 0.006,
    '--action-clipboard-shake-offset': `${0.9 + shareCount * 0.35}px`,
    '--action-clipboard-shake-duration': '640ms',
  } as React.CSSProperties;
  const exportIslandShakeStyle = {
    '--action-clipboard-shake-scale': 0.02 + exportCount * 0.006,
    '--action-clipboard-shake-offset': `${0.9 + exportCount * 0.35}px`,
    '--action-clipboard-shake-duration': '640ms',
  } as React.CSSProperties;

  React.useEffect(() => {
    let timers: number[] = [];
    let pinTimers: number[] = [];
    let shareTimers: number[] = [];
    let exportTimers: number[] = [];
    let clipboardTimers: number[] = [];
    let icloudTimers: number[] = [];
    const scheduleCycle = () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      setGroupCount(0);
      setIsFlying(false);
      setIsReturning(false);
      setAnimationCycle((cycle) => cycle + 1);
      timers = [window.setTimeout(() => {
        setIsFlying(true);
      }, actionClipboardFlyStart)];
      timers.push(window.setTimeout(() => {
        setGroupCount(panels.length);
      }, actionClipboardFlyStart));
      timers.push(window.setTimeout(() => {
        setIsReturning(true);
        setGroupCount(0);
      }, actionClipboardReturnStart));
    };
    const schedulePinCycle = () => {
      pinTimers.forEach((timer) => window.clearTimeout(timer));
      setPinCount(0);
      setPinPhase('idle');
      pinTimers = [window.setTimeout(() => {
        setPinPhase('pinning-one');
        setPinCount(1);
        setPinShakeCycle((cycle) => cycle + 1);
      }, actionClipboardPinStart)];
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('pinning-one-shifting');
      }, actionClipboardPinFirstShiftStart));
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('pinning-two');
        setPinCount(2);
        setPinShakeCycle((cycle) => cycle + 1);
      }, actionClipboardPinSecondStart));
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('pinning-two-shifting');
      }, actionClipboardPinSecondShiftStart));
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('returning-two');
        setPinCount(1);
        setPinShakeCycle((cycle) => cycle + 1);
      }, actionClipboardPinReturnStart));
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('returning-two-shifting');
      }, actionClipboardPinReturnSecondShiftStart));
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('returning-one');
        setPinCount(0);
        setPinShakeCycle((cycle) => cycle + 1);
      }, actionClipboardPinReturnFirstStart));
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('returning-one-shifting');
      }, actionClipboardPinReturnFirstShiftStart));
      pinTimers.push(window.setTimeout(() => {
        setPinPhase('idle');
      }, actionClipboardPinReturnFirstShiftStart + actionClipboardPinReturnDuration));
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
      }, actionClipboardShareStart)];
      for (let index = 0; index < panels.length; index += 1) {
        shareTimers.push(window.setTimeout(() => {
          setShareCheckCount(index + 1);
        }, actionClipboardShareStart + index * actionClipboardShareCheckStep));
      }
      shareTimers.push(window.setTimeout(() => {
        setSharePhase('flying');
        setShareCount(panels.length);
        setShareShakeCycle((cycle) => cycle + 1);
      }, actionClipboardShareCollectStart));
      shareTimers.push(window.setTimeout(() => {
        setSharePhase('expanded');
        setShareExpanded(true);
        setShareSocialCount(0);
      }, actionClipboardShareExpandStart));
      for (let index = 0; index < panels.length; index += 1) {
        shareTimers.push(window.setTimeout(() => {
          setShareSocialCount(index + 1);
        }, actionClipboardShareExpandStart + 180 + index * actionClipboardShareSocialStep));
      }
      for (let index = 0; index < panels.length; index += 1) {
        shareTimers.push(window.setTimeout(() => {
          setShareSocialCount(panels.length - index - 1);
        }, actionClipboardShareSocialHideStart + index * actionClipboardShareSocialStep));
      }
      shareTimers.push(window.setTimeout(() => {
        setSharePhase('collapsing');
        setShareExpanded(false);
        setShareCount(0);
        setShareCheckCount(0);
      }, actionClipboardShareCollapseStart));
      shareTimers.push(window.setTimeout(() => {
        setSharePhase('returning');
      }, actionClipboardShareReturnStart));
      // Keep the filled return animation until the next cycle so staggered items
      // all finish before their animation class is removed.
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
      }, actionClipboardExportStart)];
      for (let index = 0; index < exportPanels.length; index += 1) {
        exportTimers.push(window.setTimeout(() => {
          setExportCheckCount(index + 1);
        }, actionClipboardExportStart + index * actionClipboardExportCheckStep));
      }
      exportTimers.push(window.setTimeout(() => {
        setExportPhase('flying');
        setExportCount(exportPanels.length);
        setExportShakeCycle((cycle) => cycle + 1);
      }, actionClipboardExportCollectStart));
      exportTimers.push(window.setTimeout(() => {
        setExportPhase('expanded');
        setExportExpanded(true);
        setExportFormatCount(0);
      }, actionClipboardExportExpandStart));
      for (let index = 0; index < 2; index += 1) {
        exportTimers.push(window.setTimeout(() => {
          setExportFormatCount(index + 1);
        }, actionClipboardExportExpandStart + 180 + index * actionClipboardExportFormatStep));
      }
      for (let index = 0; index < 2; index += 1) {
        exportTimers.push(window.setTimeout(() => {
          setExportFormatCount(2 - index - 1);
        }, actionClipboardExportFormatHideStart + index * actionClipboardExportFormatStep));
      }
      exportTimers.push(window.setTimeout(() => {
        setExportPhase('collapsing');
        setExportExpanded(false);
        setExportCount(0);
        setExportCheckCount(0);
      }, actionClipboardExportCollapseStart));
      exportTimers.push(window.setTimeout(() => {
        setExportPhase('returning');
        setExportShakeCycle((cycle) => cycle + 1);
      }, actionClipboardExportReturnStart));
      exportTimers.push(window.setTimeout(() => {
        setExportPhase('idle');
        setExportFormatCount(0);
      }, actionClipboardExportReturnStart + 700));
    };
    const scheduleClipboardCycle = () => {
      clipboardTimers.forEach((timer) => window.clearTimeout(timer));
      setClipboardPhase('idle');
      setClipboardCopyCount(0);
      setClipboardCheckCount(0);
      setClipboardShakeCycle(0);
      setClipboardCycle((cycle) => cycle + 1);
      clipboardTimers = [window.setTimeout(() => {
        setClipboardPhase('social');
      }, actionClipboardClipboardStart)];
      for (let index = 0; index < panels.length; index += 1) {
        clipboardTimers.push(window.setTimeout(() => {
          setClipboardCopyCount(index + 1);
        }, actionClipboardClipboardCopyStart + index * actionClipboardClipboardCopyStep));
        clipboardTimers.push(window.setTimeout(() => {
          setClipboardCheckCount(index + 1);
        }, actionClipboardClipboardCopyStart + index * actionClipboardClipboardCopyStep + actionClipboardClipboardCheckDelay));
      }
      clipboardTimers.push(window.setTimeout(() => {
        setClipboardPhase('social-returning');
        setClipboardShakeCycle((cycle) => cycle + 1);
      }, actionClipboardClipboardSocialReturnStart));
      clipboardTimers.push(window.setTimeout(() => {
        setClipboardPhase('content');
        setClipboardCopyCount(0);
        setClipboardCheckCount(0);
        setClipboardShakeCycle((cycle) => cycle + 1);
      }, actionClipboardClipboardContentStart));
      clipboardTimers.push(window.setTimeout(() => {
        setClipboardPhase('content-returning');
        setClipboardShakeCycle((cycle) => cycle + 1);
      }, actionClipboardClipboardContentReturnStart));
      clipboardTimers.push(window.setTimeout(() => {
        setClipboardPhase('idle');
      }, actionClipboardClipboardContentReturnStart + actionClipboardClipboardReturnTotal + 150));
    };
    const scheduleICloudCycle = () => {
      icloudTimers.forEach((timer) => window.clearTimeout(timer));
      setICloudPhase('idle');
      setICloudCount(0);
      setICloudCheckCount(0);
      setICloudShakeCycle(0);
      setICloudCycle((cycle) => cycle + 1);
      icloudTimers = [window.setTimeout(() => {
        setICloudPhase('collecting');
      }, actionClipboardICloudStart)];
      for (let index = 0; index < panels.length; index += 1) {
        icloudTimers.push(window.setTimeout(() => {
          setICloudCheckCount(index + 1);
        }, actionClipboardICloudStart + 520 + index * actionClipboardICloudCheckStep));
      }
      icloudTimers.push(window.setTimeout(() => {
        setICloudPhase('flying');
        setICloudCount(panels.length);
        setICloudShakeCycle((cycle) => cycle + 1);
      }, actionClipboardICloudCollectStart));
      icloudTimers.push(window.setTimeout(() => {
        setICloudPhase('syncing');
        setICloudShakeCycle((cycle) => cycle + 1);
      }, actionClipboardICloudSyncStart));
      icloudTimers.push(window.setTimeout(() => {
        setICloudPhase('numbers');
        setICloudCount(panels.length);
      }, actionClipboardICloudNumbersStart));
      icloudTimers.push(window.setTimeout(() => {
        setICloudPhase('returning');
        setICloudCount(0);
        setICloudCheckCount(0);
        setICloudShakeCycle((cycle) => cycle + 1);
      }, actionClipboardICloudReturnStart));
    };

    scheduleCycle();
    schedulePinCycle();
    scheduleShareCycle();
    scheduleExportCycle();
    scheduleClipboardCycle();
    scheduleICloudCycle();
    const cycleTimer = window.setInterval(scheduleCycle, actionClipboardAnimationCycle);
    const pinCycleTimer = window.setInterval(schedulePinCycle, actionClipboardPinCycle);
    const shareCycleTimer = window.setInterval(scheduleShareCycle, actionClipboardShareCycle);
    const exportCycleTimer = window.setInterval(scheduleExportCycle, actionClipboardExportCycle);
    const clipboardCycleTimer = window.setInterval(scheduleClipboardCycle, actionClipboardClipboardCycle);
    const icloudCycleTimer = window.setInterval(scheduleICloudCycle, actionClipboardICloudCycle);

    return () => {
      window.clearInterval(cycleTimer);
      window.clearInterval(pinCycleTimer);
      window.clearInterval(shareCycleTimer);
      window.clearInterval(exportCycleTimer);
      window.clearInterval(clipboardCycleTimer);
      window.clearInterval(icloudCycleTimer);
      timers.forEach((timer) => window.clearTimeout(timer));
      pinTimers.forEach((timer) => window.clearTimeout(timer));
      shareTimers.forEach((timer) => window.clearTimeout(timer));
      exportTimers.forEach((timer) => window.clearTimeout(timer));
      clipboardTimers.forEach((timer) => window.clearTimeout(timer));
      icloudTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <ActionClipboardSection ref={sectionRef} aria-label={dict.actionClipboard.sectionLabel}>
      <div className="container">
        <header className="action-clipboard-heading">
          <h2>{dict.actionClipboard.headingTitle}</h2>
          <p>{dict.actionClipboard.headingDescription}</p>
        </header>
        <div className="action-clipboard-grid">
          <article className="action-clipboard-panel" key="group">
                  <div className="action-clipboard-panel-bar-shell">
                    <div
                      className={`action-clipboard-panel-bar-motion${isReturning ? ' action-clipboard-panel-bar-motion--returning' : isFlying ? ' action-clipboard-panel-bar-motion--flying' : ''}`}
                      style={isFlying || isReturning ? islandShakeStyle : undefined}
                    >
                      <div key={animationCycle} className="action-clipboard-panel-bar" />
                    </div>
                    <div className="action-clipboard-panel-bar-foreground">
                      <span className="action-clipboard-panel-folder-wrap">
                        <GroupFolderIcon label={dict.actionClipboard.featureLabels.group} />
                      </span>
                      <AnimatedProgress value={groupCount} active={groupCount > 0} label={`${groupCount} items collected`} />
                    </div>
                  </div>
                  <div className="action-clipboard-panel-content action-clipboard-panel-content--group">
                    <div className={`action-clipboard-group-mockups action-clipboard-group-mockups--collecting${animationCycle > 1 ? ' action-clipboard-group-mockups--repeat' : ''}${isReturning ? ' action-clipboard-group-mockups--returning' : isFlying ? ' action-clipboard-group-mockups--flying' : ''}`}>
                      {panels.map((groupPanel) => (
                        <MiniMockup
                          type={groupPanel.type}
                          key={`${groupPanel.id}-${animationCycle}`}
                          marker={<MockupCheck />}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="action-clipboard-panel-title">{createGroupLabels[lang] ?? 'Group'}</div>
                  <div className="action-clipboard-panel-description">{dict.actionClipboard.groupDescription}</div>
          </article>

          <article className="action-clipboard-panel" key="pin">
                  <div className="action-clipboard-panel-bar-shell">
                    <div
                      className={`action-clipboard-panel-bar-motion${pinShakeCycle > 0 ? ` action-clipboard-panel-bar-motion--pin-shaking-${pinShakeCycle % 2 === 0 ? 'even' : 'odd'}` : ''}`}
                      style={pinShakeCycle > 0 ? pinIslandShakeStyle : undefined}
                    >
                      <div className="action-clipboard-panel-bar" />
                    </div>
                    <div className="action-clipboard-panel-bar-foreground">
                      <span className="action-clipboard-panel-folder-wrap">
                        <DynamicPinIcon />
                      </span>
                      <AnimatedProgress value={pinCount} active={pinCount > 0} label={`${pinCount} pinned items`} />
                    </div>
                  </div>
                  <div className="action-clipboard-panel-content action-clipboard-panel-content--group">
                    <div className={`action-clipboard-group-mockups action-clipboard-group-mockups--pin-${pinPhase}`}>
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
                  <div className="action-clipboard-panel-title">{dict.actionClipboard.featureLabels.pin}</div>
                  <div className="action-clipboard-panel-description">{dict.actionClipboard.pinDescription}</div>
          </article>

          <article className="action-clipboard-panel" key="share">
                  <div className={`action-clipboard-panel-bar-shell${shareExpanded ? ' action-clipboard-panel-bar-shell--share-expanded' : ''}`}>
                    <div
                      className={`action-clipboard-panel-bar-motion${shareExpanded ? ' action-clipboard-panel-bar-motion--share-expanded' : ''}${shareShakeCycle > 0 ? ` action-clipboard-panel-bar-motion--share-shaking-${shareShakeCycle % 2 === 0 ? 'even' : 'odd'}` : ''}`}
                      style={shareShakeCycle > 0 ? shareIslandShakeStyle : undefined}
                    >
                      <div className="action-clipboard-panel-bar" />
                    </div>
                    <div className={`action-clipboard-panel-bar-foreground${shareExpanded ? ' action-clipboard-panel-bar-foreground--share-expanded' : ''}`}>
                      <span className="action-clipboard-panel-folder-wrap">
                        <DynamicShareIcon />
                      </span>
                      <AnimatedProgress value={shareCount} active={shareCount > 0} label={`${shareCount} items ready to share`} />
                      <div className="action-clipboard-share-socials" aria-hidden="true">
                        {actionClipboardShareSocials.map((social, index) => (
                          <span className={shareSocialCount > index ? 'action-clipboard-share-social--visible' : ''} key={social.name} aria-label={social.label}>
                            <SocialMark className="action-clipboard-share-social-mark" name={social.name} />
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="action-clipboard-panel-content action-clipboard-panel-content--group">
                    <div style={shareMockupsStyle} className={`action-clipboard-group-mockups action-clipboard-group-mockups--share${sharePhase === 'selecting' ? ' action-clipboard-group-mockups--share-selecting' : ''}${sharePhase === 'flying' || sharePhase === 'expanded' || sharePhase === 'collapsing' ? ' action-clipboard-group-mockups--share-flying' : ''}${sharePhase === 'returning' ? ' action-clipboard-group-mockups--share-returning' : ''}`}>
                      {panels.map((sharePanel, index) => (
                        <MiniMockup
                          type={sharePanel.type}
                          key={`share-${sharePanel.id}`}
                          marker={<MockupCheck className={`action-clipboard-share-check${shareCheckCount > index ? ' action-clipboard-share-check--visible' : ''}`} />}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="action-clipboard-panel-title">{dict.actionClipboard.featureLabels.share}</div>
                  <div className="action-clipboard-panel-description">{dict.actionClipboard.shareDescription}</div>
          </article>

          <article className="action-clipboard-panel" key="export">
                  <div className={`action-clipboard-panel-bar-shell${exportExpanded ? ' action-clipboard-panel-bar-shell--export-expanded' : ''}`}>
                    <div
                      className={`action-clipboard-panel-bar-motion${exportExpanded ? ' action-clipboard-panel-bar-motion--export-expanded' : ''}${exportShakeCycle > 0 ? ` action-clipboard-panel-bar-motion--export-shaking-${exportShakeCycle % 2 === 0 ? 'even' : 'odd'}` : ''}`}
                      style={exportShakeCycle > 0 ? exportIslandShakeStyle : undefined}
                    >
                      <div className="action-clipboard-panel-bar" />
                    </div>
                    <div className={`action-clipboard-panel-bar-foreground${exportExpanded ? ' action-clipboard-panel-bar-foreground--export-expanded' : ''}`}>
                      <span className="action-clipboard-panel-folder-wrap">
                        <DynamicExportIcon />
                      </span>
                      <AnimatedProgress value={exportCount} active={exportCount > 0} label={`${exportCount} files ready to export`} />
                      <div className="action-clipboard-export-formats" aria-hidden="true">
                        <span className={exportFormatCount > 0 ? 'action-clipboard-export-format--visible' : ''}>
                          <DynamicJsonIcon />
                          <strong>JSON</strong>
                        </span>
                        <span className={exportFormatCount > 1 ? 'action-clipboard-export-format--visible' : ''}>
                          <DynamicCsvIcon />
                          <strong>CSV</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="action-clipboard-panel-content action-clipboard-panel-content--group">
                    <div className={`action-clipboard-group-mockups action-clipboard-group-mockups--export${exportPhase === 'selecting' ? ' action-clipboard-group-mockups--export-selecting' : ''}${exportPhase === 'flying' || exportPhase === 'expanded' || exportPhase === 'collapsing' ? ' action-clipboard-group-mockups--export-flying' : ''}${exportPhase === 'returning' ? ' action-clipboard-group-mockups--export-returning' : ''}`}>
                      {exportPanels.map((exportPanel, index) => (
                        <MiniMockup
                          type={exportPanel.type}
                          key={`export-${exportPanel.id}`}
                          marker={<MockupCheck className={`action-clipboard-export-check${exportCheckCount > index ? ' action-clipboard-export-check--visible' : ''}`} />}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="action-clipboard-panel-title">{dict.actionClipboard.exportTitle}</div>
                  <div className="action-clipboard-panel-description">{dict.actionClipboard.exportDescription}</div>
          </article>

          <VoicePreview />
          <ScanPreview />
          <ClipboardPreview
            phase={clipboardPhase}
            copyCount={clipboardCopyCount}
            checkCount={clipboardCheckCount}
            shakeCycle={clipboardShakeCycle}
            cycle={clipboardCycle}
          />
          <ICloudPreview
            phase={icloudPhase}
            count={icloudCount}
            checkCount={icloudCheckCount}
            shakeCycle={icloudShakeCycle}
            cycle={icloudCycle}
          />
        </div>
      </div>
    </ActionClipboardSection>
  );
};

export default ActionClipboard;
