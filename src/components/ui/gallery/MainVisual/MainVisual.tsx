import type { Dispatch, FC, SetStateAction } from 'react';

import { motion } from 'framer-motion';

interface Props {
  imageSrc: string;
  layoutId: string;
  canAnimate: boolean;
  maxWidth: string;
  setState: Dispatch<SetStateAction<boolean>>;
}

const MainVisual: FC<Props> = ({ imageSrc, layoutId, canAnimate, maxWidth, setState }) => {
  return (
    <motion.img
      layout
      layoutId={layoutId}
      transition={{ ease: [0.83, 0, 0.17, 1], duration: 1.4 }}
      animate={canAnimate && { opacity: 0, y: '70%', transition: { duration: 0.6 } }}
      onLayoutAnimationComplete={() => setState((prevState: boolean): boolean => !prevState)}
      src={imageSrc}
      alt="Main Visual"
      className={`absolute inset-x-0 bottom-24 z-10 mx-auto w-full md:bottom-0 ${maxWidth}`}
    />
  );
};

export default MainVisual;
