import { useState } from 'react';
import InteractiveButton from './InteractiveButton';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Aurelia ✨",
      role: "Main VTuber",
      description: "The magical girl who brings joy and laughter to every stream!",
      emoji: "🌟",
      color: "from-pink-400 to-purple-500",
      funFact: "Loves collecting cute plushies and singing karaoke! 🎤"
    },
    {
      id: 2,
      name: "Luna 🌙",
      role: "Gaming Partner",
      description: "The night owl who's always ready for epic gaming adventures!",
      emoji: "🎮",
      color: "from-blue-400 to-cyan-500",
      funFact: "Can speedrun any game while doing a handstand! 🤸‍♀️"
    },
    {
      id: 3,
      name: "Stella ⭐",
      role: "Community Manager",
      description: "The friendly face who keeps our community amazing and organized!",
      emoji: "💖",
      color: "from-yellow-400 to-orange-500",
      funFact: "Has a secret talent for making the perfect cup of tea! ☕"
    },
    {
      id: 4,
      name: "Nova 🚀",
      role: "Tech Support",
      description: "The genius who makes sure everything runs smoothly behind the scenes!",
      emoji: "⚡",
      color: "from-green-400 to-teal-500",
      funFact: "Can fix any computer problem with just a gentle pat! 💻"
    },
    {
      id: 5,
      name: "Mira 🌈",
      role: "Creative Director",
      description: "The artistic soul who brings our wildest dreams to life!",
      emoji: "🎨",
      color: "from-purple-400 to-pink-500",
      funFact: "Paints masterpieces while doing a handstand! 🎭"
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
            Meet the Team! 🎉
          </h2>
          {/* Floating team emojis */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 text-shirin-pink animate-bounce">👥</div>
            <div className="absolute top-2 right-1/4 text-shirin-blue animate-bounce" style={{ animationDelay: '0.5s' }}>💫</div>
            <div className="absolute -top-2 left-1/2 text-shirin-purple animate-bounce" style={{ animationDelay: '1s' }}>🌟</div>
          </div>
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
                selectedMember === member.id ? 'scale-110' : ''
              }`}
              onClick={() => handleMemberClick(member.id)}
            >
              {/* Card background */}
              <div className={`bg-gradient-to-br ${member.color} p-1 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}>
                <div className="bg-white rounded-xl p-6 h-full">
                  {/* Member emoji */}
                  <div className="text-6xl mb-4 animate-bounce">{member.emoji}</div>
                  
                  {/* Member info */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-lg text-gray-600 mb-3 font-semibold">{member.role}</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{member.description}</p>
                  
                  {/* Fun fact (shown on hover/click) */}
                  <div className={`transition-all duration-300 ${
                    selectedMember === member.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                  } overflow-hidden`}>
                    <p className="text-sm text-gray-600 italic">💡 {member.funFact}</p>
                  </div>
                  
                  {/* Hover sparkles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-2 left-2 text-yellow-300 animate-spin text-sm">✨</div>
                    <div className="absolute top-2 right-2 text-pink-300 animate-spin text-sm" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-2 left-2 text-cyan-300 animate-spin text-sm" style={{ animationDelay: '1s' }}>⭐</div>
                    <div className="absolute bottom-2 right-2 text-purple-300 animate-spin text-sm" style={{ animationDelay: '1.5s' }}>🎉</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-shirin-blue">5</div>
            <div className="text-gray-600">Amazing Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-shirin-purple">1000+</div>
            <div className="text-gray-600">Happy Hours</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-shirin-pink">∞</div>
            <div className="text-gray-600">Laughs Shared</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-shirin-blue">💖</div>
            <div className="text-gray-600">Love Given</div>
          </div>
        </div>

        {/* Join the team button */}
        <div className="mt-12">
          <InteractiveButton 
            variant="magical"
            onClick={() => alert("Want to join our team? Send us a message! 💌")}
          >
            Join Our Team! 🚀
          </InteractiveButton>
        </div>
      </div>
    </section>
  );
};

export default Team;
