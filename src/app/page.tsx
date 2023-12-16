'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import Bear from '@/components/Bear/Bear';
import Intro from '@/components/Intro/Intro';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

import type { NextPage } from 'next';

const variants = {
  default: { x: '0%', y: '0%' },
  clicked: { x: '40%', y: '32%' },
};

const Home: NextPage = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <main role="main" className="relative h-screen w-screen bg-iron">
      {/* Intro */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">{isClicked && <Intro />}</div>
      {/* Dark background */}
      <div className={`dark-bg absolute inset-y-0 right-1/2 bg-dark ${isClicked ? 'h-full w-1/2' : 'h-0 w-2'}`} />
      {/* Bear */}
      <motion.div
        className="flex-center absolute inset-0"
        animate={isClicked ? 'clicked' : 'default'}
        variants={variants}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}>
        <Bear setIsClicked={setIsClicked} />
      </motion.div>
      {/* Social Icons */}
      <SocialIcons isClicked={isClicked} />
      {/* Page Navigation */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-2xl font-semibold text-dark line-through">
        Works
      </div>
      <div className="absolute bottom-3 flex w-screen justify-around">
        <Link href="/about" className={`text-2xl font-semibold ${isClicked ? 'text-iron' : 'text-dark'}`}>
          About
        </Link>
        <div className="text-2xl font-semibold text-dark line-through">Experience</div>
      </div>
      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-2xl font-semibold line-through ${
          isClicked ? 'text-iron' : 'text-dark'
        }`}>
        Gallery
      </div>
    </main>
  );
};

export default Home;
