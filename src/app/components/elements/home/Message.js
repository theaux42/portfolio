'use client';

import React from 'react';
import Capsule from '../Capsule'; // Import the Capsule component

import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation

import { Si42 } from 'react-icons/si'; // Import an example icon
import { LuBrain } from 'react-icons/lu'; // Import another example icon


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
				'Bienvenido', 2000,
				'ようこそ', 2000,
				'Benvenuto', 2000,
				'欢迎', 2000,
				]}
				className="text-xl text-center"
				speed={{type: 'keyStrokeDelayInMs', value: 120}}
				repeat={Infinity}
			/>
		</div>
		<div className='flex flex-row items-center gap-x-2'>
			<Capsule icon={Si42} title="Etudiant à 42 Paris"/>
			<Capsule icon={LuBrain} title="Auto-Didacte" color="#4987b9"  />
		</div>
		<div className="flex flex-col gap-y-2 text-gray-300 text-center text-sm mt-2 max-w-[400]">
			<p>
				Je suis un étudiant passionné par <strong>l'informatique</strong> et ses secrets depuis mon plus jeune âge.
			</p>
			<p>
				J'ai commencé à apprendre le <strong>développement</strong> il y a maintenant 6 ans, en <strong>autodidacte</strong>, avant de rejoindre l'école 42 pour approfondir mes connaissances.
			</p>
			<p>
				Mon objectif est de toujours <strong>apprendre</strong> et relever de nouveaux <strong>défis</strong>. Je m'efforce de créer des projets à la fois <strong>fonctionnels</strong>, <strong>esthétiques</strong> et <strong>impactants</strong>.
			</p>
			<p>
				<strong>Curieux</strong> et <strong>rigoureux</strong>, j'accorde une grande importance à la qualité du <strong>code</strong>, à l'<strong>expérience utilisateur</strong> et à la <strong>performance</strong> de chaque projet.
			</p>
		</div>
	</div>
  );
}

export default Message;