import React, { useState } from 'react';
import InteractiveButton from './InteractiveButton';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Aurelia ",
      role: "Main VTuber",
      description: "The magical girl who brings joy and laughter to every stream!",
      emoji: "🌟",
      funFact: "Loves collecting cute plushies and singing karaoke! "
    },
    {
      id: 2,
      name: "Luna ",
      role: "Gaming Partner",
      description: "The night owl who's always ready for epic gaming adventures!",
      emoji: "🎮",
      funFact: "Can speedrun any game while doing a handstand! "
    },
    {
      id: 3,
      name: "Stella ",
      role: "Community Manager",
      description: "The friendly face who keeps our community amazing and organized!",
      emoji: "💖",
      funFact: "Has a secret talent for making the perfect cup of tea! "
    },
    {
      id: 4,
      name: "Nova ",
      role: "Tech Support",
      description: "The genius who makes sure everything runs smoothly behind the scenes!",
      emoji: "⚡",
      funFact: "Can fix any computer problem with just a gentle pat! "
    },
    {
      id: 5,
      name: "Mira ",
      role: "Creative Director",
      description: "The artistic soul who brings our wildest dreams to life!",
      emoji: "🎨",
      funFact: "Paints masterpieces while doing a handstand! "
    }
  ];

  const handleMemberClick = (id: number) => {
    setSelectedMember(selectedMember === id ? null : id);
    
    // Play fun sound effect
    if (typeof window !== 'undefined' && window.AudioContext) {
      const audioContext = new AudioContext();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    }
  };

  return (
    <section id="team" className="min-h-[50vh] flex flex-col items-center overflow-hidden px-4 py-16 bg-gradient-to-br from-shirin-purple/20 to-shirin-blue/20">
      <div className="text-center max-w-5xl">
        <div className="relative">
          <h2 className="text-7xl font-semibold bg-gradient-to-r from-shirin-blue to-shirin-purple bg-clip-text text-transparent mb-4">
            Meet the Team! 
          </h2>
        </div>
        
        <p className="text-2xl mt-10 w-3/4 mx-auto text-gray-700 leading-relaxed">
          We're a magical team of creators, gamers, and dreamers who love bringing joy to the world! 
          Each member brings their unique sparkle to make every stream special! ✨
        </p>
      </div>

      <div className="mt-12 text-center max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 interactive ${
                selectedMember === member.id
              }`}
              onClick={() => handleMemberClick(member.id)}
            >
              {/* Card background */}
              <div
                className={`
                  bg-gradient-to-br from-shirin-blue/90 via-shirin-purple/80 to-shirin-red/90
                  border-2 border-shirin-blue/30
                  p-1.5 rounded-3xl
                  shadow-xl hover:shadow-2xl
                  transition-all duration-300
                  group-hover:ring-4 group-hover:ring-shirin-pink/20
                  ${selectedMember === member.id ? 'ring-4 ring-shirin-blue/40' : ''}
                `}
                style={{
                  boxShadow: selectedMember === member.id
                    ? '0 8px 32px 0 rgba(161,234,251,0.25), 0 1.5px 8px 0 rgba(255,206,243,0.12)'
                    : undefined,
                  transition: 'box-shadow 0.3s, transform 0.3s',
                }}
              >
                <div className="bg-white rounded-xl p-6 h-full">
                  {/* Member emoji */}
                  <div className="text-6xl mb-4">{member.emoji}</div>
                  
                  {/* Member info */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-lg text-gray-600 mb-3 font-semibold">{member.role}</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{member.description}</p>
                  
                  {/* Fun fact (shown on hover/click) */}
                  <div className={`transition-all duration-300 ${
                    selectedMember === member.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                  } overflow-hidden`}>
                    <p className="text-sm text-gray-600 italic"> {member.funFact}</p>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the team button */}
        <div className="mt-12">
          <InteractiveButton 
            variant="magical"
            onClick={() => alert("Want to join our team? Send us a message! 💌")}
          >
            Join Our Team!
          </InteractiveButton>
        </div>
      </div>
    </section>
  );
};

export default Team;
