import { useState, type FC, useEffect } from 'react';

import { MotionConfig, useMotionTemplate, useSpring } from 'framer-motion';

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
      <div>
        <h1>Carousel</h1>
      </div>
    </MotionConfig>
  );
};

export default Carousel;
