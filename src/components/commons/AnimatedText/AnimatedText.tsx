'use client';

import type { FC } from 'react';

import { motion } from 'framer-motion';

type Variants = {
  initial: {
    opacity: number;
    y?: number;
  };
  animate: {
    opacity: number;
    y?: number;
    transition: {
      delay?: number;
      duration?: number;
      staggerChildren?: number;
    };
  };
};

type Props = {
  text: string;
  className: string;
};

const quoteVariants: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const wordVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText: FC<Props> = ({ text, className = '' }) => {
  return (
    <div className="flex-center mx-auto w-full overflow-hidden py-2 text-center">
      <motion.h1
        className={`inline-block w-full text-8xl font-bold text-dark ${className}`}
        variants={quoteVariants}
        initial="initial"
        animate="animate">
        {text.split(' ').map((word) => (
          <motion.span key={`${word}`} className="inline-block" variants={wordVariants}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
