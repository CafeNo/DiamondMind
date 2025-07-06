import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-shirin-blue/20 via-shirin-purple/20 to-shirin-pink/20 animate-pulse"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(161, 234, 251, 0.15) 0%, 
              rgba(202, 187, 233, 0.15) 25%, 
              rgba(255, 206, 243, 0.15) 50%, 
              transparent 100%)
          `,
        }}
      />
      
      {/* Static orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-shirin-blue to-shirin-purple rounded-full opacity-10 blur-xl"></div>
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-shirin-purple to-shirin-pink rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-shirin-pink to-shirin-blue rounded-full opacity-10 blur-xl"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(161, 234, 251, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(161, 234, 251, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'slide 20s linear infinite',
        }}></div>
      </div>

      {/* CSS for the slide animation */}
      <style jsx>{`
        @keyframes slide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground; 