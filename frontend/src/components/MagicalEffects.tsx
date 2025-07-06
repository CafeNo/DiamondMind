import React, { useEffect, useState } from 'react';

interface MagicalEffectsProps {
  variant?: 'full' | 'minimal' | 'hearts' | 'bubbles' | 'stats';
  intensity?: 'low' | 'medium' | 'high';
}

const MagicalEffects = ({ variant = 'full', intensity = 'medium' }: MagicalEffectsProps) => {
  const [effectElements, setEffectElements] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    generateEffects();
  }, [variant, intensity]);

  const generateEffects = () => {
    const elements: React.ReactElement[] = [];
    const counts = {
      low: { bubbles: 8, hearts: 5, stats: 3 },
      medium: { bubbles: 15, hearts: 8, stats: 5 },
      high: { bubbles: 25, hearts: 12, stats: 8 }
    };

    const currentCounts = counts[intensity];

    // Generate static bubbles (no animation)
    if (variant === 'full' || variant === 'bubbles') {
      for (let i = 0; i < currentCounts.bubbles; i++) {
        elements.push(
          <div
            key={`bubble-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className={`w-${2 + Math.floor(Math.random() * 4)} h-${2 + Math.floor(Math.random() * 4)} rounded-full bg-gradient-to-br ${getRandomBubbleColor()} opacity-30`}>
            </div>
          </div>
        );
      }
    }

    // Generate static hearts (no animation)
    if (variant === 'full' || variant === 'hearts') {
      for (let i = 0; i < currentCounts.hearts; i++) {
        elements.push(
          <div
            key={`heart-${i}`}
            className="absolute pointer-events-none text-shirin-pink opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${0.8 + Math.random() * 1.2}rem`,
            }}
          >
            ❤️
          </div>
        );
      }
    }

    // Generate static stats elements (no animation)
    if (variant === 'full' || variant === 'stats') {
      const statsEmojis = ['⭐', '✨', '💫'];
      for (let i = 0; i < currentCounts.stats; i++) {
        elements.push(
          <div
            key={`stat-${i}`}
            className="absolute pointer-events-none opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${1 + Math.random() * 0.8}rem`,
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
      
      {/* Static ambient effects (no animation) */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-shirin-blue/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-shirin-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-shirin-pink/5 rounded-full blur-xl"></div>
    </div>
  );
};

export default MagicalEffects; 