'use client';

import React from 'react';

import Capsule from '../elements/Capsule'; // Import the Capsule component
import PersonaCard from '../elements/home/PersonaCard';
import Message from '../elements/home/Message'; // Import the Message component

import { FaReact } from 'react-icons/fa'; // Import an example icon
import { MdWork } from 'react-icons/md'; // Import another example icon

const Home = () => {
  return (
    <div className="flex flex-row">
		<PersonaCard />
		<Message />
    </div>
  );
};

export default Home;
