import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  opacity: number;
}

const ConfettiCelebration = ({ trigger }: { trigger: boolean }) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [isActive, setIsActive] = useState(false);

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
    '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'
  ];

  useEffect(() => {
    if (trigger && !isActive) {
      setIsActive(true);
      
      // Create confetti pieces
      const newConfetti: ConfettiPiece[] = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20,
        size: Math.random() * 10 + 5,
        speedX: (Math.random() - 0.5) * 8,
        speedY: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1,
      }));

      setConfetti(newConfetti);

      // Reset after animation
      setTimeout(() => {
        setIsActive(false);
        setConfetti([]);
      }, 3000);
    }
  }, [trigger, isActive]);

  useEffect(() => {
    if (!isActive || confetti.length === 0) return;

    const animate = () => {
      setConfetti(prevConfetti =>
        prevConfetti.map(piece => ({
          ...piece,
          x: piece.x + piece.speedX,
          y: piece.y + piece.speedY,
          rotation: piece.rotation + piece.rotationSpeed,
          speedY: piece.speedY + 0.1, // gravity
          opacity: piece.y > window.innerHeight - 100 ? piece.opacity * 0.95 : piece.opacity,
        })).filter(piece => piece.opacity > 0.1)
      );
    };

    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);
  }, [isActive, confetti.length]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: piece.x,
            top: piece.y,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: piece.opacity,
            borderRadius: '2px',
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiCelebration; 