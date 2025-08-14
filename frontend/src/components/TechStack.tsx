import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface TechItem {
  name: string;
  category: string;
  description: string;
  color: string;
  icon: string;
}

const techStack: TechItem[] = [
  // Frontend Technologies
  {
    name: 'Shirin',
    category: 'VTuber',
    description: 'Modern component-based UI library with concurrent features',
    color: '#61DAFB',
    icon: 's'
  },
  {
    name: 'CafeNo',
    category: 'Chief Executive Officer',
    description: 'Type-safe JavaScript superset for enhanced development',
    color: '#3178C6',
    icon: ''
  },
];

const TechStack: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    // Animate on mount
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'VTuber': return 'from-blue-500 to-purple-600';
      case 'Chief Executive Officer': return 'from-green-500 to-teal-600';
      case 'database': return 'from-yellow-500 to-orange-600';
      case 'deployment': return 'from-red-500 to-pink-600';
      case 'tools': return 'from-gray-500 to-slate-600';
      case 'Design & UI': return 'from-rose-400 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen relative py-20 px-4 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #0a0b2e 0%, #162447 30%, #1f1c52 60%, #3b2f6b 100%)'
    }}>
      {/* Starry Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.8 + 0.2,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Floating Clouds */}
        
        {/* Magical Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-300 mb-4 py-3 drop-shadow-2xl" style={{
            textShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '0.05em'
          }}>
            Technology Architecture
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto opacity-90" style={{
            textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
          }}>
            Explore the technology constellation powering our platform
            <br />
            Each component is carefully selected for performance, scalability, and exceptional experiences.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="relative" ref={containerRef}> 
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={controls}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                onClick={() => setSelectedTech(selectedTech?.name === tech.name ? null : tech)}
              >
                {/* Card */}
                <div className={`
                  relative p-6 rounded-2xl border backdrop-blur-md
                  cursor-pointer transition-all duration-300 transform
                  hover:scale-105 hover:shadow-2xl
                  ${selectedTech?.name === tech.name ? 'ring-2 ring-cyan-300 shadow-xl' : ''}
                  ${hoveredTech === tech.name ? 'shadow-lg' : ''}
                `}
                style={{
                  background: selectedTech?.name === tech.name 
                    ? `linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.2), ${tech.color}20)` 
                    : 'linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(51, 65, 85, 0.5))',
                  border: hoveredTech === tech.name 
                    ? '1px solid rgba(59, 130, 246, 0.5)' 
                    : '1px solid rgba(100, 116, 139, 0.3)',
                  boxShadow: hoveredTech === tech.name 
                    ? '0 0 30px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)' 
                    : '0 4px 20px rgba(0, 0, 0, 0.3)',
                }}>
                  
                  {/* Glowing effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300
                    bg-gradient-to-r ${getCategoryColor(tech.category)}
                  `} />
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4 text-center">
                    {tech.icon}
                  </div>
                  
                  {/* Tech Name */}
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    {tech.name}
                  </h3>
                  
                  {/* Category Badge */}
                  <div className={`
                    inline-block px-3 py-1 rounded-full text-xs font-medium mb-3
                    bg-gradient-to-r ${getCategoryColor(tech.category)} text-white
                  `}>
                    {tech.category.toUpperCase()}
                  </div>
                  

                  
                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  
                  {/* Hover pulse effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ scale: 1 }}
                    animate={hoveredTech === tech.name ? { scale: [1, 1.02, 1] } : {}}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: hoveredTech === tech.name 
                        ? `radial-gradient(circle at center, ${tech.color}20, transparent)` 
                        : 'transparent'
                    }}
                  />
                </div>
                
                {/* Floating complexity particles */}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Selected Tech Details */}
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-8 rounded-3xl border border-gray-700 backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${selectedTech.color}20, ${selectedTech.color}05)`
            }}
          >
            <div className="flex items-center mb-6">
              <span className="text-6xl mr-4">{selectedTech.icon}</span>
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">{selectedTech.name}</h3>
                <p className="text-xl text-gray-300">{selectedTech.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Technical Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                  </div>
                </div>
              </div>   
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TechStack; 