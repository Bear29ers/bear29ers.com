/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import Image1 from '~/images/example/image-1.jpg';

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
      type: 'tween',
      ease: [0.83, 0, 0.17, 1],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      // ease: [0, 0.55, 0.45, 1],
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
      type: 'tween',
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

// TODO: 削除予定
interface ImageBlockProps {
  variants: any;
  id: string;
  width: number;
}

// TODO: これは消す
export const ImageBlock: React.FC<ImageBlockProps> = ({ variants, id, width }) => {
  return (
    <motion.div variants={variants} className={`image-block ${id}`}>
      <Image src={`/images/example/${id}.jpg`} width={width} height={100} alt={id} />
    </motion.div>
  );
};

interface LoaderProps {
  setLoading: (loading: boolean) => void;
}

const Loader: React.FC<LoaderProps> = ({ setLoading }) => {
  return (
    <motion.div
      variants={loaderVariants}
      onAnimationComplete={() => setLoading(false)}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative size-full">
      <MotionImage
        variants={imageVariants}
        src={Image1}
        alt="image-1"
        className="absolute bottom-[-20%] left-[15%] w-2/12"
      />
      <motion.div variants={mainVisualVariants} className="flex-center">
        <motion.img layoutId="main-visual" src="/images/example/image-2.jpg" alt="Main Image" className="w-5/12" />
      </motion.div>
      {/* <ImageBlock variants={imageVariants} id="image-3" width={300} /> */}
      {/* <ImageBlock variants={imageVariants} id="image-4" width={400} /> */}
      {/* <ImageBlock variants={imageVariants} id="image-5" width={280} /> */}
    </motion.div>
  );
};

export default Loader;
