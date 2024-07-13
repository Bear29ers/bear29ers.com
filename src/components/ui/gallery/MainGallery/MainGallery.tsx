import type { FC } from 'react';

import { motion } from 'framer-motion';

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
  maxWidth: string;
}

const MainGallery: FC<Props> = ({ imageSrc, id, maxWidth }) => {
  return (
    <motion.img
      src={imageSrc}
      alt={id}
      className={`w-full cursor-pointer ${maxWidth}`}
      transition={{
        duration: 0.8,
      }}
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={viewport}
    />
  );
};

export default MainGallery;
