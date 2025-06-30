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
            
            // Add sparkle effects
            createSparkleEffect(element);
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

  const createSparkleEffect = (element: HTMLElement) => {
    // Create floating sparkles when section comes into view
    const sparkleCount = 5;
    
    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'absolute pointer-events-none text-shirin-blue opacity-0 animate-sparkle';
      sparkle.innerHTML = '🌟';
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animationDelay = `${Math.random() * 2}s`;
      sparkle.style.fontSize = `${0.8 + Math.random() * 0.4}rem`;
      
      element.appendChild(sparkle);
      
      // Remove sparkle after animation
      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
        }
      }, 3000);
    }
  };

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
        <div className="absolute top-0 left-0 w-32 h-32 bg-shirin-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-shirin-purple/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-left {
          from { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slide-right {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.8); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        @keyframes glow {
          from { 
            opacity: 0; 
            box-shadow: 0 0 0 rgba(161, 234, 251, 0); 
          }
          to { 
            opacity: 1; 
            box-shadow: 0 0 30px rgba(161, 234, 251, 0.3); 
          }
        }
        
        @keyframes sparkle {
          0% { 
            opacity: 0; 
            transform: translateY(0) scale(0.5); 
          }
          50% { 
            opacity: 1; 
            transform: translateY(-20px) scale(1); 
          }
          100% { 
            opacity: 0; 
            transform: translateY(-40px) scale(0.5); 
          }
        }
        
        .animate-fade-up {
          animation: fade-up 1s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slide-left 1s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slide-right 1s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 1s ease-out forwards;
        }
        
        .animate-glow {
          animation: glow 1s ease-out forwards;
        }
        
        .animate-sparkle {
          animation: sparkle 3s ease-out forwards;
        }
      `}</style>
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