'use client';

import React from 'react';



const Message = () => {
  return (
	// Adjusted padding and alignment for responsiveness
	<div className="px-4 sm:ml-4 flex flex-col items-center gap-y-2">
		{/* Adjusted text size and gap for responsiveness */}

		{/* Adjusted text size, max-width, and padding for responsiveness */}
		<div className="flex flex-col gap-y-2 text-gray-300 text-center text-xs sm:text-sm mt-2 max-w-xs sm:max-w-md px-2 sm:px-0">
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
			</p> {/* Correction: Ajout de la balise fermante </p> */}
		</div>
	</div>
  );
}

export default Message;