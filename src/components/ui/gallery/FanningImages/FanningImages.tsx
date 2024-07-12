import type { Dispatch, FC, SetStateAction } from 'react';

import { motion } from 'framer-motion';

const variants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const polaroidItemVariants = (x: string, y: number, rotate: number) => ({
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
  setState: Dispatch<SetStateAction<boolean>>;
}

const FanningImages: FC<Props> = ({ setState }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      onAnimationComplete={() => setState((prevState: boolean): boolean => !prevState)}>
      <motion.img
        layoutId="image-1"
        variants={polaroidItemVariants('-105%', 120, -20)}
        src="/images/polaroid/image-1.jpg"
        className="absolute bottom-0 left-1/2 z-[2] w-full max-w-[400px]"
      />
      <motion.img
        layoutId="image-2"
        variants={polaroidItemVariants('-30%', -90, 5)}
        src="/images/polaroid/image-2.jpg"
        className="absolute bottom-0 left-1/2 z-[1] w-full max-w-[400px]"
      />
      <motion.img
        layoutId="image-3"
        variants={polaroidItemVariants('-90%', 0, -17)}
        src="/images/polaroid/image-3.jpg"
        className="absolute bottom-0 left-1/2 z-[5] w-full max-w-[400px]"
      />
      <motion.img
        layoutId="image-4"
        variants={polaroidItemVariants('-5%', 40, 12)}
        src="/images/polaroid/image-4.jpg"
        className="absolute bottom-0 left-1/2 z-[3] w-full max-w-[400px]"
      />
      <motion.img
        layoutId="image-5"
        variants={polaroidItemVariants('-70%', 20, -10)}
        src="/images/polaroid/image-5.jpg"
        className="absolute bottom-0 left-1/2 z-[6] w-full max-w-[400px]"
      />
      <motion.img
        layoutId="image-6"
        variants={polaroidItemVariants('5%', 160, 15)}
        src="/images/polaroid/image-6.jpg"
        className="absolute bottom-0 left-1/2 z-[4] w-full max-w-[400px]"
      />
    </motion.div>
  );
};

export default FanningImages;
