import React, { useState, useEffect, useRef, useCallback } from 'react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [bubbleStyle, setBubbleStyle] = useState({});
  const navRef = useRef<HTMLUListElement>(null);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'team', label: 'Team', href: '#team' },
    
  ];

  // 1. ฟังก์ชันคำนวณตำแหน่ง Bubble (ใส่ useCallback เพื่อไม่ให้มันถูกสร้างใหม่มั่วๆ)
  const updateBubblePosition = useCallback(() => {
    if (!navRef.current) return;
    
    // หา element ของ link ที่ active อยู่
    const activeLink = navRef.current.querySelector(`a[data-nav-item="${activeItem}"]`) as HTMLElement;
    
    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      
      setBubbleStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        transform: 'translateY(-50%)', // จัดให้อยู่กึ่งกลางแนวตั้ง
      });
    }
  }, [activeItem]); // ฟังก์ชันนี้จะเปลี่ยนเมื่อ activeItem เปลี่ยนเท่านั้น

  // 2. Observer สำหรับตรวจจับการ Scroll (ปรับปรุงให้ทำงานเสถียรขึ้น)
  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // เห็น section 30% ให้ถือว่า active
        // rootMargin ลบค่าความสูง Navbar ออก (สมมติ Navbar สูง 80-100px) เพื่อให้ Active เป๊ะตอนเลื่อนถึง
        rootMargin: '-100px 0px -20% 0px' 
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navItems]); // dependency

  // 3. Effect สำหรับอัปเดต Bubble เมื่อ activeItem เปลี่ยน หรือหน้าจอ Resize
  useEffect(() => {
    // รอให้ DOM render เสร็จนิดนึงแล้วค่อยคำนวณ
    const timeoutId = setTimeout(() => {
        updateBubblePosition();
    }, 50);

    const handleResize = () => updateBubblePosition();
    window.addEventListener('resize', handleResize);

    return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', handleResize);
    };
  }, [updateBubblePosition]); // ทำงานเมื่อ updateBubblePosition (ซึ่งผูกกับ activeItem) เปลี่ยน

  // 4. Handle Click แบบ Smooth Scroll
  const handleNavClick = (itemId: string, href: string) => {
    setActiveItem(itemId); // set active ทันทีที่กดเพื่อให้ UI ตอบสนองเร็ว
    
    const targetElement = document.querySelector(href) as HTMLElement;
    if (targetElement) {
      const navbarHeight = 100; // ความสูง Navbar ที่จะเผื่อไว้
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className="sticky top-0 w-full bg-gradient-to-r from-shirin-blue/80 to-shirin-red/100 border-gray-200 dark:bg-gray-900/80 opacity-95 backdrop-blur-md shadow-lg"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
      }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-center p-4">
        <div className="relative">
          {/* Animated Bubble Background */}
          <div 
            className="absolute top-1/2 h-12 bg-gradient-to-r from-shirin-blue to-shirin-red rounded-full opacity-30 transition-all duration-500 ease-out z-0"
            style={bubbleStyle}
          ></div>
          
          {/* Glowing bubble effect */}
          <div 
            className="absolute top-1/2 h-12 bg-gradient-to-r from-shirin-blue to-shirin-red rounded-full opacity-20 blur-sm transition-all duration-500 ease-out z-0"
            style={{...bubbleStyle, transform: 'translateY(-50%) scale(1.1)'}}
          ></div>
          
          <ul ref={navRef} className="flex space-x-6 text-gray-800 dark:text-shirin-white relative z-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                data-nav-item={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id, item.href);
                }}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold interactive z-20 block ${
                  activeItem === item.id 
                    ? 'text-white shadow-lg' 
                    : 'hover:text-white hover:shadow-lg'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;