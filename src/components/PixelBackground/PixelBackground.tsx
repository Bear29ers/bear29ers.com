/* eslint-disable @typescript-eslint/no-unsafe-assignment */

'use client';

import type { FC } from 'react';

const PixelBackground: FC = () => {
  const getBlocks = () => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const amountOfBlocks = Math.ceil(innerHeight / blockSize);
    return [...Array(amountOfBlocks)].map((_, i) => {
      return <div className="h-[5vw] w-full bg-orange-400" key={`block-${i}`} />;
    });
  };

  return (
    <div className="flex h-screen overflow-hidden">
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
