'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import Bear from '@/components/Bear/Bear';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

// import { HOME_TEXT } from '@/constants/home';

import type { NextPage } from 'next';

const variants = {
  default: { x: '0%', y: '0%' },
  clicked: { x: '40%', y: '32%' },
};

const Home: NextPage = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <main role="main" className="relative h-screen w-screen bg-iron">
      {/* Bear */}
      <motion.div
        className="flex-center absolute inset-0"
        animate={isClicked ? 'clicked' : 'default'}
        variants={variants}
        transition={{
          duration: 1.0,
          ease: 'easeInOut',
        }}>
        <Bear setIsClicked={setIsClicked} />
      </motion.div>
      {/* Social Icons */}
      <SocialIcons />
      {/* Page Navigation */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-2xl font-semibold line-through">
        Works
      </div>
      <div className="absolute bottom-3 flex w-screen justify-around">
        <Link href="/about" className="text-2xl font-semibold">
          About
        </Link>
        <div className="text-2xl font-semibold line-through">Experience</div>
      </div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-2xl font-semibold line-through">
        Gallery
      </div>
    </main>
  );
};

export default Home;
