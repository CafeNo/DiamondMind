import React, { useState } from 'react';

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'magical';
}

const InteractiveButton = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary' 
}: InteractiveButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    setShowConfetti(true);

    setTimeout(() => {
      setIsPressed(false);
      setShowConfetti(false);
    }, 200);

    onClick?.();
  };

  const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer overflow-hidden";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-700",
    secondary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-700",
    magical: "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl animate-pulse"
  };

  return (
    <div className="relative">
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${className} ${isHovered ? 'animate-bounce' : ''} ${isPressed ? 'animate-ping' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Static sparkle effect */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-2 left-2 text-yellow-300 opacity-70">✨</div>
            <div className="absolute top-2 right-2 text-pink-300 opacity-70">✨</div>
            <div className="absolute bottom-2 left-2 text-cyan-300 opacity-70">✨</div>
            <div className="absolute bottom-2 right-2 text-purple-300 opacity-70">✨</div>
          </div>
        )}
        
        {/* Ripple effect */}
        {isPressed && (
          <div className="absolute inset-0 bg-white opacity-30 rounded-full animate-ping"></div>
        )}
        
        <span className="relative z-10">{children}</span>
      </button>

      {/* Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${0.5 + Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InteractiveButton; 