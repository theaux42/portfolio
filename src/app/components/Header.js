'use client';

import React from 'react';

import Capsule from './elements/Capsule';

const Header = () => {
	return (
		// Removed justify-center, parent <main> handles centering. Added text-center to h1.
		<div className="flex flex-col items-center text-white">
			<h1 className="text-6xl font-extralight  text-center">Bienvenue sur mon Portfolio!</h1>
		</div>
	);
}
export default Header;