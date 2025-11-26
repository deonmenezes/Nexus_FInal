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
       
        
        {/* Logo Image */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <img 
            src="/images/logo footer.png" 
            alt="Nexus Energy" 
            className="w-full h-full object-contain"
          />
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

