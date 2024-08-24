'use client';

import { type FC } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

interface Props {
  isClicked: boolean;
}

const animateTransitionValue = {
  type: 'spring',
  duration: 1.5,
  delay: 1.0,
};

const bounceTransitionValue = {
  type: 'spring',
  stiffness: 400,
  damping: 10,
};

const variants = {
  hover: {
    scale: 1.1,
    transition: bounceTransitionValue,
  },
  tap: {
    scale: 0.9,
    transition: bounceTransitionValue,
  },
};

// TODO: すべてリンクとして使用できるようになったら、個別のリンクとしてコンポーネント化する
const PageNavigation: FC<Props> = ({ isClicked }) => {
  return (
    <>
      <div className="absolute right-0 top-0 flex h-full w-14 flex-col items-center justify-around txs:w-20">
        <MotionLink
          href="/experience"
          className={`z-40 text-xl font-semibold  md:text-2xl ${isClicked ? 'text-dark lg:text-white' : 'text-white'}`}
          variants={variants}
          initial={{ x: 200, rotate: 90 }}
          animate={{ x: 0, rotate: 90, transition: animateTransitionValue }}
          whileHover="hover"
          whileTap="tap">
          Experience
        </MotionLink>
        <motion.div
          className="z-40 text-xl font-semibold text-white line-through"
          initial={{ x: 200, rotate: 90 }}
          animate={{ x: 0, rotate: 90, transition: animateTransitionValue }}>
          Works
        </motion.div>
      </div>
      <div className="absolute left-0 top-0 flex h-full w-14 flex-col items-center justify-around txs:w-20">
        <MotionLink
          href="/about"
          className={`z-40 text-xl font-semibold  md:text-2xl ${isClicked ? 'text-dark' : 'text-white'}`}
          variants={variants}
          initial={{ x: -200, rotate: -90 }}
          animate={{ x: 0, rotate: -90, transition: animateTransitionValue }}
          whileHover="hover"
          whileTap="tap">
          About
        </MotionLink>
        <MotionLink
          href="/gallery"
          className={`z-40 text-xl font-semibold  md:text-2xl ${isClicked ? 'text-white lg:text-dark' : 'text-white'}`}
          variants={variants}
          initial={{ x: -200, rotate: -90 }}
          animate={{ x: 0, rotate: -90, transition: animateTransitionValue }}
          whileHover="hover"
          whileTap="tap">
          Gallery
        </MotionLink>
      </div>
    </>
  );
};

export default PageNavigation;
