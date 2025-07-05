import { useState, useEffect } from "react";
import Header from "./components/Header";
import CompanyInfo from "./components/CompanyInfo";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
=======
import Navbar from "./components/ิNavbar";
>>>>>>> 3178cea5559fdcf69a5634e32b5c781701f9aa62
import Team from "./components/Team";
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
<<<<<<< HEAD
      <Header />
      <Navbar />
      <CompanyInfo />
      <About />
      <Team />
      <Contact />
=======
      {/* Background and interactive effects */}
      <AnimatedBackground />
      <FloatingParticles />
      <InteractiveCursor />
      <ConfettiCelebration trigger={confettiTrigger} />
      
      {/* Global magical effects layer - positioned between sections only */}
      <div className="fixed bottom-0 left-0 w-full h-16 pointer-events-none z-0">
        <MagicalEffects variant="minimal" intensity="low" />
      </div>
      
      {/* Main content */}
      <Header />
      
      {/* Beautiful section dividers between components */}
      <SectionDivider variant="wave" height="lg" />
      
      <Navbar />
      
      <SectionDivider variant="geometric" height="md" />
      
      <ScrollSection effect="slideLeft">
        <CompanyInfo />
      </ScrollSection>
      
      <SectionDivider variant="particles" height="md" />
      
      <ScrollSection effect="scale">
        <About />
      </ScrollSection>
      
      <SectionDivider variant="gradient" height="lg" />
      
      <ScrollSection effect="slideRight">
        <Team />
      </ScrollSection>
      
      <SectionDivider variant="wave" height="md" />
      
      <ScrollSection effect="glow">
        <Contact />
      </ScrollSection>
      
      {/* Final decorative divider */}
      <SectionDivider variant="geometric" height="sm" />
>>>>>>> 3178cea5559fdcf69a5634e32b5c781701f9aa62
    </>
  );
}

export default App;
