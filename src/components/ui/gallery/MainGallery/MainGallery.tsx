import type { FC } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

const MotionImage = motion(Image);

const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const viewport = {
  once: true,
  margin: '0px 0px -120px',
};

interface Props {
  imageSrc: string;
  id: string;
  width: number;
  maxWidth: string;
}

const MainGallery: FC<Props> = ({ imageSrc, id, width, maxWidth }) => {
  return (
    <MotionImage
      src={imageSrc}
      alt={id}
      className={`w-full cursor-pointer ${maxWidth}`}
      sizes="100vw"
      transition={{
        duration: 0.8,
      }}
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={viewport}
      width={width}
      height={(width / 4) * 5}
    />
  );
};

export default MainGallery;
