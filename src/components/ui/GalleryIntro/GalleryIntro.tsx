'use client';

import type { Dispatch, FC, SetStateAction } from 'react';
import React from 'react';

import { motion } from 'framer-motion';

import type { MediaData } from '@/types/media';

const galleryIntroVariants = {
  initial: {},
  animate: {
    transition: {
      // TODO: 後ほど調整
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
  mediaList: MediaData[];
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
      {mediaList.map((media: MediaData, index: number) => (
        <motion.img
          src={media.mediaUrl}
          alt={media.id}
          className={`w-full max-w-[250px] ${index !== 0 && 'absolute'}`}
          variants={imageVariants}
          key={media.timestamp}
        />
      ))}
      <motion.img
        layoutId={layoutId}
        src={mainVisualImageSrc}
        alt="main-visual"
        className="absolute w-full max-w-[250px]"
        variants={mainVisualVariants}
      />
    </motion.div>
  );
};

export default GalleryIntro;
