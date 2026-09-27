import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { publicAsset } from '@/utils/publicAssets';
import { getWritingToolCopy } from '@/components/Translations/Home/writingToolCopy';
import { WritingToolSection } from './styled';
import ViewportGlow from '@/components/ViewportGlow';

const GLOW_UNMOUNT_DELAY = 1700;

const WritingIntro = styled.header``;
const IosRequirement = styled.div``;
const IosRequirementPrefix = styled.span``;
const IosVersionLabel = styled.span``;
const IosVersionIcon = styled.span``;
const IosVersionIconImg = styled.img``;
const IosVersionLabelSpan = styled.span``;
const IosVersionNumber = styled.strong``;
const WritingToolHeading = styled.h2``;
const WritingHeadingGradient = styled.span``;
const WritingToolHeadingBr = styled.br``;
const WritingIntroP = styled.p``;
const WritingCard = styled.div``;
const WritingArt = styled.div``;
const WritingAppImage = styled.img``;
const WritingCopy = styled.div``;
const WritingSymbol = styled.img``;
const WritingFeatureList = styled.div``;
const WritingFeature = styled.section``;
const WritingFeatureH3 = styled.h3``;
const WritingFeatureP = styled.p``;


const WritingTool: React.FC = () => {
  const { lang } = useTranslation();
  const copy = getWritingToolCopy(lang);
  const [availabilityPrefix, availabilitySuffix] = copy.availability.split('iOS 27');
  const cardRef = useRef<HTMLDivElement>(null);
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setShowGlow(true);
      return undefined;
    }

    let hideTimer: number | null = null;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (hideTimer !== null) window.clearTimeout(hideTimer);
        hideTimer = null;
        setShowGlow(true);
        return;
      }
      if (hideTimer !== null) window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => {
        setShowGlow(false);
        hideTimer = null;
      }, GLOW_UNMOUNT_DELAY);
    }, { rootMargin: '50% 0px 50% 0px' });
    observer.observe(card);
    return () => {
      observer.disconnect();
      if (hideTimer !== null) window.clearTimeout(hideTimer);
    };
  }, []);

  return <WritingToolSection aria-labelledby="writing-tool-heading">
  <WritingIntro className="writing-intro">
    <IosRequirement className="ios-requirement" aria-label={copy.availability}>
      {availabilityPrefix.trim() && <IosRequirementPrefix className="ios-requirement-prefix">{availabilityPrefix.trim()}</IosRequirementPrefix>}
      <IosVersionLabel className="ios-version-label">
        <IosVersionIcon className="ios-version-icon" aria-hidden="true">
          <IosVersionIconImg src={publicAsset('/assets/ios-27-logo.png')} alt="" />
        </IosVersionIcon>
        <IosVersionLabelSpan><IosVersionNumber className="ios-version-number">iOS 27</IosVersionNumber>{availabilitySuffix}</IosVersionLabelSpan>
      </IosVersionLabel>
    </IosRequirement>
    <WritingToolHeading id="writing-tool-heading">
      <WritingHeadingGradient
        className="writing-heading-gradient"
        style={{ backgroundImage: `url("${publicAsset('/assets/ai-writing-gradient.webp')}")` }}
      >{copy.heading[0]}</WritingHeadingGradient>
      <WritingToolHeadingBr />
      {copy.heading[1]}
    </WritingToolHeading>
    <WritingIntroP>{copy.description}</WritingIntroP>
  </WritingIntro>
  <WritingCard className="writing-card" ref={cardRef}>
    <WritingArt className="writing-art" aria-hidden="true">
      <WritingAppImage className="writing-app-image writing-app-dark" src={publicAsset('/assets/app-features-dark.PNG')} alt="" />
      <WritingAppImage className="writing-app-image writing-app-light" src={publicAsset('/assets/app-features-light.PNG')} alt="" />
    </WritingArt>
    <WritingCopy className="writing-copy">
      <WritingSymbol className="writing-symbol" src={publicAsset('/assets/Apple_Intelligence.svg')} alt="Apple Intelligence" />
      <WritingFeatureList className="writing-feature-list">
        {copy.features.map((feature) => <WritingFeature className="writing-feature" key={feature.title}>
          <WritingFeatureH3>{feature.title}</WritingFeatureH3>
          <WritingFeatureP>{feature.description}</WritingFeatureP>
        </WritingFeature>)}
      </WritingFeatureList>
    </WritingCopy>
    {showGlow && <ViewportGlow targetRef={cardRef} />}
  </WritingCard>
</WritingToolSection>;
};

export default WritingTool;
