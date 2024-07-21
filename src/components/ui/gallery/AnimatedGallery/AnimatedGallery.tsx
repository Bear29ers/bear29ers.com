import type { Dispatch, FC, SetStateAction } from 'react';

import { motion } from 'framer-motion';

interface Props {
  layoutId: string;
  imageSrc: string;
  zIndex: string;
  maxWidth: string;
  setState?: Dispatch<SetStateAction<boolean>> | undefined;
}

const AnimatedGallery: FC<Props> = ({ layoutId, imageSrc, zIndex, maxWidth, setState = undefined }) => {
  return (
    <motion.img
      layout
      layoutId={layoutId}
      transition={{ ease: [0.8, 0, 0.2, 1], duration: 1 }}
      src={imageSrc}
      className={`w-full cursor-pointer ${zIndex} ${maxWidth}`}
      onLayoutAnimationComplete={() => {
        if (setState) {
          setState((prevState: boolean): boolean => !prevState);
        }
      }}
    />
  );
};

export default AnimatedGallery;
