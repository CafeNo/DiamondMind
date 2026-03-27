import React, { useState, useEffect, useRef, useCallback } from 'react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'team', label: 'Team', href: '#team' },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [bubbleStyle, setBubbleStyle] = useState({});
  const navRef = useRef<HTMLUListElement>(null);

  const updateBubblePosition = useCallback(() => {
    if (!navRef.current) return;
    
    const activeLink = navRef.current.querySelector(`a[data-nav-item="${activeItem}"]`) as HTMLElement;
    
    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      
      setBubbleStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        transform: 'translateY(-50%)', 
      });
    }
  }, [activeItem]);

  useEffect(() => {
    const sections = NAV_ITEMS.map(item => document.querySelector(item.href)).filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, 
        rootMargin: '-100px 0px -20% 0px' 
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []); 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        updateBubblePosition();
    }, 50);

    const handleResize = () => updateBubblePosition();
    window.addEventListener('resize', handleResize);

    return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', handleResize);
    };
  }, [updateBubblePosition]); 

  const handleNavClick = (itemId: string, href: string) => {
    setActiveItem(itemId); 
    
    const targetElement = document.querySelector(href) as HTMLElement;
    if (targetElement) {
      const navbarHeight = 100; 
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
          <div 
            className="absolute top-1/2 h-12 bg-gradient-to-r from-shirin-blue to-shirin-red rounded-full opacity-30 transition-all duration-500 ease-out z-0"
            style={bubbleStyle}
          ></div>
          
          <div 
            className="absolute top-1/2 h-12 bg-gradient-to-r from-shirin-blue to-shirin-red rounded-full opacity-20 blur-sm transition-all duration-500 ease-out z-0"
            style={{...bubbleStyle, transform: 'translateY(-50%) scale(1.1)'}}
          ></div>
          
          <ul ref={navRef} className="flex space-x-6 text-gray-800 dark:text-shirin-white relative z-10">
          {NAV_ITEMS.map((item) => (
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