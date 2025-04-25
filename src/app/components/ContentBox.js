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
    // Adjusted padding for responsiveness
    <div className="flex items-center justify-center min-h-screen w-auto min-w-fit p-4 sm:p-0"> {/* Changed w-full to w-auto and added min-w-fit */}
      {/* Outer div for gradient border and shadow */}
      {/* Adjusted max-width and width for responsiveness */}
      <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#666666]/20 to-[#A2A2A2]/20 filter drop-shadow-xl w-auto min-w-fit"> {/* Changed w-full and max-w-* to w-auto and min-w-fit */}
        {/* Inner div for background, blur, padding, and content */}
        {/* Adjusted padding for responsiveness */}
        <div className="bg-[#252525]/75 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-xl relative overflow-hidden"> {/* Responsive padding */}
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
