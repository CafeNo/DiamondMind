import React, { useState } from 'react';

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'magical' | 'outline';
  icon?: React.ReactNode;
}

const InteractiveButton = ({ 
  children,
  onClick,
  className = '', 
  variant = 'primary',
  icon
}: InteractiveButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // 🎨 Base Configurations
  const baseStyles = "group relative inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-white transition-all duration-300 ease-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full overflow-hidden";
  
  // 🌈 Variant Styles (เน้น Gradient แบบเคลื่อนไหวได้)
  const variants = {
    primary: "bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 shadow-lg hover:shadow-indigo-500/50 focus:ring-indigo-500",
    secondary: "bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 shadow-lg hover:shadow-cyan-500/50 focus:ring-cyan-500",
    magical: "bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 shadow-lg hover:shadow-pink-500/50 focus:ring-pink-500 bg-[length:200%_auto] animate-gradient-xy",
    outline: "bg-transparent border-2 border-white/20 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm shadow-sm"
  };

  return (
    <div className="relative inline-block group">
      {/* ✨ 1. Outer Glow (แสงฟุ้งด้านหลังที่จะโผล่มาตอน Hover) */}
      <div 
        className={`absolute -inset-1 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-500 group-hover:duration-200
        ${variant === 'magical' ? 'bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600' : 
          variant === 'secondary' ? 'bg-cyan-400' : 'bg-indigo-600'
        }`}
      ></div>

      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {/* ✨ 2. Shine Effect (แสงวาบวิ่งผ่าน) */}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

        {/* ✨ 3. Magical Sparkles (เฉพาะแบบ Magical) */}
        {variant === 'magical' && isHovered && (
          <>
            <span className="absolute top-0 left-0 w-full h-full">
               {[...Array(6)].map((_, i) => (
                 <span key={i} 
                   className="absolute inline-block animate-ping rounded-full bg-white opacity-75"
                   style={{
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                     animationDuration: `${0.5 + Math.random()}s`,
                     width: `${2 + Math.random() * 3}px`,
                     height: `${2 + Math.random() * 3}px`
                   }}
                 />
               ))}
            </span>
          </>
        )}

        {/* Content Container */}
        <div className="relative flex items-center gap-2 z-10">
          {icon && <span className="transition-transform duration-300 group-hover:-translate-x-1">{icon}</span>}
          <span className="tracking-wide">{children}</span>
          
          {/* Arrow Animation (ถ้าอยากใส่ลูกศรท้าย) */}
          <svg 
            className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default InteractiveButton;