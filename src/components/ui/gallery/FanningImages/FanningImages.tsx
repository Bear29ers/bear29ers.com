import type { Dispatch, FC, SetStateAction } from 'react';

import { motion } from 'framer-motion';

import { zIndexList } from '@/constants/gallery';

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
  setState: Dispatch<SetStateAction<boolean>>;
}

const FanningImages: FC<Props> = ({ mediaList, maxWidth, initialY, styles, setState }) => {
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
