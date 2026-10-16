import React from 'react';
import { Link } from 'react-router-dom';

interface EloraLogoProps {
  theme?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const EloraLogo: React.FC<EloraLogoProps> = ({
  theme = 'light',
  className = '',
  size = 'md'
}) => {
  const heights = {
    sm: 'h-10 md:h-11',
    md: 'h-12 md:h-14',
    lg: 'h-16 md:h-20'
  };

  const logoSrc = theme === 'dark' ? '/images/elora-logo-dark.svg' : '/images/elora-logo.svg';

  return (
    <Link
      to="/"
      className={`inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8B13C] rounded ${className}`}
      aria-label="Elora Study Abroad - Home"
    >
      <img
        src={logoSrc}
        alt="Elora Study Abroad - DREAM • EXPLORE • ACHIEVE"
        className={`${heights[size]} w-auto object-contain transition-transform duration-200 hover:scale-[1.02]`}
        width="260"
        height="90"
        loading="eager"
      />
    </Link>
  );
};
