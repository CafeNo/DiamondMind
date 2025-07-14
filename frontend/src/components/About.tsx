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
          <h2 className="text-7xl font-semibold mb-10 bg-gradient-to-r from-shirin-blue to-shirin-purple bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer interactive">
            About Aurelia
          </h2>
          {/* Floating sparkles around the title */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 text-shirin-pink animate-bounce">
              ⭐
            </div>
            <div
              className="absolute top-2 right-1/4 text-shirin-blue animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute -top-2 left-1/2 text-shirin-purple animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              ✨
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-10">
          <p className="text-2xl font-semibold text-gray-800 leading-relaxed">
            Welcome to the magical world of{" "}
            <span className="text-shirin-blue font-bold">Aurelia</span>! 🌟
          </p>

          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            I'm your friendly neighborhood VTuber who loves to bring joy,
            laughter, and a sprinkle of magic to every stream! From gaming
            adventures to cozy chat sessions, there's always something fun
            happening here! 🎮✨
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

        <div className="w-full flex justify-center mb-15">
          <div className="relative group w-full max-w-[800px] h-[562px]">
            <iframe
              className="w-full h-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              src="https://www.youtube.com/embed/VKvEDW98foU"
              frameBorder="0"
              allowFullScreen
              title="Aurelia's Introduction"
            ></iframe>
            {/* Video overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl "></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <InteractiveButton
            variant="magical"
            onClick={() => alert("Thanks for the love! ")}
          >
            Follow Me! ✨
          </InteractiveButton>

          <InteractiveButton
            variant="magical"
            onClick={() => window.open("https://www.youtube.com", "_blank")}
          >
            Watch Streams 🎥
          </InteractiveButton>

          <InteractiveButton variant="magical" onClick={handleSecretClick}>
            Secret Button 🤫
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

        {/* Fun stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-shirin-blue">1000+</div>
            <div className="text-gray-600">Happy Viewers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-shirin-purple">500+</div>
            <div className="text-gray-600">Streams</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-shirin-pink">24/7</div>
            <div className="text-gray-600">Fun Times</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-shirin-blue">∞</div>
            <div className="text-gray-600">Memories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
