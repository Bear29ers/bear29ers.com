import type { Dispatch, FC, SetStateAction } from 'react';

import { motion } from 'framer-motion';

import { zIndexList } from '@/constants/gallery';

import type { MediaData } from '@/types/media';

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

const itemStyleList = [
  { zIndex: zIndexList[0]!, x: '-105%', y: 120, rotate: -20 },
  { zIndex: zIndexList[1]!, x: '-30%', y: -90, rotate: 5 },
  { zIndex: zIndexList[2]!, x: '-90%', y: 0, rotate: -17 },
  { zIndex: zIndexList[3]!, x: '-5%', y: 40, rotate: 12 },
  { zIndex: zIndexList[4]!, x: '-70%', y: 20, rotate: -10 },
  { zIndex: zIndexList[5]!, x: '5%', y: 160, rotate: 15 },
];

interface Props {
  mediaList: MediaData[];
  setState: Dispatch<SetStateAction<boolean>>;
}

const FanningImages: FC<Props> = ({ mediaList, setState }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      onAnimationComplete={() => setState((prevState: boolean): boolean => !prevState)}>
      {mediaList.map((media: MediaData, index: number) => (
        <FanningItem
          imageSrc={media.mediaUrl}
          layoutId={media.id}
          styles={itemStyleList[index]!}
          key={media.timestamp}
        />
      ))}
    </motion.div>
  );
};

export default FanningImages;
