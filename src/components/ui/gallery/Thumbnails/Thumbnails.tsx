import { type Dispatch, type FC, type SetStateAction } from 'react';

import { motion } from 'motion/react';
import Image from 'next/image';

import type { Children } from '@/types/media';

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
    <div className="flex h-20 justify-center xs:h-28 txs:h-32 xsm:h-40">
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
            className="relative h-full shrink-0"
            key={`thumbnail-${item.id}-${i}`}>
            <Image
              alt={item.mediaUrl}
              src={item.mediaUrl}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Thumbnails;
