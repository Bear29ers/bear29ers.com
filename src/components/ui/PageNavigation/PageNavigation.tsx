import type { FC } from 'react';

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
      <motion.div
        className="absolute -right-4 top-1/2 z-40 -translate-y-1/2 rotate-90 text-xl font-semibold text-white line-through xs:-right-2.5 xxs:right-0 md:text-2xl"
        initial={{ x: 200, rotate: 90 }}
        animate={{ x: 0, rotate: 90, transition: animateTransitionValue }}>
        Works
      </motion.div>
      <div className="absolute top-2 flex w-screen justify-around xxs:bottom-3 lg:bottom-2 lg:top-auto">
        <MotionLink
          href="/about"
          className={`z-40 text-xl font-semibold md:text-2xl ${isClicked ? 'text-white lg:text-dark' : 'text-white'}`}
          initial={{ y: 200 }}
          variants={variants}
          animate={{ y: 0, transition: animateTransitionValue }}
          whileHover="hover"
          whileTap="tap">
          About
        </MotionLink>
        <MotionLink
          href="/experience"
          className="z-40 text-xl font-semibold text-white md:text-2xl"
          variants={variants}
          initial={{ y: 200 }}
          animate={{ y: 0, transition: animateTransitionValue }}
          whileHover="hover"
          whileTap="tap">
          Experience
        </MotionLink>
      </div>
      <MotionLink
        href="/gallery"
        className={`absolute -left-4 top-1/2 z-40 -translate-y-1/2 -rotate-90 text-xl font-semibold xs:-left-2.5 xxs:left-0 md:text-2xl ${isClicked ? 'text-white lg:text-dark' : 'text-white'}`}
        variants={variants}
        initial={{ x: -200, rotate: -90 }}
        animate={{ x: 0, rotate: -90, transition: animateTransitionValue }}
        whileHover="hover"
        whileTap="tap">
        Gallery
      </MotionLink>
    </>
  );
};

export default PageNavigation;
