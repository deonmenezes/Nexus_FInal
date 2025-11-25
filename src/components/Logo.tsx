import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showText = true,
  size = 'md',
  variant = 'dark'
}) => {
  const sizeClasses = {
    sm: { circle: 'w-8 h-8', text: 'text-xs', letters: 'text-xs' },
    md: { circle: 'w-12 h-12', text: 'text-xl', letters: 'text-sm' },
    lg: { circle: 'w-16 h-16', text: 'text-2xl', letters: 'text-base' }
  };

  const currentSize = sizeClasses[size];

  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      {/* Circular Emblem with Segmented Arcs */}
      <div className={`relative ${currentSize.circle} flex items-center justify-center`}>
        <svg 
          viewBox="0 0 100 100" 
          className="absolute inset-0 w-full h-full"
        >
          {/* Segmented arcs forming a circle */}
          {/* Yellow arc at top */}
          <path
            d="M 50 10 A 40 40 0 0 1 70 20"
            stroke="#FCD34D"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Light blue/teal arc */}
          <path
            d="M 70 20 A 40 40 0 0 1 85 50"
            stroke="#4FD1C7"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Dark blue arc */}
          <path
            d="M 85 50 A 40 40 0 0 1 70 80"
            stroke="#2563EB"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Dark blue/grey arc at bottom */}
          <path
            d="M 70 80 A 40 40 0 0 1 30 80"
            stroke="#475569"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Light blue arc on left */}
          <path
            d="M 30 80 A 40 40 0 0 1 15 50"
            stroke="#60A5FA"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Completing the circle */}
          <path
            d="M 15 50 A 40 40 0 0 1 50 10"
            stroke="#4FD1C7"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        
        {/* N and E letters stacked vertically */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <span className={`${currentSize.letters} font-serif font-bold ${variant === 'light' ? 'text-white' : 'text-slate-700'} leading-none`}>N</span>
          <span className={`${currentSize.letters} font-serif font-bold ${variant === 'light' ? 'text-white' : 'text-slate-700'} leading-none -mt-1`}>E</span>
        </div>
      </div>

      {/* Text Elements */}
      {showText && (
        <div className="flex flex-col">
          <h2 className={`${currentSize.text} font-serif font-bold ${variant === 'light' ? 'text-white' : 'text-slate-700'} leading-tight`}>
            NEXUS
          </h2>
          <p className={`text-xs sm:text-sm bg-gradient-to-r ${variant === 'light' ? 'from-blue-300 via-cyan-300 to-emerald-400' : 'from-blue-400 via-cyan-400 to-emerald-500'} bg-clip-text text-transparent font-sans font-medium leading-tight`}>
            TRANSFORMING ENERGY
          </p>
        </div>
      )}
    </Link>
  );
};

