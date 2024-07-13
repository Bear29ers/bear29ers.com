import type { FC } from 'react';

import { motion } from 'framer-motion';

interface Props {
  text: string;
}

const Subhead: FC<Props> = ({ text }) => {
  return (
    <motion.h2
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 2, delay: 1.2 }}
      className="text-[min(4.5vw,30px)] font-medium text-lightGray">
      {text}
    </motion.h2>
  );
};

export default Subhead;
