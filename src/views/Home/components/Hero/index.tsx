import React from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { DownloadGroup, HeroAccent, HeroDescription, HeroHeading, HeroLineBreak, HeroSection, RequirementNote, RequirementPrefix, VersionIcon, VersionLabel, VersionLogo, VersionNumber, VersionSuffix, VersionText } from './styled';
import { getIosRequirement, getHomeCopy } from '@/components/Translations/Home/homeCopy';
import { getHomeHeroDescription } from '@/components/Translations/Home/heroCopy';
import AppStoreButton from '@/components/AppStoreButton';
import { publicAsset } from '@/utils/publicAssets';

const Hero: React.FC = () => {
  const { lang } = useTranslation();
  const copy = getHomeCopy(lang);
  const description = getHomeHeroDescription(lang);
  const iosRequirement = getIosRequirement(lang);
  const [requirementPrefix, requirementSuffix] = iosRequirement.split('iOS 26');
  return <HeroSection>
    <HeroHeading>{copy.headline[0]}<HeroLineBreak /><HeroAccent>{copy.headline[1]}</HeroAccent></HeroHeading>
    <HeroDescription>{description}</HeroDescription>
    <DownloadGroup>
      <AppStoreButton className="hero-download-button" />
      <RequirementNote aria-label={iosRequirement}>
        {requirementPrefix.trim() && <RequirementPrefix>{requirementPrefix.trim()}</RequirementPrefix>}
        <VersionLabel>
          <VersionIcon aria-hidden="true"><VersionLogo src={publicAsset('/assets/ios-26-logo.png')} alt="" /></VersionIcon>
          <VersionText><VersionNumber>iOS 26</VersionNumber><VersionSuffix>{requirementSuffix}</VersionSuffix></VersionText>
        </VersionLabel>
      </RequirementNote>
    </DownloadGroup>
  </HeroSection>;
};

export default Hero;
