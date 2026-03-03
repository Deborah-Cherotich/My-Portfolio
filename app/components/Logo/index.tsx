"use client";
import React, { useState, useEffect } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact' | 'icon' | 'modern';
  animated?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'full', 
  animated = true,
  className = '',
  theme = 'light'
}) => {
  const [isTransformed, setIsTransformed] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);

  useEffect(() => {
    if (animated && variant === 'full') {
      const transformTimer = setTimeout(() => {
        setIsTransformed(true);
      }, 1200);
      
      const sparkleTimer = setTimeout(() => {
        setShowSparkle(true);
      }, 2000);

      return () => {
        clearTimeout(transformTimer);
        clearTimeout(sparkleTimer);
      };
    }
  }, [animated, variant]);

  const sizeClasses = {
    sm: 'text-lg md:text-xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-5xl',
    xl: 'text-5xl md:text-6xl'
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const isDark = theme === 'dark';

  // Enhanced Transformation Symbol Component
  const TransformSymbol = ({ size: symbolSize }: { size: string }) => (
    <div className={`${symbolSize} relative flex items-center justify-center`}>
      {/* Outer dynamic ring */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded-full animate-spin-slow opacity-80"></div>
        <div className="absolute inset-1 bg-white rounded-full"></div>
      </div>
      
      {/* Inner transformation element */}
      <div className="absolute inset-2 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 rounded-lg transform rotate-45 transition-all duration-700 hover:rotate-90 hover:scale-110">
        <div className="absolute inset-1 bg-white rounded-sm flex items-center justify-center">
          <div className="w-2 h-2 bg-gradient-to-br from-pink-500 to-blue-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Dynamic accent dots */}
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce delay-300"></div>
      
      {/* Sparkle effects */}
      {showSparkle && (
        <>
          <div className="absolute top-0 right-2 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-100"></div>
          <div className="absolute bottom-2 left-0 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-400"></div>
          <div className="absolute top-2 -left-1 w-0.5 h-0.5 bg-pink-400 rounded-full animate-ping delay-600"></div>
        </>
      )}
    </div>
  );

  // Modern variant - Bold "Debbie" branding
  if (variant === 'modern') {
    return (
      <div className={`${className} flex items-center space-x-4 group`}>
        <TransformSymbol size={iconSizes[size]} />
        <div className="relative">
          <div className={`${sizeClasses[size]} font-black tracking-tight relative`}>
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Debbie
            </span>
            {/* Subtle underline accent */}
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
          {/* Professional tagline */}
          <div className="text-xs text-gray-500 font-medium tracking-widest uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Professional Identity
          </div>
        </div>
      </div>
    );
  }

  // Compact variant - Clean and professional
  if (variant === 'compact') {
    return (
      <div className={`${className} flex items-center space-x-3 group cursor-pointer`}>
        <TransformSymbol size={iconSizes[size]} />
        <div className={`${sizeClasses[size]} font-bold tracking-tight relative`}>
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-600 group-hover:via-blue-500 group-hover:to-pink-500">
            Debbie
          </span>
          {/* Interactive underline */}
          <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-600 group-hover:w-full transition-all duration-300"></div>
        </div>
      </div>
    );
  }

  // Icon-only variant
  if (variant === 'icon') {
    return (
      <div className={`${className} flex items-center justify-center group cursor-pointer`}>
        <TransformSymbol size={iconSizes[size]} />
      </div>
    );
  }

  // Full variant with dramatic transformation
  return (
    <div className={`${className} relative flex items-center space-x-6`}>
      {/* Enhanced transformation symbol */}
      <TransformSymbol size={iconSizes[size]} />
      
      {/* Text transformation container */}
      <div className="relative overflow-hidden">
        {/* Original name with fade-out effect */}
        <div className={`${sizeClasses[size]} font-light tracking-wide transition-all duration-1500 ${
          isTransformed && animated 
            ? 'transform -translate-y-full opacity-0 scale-95 blur-sm' 
            : 'transform translate-y-0 opacity-100 scale-100 blur-0'
        }`}>
          <span className={`${isDark ? 'text-gray-200' : 'text-gray-700'} transition-colors duration-300`}>
            Deborah
          </span>
          <span className={`ml-3 ${isDark ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
            Barasa
          </span>
        </div>
        
        {/* Transformed name with enhanced styling */}
        <div className={`${sizeClasses[size]} font-black tracking-tight absolute top-0 left-0 transition-all duration-1500 ${
          isTransformed && animated 
            ? 'transform translate-y-0 opacity-100 scale-100' 
            : 'transform translate-y-full opacity-0 scale-95'
        }`}>
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent relative">
            Debbie
            {/* Text shadow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-600/20 blur-sm -z-10">
              Debbie
            </span>
          </span>
          
          {/* Enhanced underline animation */}
          <div className={`h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded-full transition-all duration-1000 delay-500 relative ${
            isTransformed && animated ? 'w-full opacity-100' : 'w-0 opacity-0'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Enhanced transformation particles */}
        {animated && isTransformed && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-2 left-4 w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-700"></div>
            <div className="absolute top-6 right-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute bottom-2 left-12 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-1300"></div>
            <div className="absolute top-4 left-20 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-ping delay-1600"></div>
          </div>
        )}
      </div>
      
      {/* Professional tagline for larger sizes */}
      {(size === 'lg' || size === 'xl') && isTransformed && (
        <div className={`absolute -bottom-8 left-16 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} 
                        font-medium tracking-widest uppercase transition-all duration-800 delay-2000 ${
                          isTransformed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
          Professional Identity
        </div>
      )}
      
      {/* Enhanced background glow effect */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl transition-all duration-2000 ${
          isTransformed ? 'opacity-40 scale-110' : 'opacity-0 scale-100'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full blur-3xl transition-all duration-2000 delay-500 ${
          isTransformed ? 'opacity-40 scale-110' : 'opacity-0 scale-100'
        }`}></div>
      </div>
    </div>
  );
};

export default Logo;
