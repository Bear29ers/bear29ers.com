import type { FC } from 'react';

import { motion } from 'framer-motion';

const variants = (initialY: number, x: string, y: number, rotate: number) => ({
  initial: {
    x: '-50%',
    y: initialY,
    rotate: 0,
  },
  animate: {
    x,
    y,
    rotate,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

interface Props {
  imageSrc: string;
  layoutId: string;
  styles: {
    x: string;
    y: number;
    rotate: number;
  };
  zIndex: string;
  maxWidth: string;
  initialY: number;
}

const FanningItem: FC<Props> = ({ imageSrc, layoutId, styles, zIndex, maxWidth, initialY }) => {
  return (
    <motion.img
      layoutId={layoutId}
      variants={variants(initialY, styles.x, styles.y, styles.rotate)}
      src={imageSrc}
      className={`absolute bottom-0 left-1/2 w-full ${maxWidth} ${zIndex}`}
    />
  );
};

export default FanningItem;
