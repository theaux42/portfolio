'use client';

import React from 'react';
import Capsule from '../Capsule'; // Import the Capsule component

import { Si42 } from 'react-icons/si'; // Import an example icon
import { MdWork } from 'react-icons/md'; // Import another example icon

const Message = () => {
  return (
	<div className="ml-4 flex flex-col items-center gap-y-2">
		<div className='flex flex-row items-center gap-x-2'>
			<Capsule icon={Si42} title="Etudiant à 42 Paris"  />
		</div>
	</div>
  );
}

export default Message;