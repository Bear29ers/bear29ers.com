import type { FC } from 'react';

import { motion } from 'framer-motion';

const variants = (x: string, y: number, rotate: number) => ({
  initial: {
    x: '-50%',
    y: 220,
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
    zIndex: string;
    x: string;
    y: number;
    rotate: number;
  };
}

const FanningItem: FC<Props> = ({ imageSrc, layoutId, styles }) => {
  return (
    <motion.img
      layoutId={layoutId}
      variants={variants(styles.x, styles.y, styles.rotate)}
      src={imageSrc}
      className={`absolute bottom-0 left-1/2 w-full max-w-[400px] ${styles.zIndex}`}
    />
  );
};

export default FanningItem;
