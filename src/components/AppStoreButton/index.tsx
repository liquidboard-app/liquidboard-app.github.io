import styled from 'styled-components';
import React from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { getAppStoreCopy } from '@/components/Translations/Home/appStoreCopy';
import { DownloadButton } from './styled';

const Svg = styled.svg``;
const SvgPath = styled.path``;


const DownloadIcon = styled.span``;
const DownloadIconStack = styled.span``;
const DownloadIconApple = styled.span``;
const DownloadIconArrow = styled.span``;
const DownloadLabel = styled.span``;


const AppleMark = () => (
  <Svg viewBox="0 0 384 512" aria-hidden="true">
    <SvgPath d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </Svg>
);

const DownloadMark = () => (
  <Svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <SvgPath d="M12 17V3" />
    <SvgPath d="m6 11 6 6 6-6" />
    <SvgPath d="M19 21H5" />
  </Svg>
);

type AppStoreButtonProps = {
  className?: string;
  label?: React.ReactNode;
  iconTile?: boolean;
  animatedIcon?: boolean;
};

const AppStoreButton: React.FC<AppStoreButtonProps> = ({ className, label, iconTile = false, animatedIcon = false }) => {
  const { lang } = useTranslation();
  return (
    <DownloadButton className={className} href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
      {iconTile ? <DownloadIcon className="download-icon"><AppleMark /></DownloadIcon> : animatedIcon ? (
        <DownloadIconStack className="download-icon-stack">
          <DownloadIconApple className="download-icon-apple"><AppleMark /></DownloadIconApple>
          <DownloadIconArrow className="download-icon-arrow"><DownloadMark /></DownloadIconArrow>
        </DownloadIconStack>
      ) : <AppleMark />}
      <DownloadLabel className="download-label">{label ?? getAppStoreCopy(lang).downloadForIPhone}</DownloadLabel>
    </DownloadButton>
  );
};

export default AppStoreButton;
