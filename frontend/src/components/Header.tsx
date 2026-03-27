import React, { useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import MagicalEffects from "./MagicalEffects";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 2 + 2,
        delay: Math.random() * 2,
      })),
    []
  );

  const clouds = useMemo(
    () =>
      Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        width: Math.random() * 200 + 100,
        height: Math.random() * 200 + 100,
        duration: Math.random() * 20 + 20,
      })),
    []
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const triggerEl = document.querySelector(
      "[data-parallax-layers]"
    ) as HTMLElement;
    if (!triggerEl) return;

    const layers = [
      { layer: 1, yPercent: 5 },
      { layer: 2, yPercent: 85 },
      { layer: 3, yPercent: 40 },
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: "0% 0%",
        end: "100% 0%",
        scrub: 1,
      },
    });

    layers.forEach((l, i) => {
      const el = triggerEl.querySelector(
        `[data-parallax-layer="${l.layer}"]`
      );
      if (el) {
        tl.to(el, { yPercent: l.yPercent, ease: "none" }, i === 0 ? undefined : "<");
      }
    });

    // Refresh ScrollTrigger on resize so parallax doesn't break
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 h-[120%] w-full overflow-hidden"
        data-parallax-layers
      >
        {/* Stars + Clouds layer — above background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[2]">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-white rounded-full"
              style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.left + "%",
                top: star.top + "%",
                opacity: star.opacity,
                willChange: "opacity",
              }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.1, 1] }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                ease: "linear",
                delay: star.delay,
              }}
            />
          ))}

          {clouds.map((cloud) => (
            <motion.div
              key={`header-cloud-${cloud.id}`}
              className="absolute"
              style={{
                left: cloud.left + "%",
                top: cloud.top + "%",
                width: cloud.width + "px",
                height: cloud.height + "px",
                background:
                  "radial-gradient(ellipse, rgba(255,255,255,0.2) 0%, transparent 70%)",
                borderRadius: "70%",
                opacity: 0.05,
                willChange: "transform",
              }}
              animate={{
                x: [0, 20, 0],
                y: [0, -10, 0],
                opacity: [0.02, 0.08, 0.02],
              }}
              transition={{
                duration: cloud.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Layer 1: Background
            No extra transforms — GSAP controls yPercent exclusively */}
        <img
          data-parallax-layer="1"
          src="/aurelia_bg.png"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[1] will-change-transform"
          alt="Aurelia Background"
        />

        {/* Layer 2: Logo — w-full, no translateX needed */}
        <img
          data-parallax-layer="2"
          src="/aurelia_logo.png"
          className="absolute w-full h-auto top-[-10%] left-0 object-contain pointer-events-none z-[2] will-change-transform"
          alt="Aurelia Logo"
        />

        {/* Layer 3: Characters — use left-[12.5%] instead of left-1/2 + translateX(-50%)
            to avoid conflicting with GSAP's transform management */}
        <img
          data-parallax-layer="3"
          src="/aurelia_charactors.png"
          className="absolute w-3/4 h-auto top-[10%] left-[12.5%] object-contain pointer-events-none z-[3] will-change-transform"
          alt="Aurelia Characters"
        />

        {/* Magical effects at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 z-[5]">
          <MagicalEffects variant="minimal" intensity="low" />
        </div>
      </div>

      {/* Bottom fade transition */}
      <div className="absolute bottom-0 w-full h-32 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-shirin-blue/20 via-shirin-purple/10 to-transparent" />
        <svg
          className="absolute bottom-0 w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="headerWaveGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
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
