'use client';

import type { FC } from 'react';
import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import Image1 from '~/images/polaroid/image-1.jpg';

const MotionImage = motion(Image);

const loaderVariants = {
  animate: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const imageVariants = {
  initial: { y: '100%' },
  animate: {
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

// const mainVisualVariants = {
//   initial: { opacity: 0, y: 200 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1.6,
//       ease: [0.83, 0, 0.17, 1],
//     },
//   },
// };

interface LoaderProps {
  setLoading: (loading: boolean) => void;
}

const GalleryIntro: FC<LoaderProps> = ({ setLoading }) => {
  return (
    <motion.div
      variants={loaderVariants}
      onAnimationComplete={() => setLoading(false)}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-hidden">
      <MotionImage
        variants={imageVariants}
        src={Image1}
        alt="image-1"
        className="absolute bottom-[-20%] left-[13%] z-10 w-[18%]"
      />
      {/* <motion.div variants={mainVisualVariants} className="z-0 flex-center"> */}
      {/*   <motion.img layoutId="main-visual" src="/images/polaroid/image-0.jpg" alt="Main Image" className="w-3/12" /> */}
      {/* </motion.div> */}
      {/* <MotionImage */}
      {/*   variants={imageVariants} */}
      {/*   src={Image3} */}
      {/*   alt="image-3" */}
      {/*   className="absolute right-[18%] top-[-12%] z-10 w-[12%]" */}
      {/* /> */}
      {/* <MotionImage */}
      {/*   variants={imageVariants} */}
      {/*   src={Image4} */}
      {/*   alt="image-4" */}
      {/*   className="absolute bottom-[-30%] right-[20%] z-10 w-[20%]" */}
      {/* /> */}
      {/* <MotionImage */}
      {/*   variants={imageVariants} */}
      {/*   src={Image5} */}
      {/*   alt="image-5" */}
      {/*   className="absolute left-[18%] top-[-25%] z-10 w-[14%]" */}
      {/* /> */}
    </motion.div>
  );
};

export default GalleryIntro;
