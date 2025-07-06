import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  type: 'circle' | 'square' | 'triangle';
  opacity: number;
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Create initial particles
    const initialParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 10 + 5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1,
      type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
      opacity: Math.random() * 0.3 + 0.1,
    }));

    setParticles(initialParticles);

    // Animation loop
    const animate = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          const newX = particle.x + particle.speedX;
          const newY = particle.y + particle.speedY;
          
          return {
            ...particle,
            x: newX > window.innerWidth + 50 ? -50 : newX < -50 ? window.innerWidth + 50 : newX,
            y: newY > window.innerHeight + 50 ? -50 : newY < -50 ? window.innerHeight + 50 : newY,
            rotation: particle.rotation + particle.rotationSpeed,
          };
        })
      );
    };

    const interval = setInterval(animate, 100);

    return () => clearInterval(interval);
  }, []);

  const renderParticle = (particle: Particle) => {
    const style = {
      left: particle.x,
      top: particle.y,
      transform: `rotate(${particle.rotation}deg)`,
      opacity: particle.opacity,
      width: particle.size,
      height: particle.size,
    };

    const colors = ['bg-shirin-blue/30', 'bg-shirin-purple/30', 'bg-shirin-pink/30'];
    const color = colors[particle.id % colors.length];

    switch (particle.type) {
      case 'circle':
        return (
          <div
            key={particle.id}
            className={`absolute pointer-events-none rounded-full ${color}`}
            style={style}
          />
        );
      case 'square':
        return (
          <div
            key={particle.id}
            className={`absolute pointer-events-none ${color}`}
            style={style}
          />
        );
      case 'triangle':
        return (
          <div
            key={particle.id}
            className="absolute pointer-events-none"
            style={style}
          >
            <div 
              className={`w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent ${color.replace('bg-', 'border-b-')}`}
              style={{ 
                borderLeftWidth: particle.size / 2,
                borderRightWidth: particle.size / 2,
                borderBottomWidth: particle.size
              }}
            />
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map(renderParticle)}
    </div>
  );
};

export default FloatingParticles; 