import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [bubbleStyle, setBubbleStyle] = useState({});
  const navRef = useRef(null);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'team', label: 'Team', href: '#team' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Intersection Observer for automatic active item detection
  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href) as HTMLElement).filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveItem(sectionId);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const updateBubblePosition = () => {
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
  };

  // Initial bubble position setup
  useEffect(() => {
    setTimeout(() => updateBubblePosition(), 100); // Small delay to ensure DOM is ready
  }, [updateBubblePosition]);

  // Update bubble position when active item changes
  useEffect(() => {
    updateBubblePosition();
  }, [activeItem, updateBubblePosition]);

  // Update bubble position on window resize
  useEffect(() => {
    const handleResize = () => updateBubblePosition();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateBubblePosition]);



  const handleNavClick = (itemId: string, href: string) => {
    setActiveItem(itemId);
    
    // Improved smooth scroll to target section
    const targetElement = document.querySelector(href) as HTMLElement;
    if (targetElement) {
      const navbarHeight = 100; // Account for navbar height
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    

  };

  return (
    <nav 
      className="sticky top-0 w-full bg-gradient-to-r from-shirin-blue/80 to-shirin-red/100 border-gray-200 dark:bg-gray-900/80 dark:bg-opacity-20 opacity-95 backdrop-blur-md z-[999] shadow-lg"
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
                className={`relative px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold interactive z-20 ${
                  activeItem === item.id 
                    ? 'text-white shadow-lg' 
                    : 'hover:text-white hover:shadow-lg'
                }`}
              >
                {item.label}
                {/* Static sparkle effect on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-30 transition-opacity duration-300">
                  <div className="absolute -top-1 -left-1 text-shirin-pink text-xs"></div>
                  <div className="absolute -top-1 -right-1 text-shirin-blue text-xs"></div>
                </div>
              </a>
            </li>
          ))}
          </ul>
        </div>
        
        {/* Static floating elements */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <div className="text-shirin-blue opacity-50 text-2xl"></div>
        </div>
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <div className="text-shirin-purple opacity-50 text-2xl"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

