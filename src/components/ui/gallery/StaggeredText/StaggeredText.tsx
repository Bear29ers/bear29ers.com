import type { FC } from 'react';

import { motion } from 'framer-motion';

interface Props {
  textList: string[];
}

const StaggeredText: FC<Props> = ({ textList }) => {
  const wrapperVariants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.07,
      },
    },
  };

  const letterVariants = {
    initial: { y: '100%' },
    animate: {
      y: 0,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div variants={wrapperVariants} initial="initial" animate="animate" className="flex gap-x-6 overflow-hidden">
      {textList.map((word: string, i: number) => (
        <div key={`${word}-${i}`} className="flex">
          {[...word].map((letter: string) => (
            <motion.h1
              variants={letterVariants}
              key={`${word}-${letter}`}
              className="text-[min(13vw,96px)] font-bold leading-none text-dark">
              {letter}
            </motion.h1>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default StaggeredText;
