import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import MagicalEffects from "./MagicalEffects";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    // Always scroll to top on page load/refresh
    window.scrollTo({ top: 0, behavior: 'auto' });

    const trigger = document.querySelector("[data-parallax-layers]") as HTMLElement;
    if (!trigger) return;

    const layers = [
      { layer: 1, yPercent: 5 },
      { layer: 2, yPercent: 85 },
      { layer: 3, yPercent: 40 },
      { layer: 4, yPercent: 10 },
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: "0% 0%",
        end: "100% 0%",
        scrub: 1,
      },
    });

    layers.forEach((l, i) => {
      const el = trigger.querySelector(`[data-parallax-layer="${l.layer}"]`);
      if (el) {
        tl.to(el, { yPercent: l.yPercent, ease: "none" }, i === 0 ? undefined : "<");
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (

    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 h-[120%] w-full overflow-hidden" data-parallax-layers>
        
        {/* Starry Background Effect - Above background layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[2]">
          {/* Twinkling Stars */}
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.8 + 0.2,
                willChange: 'opacity, transform',
                transform: 'translate3d(0, 0, 0)',
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
          

          
          {/* Ethereal Clouds */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`header-cloud-${i}`}
              className="absolute opacity-5"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                width: Math.random() * 200 + 100 + 'px',
                height: Math.random() * 200 + 100 + 'px',
                background: 'radial-gradient(ellipse, rgba(255,255,255,0.2) 0%, transparent 70%)',
                borderRadius: '70%',
                willChange: 'transform, opacity',
                transform: 'translate3d(0, 0, 0)',
              }}
              animate={{
                x: [0, 20, 0],
                y: [0, -10, 0],
                opacity: [0.02, 0.08, 0.02],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
        
        {/* Layer 1: Aurelia Background (parallax moving layer) with zoom */}
        <img
          data-parallax-layer="1"
          src="/aurelia_bg.png"
          className="absolute w-full h-full top-[-10%] object-cover pointer-events-none z-[1] transform scale-110 hover:scale-115 transition-transform duration-[3s] ease-out will-change-transform"
          alt="Aurelia Background"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        />
        
        {/* Layer 2: Aurelia Logo (parallax moving layer) */}
        <img
          data-parallax-layer="2"
          src="/aurelia_logo.png"
          className="absolute w-full h-auto top-[-10%] left-1/2 transform -translate-x-1/2 object-contain pointer-events-none z-[2] will-change-transform"
          alt="Aurelia Logo"
          style={{ transform: 'translate3d(-50%, 0, 0)' }}
        />

        {/* Layer 3: Aurelia Characters (on top of logo) */}
        <img 
          data-parallax-layer="3"
          src="/aurelia_charactors.png"
          className="absolute w-3/4 h-auto top-[10%] left-1/2 transform -translate-x-1/2 object-contain pointer-events-none z-[3] will-change-transform"
          alt="Aurelia Characters"
          style={{ transform: 'translate3d(-50%, 0, 0)' }}
        />
        

        
        {/* Magical Effects Layer - Reduced and positioned away from header */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 z-[5]">
          <MagicalEffects variant="minimal" intensity="low" />
        </div>
      </div>
      
      {/* Enhanced bottom transition effect */}
      <div className="absolute bottom-0 w-full h-32 pointer-events-none">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* Shirin blue overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-shirin-blue/20 via-shirin-purple/10 to-transparent"></div>
        
        {/* Wave effect */}
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="headerWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A1EAFB" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#CABBE9" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFCEF3" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 C300,80 900,0 1200,40 L1200,120 L0,120 Z"
            fill="url(#headerWaveGradient)"
            className="animate-pulse"
          />
        </svg>
      </div>
      
    </section>
  
  );
};

export default Header;
