import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CompanyInfo from "./components/CompanyInfo";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";  // แก้ตรงนี้
import Team from "./components/Team";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import FloatingParticles from "./components/FloatingParticles";
import InteractiveCursor from "./components/InteractiveCursor";
import ConfettiCelebration from "./components/ConfettiCelebration";
import AnimatedBackground from "./components/AnimatedBackground";
import SectionDivider from "./components/SectionDivider";
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
      {/* <InteractiveCursor /> */}
      <ConfettiCelebration trigger={confettiTrigger} />
      
      {/* Global magical effects layer - positioned between sections only */}
      <div className="fixed bottom-0 left-0 w-full h-16 pointer-events-none z-0">
        <MagicalEffects variant="minimal" intensity="low" />
      </div>
             
       {/* Main content */}
       <Header />
       
       {/* Sticky Navbar - appears immediately after header */}
       <Navbar />
       
       {/* Beautiful section dividers between components */}
       <SectionDivider variant="wave" height="lg" />
      
      
      <ScrollSection effect="scale">
        <About />
      </ScrollSection>  
      
      <ScrollSection effect="slideRight">
        <Team />
      </ScrollSection>
      
      <SectionDivider variant="wave" height="md" />
      
      <ScrollSection effect="glow">
        <TechStack />
      </ScrollSection>
      
      <SectionDivider variant="geometric" height="md" />
      
      <ScrollSection effect="slideUp">
        <Contact />
      </ScrollSection>
      
      <SectionDivider variant="gradient" height="sm" />
      
      <Footer />
    </>
  );
}

export default App;
