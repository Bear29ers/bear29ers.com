import { useState, type FC, useEffect } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { AnimatePresence, MotionConfig, motion, useMotionTemplate, useSpring } from 'framer-motion';

import Thumbnails from '../Thumbnails/Thumbnails';

const images = [
  'https://2024-05-04-recipe-carousel.vercel.app/images/1.jpg',
  'https://2024-05-04-recipe-carousel.vercel.app/images/2.jpg',
  'https://2024-05-04-recipe-carousel.vercel.app/images/3.jpg',
  'https://2024-05-04-recipe-carousel.vercel.app/images/4.jpg',
  'https://2024-05-04-recipe-carousel.vercel.app/images/5.jpg',
  'https://2024-05-04-recipe-carousel.vercel.app/images/6.jpg',
  'https://2024-05-04-recipe-carousel.vercel.app/images/7.jpg',
  'https://2024-05-04-recipe-carousel.vercel.app/images/8.jpg',
  'https://2024-05-04-recipe-carousel.vercel.app/images/9.jpg',
  'https://2024-05-04-recipe-carousel.vercel.app/images/10.jpg',
  'https://2024-05-04-recipe-carousel.vercel.app/images/11.jpg',
  'https://2024-05-04-recipe-carousel.vercel.app/images/12.jpg',
  'https://2024-05-04-recipe-carousel.vercel.app/images/13.jpg',
];

const Carousel: FC = () => {
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
        if (index < images.length - 1) {
          setIndex(index + 1);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [index]);

  return (
    <MotionConfig transition={{ type: 'spring', bounce: 0 }}>
      <div className="flex h-full flex-col justify-between">
        <div className="relative mt-6 overflow-hidden">
          <motion.div style={{ x: xPercentage }} className="flex">
            {images.map((image, i) => (
              <motion.img
                key={image}
                src={image}
                animate={{ opacity: i === index ? 1 : 0.4 }}
                className="aspect-[1.85] h-screen max-h-[70vh] w-full shrink-0 object-cover"
              />
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
            {index + 1 < images.length && (
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
        <Thumbnails images={images} index={index} setIndex={setIndex} />
      </div>
    </MotionConfig>
  );
};

export default Carousel;
