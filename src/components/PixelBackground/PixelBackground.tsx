/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-param-reassign */

'use client';

import type { FC } from 'react';

import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
  },
  open: (i) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.025 * i },
  }),
  close: (i) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.025 * i },
  }),
};

interface Props {
  menuIsActive: boolean;
}

const PixelBackground: FC<Props> = ({ menuIsActive }) => {
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

  const getBlocks = () => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const amountOfBlocks = Math.ceil(innerHeight / blockSize);
    const delays = shuffle([...Array(amountOfBlocks)].map((_, i) => i));
    return delays.map((randomDelay, i) => {
      return (
        <motion.div
          className="h-[5vw] w-full bg-pinkSalmon"
          key={`block-${i}`}
          variants={variants}
          initial="initial"
          animate={menuIsActive ? 'open' : 'close'}
          custom={randomDelay}
        />
      );
    });
  };

  return (
    <div className="fixed z-20 flex h-screen overflow-hidden">
      {[...Array(20)].map((_, i) => {
        return (
          <div className="h-full w-[5vw]" key={`col-${i}`}>
            {getBlocks()}
          </div>
        );
      })}
    </div>
  );
};

export default PixelBackground;
