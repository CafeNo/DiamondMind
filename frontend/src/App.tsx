import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import FloatingParticles from "./components/FloatingParticles";
import ConfettiCelebration from "./components/ConfettiCelebration";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollSection from "./components/ScrollSection";
import MagicalEffects from "./components/MagicalEffects";

function App() {
  const [confettiTrigger, setConfettiTrigger] = useState(false);

  // Trigger confetti on page load
  useEffect(() => {
    setTimeout(() => {
      setConfettiTrigger(true);
      setTimeout(() => setConfettiTrigger(false), 100);
    }, 1000);
  }, []);

  return (
    <>
      {/* Background and interactive effects */}
      <AnimatedBackground />
      <FloatingParticles />
      <ConfettiCelebration trigger={confettiTrigger} />
      
      {/* Global magical effects layer - positioned between sections only */}
      <div className="fixed bottom-0 left-0 w-full h-16 pointer-events-none z-0">
        <MagicalEffects variant="minimal" intensity="low" />
      </div>
             
       {/* Main content */}
       <Header />
       
       {/* Sticky Navbar - appears immediately after header */}
       <Navbar />
       
      
      <ScrollSection >
        <About />
      </ScrollSection>  
      
      <ScrollSection >
        <Team />
      </ScrollSection>

      <ScrollSection>
        <TechStack />
      </ScrollSection>
      
      <Footer />
    </>
  );
}

export default App;
