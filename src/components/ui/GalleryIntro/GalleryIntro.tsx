'use client';

import type { FC } from 'react';
import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import Image1 from '~/images/polaroid/image-1.jpg';
import Image2 from '~/images/polaroid/image-2.jpg';
import Image3 from '~/images/polaroid/image-3.jpg';
import Image4 from '~/images/polaroid/image-4.jpg';
import Image5 from '~/images/polaroid/image-5.jpg';
import Image6 from '~/images/polaroid/image-6.jpg';

const MotionImage = motion(Image);

const galleryIntroVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
  exit: {},
};

const imageVariants = {
  initial: { y: '100%' },
  animate: {
    y: 0,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 1.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const mainVisualVariants = {
  initial: { y: '100%' },
  animate: {
    y: 0,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 1.3,
    },
  },
};

interface LoaderProps {
  setLoading: (loading: boolean) => void;
}

const GalleryIntro: FC<LoaderProps> = ({ setLoading }) => {
  return (
    <motion.div
      className="relative overflow-hidden flex-center"
      variants={galleryIntroVariants}
      onAnimationComplete={() => setLoading(false)}
      initial="initial"
      animate="animate"
      exit="exit">
      <MotionImage src={Image1} alt="image-1" className="w-1/2" variants={imageVariants} />
      <MotionImage src={Image2} alt="image-2" className="absolute w-1/2" variants={imageVariants} />
      <MotionImage src={Image3} alt="image-3" className="absolute w-1/2" variants={imageVariants} />
      <MotionImage src={Image4} alt="image-4" className="absolute w-1/2" variants={imageVariants} />
      <MotionImage src={Image5} alt="image-5" className="absolute w-1/2" variants={imageVariants} />
      <MotionImage src={Image6} alt="image-6" className="absolute w-1/2" variants={imageVariants} />
      <motion.img
        layoutId="main-visual"
        src="/images/polaroid/image-0.jpg"
        alt="main-visual"
        className="absolute w-1/2"
        variants={mainVisualVariants}
      />
    </motion.div>
  );
};

export default GalleryIntro;
