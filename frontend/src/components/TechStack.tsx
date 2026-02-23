import React, { useState, useMemo, useRef } from 'react'; // แก้ไข: เพิ่ม useMemo
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  category: string;
  description: string;
  color: string;
  image: string;
}

const techStack: TechItem[] = [
  {
    name: 'Shirin',
    category: 'VTuber',
    description: 'Modern component-based UI library with concurrent features',
    color: '#61DAFB',
    image: '/85_20250728181816.png'
  },
  {
    name: 'CafeNo',
    category: 'Chief Executive Officer',
    description: 'Type-safe JavaScript superset for enhanced development',
    color: '#3178C6',
    image: '/85_20250728181829.png'
  },
  {
    name: 'Sprite',
    category: 'Chief Executive Officer',
    description: 'Type-safe JavaScript superset for enhanced development',
    color: '#3178C6',
    image: '/85_20250728182452.png'
  },
  {
    name: 'Ohm',
    category: 'Chief Executive Officer',
    description: 'Type-safe JavaScript superset for enhanced development',
    color: '#3178C6',
    image: '/85_20250728182231.png'
  },
  {
    name: '1',
    category: 'Chief Executive Officer',
    description: 'Type-safe JavaScript superset for enhanced development',
    color: '#3178C6',
    image: '/85_20250728181848.png'
  },
  {
    name: 'Praew',
    category: 'Chief Executive Officer',
    description: 'Type-safe JavaScript superset for enhanced development',
    color: '#3178C6',
    image: '/85_20250728181834.png'
  },
  {
    name: '2',
    category: 'Chief Executive Officer',
    description: 'Type-safe JavaScript superset for enhanced development',
    color: '#3178C6',
    image: '/85_20250728181805.png'
  },
]; // แก้ไข: เพิ่มเครื่องหมายปิด ] และ ; ตรงนี้

const TechStack: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    }));
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'VTuber': return 'from-blue-500 to-purple-600';
      case 'Chief Executive Officer': return 'from-green-500 to-teal-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen relative py-20 px-4 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #0a0b2e 0%, #162447 30%, #1f1c52 60%, #3b2f6b 100%)'
    }}>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={`star-${star.id}`}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size + 'px',
              height: star.size + 'px',
              left: star.left,
              top: star.top,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {particles.map((p) => (
          <motion.div
            key={`particle-${p.id}`}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full"
            style={{ left: p.left, top: p.top }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-300 mb-4 py-3 drop-shadow-2xl">
            Technology Architecture
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto opacity-90">
            Explore the technology constellation powering our platform
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                onClick={() => setSelectedTech(selectedTech?.name === tech.name ? null : tech)}
              >
                <div className={`
                  relative p-6 rounded-2xl border backdrop-blur-md
                  cursor-pointer transition-all duration-300 transform
                  ${selectedTech?.name === tech.name ? 'ring-2 ring-cyan-300 shadow-xl scale-[1.02]' : 'hover:scale-105'}
                `}
                style={{
                  background: selectedTech?.name === tech.name 
                    ? `linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.2))` 
                    : 'linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(51, 65, 85, 0.5))',
                  border: '1px solid rgba(100, 116, 139, 0.3)',
                }}>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{tech.name}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${getCategoryColor(tech.category)} text-white`}>
                    {tech.category.toUpperCase()}
                  </div>
                  <p className="text-sm text-gray-300 line-clamp-3">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {selectedTech && (
          <motion.div
            key={selectedTech.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-16 p-8 rounded-3xl border border-gray-700 backdrop-blur-sm bg-slate-900/40"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white">{selectedTech.name}</h3>
                <p className="text-xl text-gray-300">{selectedTech.description}</p>
              </div>
              <div className="flex justify-center lg:justify-end">
                {selectedTech.image && (
                  <img 
                    src={selectedTech.image} 
                    alt={selectedTech.name} 
                    className="w-64 h-auto rounded-2xl shadow-2xl object-cover border border-white/10" 
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TechStack;