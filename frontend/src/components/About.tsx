import React, { useState } from "react";
import InteractiveButton from "./InteractiveButton";

const About = () => {
  const [showSecret, setShowSecret] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleSecretClick = () => {
    setClickCount((prev) => prev + 1);
    if (clickCount >= 4) {
      setShowSecret(true);
      setTimeout(() => setShowSecret(false), 3000);
    }
  };

  return (
    <section
      id="about"
      className="min-h-[50vh] flex flex-col items-center overflow-hidden px-4 py-16 bg-gradient-to-br from-shirin-blue/20 to-shirin-purple/20"
    >
      <div className="text-center w-full max-w-5xl">
        <div className="relative">
          <h2
            className="about-heading text-7xl font-semibold mb-10 bg-gradient-to-r from-shirin-blue/90 to-shirin-purple/90 border-gray-200 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer interactive focus:outline-none focus:ring-4 focus:ring-shirin-blue/60"
            tabIndex={0}
          >
            About Aurelia
            <span className="heading-underline" aria-hidden="true"></span>
          </h2>
          {/* Floating sparkles around the title */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 text-shirin-pink animate-bounce">
              
            </div>
            <div
              className="absolute top-2 right-1/4 text-shirin-blue animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute -top-2 left-1/2 text-shirin-purple animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-10">
          <p className="text-2xl font-semibold text-gray-800 leading-relaxed">
            Welcome to the magical world of{" "}
            <span className="text-shirin-blue font-bold">Aurelia</span>! 
          </p>

          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            I'm your friendly neighborhood VTuber who loves to bring joy,
            laughter, and a sprinkle of magic to every stream! From gaming
            adventures to cozy chat sessions, there's always something fun
            happening here! 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <a
              href="https://www.youtube.com/watch?v=mw5uTGXCato"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 interactive cursor-pointer">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Gaming</h3>
                <p className="text-gray-600">
                  From indie gems to AAA titles, let's explore amazing worlds
                  together!
                </p>
              </div>
            </a>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 interactive">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Community
              </h3>
              <p className="text-gray-600">
                Join our amazing community of friends and make lasting memories!
              </p>
            </div>
            <a
              href="https://www.youtube.com/watch?v=VKvEDW98foU"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 interactive">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Music</h3>
                <p className="text-gray-600">
                  Singing, karaoke, and musical adventures await!
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="w-full flex justify-center mb-16 mt-20">
          <div className="relative group w-full max-w-4xl aspect-[16/9]">
            <iframe
              className="w-full h-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              src="https://www.youtube.com/embed/VKvEDW98foU"
              title="Aurelia's Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>

          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <InteractiveButton
            variant="magical"
            onClick={() => alert("Thanks for the love! ")}
          >
            Follow Me! 
          </InteractiveButton>

          <InteractiveButton
            variant="magical"
            onClick={() => window.open("https://www.youtube.com", "_blank")}
          >
            Watch Streams 
          </InteractiveButton>

          <InteractiveButton variant="magical" onClick={handleSecretClick}>
            Secret Button 
          </InteractiveButton>
        </div>

        {/* Secret message */}
        {showSecret && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="bg-gradient-to-r from-shirin-blue to-shirin-purple text-white p-8 rounded-2xl shadow-2xl animate-bounce">
              <h3 className="text-2xl font-bold mb-2">
                🎉 You found the secret! 🎉
              </h3>
              <p className="text-lg">
                You're officially part of the Aurelia fan club! ✨
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;

<style>{`
  .about-heading {
    position: relative;
    text-shadow: 0 0 16px #A1EAFB, 0 0 32px #FFCEF3, 0 0 8px #CABBE9;
    transition: text-shadow 0.3s, filter 0.3s;
  }
  .about-heading:hover, .about-heading:focus {
    filter: brightness(1.15) drop-shadow(0 0 12px #FFCEF3);
    animation: shimmer 1.2s linear infinite;
  }
  .about-heading .heading-underline {
    display: block;
    position: absolute;
    left: 50%;
    bottom: -0.5rem;
    transform: translateX(-50%) scaleX(0);
    width: 70%;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(90deg, #3A6B8A 0%, #7B3F61 50%, #5A3E7B 100%);
    opacity: 0.85;
    transition: transform 0.4s cubic-bezier(.4,2,.6,1), opacity 0.3s;
    z-index: 1;
    pointer-events: none;
  }
  .about-heading:hover .heading-underline, .about-heading:focus .heading-underline {
    transform: translateX(-50%) scaleX(1);
    opacity: 1;
  }
  @keyframes shimmer {
    0% { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
`}</style>
