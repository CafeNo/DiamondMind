import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagicalEffects from "./MagicalEffects";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
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

    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 h-[120%] w-full" data-parallax-layers>
        {/* Layer 1: Aurelia Background (parallax moving layer) with zoom */}
        <img
          data-parallax-layer="1"
          src="/aurelia_bg.png"
          className="absolute w-full h-full top-0 object-cover pointer-events-none z-[1] transform scale-110 hover:scale-115 transition-transform duration-[3s] ease-out"
          alt="Aurelia Background"
        />
        
        {/* Layer 2: Aurelia Logo (parallax moving layer) */}
        <img
          data-parallax-layer="2"
          src="/aurelia_logo.png"
          className="absolute w-full h-auto top-[-10%] left-1/2 transform -translate-x-1/2 object-contain pointer-events-none z-[2]"
          alt="Aurelia Logo"
        />

        {/* Layer 3: Aurelia Characters (on top of logo) */}
        <img 
          data-parallax-layer="3"
          src="/aurelia_charactors.png"
          className="absolute w-3/4 h-auto top-[0%] left-1/2 transform -translate-x-1/2 object-contain pointer-events-none z-[3]"
          alt="Aurelia Characters"
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
        
        {/* Floating sparkles */}
        <div className="absolute bottom-8 left-1/4 w-3 h-3 bg-shirin-blue rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-12 right-1/3 w-2 h-2 bg-shirin-pink rounded-full animate-pulse opacity-70" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-6 left-1/2 w-4 h-4 bg-shirin-purple/60 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-shirin-blue rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.5s' }}></div>
        
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
