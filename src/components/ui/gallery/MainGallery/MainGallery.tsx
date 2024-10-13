import type { FC } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const MotionLink = motion(Link);

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
    <MotionLink
      href={`/gallery/${id}`}
      transition={{
        duration: 0.8,
      }}
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={viewport}
      prefetch
      scroll={false}>
      <Image
        src={imageSrc}
        alt={id}
        className={`w-full ${maxWidth}`}
        sizes="100vw"
        width={width}
        height={(width / 4) * 5}
      />
    </MotionLink>
  );
};

export default MainGallery;
