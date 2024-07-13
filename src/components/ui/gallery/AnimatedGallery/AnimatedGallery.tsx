import type { FC } from 'react';

import { motion } from 'framer-motion';

import getRandowmRotationValue from '@/utils/getRandomRotationValue';

interface Props {
  layoutId: string;
  imageSrc: string;
  zIndex: string;
  maxWidth: string;
}

const AnimatedGallery: FC<Props> = ({ layoutId, imageSrc, zIndex, maxWidth }) => {
  const randomRotateValue = getRandowmRotationValue(5);

  return (
    <motion.img
      layout
      layoutId={layoutId}
      transition={{ ease: [0.8, 0, 0.2, 1], duration: 1 }}
      animate={{ rotate: randomRotateValue }}
      src={imageSrc}
      className={`w-full cursor-pointer ${zIndex} ${maxWidth}`}
    />
  );
};

export default AnimatedGallery;
