'use client';

import React from 'react';

import Capsule from '../elements/Capsule'; // Import the Capsule component
import PersonaCard from '../elements/home/PersonaCard';
import Welcome from '../elements/home/Welcome'; // Import the Welcome component
import Message from '../elements/home/Message'; // Import the Message component

import { FaReact } from 'react-icons/fa'; // Import an example icon
import { MdWork } from 'react-icons/md'; // Import another example icon

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 items-start">
      {/* Welcome + Message grouped on desktop */}
      <div className="order-1 sm:order-2 sm:col-start-2 sm:flex sm:flex-col sm:gap-4">
        <Welcome />
        <div className="hidden sm:block">
          <Message />
        </div>
      </div>
      {/* PersonaCard */}
      <div className="order-2 sm:order-1 sm:col-start-1">
        <PersonaCard />
      </div>
      {/* Mobile-only Message */}
      <div className="order-3 sm:hidden">
        <Message />
      </div>
    </div>
  );
};

export default Home;
