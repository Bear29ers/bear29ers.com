import { type Dispatch, type FC, type SetStateAction } from 'react';

import { motion } from 'framer-motion';

import type { Children } from '@/types/media';
// import Image from 'next/image';

const COLLAPSED_ASPECT_RATIO = 0.4;
const FULL_ASPECT_RATIO = 4 / 5;
const MARGIN = 24;
const GAP = 2;

interface Props {
  images: Children;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

const Thumbnails: FC<Props> = ({ images, index, setIndex }) => {
  return (
    <div className="flex h-40 justify-center">
      <motion.div
        style={{
          aspectRatio: FULL_ASPECT_RATIO,
          gap: `${GAP}%`,
        }}
        className="flex min-w-0 justify-center">
        {images.data.map((item, i) => (
          <motion.button
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? 'active' : 'inactive'}
            variants={{
              active: {
                aspectRatio: FULL_ASPECT_RATIO,
                marginLeft: `${MARGIN}%`,
                marginRight: `${MARGIN}%`,
              },
              inactive: {
                aspectRatio: COLLAPSED_ASPECT_RATIO,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            className="h-full shrink-0"
            key={item.id}>
            <img alt={item.mediaUrl} src={item.mediaUrl} className="h-full object-cover" />
            {/* <Image src={image} alt={image} sizes="100vw" width={400} height={500} className="w-full object-cover" /> */}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Thumbnails;
