'use react';

import React from 'react';

import Capsule from '../Capsule';
import { TypeAnimation } from 'react-type-animation';

import { Si42 } from 'react-icons/si';
import { LuBrain } from 'react-icons/lu'; // Importing the brain icon

const Welcome = () => {

	return (
		<div className="px-4 sm:ml-4 flex flex-col items-center gap-y-2">
			<div className='flex flex-row items-center gap-x-1 sm:gap-x-2'>
				<img
					src="/hand.png"
					className="w-6 h-6 object-cover"
					alt="Waving hand" // Added alt text for accessibility
				/>
				<TypeAnimation
					sequence={[
					'Bienvenue', 2000,
					'Welcome', 2000,
					'Bienvenido', 2000,
					'ようこそ', 2000,
					'Benvenuto', 2000,
					'欢迎', 2000,
					]}
					// Adjusted text size for responsiveness
					className="text-lg sm:text-xl text-center"
					speed={{type: 'keyStrokeDelayInMs', value: 120}}
					repeat={Infinity}
				/>
			</div>
			{/* Adjusted flex direction and gap for responsiveness */}
			<div className='flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-x-2'>
				<Capsule icon={Si42} title="Etudiant à 42 Paris"/>
				<Capsule icon={LuBrain} title="Auto-Didacte" color="#4987b9"  />
			</div>
		</div>
	);
}

export default Welcome;