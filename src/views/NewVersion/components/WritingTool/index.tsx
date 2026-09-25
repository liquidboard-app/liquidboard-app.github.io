import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { publicAsset } from '@/utils/publicAssets';
import { getWritingToolCopy } from './copy';
import { WritingToolSection } from './styled';
import ViewportGlow from './ViewportGlow';

const WritingTool: React.FC = () => {
  const { lang } = useTranslation();
  const copy = getWritingToolCopy(lang);
  const [availabilityPrefix, availabilitySuffix] = copy.availability.split('iOS 27');
  const artRef = useRef<HTMLDivElement>(null);
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    const art = artRef.current;
    if (!art) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setShowGlow(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setShowGlow(entry.isIntersecting);
    }, { rootMargin: '50% 0px 50% 0px' });
    observer.observe(art);
    return () => observer.disconnect();
  }, []);

  return <WritingToolSection aria-labelledby="writing-tool-heading">
  <header className="writing-intro">
    <div className="ios-requirement" aria-label={copy.availability}>
      {availabilityPrefix.trim() && <span className="ios-requirement-prefix">{availabilityPrefix.trim()}</span>}
      <span className="ios-version-label">
        <span className="ios-version-icon" aria-hidden="true">
          <img src={publicAsset('/assets/ios-27-logo.png')} alt="" />
        </span>
        <span><strong className="ios-version-number">iOS 27</strong>{availabilitySuffix}</span>
      </span>
    </div>
    <h2 id="writing-tool-heading">
      <span
        className="writing-heading-gradient"
        style={{ backgroundImage: `url("${publicAsset('/assets/ai-writing-gradient.webp')}")` }}
      >{copy.heading[0]}</span>
      <br />
      {copy.heading[1]}
    </h2>
    <p>{copy.description}</p>
  </header>
  <div className="writing-card">
    <div className="writing-art" ref={artRef} aria-hidden="true">
      <img className="writing-app-image writing-app-dark" src={publicAsset('/assets/app-features-dark.PNG')} alt="" />
      <img className="writing-app-image writing-app-light" src={publicAsset('/assets/app-features-light.PNG')} alt="" />
      {showGlow && <ViewportGlow artRef={artRef} />}
    </div>
    <div className="writing-copy">
      <img className="writing-symbol" src={publicAsset('/assets/Apple_Intelligence.svg')} alt="Apple Intelligence" />
      <div className="writing-feature-list">
        {copy.features.map((feature) => <section className="writing-feature" key={feature.title}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </section>)}
      </div>
    </div>
  </div>
</WritingToolSection>;
};

export default WritingTool;
