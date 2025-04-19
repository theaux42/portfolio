'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Separator from '../Separator'; // Changed from named import to default import
import {MdOutlineLocationOn, MdOutlineCake } from "react-icons/md";

const PersonaCard = () => {
    return (
        <div className="flex flex-col w-fit">
            <img
                src="/pfp.png"
                alt="Profile Picture"
                className="rounded-xl w-28 h-28 object-cover"
            />
            <div className="mt-2 flex flex-col justify-center">
                <h2 className="text-xl font-bold">Teo Babou</h2>
                <p className="text-gray-300 font-light italic ">@theaux</p>
            </div>
			<Separator />
            <div className="flex items-center text-gray-300 font-light mb-1">
                <MdOutlineCake className="mr-1.5" />
                <span>20 ans</span>
            </div>
            <div className="flex items-center text-gray-300 font-light">
                <MdOutlineLocationOn className="mr-1.5" />
                <span>Paris, France</span>
            </div>
        </div>
    );
}

export default PersonaCard;