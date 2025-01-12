import type { FC } from 'react';

import { motion } from 'framer-motion';

import type { Color } from '@/types/color';

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'spring',
      duration: 0.2,
    },
  },
};

interface Props {
  state: boolean;
  setState: (state: boolean) => void;
  themeColor: Color;
}

const ScrollDown: FC<Props> = ({ state, setState, themeColor }) => {
  const arrowColorVariants = {
    Red: 'group-hover:fill-customRed-500',
    Orange: 'group-hover:fill-customOrange-500',
    Green: 'group-hover:fill-customGreen-500',
    Cyan: 'group-hover:fill-customCyan-500',
    Violet: 'group-hover:fill-customViolet-500',
  };

  return (
    <motion.button
      variants={variants}
      initial="initial"
      animate={state ? 'exit' : 'animate'}
      className="group absolute bottom-0 left-1/2 z-40 h-28 w-full max-w-[212px] -translate-x-1/2 bg-gradient-to-transparent xsm:max-w-[295px] md:h-40 mlg:max-w-[337px]"
      onClick={() => setState(true)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 310 177"
        className={`absolute inset-x-0 top-5 mx-auto w-12 animate-down fill-dark transition-colors duration-400 ${arrowColorVariants[themeColor]}`}>
        <path
          className="fill-inherit"
          fill="none"
          d="M159.875,174.481L306.945,27.41c2.93-2.929,2.93-7.678,0-10.606L292.803,2.661c-1.406-1.407-3.314-2.197-5.303-2.197c-1.989,0-3.896,0.79-5.303,2.197L154.572,130.287L26.946,2.661c-1.406-1.407-3.314-2.197-5.303-2.197c-1.989,0-3.897,0.79-5.303,2.197L2.197,16.804C0.733,18.269,0,20.188,0,22.107s0.732,3.839,2.197,5.303l147.071,147.071C152.197,177.411,156.945,177.411,159.875,174.481L159.875,174.481z"
        />
      </svg>
    </motion.button>
  );
};

export default ScrollDown;
