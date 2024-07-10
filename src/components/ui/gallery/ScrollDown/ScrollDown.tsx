import type { FC } from 'react';

import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 2,
      duration: 2.5,
    },
  },
};

interface Props {
  setState: (state: boolean) => void;
}

const ScrollDown: FC<Props> = ({ setState }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className="absolute bottom-0 left-1/2 z-40 h-40 w-full max-w-[337px] -translate-x-1/2 bg-gradient-to-transparent">
      <button
        type="button"
        className="absolute inset-x-0 bottom-10 mx-auto w-12 animate-down"
        aria-label="scroll-down"
        onClick={() => setState(true)}>
        <svg width="100%" height="100%" viewBox="0 0 310 177">
          <path
            fill="#000"
            d="M159.875,174.481L306.945,27.41c2.93-2.929,2.93-7.678,0-10.606L292.803,2.661c-1.406-1.407-3.314-2.197-5.303-2.197c-1.989,0-3.896,0.79-5.303,2.197L154.572,130.287L26.946,2.661c-1.406-1.407-3.314-2.197-5.303-2.197c-1.989,0-3.897,0.79-5.303,2.197L2.197,16.804C0.733,18.269,0,20.188,0,22.107s0.732,3.839,2.197,5.303l147.071,147.071C152.197,177.411,156.945,177.411,159.875,174.481L159.875,174.481z"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default ScrollDown;
