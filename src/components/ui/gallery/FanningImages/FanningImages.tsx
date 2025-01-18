import type { Dispatch, FC, SetStateAction } from 'react';

import { motion } from 'motion/react';

import type { Media } from '@/types/media';

import FanningItem from '../FanningItem/FanningItem';

const variants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

interface Props {
  mediaList: Media[];
  maxWidth: string;
  initialY: number | string;
  styles: {
    x: string;
    y: number;
    rotate: number;
  }[];
  zIndexList: string[];
  setState: Dispatch<SetStateAction<boolean>>;
}

const FanningImages: FC<Props> = ({ mediaList, maxWidth, initialY, styles, zIndexList, setState }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      onAnimationComplete={() => setState((prevState: boolean): boolean => !prevState)}
      className="relative h-screen w-full">
      {mediaList.map((media: Media, index: number) => (
        <FanningItem
          imageSrc={media.mediaUrl}
          layoutId={media.id}
          styles={styles[index]!}
          zIndex={zIndexList[index]!}
          maxWidth={maxWidth}
          initialY={initialY}
          key={media.id}
        />
      ))}
    </motion.div>
  );
};

export default FanningImages;
