'use client';

import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import Image1 from '~/images/example/image-1.jpg';
import Image3 from '~/images/example/image-3.jpg';
import Image4 from '~/images/example/image-4.jpg';
import Image5 from '~/images/example/image-5.jpg';

const MotionImage = motion(Image);

const loaderVariants = {
  animate: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const imageVariants = {
  initial: { opacity: 0, y: 200 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.83, 0, 0.17, 1],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

const mainVisualVariants = {
  initial: { opacity: 0, y: 200 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

interface LoaderProps {
  setLoading: (loading: boolean) => void;
}

const Loader: React.FC<LoaderProps> = ({ setLoading }) => {
  return (
    <motion.div
      variants={loaderVariants}
      // TODO: onAnimationStartで一定秒数後にsetLoadingを更新する？
      onAnimationComplete={() => setLoading(false)}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative size-full">
      <MotionImage
        variants={imageVariants}
        src={Image1}
        alt="image-1"
        className="absolute bottom-[-20%] left-[13%] w-[18%]"
      />
      <motion.div variants={mainVisualVariants} className="z-0 flex-center">
        <motion.img layoutId="main-visual" src="/images/example/image-2.jpg" alt="Main Image" className="w-5/12" />
      </motion.div>
      <MotionImage
        variants={imageVariants}
        src={Image3}
        alt="image-3"
        className="absolute right-[18%] top-[-12%] w-[12%]"
      />
      <MotionImage
        variants={imageVariants}
        src={Image4}
        alt="image-4"
        className="absolute bottom-[-30%] right-[20%] w-[20%]"
      />
      <MotionImage
        variants={imageVariants}
        src={Image5}
        alt="image-5"
        className="absolute left-[18%] top-[-25%] w-[14%]"
      />
    </motion.div>
  );
};

export default Loader;
