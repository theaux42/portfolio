'use client';

import React from 'react';
import Capsule from '../Capsule'; // Import the Capsule component

import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation

import { Si42 } from 'react-icons/si'; // Import an example icon


const Message = () => {
  return (
	<div className="ml-4 flex flex-col items-center gap-y-2 min-w-">
		<div className='flex flex-row items-center gap-x-2'>
			<img
				src="/hand.png"
				className="w-6 h-6 object-cover"
				alt="Waving hand" // Added alt text for accessibility
			/>
			<TypeAnimation
				sequence={[
				'Bienvenue', 2000,
				'Welcome', 2000,
				'ようこそ', 2000,
				'欢迎', 2000,
				'Benvenuto', 2000,
				'Bienvenido', 2000,
				]}
				className="text-xl text-center"
				speed={{type: 'keyStrokeDelayInMs', value: 120}}
				repeat={Infinity}
			/>
		</div>
		<div className='flex flex-row items-center gap-x-2'>
			<Capsule icon={Si42} title="Etudiant à 42 Paris"  />
		</div>
	</div>
  );
}

export default Message;