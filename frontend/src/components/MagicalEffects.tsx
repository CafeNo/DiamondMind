import React, { useEffect, useState } from 'react';

interface MagicalEffectsProps {
  variant?: 'full' | 'minimal' | 'hearts' | 'bubbles' | 'stats';
  intensity?: 'low' | 'medium' | 'high';
}

const MagicalEffects = ({ variant = 'full', intensity = 'medium' }: MagicalEffectsProps) => {
  const [effectElements, setEffectElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    generateEffects();
  }, [variant, intensity]);

  const generateEffects = () => {
    const elements: JSX.Element[] = [];
    const counts = {
      low: { bubbles: 8, hearts: 5, stats: 3 },
      medium: { bubbles: 15, hearts: 8, stats: 5 },
      high: { bubbles: 25, hearts: 12, stats: 8 }
    };

    const currentCounts = counts[intensity];

    // Generate Glitter Bubbles
    if (variant === 'full' || variant === 'bubbles') {
      for (let i = 0; i < currentCounts.bubbles; i++) {
        elements.push(
          <div
            key={`bubble-${i}`}
            className="absolute pointer-events-none animate-float-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className={`w-${2 + Math.floor(Math.random() * 4)} h-${2 + Math.floor(Math.random() * 4)} rounded-full bg-gradient-to-br ${getRandomBubbleColor()} opacity-60 shadow-lg animate-pulse`}>
              <div className="w-full h-full rounded-full bg-shirin-white/30 animate-ping"></div>
            </div>
          </div>
        );
      }
    }

    // Generate Floating Hearts
    if (variant === 'full' || variant === 'hearts') {
      for (let i = 0; i < currentCounts.hearts; i++) {
        elements.push(
          <div
            key={`heart-${i}`}
            className="absolute pointer-events-none animate-float-heart text-shirin-pink opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${0.8 + Math.random() * 1.2}rem`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            
          </div>
        );
      }
    }

    // Generate Stats Sparkles
    if (variant === 'full' || variant === 'stats') {
      const statsEmojis = ['⭐', '✨', '💫' ];
      for (let i = 0; i < currentCounts.stats; i++) {
        elements.push(
          <div
            key={`stat-${i}`}
            className="absolute pointer-events-none animate-float-stat opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${1 + Math.random() * 0.8}rem`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              color: getRandomStatColor()
            }}
          >
            {statsEmojis[Math.floor(Math.random() * statsEmojis.length)]}
          </div>
        );
      }
    }

    setEffectElements(elements);
  };

  const getRandomBubbleColor = () => {
    const colors = [
      'from-shirin-blue to-shirin-purple',
      'from-shirin-purple to-shirin-pink',
      'from-shirin-pink to-shirin-blue',
      'from-shirin-blue to-shirin-white',
      'from-shirin-purple to-shirin-white'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomStatColor = () => {
    const colors = ['#A1EAFB', '#CABBE9', '#FFCEF3', '#FDFDFD'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {effectElements}
      
      {/* Additional ambient effects */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-shirin-blue/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-shirin-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-shirin-pink/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float-bubble {
          0% { 
            transform: translateY(0px) translateX(0px) scale(0.8); 
            opacity: 0; 
          }
          10% { 
            opacity: 0.6; 
          }
          50% { 
            transform: translateY(-30px) translateX(10px) scale(1.1); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(-60px) translateX(-10px) scale(0.9); 
            opacity: 0; 
          }
        }
        
        @keyframes float-heart {
          0% { 
            transform: translateY(0px) scale(0.5) rotate(0deg); 
            opacity: 0; 
          }
          20% { 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(-40px) scale(1.2) rotate(180deg); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(-80px) scale(0.8) rotate(360deg); 
            opacity: 0; 
          }
        }
        
        @keyframes float-stat {
          0% { 
            transform: translateY(0px) scale(0.6) rotate(0deg); 
            opacity: 0; 
          }
          25% { 
            opacity: 0.9; 
          }
          50% { 
            transform: translateY(-25px) scale(1.3) rotate(90deg); 
            opacity: 1; 
          }
          75% { 
            transform: translateY(-45px) scale(1.1) rotate(270deg); 
            opacity: 0.8; 
          }
          100% { 
            transform: translateY(-60px) scale(0.7) rotate(360deg); 
            opacity: 0; 
          }
        }
        
        .animate-float-bubble {
          animation: float-bubble ease-in-out infinite;
        }
        
        .animate-float-heart {
          animation: float-heart ease-in-out infinite;
        }
        
        .animate-float-stat {
          animation: float-stat ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MagicalEffects; 