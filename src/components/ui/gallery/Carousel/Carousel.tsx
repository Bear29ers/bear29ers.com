import { useEffect } from 'react';
import type { Dispatch, SetStateAction, FC } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { AnimatePresence, MotionConfig, motion, useMotionTemplate, useSpring } from 'framer-motion';
import Image from 'next/image';

import type { Media } from '@/types/media';

interface Props {
  media: Media;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

const Carousel: FC<Props> = ({ media, index, setIndex }) => {
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
  }, [index, media.children, setIndex]);

  return (
    <MotionConfig transition={{ type: 'spring', bounce: 0 }}>
      <div className="flex h-full">
        <div className="relative w-full flex-center sm:w-[600px]">
          <div className="w-full max-w-72 overflow-hidden xs:max-w-80 sm:max-w-[450px]">
            <motion.div style={{ x: xPercentage }} className="flex">
              {media.children?.data.map((item, i) => (
                <motion.div
                  key={`carousel-${item.id}-${i}`}
                  className="relative h-[360px] w-72 shrink-0 xs:h-[400px] xs:w-80 sm:h-[562.5px] sm:w-[450px]"
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
          </div>
          <AnimatePresence initial={false}>
            {index > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: 'none' }}
                whileHover={{ opacity: 1 }}
                className="absolute left-0 top-1/2 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white xs:flex txs:size-10"
                aria-label="chevron-left"
                onClick={() => setIndex(index - 1)}>
                <ChevronLeftIcon className="size-7 text-black txs:size-8" />
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
                className="absolute right-0 top-1/2 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white xs:flex txs:size-10"
                aria-label="chevron-right"
                onClick={() => setIndex(index + 1)}>
                <ChevronRightIcon className="size-7 text-black txs:size-8" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
};

export default Carousel;
