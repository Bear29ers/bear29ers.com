import type { FC } from 'react';

import { motion } from 'motion/react';

interface Props {
  text: string;
}

const Subhead: FC<Props> = ({ text }) => {
  return (
    <motion.h2
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 2, delay: 1.2 }}
      className="text-[min(4.1vw,23px)] font-medium text-lightGray md:text-[29px]">
      {text}
    </motion.h2>
  );
};

export default Subhead;
