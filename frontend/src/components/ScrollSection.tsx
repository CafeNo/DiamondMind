import React, { useEffect, useRef, ReactNode } from 'react';
import MagicalEffects from './MagicalEffects';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  effect?: 'fadeUp' | 'slideLeft' | 'slideRight' | 'scale' | 'glow';
}

const ScrollSection = ({ children, className = '', effect = 'fadeUp' }: ScrollSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Add the animation class based on effect type
            switch (effect) {
              case 'fadeUp':
                element.classList.add('animate-fade-up');
                break;
              case 'slideLeft':
                element.classList.add('animate-slide-left');
                break;
              case 'slideRight':
                element.classList.add('animate-slide-right');
                break;
              case 'scale':
                element.classList.add('animate-scale-in');
                break;
              case 'glow':
                element.classList.add('animate-glow');
                break;
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [effect]);

  return (
    <div 
      ref={sectionRef}
      className={`relative transition-all duration-1000 opacity-0 ${getInitialTransform(effect)} ${className}`}
    >
      {children}
      
      {/* Magical effects for each section - positioned to avoid overlap */}
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden z-0">
        <MagicalEffects variant={getEffectVariant(effect)} intensity="low" />
      </div>
      
      {/* Ambient glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-shirin-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-shirin-purple/5 rounded-full blur-3xl"></div>
      </div>

    </div>
  );
};

const getInitialTransform = (effect: string): string => {
  switch (effect) {
    case 'fadeUp':
      return 'translate-y-8';
    case 'slideLeft':
      return '-translate-x-12';
    case 'slideRight':
      return 'translate-x-12';
    case 'scale':
      return 'scale-95';
    case 'glow':
      return '';
    default:
      return 'translate-y-8';
  }
};

const getEffectVariant = (effect: string): 'full' | 'minimal' | 'hearts' | 'bubbles' | 'stats' => {
  switch (effect) {
    case 'fadeUp':
      return 'bubbles';
    case 'slideLeft':
      return 'hearts';
    case 'slideRight':
      return 'hearts';
    case 'scale':
      return 'stats';
    case 'glow':
      return 'full';
    default:
      return 'minimal';
  }
};

export default ScrollSection; 