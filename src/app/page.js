'use client'; // Required for useState

import Image from "next/image";
import { useState } from 'react';
import Navbar from './components/Navbar';
import ContentBox from './components/ContentBox';


export default function Home() {
  const [selectedPage, setSelectedPage] = useState('Home'); // Default page

  return (
    <div className="min-h-screen w-full relative">
      {/* Background Image */}
      <Image
        src="/sky-bg.png"
        alt="Background"
        fill
        priority
        quality={100}
        style={{ objectFit: "cover", zIndex: -1 }}
      />

      {/* Navbar */}
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

	  {/* Overlay */}
      {/* Content Area */}
      <ContentBox selectedPage={selectedPage} />
    </div>
  );
}
