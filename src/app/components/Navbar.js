'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaCode, FaProjectDiagram, FaBlog, FaLinkedin, FaDiscord, FaEnvelope, FaFlag } from 'react-icons/fa'; // Using FaFlag as placeholder for French Flag

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const navItems = [
    { name: 'Home', icon: FaHome },
    { name: 'Competences', icon: FaCode },
    { name: 'Projects', icon: FaProjectDiagram },
    { name: 'Blog', icon: FaBlog },
  ];

  const socialItems = [
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' }, // Add actual links
    { name: 'Discord', icon: FaDiscord, href: '#' },
    { name: 'Mail', icon: FaEnvelope, href: '#' },
  ];

  const Separator = () => <div className="h-6 w-px bg-white/30 mx-2"></div>;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.5 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 filter drop-shadow-lg"
    >
      <div className="p-[2px] rounded-full bg-gradient-to-r from-[#666666]/20 to-[#A2A2A2]/20">
        <div className="flex items-center justify-center bg-[#252525]/75 backdrop-blur-md p-2 rounded-full">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => setSelectedPage(item.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedPage === item.name
                  ? 'text-white font-bold'
                  : 'text-white/70 hover:text-white'
              }`}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </motion.button>
          ))}

          <Separator />

          {socialItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/70 hover:text-white rounded-full transition-colors duration-200"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <item.icon className="h-5 w-5" />
            </motion.a>
          ))}

          <Separator />

          <motion.button
            className="p-2 text-white/70 hover:text-white rounded-full transition-colors duration-200"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <FaFlag className="h-5 w-5" /> {/* Placeholder for French Flag */}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
