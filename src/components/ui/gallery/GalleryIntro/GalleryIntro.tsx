'use client';

import type { Dispatch, FC, SetStateAction } from 'react';
import React from 'react';

import { motion } from 'framer-motion';

import type { Media } from '@/types/media';

const galleryIntroVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 1,
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

interface Props {
  mainVisualImageSrc: string;
  layoutId: string;
  mediaList: Media[];
  setState: Dispatch<SetStateAction<boolean>>;
}

const GalleryIntro: FC<Props> = ({ mainVisualImageSrc, layoutId, mediaList, setState }) => {
  return (
    <motion.div
      className="relative overflow-hidden flex-center"
      variants={galleryIntroVariants}
      onAnimationComplete={() => setState((prevState: boolean): boolean => !prevState)}
      initial="initial"
      animate="animate"
      exit="exit">
      {mediaList.map((media: Media, index: number) => (
        <motion.img
          src={media.mediaUrl}
          alt={media.id}
          className={`w-full max-w-40 txs:max-w-48 msm:max-w-60 ${index !== 0 && 'absolute'}`}
          variants={imageVariants}
          key={media.timestamp}
        />
      ))}
      <motion.img
        layoutId={layoutId}
        src={mainVisualImageSrc}
        alt="main-visual"
        className="absolute w-full max-w-40 txs:max-w-48 msm:max-w-60"
        variants={mainVisualVariants}
      />
    </motion.div>
  );
};

export default GalleryIntro;
