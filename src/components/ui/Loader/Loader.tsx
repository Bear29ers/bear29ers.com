/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      // ease: [0, 0.55, 0.45, 1],
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

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      type: 'tween',
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

interface ImageBlockProps {
  posX?: number;
  posY?: number;
  variants: any;
  id: string;
  width: number;
}

export const ImageBlock: React.FC<ImageBlockProps> = ({ posX, posY, variants, id, width }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: posY ? `${posY}vh` : undefined,
        left: posX ? `${posX}vw` : undefined,
      }}>
      <Image src={`/images/example/${id}.jpg`} width={width} height={100} alt={id} />
    </motion.div>
  );
};

interface LoaderProps {
  setLoading: (loading: boolean) => void;
}

const Loader: React.FC<LoaderProps> = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner">
        <ImageBlock variants={item} id="image-1" width={400} />
        <motion.div variants={itemMain} className="transition-image">
          <motion.img layoutId="main-image-1" src="/images/example/image-2.jpg" alt="Main Image" className="w-1/2" />
        </motion.div>
        <ImageBlock variants={item} id="image-3" width={300} />
        <ImageBlock variants={item} id="image-4" width={400} />
        <ImageBlock variants={item} id="image-5" width={280} />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
