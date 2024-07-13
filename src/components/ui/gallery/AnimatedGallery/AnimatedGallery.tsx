import type { FC } from 'react';

import { motion } from 'framer-motion';

interface Props {
  layoutId: string;
  imageSrc: string;
  zIndex: string;
  maxWidth: string;
}

const AnimatedGallery: FC<Props> = ({ layoutId, imageSrc, zIndex, maxWidth }) => {
  return (
    <motion.img
      layout
      layoutId={layoutId}
      transition={{ ease: [0.8, 0, 0.2, 1], duration: 1 }}
      src={imageSrc}
      className={`w-full cursor-pointer ${zIndex} ${maxWidth}`}
    />
  );
};

export default AnimatedGallery;
