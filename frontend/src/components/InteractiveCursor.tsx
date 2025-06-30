import { useEffect, useState } from 'react';

const InteractiveCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: `scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-80 blur-sm"></div>
      </div>

      {/* Cursor trail */}
      <div
        className="fixed pointer-events-none z-40 transition-transform duration-200 ease-out"
        style={{
          left: mousePosition.x - 15,
          top: mousePosition.y - 15,
          transform: `scale(${isHovering ? 1.2 : 0.8})`,
        }}
      >
        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-60 blur-sm"></div>
      </div>

      {/* Sparkle effect */}
      <div
        className="fixed pointer-events-none z-30 transition-transform duration-300 ease-out"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: `scale(${isHovering ? 0.8 : 0.5})`,
        }}
      >
        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-40 blur-sm"></div>
      </div>
    </>
  );
};

export default InteractiveCursor; 