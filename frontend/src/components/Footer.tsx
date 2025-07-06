import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import { PrivacyPolicyContent, TermsOfServiceContent, CookiePolicyContent, GDPRContent } from './PolicyContent';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const getModalContent = () => {
    switch (activeModal) {
      case 'privacy':
        return { title: 'Privacy Policy', content: <PrivacyPolicyContent /> };
      case 'terms':
        return { title: 'Terms of Service', content: <TermsOfServiceContent /> };
      case 'cookies':
        return { title: 'Cookie Policy', content: <CookiePolicyContent /> };
      case 'gdpr':
        return { title: 'GDPR Compliance', content: <GDPRContent /> };
      default:
        return { title: '', content: null };
    }
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'Consulting', href: '#services' },
    ],
    resources: [
      { name: 'Technology Stack', href: '#tech' },
      { name: 'Blog', href: '#blog' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Support', href: '#support' },
    ],
    legal: [
      { name: 'Privacy Policy', action: () => openModal('privacy') },
      { name: 'Terms of Service', action: () => openModal('terms') },
      { name: 'Cookie Policy', action: () => openModal('cookies') },
      { name: 'GDPR', action: () => openModal('gdpr') },
    ],
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'Discord',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.120.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative text-white overflow-hidden" style={{
      background: 'linear-gradient(180deg, #0a0b2e 0%, #162447 30%, #1f1c52 60%, #3b2f6b 100%)'
    }}>
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400"></div>
      
      {/* Starry Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 0.5 + 'px',
              height: Math.random() * 2 + 0.5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Floating Clouds */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`footer-cloud-${i}`}
            className="absolute opacity-5"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              width: Math.random() * 150 + 80 + 'px',
              height: Math.random() * 80 + 40 + 'px',
              background: 'radial-gradient(ellipse, rgba(255,255,255,0.2) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -15, 0],
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-300 to-purple-400 rounded-xl flex items-center justify-center relative overflow-hidden" style={{
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(139, 92, 246, 0.2)'
              }}>
                <span className="text-2xl font-bold text-white">
                  ✨
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-purple-300" style={{
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                }}>
                  AURELIA
                </h3>
                <p className="text-blue-200 text-sm opacity-80">✨ Magical Technology ✨</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed opacity-90" style={{
              textShadow: '0 0 15px rgba(59, 130, 246, 0.3)'
            }}>
              🌟 Weaving dreams into reality with enchanted technology and celestial innovation 🌟
              <br />
              We conjure scalable, mystical applications that illuminate the path to extraordinary experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors duration-300"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-purple-400">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:bg-purple-400 transition-colors duration-300"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-pink-400">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-400 transition-colors duration-300"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-purple-300 mb-2" style={{
                textShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
              }}>
                ✨ Join Our Magical Journey ✨
              </h4>
              <p className="text-blue-100 opacity-90">Receive enchanted updates from our mystical realm of technology</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-gray-400 flex-1 md:w-64"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-blue-200 opacity-80">
                © {currentYear} AURELIA ✨ All magical rights reserved ✨
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={link.action}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm cursor-pointer bg-transparent border-none p-0 underline hover:no-underline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-pink-400/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Policy Modals */}
      {activeModal && (
        <Modal
          isOpen={!!activeModal}
          onClose={closeModal}
          title={getModalContent().title}
        >
          {getModalContent().content}
        </Modal>
      )}
    </footer>
  );
};

export default Footer; 