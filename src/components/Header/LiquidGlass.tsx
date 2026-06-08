import React, { ReactNode } from 'react';
import { GlassCard } from '@developer-hub/liquid-glass';

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  padding?: string;
}

const LiquidGlass: React.FC<LiquidGlassProps> = ({ children, className, padding = '12px 24px' }) => {
  return (
    <GlassCard 
      displacementScale={20}
      blurAmount={0.01}
      cornerRadius={100}
      padding={padding}
      className={className}
    >
      {children}
    </GlassCard>
  );
};

export default LiquidGlass;
