import { useEffect, type Dispatch, type FC, type SetStateAction } from 'react';

import { motion, useMotionTemplate, useSpring } from 'framer-motion';

const COLLAPSED_ASPECT_RATIO = 0.5;
const FULL_ASPECT_RATIO = 3 / 2;
const MARGIN = 24;
const GAP = 2;

interface Props {
  images: string[];
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

const Thumbnails: FC<Props> = ({ images, index, setIndex }) => {
  const x = index * 100 * (COLLAPSED_ASPECT_RATIO / FULL_ASPECT_RATIO) + MARGIN + index * GAP;
  const xSpring = useSpring(x, { bounce: 0 });
  const xPercentage = useMotionTemplate`-${xSpring}`;

  useEffect(() => {
    xSpring.set(x);
  }, [x, xSpring]);

  return (
    <div className="mb-6 flex h-12 justify-center overflow-hidden">
      <motion.div
        style={{
          aspectRatio: FULL_ASPECT_RATIO,
          gap: `${GAP}%`,
          x: xPercentage,
        }}
        className="flex min-w-0">
        {images.map((image, i) => (
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
            key={image}>
            <img alt="" src={image} className="h-full object-cover" />
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Thumbnails;
