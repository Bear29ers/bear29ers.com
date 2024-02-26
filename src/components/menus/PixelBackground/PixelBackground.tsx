/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

'use client';

import { type FC } from 'react';

import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
  },
  open: (delays: number[]) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.02 * delays[0] },
  }),
  close: (delays: number[]) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.02 * delays[1] },
  }),
};

interface Props {
  isDisplay: boolean;
}

const PixelBackground: FC<Props> = ({ isDisplay }) => {
  /**
   * Shuffles array in place (Fisher–Yates shuffle).
   * @param {Array} a items An array containing the items.
   */
  const shuffle = (a: []) => {
    let j;
    let x;
    for (let i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = (indexOfColumn: number) => {
    let width: number;
    let height: number;
    if (typeof window !== 'undefined') {
      const { innerWidth, innerHeight } = window;
      width = innerWidth;
      height = innerHeight;
    }

    const blockSize = width * 0.04;
    const amountOfBlocks = Math.ceil(height / blockSize);
    const delays = shuffle([...Array(amountOfBlocks)].map((_, i) => i));
    return delays.map((randomDelay: number, i) => {
      return (
        <motion.div
          className="h-[4vw] w-full bg-pinkSalmon"
          key={`block-${i}`}
          variants={variants}
          initial="initial"
          animate={isDisplay ? 'open' : 'close'}
          custom={[indexOfColumn + randomDelay, 20 - indexOfColumn + randomDelay]}
        />
      );
    });
  };

  return (
    <div className="fixed z-20 flex h-screen overflow-hidden">
      {[...Array(25)].map((_, i) => {
        return (
          <div className="h-full w-[4vw]" key={`col-${i}`}>
            {getBlocks(i)}
          </div>
        );
      })}
    </div>
  );
};

export default PixelBackground;
