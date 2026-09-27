import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { Pause } from 'lucide-react';
import { useTranslation } from '@/contexts/LanguageContext';
import { publicAsset } from '@/utils/publicAssets';
import {
  FeatureArt, FeatureBackground, FeatureCard, FeatureCopy, FeatureDescription,
  FeatureDetail, FeatureHeading, FeatureIntroDescription, FeatureIntroHeading, FeatureScreen, FeatureSubheading, FeatureSymbolBadge,
  FeatureTitle, FeatureBadgeIcon, FeaturesIntro, KeyboardIcon, LanyardIcon, ListFeaturesSection,
  ModeIcon, PlayIcon, ProgressFill, ProgressSegment, StoryControls,
  StoryModeIndicator, StoryPlayImage, StoryPlayToggle, StoryProgress,
} from './styled';
import { getListFeaturesCopy, getListFeaturesIntroTitles, getListFeaturesControlLabels } from '@/components/Translations/Home/listFeaturesCopy';

const FeatureIntroHeadingBr = styled.br``;


const ListFeatures: React.FC = () => {
  const { lang } = useTranslation();
  const [activeDemo, setActiveDemo] = useState<'app' | 'keyboard'>('app');
  const [isPlaying, setIsPlaying] = useState(true);
  const [segmentProgress, setSegmentProgress] = useState(0);
  const segmentRemaining = useRef(6000);
  const segmentDeadline = useRef<number | null>(null);
  const copy = getListFeaturesCopy(lang);
  const labels = getListFeaturesControlLabels(lang);
  const [introTitleFirstLine, introTitleSecondLine] = getListFeaturesIntroTitles(lang);

  useEffect(() => {
    if (!isPlaying) return undefined;
    segmentDeadline.current = Date.now() + segmentRemaining.current;
    const timer = window.setInterval(() => {
      const remaining = Math.max(0, (segmentDeadline.current ?? Date.now()) - Date.now());
      if (remaining === 0) {
        segmentRemaining.current = 6000;
        segmentDeadline.current = Date.now() + 6000;
        setSegmentProgress(0);
        setActiveDemo((current) => current === 'app' ? 'keyboard' : 'app');
        return;
      }
      segmentRemaining.current = remaining;
      setSegmentProgress(1 - remaining / 6000);
    }, 50);
    return () => {
      window.clearInterval(timer);
      if (segmentDeadline.current !== null) {
        segmentRemaining.current = Math.max(0, segmentDeadline.current - Date.now());
        segmentDeadline.current = null;
      }
    };
  }, [isPlaying]);

  return <ListFeaturesSection aria-labelledby="list-features-heading">
    <FeaturesIntro className="features-intro">
      <FeatureIntroHeading>{introTitleFirstLine}<FeatureIntroHeadingBr />{introTitleSecondLine}</FeatureIntroHeading>
      <FeatureIntroDescription>{copy.introDescription}</FeatureIntroDescription>
    </FeaturesIntro>
    <FeatureCard className="feature-card">
      <FeatureArt className="feature-art" data-paused={!isPlaying}>
        <FeatureBackground className="feature-background" src={publicAsset('/assets/background-features.jpg')} alt="" />
        <StoryProgress className="story-progress" aria-hidden="true">
          <ProgressSegment><ProgressFill style={{ width: `${activeDemo === 'app' ? segmentProgress * 100 : 100}%` }} /></ProgressSegment>
          <ProgressSegment><ProgressFill style={{ width: `${activeDemo === 'keyboard' ? segmentProgress * 100 : 0}%` }} /></ProgressSegment>
        </StoryProgress>
        <StoryControls className="story-controls">
          <StoryModeIndicator className="story-mode-indicator" type="button" aria-label={activeDemo === 'app' ? labels.showKeyboard : labels.showApp} onClick={() => {
            setActiveDemo((current) => current === 'app' ? 'keyboard' : 'app');
            setSegmentProgress(0);
            segmentRemaining.current = 6000;
            segmentDeadline.current = isPlaying ? Date.now() + 6000 : null;
          }}>
            <ModeIcon className={`mode-icon ${activeDemo === 'app' ? 'is-active' : ''}`}><LanyardIcon className="mode-lanyard" src={publicAsset('/assets/lanyardcard.fill.svg')} alt="" /></ModeIcon>
            <ModeIcon className={`mode-icon ${activeDemo === 'keyboard' ? 'is-active' : ''}`}><KeyboardIcon className="mode-keyboard" src={publicAsset('/assets/keyboard.fill.svg')} alt="" /></ModeIcon>
          </StoryModeIndicator>
          <StoryPlayToggle className="story-play-toggle" type="button" aria-label={isPlaying ? labels.pause : labels.play} onClick={() => setIsPlaying((playing) => !playing)}>
            <PlayIcon className={`play-icon ${!isPlaying ? 'is-active' : ''}`}><StoryPlayImage src={publicAsset('/assets/play.fill.svg')} alt="" /></PlayIcon>
            <PlayIcon className={`play-icon ${isPlaying ? 'is-active' : ''}`}><Pause /></PlayIcon>
          </StoryPlayToggle>
        </StoryControls>
        <FeatureScreen className={`feature-app-image feature-app-dark ${activeDemo === 'app' ? 'is-active' : ''}`} src={publicAsset('/assets/app-features-dark.PNG')} alt="" />
        <FeatureScreen className={`feature-app-image feature-keyboard-dark ${activeDemo === 'keyboard' ? 'is-active' : ''}`} src={publicAsset('/assets/keyboard-features-dark.PNG')} alt="" />
        <FeatureScreen className={`feature-app-image feature-app-light ${activeDemo === 'app' ? 'is-active' : ''}`} src={publicAsset('/assets/app-features-light.PNG')} alt="" />
        <FeatureScreen className={`feature-app-image feature-keyboard-light ${activeDemo === 'keyboard' ? 'is-active' : ''}`} src={publicAsset('/assets/keyboard-features-light.PNG')} alt="" />
      </FeatureArt>
      <FeatureCopy className="feature-copy">
        <FeatureDetail>
          <FeatureTitle className="feature-title">
            <FeatureSymbolBadge className="feature-symbol-badge feature-symbol-blue"><FeatureBadgeIcon src={publicAsset('/assets/lanyardcard.fill.svg')} alt="" /></FeatureSymbolBadge>
            <FeatureHeading id="list-features-heading">{copy.heading}</FeatureHeading>
          </FeatureTitle>
          <FeatureDescription className="feature-description">{copy.description}</FeatureDescription>
        </FeatureDetail>
        <FeatureDetail className="secondary">
          <FeatureTitle className="feature-title">
            <FeatureSymbolBadge className="feature-symbol-badge feature-symbol-green"><FeatureBadgeIcon src={publicAsset('/assets/keyboard.fill.svg')} alt="" /></FeatureSymbolBadge>
            <FeatureSubheading>{copy.secondHeading}</FeatureSubheading>
          </FeatureTitle>
          <FeatureDescription className="feature-description">{copy.secondDescription}</FeatureDescription>
        </FeatureDetail>
      </FeatureCopy>
    </FeatureCard>
  </ListFeaturesSection>;
};

export default ListFeatures;
