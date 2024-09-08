import { useState, type FC, useEffect } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { AnimatePresence, MotionConfig, motion, useMotionTemplate, useSpring } from 'framer-motion';
import Image from 'next/image';

import type { Media } from '@/types/media';

import Thumbnails from '../Thumbnails/Thumbnails';

interface Props {
  media: Media;
}

const Carousel: FC<Props> = ({ media }) => {
  const [index, setIndex] = useState<number>(0);

  const x = index * 100;
  const xSpring = useSpring(x, { bounce: 0 });
  const xPercentage = useMotionTemplate`-${xSpring}%`;

  useEffect(() => {
    xSpring.set(x);
  }, [x, xSpring]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        if (index > 0) {
          setIndex(index - 1);
        }
      } else if (event.key === 'ArrowRight') {
        if (media.children && index < media.children.data.length - 1) {
          setIndex(index + 1);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [index, media.children]);

  return (
    <MotionConfig transition={{ type: 'spring', bounce: 0 }}>
      <div className="flex h-full flex-col gap-y-6">
        <div className="relative mt-6 w-full max-w-[450px] overflow-hidden">
          <motion.div style={{ x: xPercentage }} className="flex">
            {media.children?.data.map((item, i) => (
              <motion.div
                key={item.id}
                className="relative h-[562.5px] w-[450px] shrink-0"
                animate={{ opacity: i === index ? 1 : 0.4 }}>
                <Image
                  src={item.mediaUrl}
                  alt={`Image ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence initial={false}>
            {index > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: 'none' }}
                whileHover={{ opacity: 1 }}
                className="absolute left-2 top-1/2 -mt-4 flex size-8 items-center justify-center rounded-full bg-white"
                onClick={() => setIndex(index - 1)}>
                <ChevronLeftIcon className="size-6 text-black" />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {media.children && index + 1 < media.children.data.length && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: 'none' }}
                whileHover={{ opacity: 1 }}
                className="absolute right-2 top-1/2 -mt-4 flex size-8 items-center justify-center rounded-full bg-white"
                onClick={() => setIndex(index + 1)}>
                <ChevronRightIcon className="size-6 text-black" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
        {media.children && media.children.data.length && (
          <Thumbnails images={media.children} index={index} setIndex={setIndex} />
        )}
      </div>
    </MotionConfig>
  );
};

export default Carousel;
