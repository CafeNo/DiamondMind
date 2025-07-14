import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'deployment' | 'tools' | 'Design & UI';
  description: string;
  complexity: number; // 1-5 scale
  color: string;
  connections: string[];
  icon: string;
}

const techStack: TechItem[] = [
  // Frontend Technologies
  {
    name: 'React 18',
    category: 'frontend',
    description: 'Modern component-based UI library with concurrent features',
    complexity: 4,
    color: '#61DAFB',
    connections: ['TypeScript', 'Vite', 'Tailwind CSS'],
    icon: ''
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    description: 'Type-safe JavaScript superset for enhanced development',
    complexity: 4,
    color: '#3178C6',
    connections: ['React 18', 'Vite'],
    icon: ''
  },
  {
    name: 'Vite',
    category: 'tools',
    description: 'Lightning-fast build tool with HMR and modern bundling',
    complexity: 3,
    color: '#646CFF',
    connections: ['React 18', 'TypeScript'],
    icon: ''
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    description: 'Utility-first CSS framework for rapid UI development',
    complexity: 3,
    color: '#06B6D4',
    connections: ['React 18', 'PostCSS'],
    icon: ''
  },
  {
    name: 'GSAP',
    category: 'frontend',
    description: 'Professional-grade animation library for complex animations',
    complexity: 5,
    color: '#88CE02',
    connections: ['React 18'],
    icon: ''
  },
  {
    name: 'Lenis',
    category: 'frontend',
    description: 'Smooth scrolling library for enhanced user experience',
    complexity: 3,
    color: '#FF6B6B',
    connections: ['GSAP'],
    icon: ''
  },
  
  // Backend Technologies
  {
    name: 'Go 1.21',
    category: 'backend',
    description: 'High-performance compiled language for scalable backends',
    complexity: 4,
    color: '#00ADD8',
    connections: ['Chi Router'],
    icon: ''
  },
  {
    name: 'Chi Router',
    category: 'backend',
    description: 'Lightweight HTTP router for Go with middleware support',
    complexity: 3,
    color: '#FF7F00',
    connections: ['Go 1.21'],
    icon: ''
  },
  
  // Tools & Build
  {
    name: 'PostCSS',
    category: 'tools',
    description: 'Tool for transforming CSS with JavaScript plugins',
    complexity: 3,
    color: '#DD3A0A',
    connections: ['Tailwind CSS'],
    icon: ''
  },
  {
    name: 'Heroicons',
    category: 'frontend',
    description: 'Beautiful hand-crafted SVG icons by Tailwind team',
    complexity: 1,
    color: '#8B5CF6',
    connections: ['React 18'],
    icon: ''
  }
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
      case 'frontend': return 'from-blue-500 to-purple-600';
      case 'backend': return 'from-green-500 to-teal-600';
      case 'database': return 'from-yellow-500 to-orange-600';
      case 'deployment': return 'from-red-500 to-pink-600';
      case 'tools': return 'from-gray-500 to-slate-600';
      case 'Design & UI': return 'from-rose-400 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getComplexityIndicator = (complexity: number) => {
    return '●'.repeat(complexity) + '○'.repeat(5 - complexity);
  };

  const renderConnections = () => {
    if (!selectedTech) return null;
    
    return selectedTech.connections.map((connectionName, index) => (
      <motion.div
        key={`${selectedTech.name}-${connectionName}`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <svg className="w-full h-full">
          <defs>
            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={selectedTech.color} stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <motion.path
            d={`M 200 200 Q ${200 + Math.random() * 300} ${200 + Math.random() * 300} ${400 + Math.random() * 200} ${400 + Math.random() * 200}`}
            stroke={`url(#gradient-${index})`}
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          />
        </svg>
      </motion.div>
    ));
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
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`cloud-${i}`}
            className="absolute opacity-10"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              width: Math.random() * 200 + 100 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              background: 'radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -20, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
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
          {renderConnections()}
          
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
                  
                  {/* Complexity Indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">Complexity:</span>
                    <span className="text-sm font-mono" style={{ color: tech.color }}>
                      {getComplexityIndicator(tech.complexity)}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  {/* Connections count */}
                  <div className="mt-4 text-xs text-gray-500">
                    {tech.connections.length} connections
                  </div>
                  
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
                {hoveredTech === tech.name && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: tech.complexity }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{ backgroundColor: tech.color }}
                        initial={{ 
                          opacity: 0,
                          x: Math.random() * 200 - 100,
                          y: Math.random() * 200 - 100,
                          scale: 0
                        }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [0, -50, -100]
                        }}
                        transition={{ 
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      />
                    ))}
                  </div>
                )}
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
                    <span className="text-gray-400">Category:</span>
                    <span className="text-white font-medium">{selectedTech.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Complexity Level:</span>
                    <span className="text-white font-mono">{getComplexityIndicator(selectedTech.complexity)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Connections:</span>
                    <span className="text-white font-medium">{selectedTech.connections.length}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Connected Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTech.connections.map((connection, index) => (
                    <motion.span
                      key={connection}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-600"
                    >
                      {connection}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
            <div className="text-4xl font-bold text-blue-400 mb-2">{techStack.length}</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30">
            <div className="text-4xl font-bold text-green-400 mb-2">
              {new Set(techStack.map(t => t.category)).size}
            </div>
            <div className="text-gray-300">Categories</div>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
            <div className="text-4xl font-bold text-yellow-400 mb-2">
              {techStack.reduce((sum, tech) => sum + tech.complexity, 0)}
            </div>
            <div className="text-gray-300">Total Complexity</div>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <div className="text-4xl font-bold text-purple-400 mb-2">
              {techStack.reduce((sum, tech) => sum + tech.connections.length, 0)}
            </div>
            <div className="text-gray-300">Connections</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack; 