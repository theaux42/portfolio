'use client'; // Required for useState

import Image from "next/image";
import { useState } from 'react';
import Navbar from './components/Navbar';
import ContentBox from './components/ContentBox';
import Background from './components/Background';

export default function Home() {
  const [selectedPage, setSelectedPage] = useState('Home'); // Default page

  return (
    <div className="min-h-screen w-full relative">
      <Background />
      {/* Navbar */}
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      {/* Content Area */}
      <ContentBox selectedPage={selectedPage} />
    </div>
  );
}