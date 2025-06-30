import { useEffect, useRef } from 'react';

interface SectionDividerProps {
  variant?: 'wave' | 'geometric' | 'particles' | 'gradient';
  height?: 'sm' | 'md' | 'lg';
}

const SectionDivider = ({ variant = 'wave', height = 'md' }: SectionDividerProps) => {
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const heightClasses = {
    sm: 'h-16',
    md: 'h-24',
    lg: 'h-32'
  };

  if (variant === 'wave') {
    return (
      <div 
        ref={dividerRef}
        className={`w-full ${heightClasses[height]} relative opacity-0 transition-opacity duration-1000 overflow-hidden`}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A1EAFB" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#CABBE9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFCEF3" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient1)"
            className="animate-pulse"
          />
        </svg>
        <div className="absolute top-4 left-1/4 w-1 h-1 bg-shirin-blue rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-6 right-1/3 w-1 h-1 bg-shirin-pink rounded-full animate-bounce opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>
    );
  }

  if (variant === 'geometric') {
    return (
      <div 
        ref={dividerRef}
        className={`w-full ${heightClasses[height]} relative opacity-0 transition-opacity duration-1000 flex items-center justify-center`}
      >
        <div className="absolute inset-0 flex items-center justify-center space-x-8">
          <div className="w-8 h-8 bg-gradient-to-r from-shirin-blue to-shirin-purple rounded-full animate-spin opacity-60"></div>
          <div className="w-6 h-6 bg-gradient-to-r from-shirin-purple to-shirin-pink transform rotate-45 animate-pulse opacity-70"></div>
          <div className="w-10 h-10 border-2 border-shirin-blue rounded-full animate-ping opacity-50"></div>
        </div>
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-shirin-blue to-transparent opacity-40"></div>
      </div>
    );
  }

  if (variant === 'particles') {
    return (
      <div 
        ref={dividerRef}
        className={`w-full ${heightClasses[height]} relative opacity-0 transition-opacity duration-1000 overflow-hidden`}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-shirin-blue rounded-full animate-bounce opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={`purple-${i}`}
            className="absolute w-1 h-1 bg-shirin-purple rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Default gradient variant
  return (
    <div 
      ref={dividerRef}
      className={`w-full ${heightClasses[height]} relative opacity-0 transition-opacity duration-1000`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-shirin-blue/20 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-shirin-purple/15 to-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-shirin-blue/10 rounded-full blur-sm animate-pulse"></div>
        <div className="w-6 h-6 bg-shirin-purple/15 rounded-full blur-sm animate-pulse ml-4" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default SectionDivider; 