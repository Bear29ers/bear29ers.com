'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import Bear from '@/components/Bear/Bear';
import Intro from '@/components/Intro/Intro';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

import type { NextPage } from 'next';

const MotionLink = motion(Link);

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
      {/* Page Navigation TODO: コンポーネント化したい */}
      {/* TODO: AnimatePresenseでtransitionを実装 */}
      {/* https://maxschmitt.me/posts/nextjs-page-transitions-framer-motion */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-2xl font-semibold text-dark line-through"
        initial={{ x: 200, rotate: 90 }}
        animate={{ x: 0, rotate: 90 }}
        transition={{ type: 'spring', duration: 1.5, delay: 1.0 }}>
        Works
      </motion.div>
      <div className="absolute bottom-3 flex w-screen justify-around">
        <MotionLink
          href="/about"
          className={`text-2xl font-semibold ${isClicked ? 'text-iron' : 'text-dark'}`}
          initial={{ y: 200 }}
          animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1.0 } }}
          whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
          whileTap={{ scale: 0.9, transition: { type: 'spring', stiffness: 400, damping: 10 } }}>
          About
        </MotionLink>
        <motion.div
          className="text-2xl font-semibold text-dark line-through"
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', duration: 1.5, delay: 1.0 }}>
          Experience
        </motion.div>
      </div>
      <motion.div
        className={`absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-2xl font-semibold line-through ${
          isClicked ? 'text-iron' : 'text-dark'
        }`}
        initial={{ x: -200, rotate: -90 }}
        animate={{ x: 0, rotate: -90 }}
        transition={{ type: 'spring', duration: 1.5, delay: 1.0 }}>
        Gallery
      </motion.div>
    </main>
  );
};

export default Home;
