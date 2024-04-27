'use client';

import { useRef, type FC, useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  text: string;
}

const AnimatedText: FC<Props> = ({ text }) => {
  const lettersRef = useRef<(HTMLHeadingElement | null)[]>([]);
  console.log('text: ', text.split(''));

  useEffect(() => {
    // sets up mouse movement interaction for the letters.
    const handleMouseMove = (e: MouseEvent) => {
      // handle mouse movement to change font properties based on proximity to the mouse.
      lettersRef.current.forEach((letter: HTMLHeadingElement) => {
        const letterElement = letter;
        if (letterElement) {
          const rect = letter.getBoundingClientRect();
          const dx = e.clientX - (rect.left + rect.width / 2);
          const dy = e.clientY - (rect.top + rect.height / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150; // maximum distance for interaction
          const proximity = Math.max(0, maxDistance - distance) / maxDistance;

          // modify the font properties based on proximity to the mouse.
          letterElement.style.fontWeight = `${300 + proximity * 1000}`;
          letterElement.style.fontVariationSettings = `"wdth" ${20 * proximity + 100}`;
        }
      });
    };

    // add a mousemove event listener to trigger the interaction.
    window.addEventListener('mousemove', handleMouseMove);

    // clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {text.split('').map((letter: string, index: number) => (
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.1 } }}
          exit={{ opacity: 0 }}
          className="inline-block whitespace-nowrap text-[80px] transition-all delay-[-30ms] duration-100"
          ref={(el: HTMLHeadingElement) => {
            lettersRef.current[index] = el;
          }}>
          {letter}
        </motion.h1>
      ))}
    </AnimatePresence>
  );
};

export default AnimatedText;
