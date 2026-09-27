import styled from 'styled-components';

export const ViewportGlowLayer = styled.div`
  --glow-thickness: 1.14;
  --glow-corner-size: 100px;
  --glow-shadow-blur: 16px;
  --glow-shadow-spread: 2.5px;
  position: fixed;
  z-index: 2;
  inset: 72px 0 0;
  overflow: hidden;
  pointer-events: none;

  canvas { display: block; width: 100%; height: 100%; }

  /* Static fallback for devices without WebGL. Corners pool more light. */
  &[data-fallback='true'] {
    opacity: var(--glow-reveal, 0);
    background:
      radial-gradient(ellipse var(--glow-corner-size) var(--glow-corner-size) at 0 0, #dfff40, transparent),
      radial-gradient(ellipse var(--glow-corner-size) var(--glow-corner-size) at 100% 0, #e747ff, transparent),
      radial-gradient(ellipse var(--glow-corner-size) var(--glow-corner-size) at 0 100%, #ffaf30, transparent),
      radial-gradient(ellipse var(--glow-corner-size) var(--glow-corner-size) at 100% 100%, #ff38b3, transparent);
    box-shadow: inset 0 0 var(--glow-shadow-blur) var(--glow-shadow-spread) #ab6cff80;
  }

  @media (max-width: 1024px), (max-width: 1366px) and (pointer: coarse) {
    --glow-thickness: 1.07;
    --glow-corner-size: 110px;
    --glow-shadow-blur: 16px;
    --glow-shadow-spread: 2px;
    -webkit-mask-image:
      linear-gradient(to right, #000, transparent 56px, transparent calc(100% - 56px), #000),
      linear-gradient(to bottom, #000, transparent 56px, transparent calc(100% - 56px), #000);
    mask-image:
      linear-gradient(to right, #000, transparent 56px, transparent calc(100% - 56px), #000),
      linear-gradient(to bottom, #000, transparent 56px, transparent calc(100% - 56px), #000);
  }
  @media (max-width: 760px) {
    --glow-thickness: 1.08;
    --glow-corner-size: 65px;
    --glow-shadow-blur: 9px;
    --glow-shadow-spread: 1px;
  }
`;
