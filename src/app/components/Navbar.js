'use client';

import React from 'react'; // Removed useState as it's not used
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
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/teo-babou-2744b7325/' }, // Add actual links
    { name: 'Discord', icon: FaDiscord, href: 'https://discord.com/users/991165627958050910' },
    { name: 'Mail', icon: FaEnvelope, href: 'mailto:theauxperso@gmail.com' },
  ];

  // Adjusted separator height and margin for responsiveness
  const Separator = () => <div className="h-6 w-px bg-white/30 mx-1 sm:mx-2"></div>; // Reverted height, kept smaller margin for mobile

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.5 }}
      // Adjusted width and padding for responsiveness
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 filter drop-shadow-lg w-[calc(100%-2rem)] sm:w-auto max-w-full"
    >
      {/* Adjusted padding for responsiveness */}
      <div className="p-[1px] sm:p-[2px] rounded-full bg-gradient-to-r from-[#666666]/20 to-[#A2A2A2]/20">
        {/* Adjusted padding for responsiveness */}
        {/* Slightly increased base padding */}
        <div className="flex items-center justify-center bg-[#252525]/75 backdrop-blur-md p-1.5 sm:p-2 rounded-full"> {/* Adjusted base padding */}
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => setSelectedPage(item.name)}
              // Adjusted padding and text visibility for responsiveness
              // Slightly increased base padding
              className={`flex items-center space-x-1 sm:space-x-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
                selectedPage === item.name
                  ? 'text-white font-bold'
                  : 'text-white/70 hover:text-white'
              }`}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {/* Adjusted icon size for responsiveness - Slightly increased base size */}
              <item.icon className="h-5 w-5 sm:h-4 sm:w-4" /> {/* Increased base size, kept sm size */}
              {/* Hide text on small screens */}
              <span className="hidden sm:inline">{item.name}</span>
            </motion.button>
          ))}

          <Separator />

          {socialItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              // Adjusted padding for responsiveness - Slightly increased base padding
              className="p-1.5 sm:p-2 text-white/70 hover:text-white rounded-full transition-colors duration-200" /* Adjusted base padding */
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {/* Adjusted icon size for responsiveness - Slightly increased base size */}
              <item.icon className="h-6 w-6 sm:h-5 sm:w-5" /> {/* Increased base size, kept sm size */}
            </motion.a>
          ))}

          <Separator />

          <motion.button
            // Adjusted padding for responsiveness - Slightly increased base padding
            className="p-1.5 sm:p-2 text-white/70 hover:text-white rounded-full transition-colors duration-200" /* Adjusted base padding */
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            {/* Adjusted icon size for responsiveness - Slightly increased base size */}
            <FaFlag className="h-6 w-6 sm:h-5 sm:w-5" /> {/* Placeholder for French Flag - Increased base size, kept sm size */}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
