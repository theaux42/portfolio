'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Capsule from '../elements/Capsule'; // Import the Capsule component

// ...existing code...
const PersonaCard = () => {
    return (
        <div className="flex flex-col">
            <img
                src="/pfp.png"
                alt="Profile Picture"
                className="rounded-xl w-28 h-28 object-cover"
            />
			<div className="mt-2 flex flex-col justify-center">
				<h2 className="text-xl font-bold">Teo Rabah Babou</h2>
				<p className="text-gray-300 font-light italic ">theaux</p>
			</div>
        </div>
    );
}
// ...existing code...

export default PersonaCard;