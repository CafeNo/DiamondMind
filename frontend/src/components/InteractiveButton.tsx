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
  const [isPressed, setIsPressed] = useState(false); // เพิ่มสถานะ isPressed

  const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer overflow-hidden";

  const variantClasses = {
    primary: "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-700",
    secondary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-700",
    magical: "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl"
  };

  return (
    <div className="relative">
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false); // รีเซ็ตสถานะเมื่อเมาส์ออก
        }}
        onMouseDown={() => setIsPressed(true)} // กดปุ่ม
        onMouseUp={() => setIsPressed(false)} // ปล่อยปุ่ม
        onClick={onClick} // เชื่อมกับ onClick ที่ส่งเข้ามา
      >
        {/* ripple effect เมื่อกด */}
        {isPressed && (
          <div className="absolute inset-0 bg-white opacity-30 rounded-full animate-ping"></div>
        )}
        <span className="relative z-10">{children}</span>
      </button>
    </div>
  );
};

export default InteractiveButton;
