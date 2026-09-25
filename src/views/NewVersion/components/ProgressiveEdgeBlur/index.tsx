import React from 'react';
import styled from 'styled-components';

const Edge = styled.div<{ $side: 'left' | 'right' }>`
  position: absolute;
  z-index: 3;
  top: 0;
  bottom: 0;
  ${({ $side }) => `${$side}: 0;`}
  width: clamp(72px, 9vw, 148px);
  overflow: hidden;
  pointer-events: none;
  background: transparent;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  -webkit-mask-image: linear-gradient(to ${({ $side }) => ($side === 'left' ? 'right' : 'left')}, #000 0%, transparent 100%);
  mask-image: linear-gradient(to ${({ $side }) => ($side === 'left' ? 'right' : 'left')}, #000 0%, transparent 100%);

  @media (max-width: 1024px) { display: none; }
`;

const ProgressiveEdgeBlur: React.FC = () => <>
  <Edge $side="left" aria-hidden="true" />
  <Edge $side="right" aria-hidden="true" />
</>;

export default ProgressiveEdgeBlur;
