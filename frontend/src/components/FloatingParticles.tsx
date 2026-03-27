import React, { useEffect, useRef, useState } from "react";

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

const createParticles = (count = 20): Particle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 10 + 5,
    speedX: (Math.random() - 0.5) * 0.3,
    speedY: (Math.random() - 0.5) * 0.3,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 2,
    type: (["heart", "star", "sparkle"] as const)[Math.floor(Math.random() * 3)],
    opacity: Math.random() * 0.5 + 0.3,
  }));

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const viewportRef = useRef({ w: window.innerWidth, h: window.innerHeight });

  useEffect(() => {
    setParticles(createParticles(20));

    const handleResize = () => {
      viewportRef.current = { w: window.innerWidth, h: window.innerHeight };
    };
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      const { w, h } = viewportRef.current;
      setParticles((prev) =>
        prev.map((p) => {
          const newX = p.x + p.speedX;
          const newY = p.y + p.speedY;
          return {
            ...p,
            x: newX > w + 50 ? -50 : newX < -50 ? w + 50 : newX,
            y: newY > h + 50 ? -50 : newY < -50 ? h + 50 : newY,
            rotation: p.rotation + p.rotationSpeed,
          };
        })
      );
    }, 100);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const colors = ["rgba(161,234,251,0.3)", "rgba(202,187,233,0.3)", "rgba(255,206,243,0.3)"];

  const renderParticle = (p: Particle) => {
    const color = colors[p.id % colors.length];
    const style: React.CSSProperties = {
      left: p.x,
      top: p.y,
      transform: `rotate(${p.rotation}deg)`,
      opacity: p.opacity,
      width: p.size,
      height: p.size,
    };

    switch (p.type) {
      case "heart":
      case "star":
        return (
          <div
            key={p.id}
            className="absolute pointer-events-none rounded-full"
            style={{ ...style, background: color }}
          />
        );
      case "sparkle":
        return (
          <div key={p.id} className="absolute pointer-events-none" style={style}>
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: `${p.size / 2}px solid transparent`,
                borderRight: `${p.size / 2}px solid transparent`,
                borderBottom: `${p.size}px solid ${color}`,
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
