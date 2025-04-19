'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import page components
import Home from './pages/Home';
import Competences from './pages/Competences';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

// Map page names to components
const pageComponents = {
  Home,
  Competences,
  Projects,
  Blog,
};

const ContentBox = ({ selectedPage }) => {
  const CurrentPageComponent = pageComponents[selectedPage] || Home; // Default to Home if page not found

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      {/* Outer div for gradient border and shadow */}
      <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#666666]/20 to-[#A2A2A2]/20 filter drop-shadow-xl">
        {/* Inner div for background, blur, padding, and content */}
        <div className="bg-[#252525]/75 backdrop-blur-md p-4 rounded-xl relative overflow-hidden"> {/* Added min width/height */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPage} // Key is now on the animating div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-white" // Apply text color here
            >
              {/* Render the selected page component */}
              <CurrentPageComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
