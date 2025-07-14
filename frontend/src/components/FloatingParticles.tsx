import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  type: "heart" | "star" | "sparkle";
  opacity: number;
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Create initial particles
    const initialParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 10,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      type: ["heart", "star", "sparkle"][Math.floor(Math.random() * 3)] as
        | "heart"
        | "star"
        | "sparkle",
      opacity: Math.random() * 0.5 + 0.3,
    }));

    setParticles(initialParticles);

    // Animation loop
    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          const newX = particle.x + particle.speedX;
          const newY = particle.y + particle.speedY;

          return {
            ...particle,
            x:
              newX > window.innerWidth + 50
                ? -50
                : newX < -50
                ? window.innerWidth + 50
                : newX,
            y:
              newY > window.innerHeight + 50
                ? -50
                : newY < -50
                ? window.innerHeight + 50
                : newY,
            rotation: particle.rotation + particle.rotationSpeed,
          };
        })
      );
    };

    const interval = setInterval(animate, 50);

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

    switch (particle.type) {
      case "heart":
        return (
          <div
            key={particle.id}
            className="absolute pointer-events-none text-pink-400"
            style={style}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        );
      case "star":
        return (
          <div
            key={particle.id}
            className="absolute pointer-events-none text-yellow-400"
            style={style}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        );
      case "sparkle":
        return (
          <div
            key={particle.id}
            className="absolute pointer-events-none text-cyan-400"
            style={style}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
            </svg>
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
