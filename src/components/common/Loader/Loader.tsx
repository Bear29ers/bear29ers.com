import type { FC } from 'react';

import { motion } from 'framer-motion';

const colors = ['#E55550', '#E09633', '#5EA442', '#2E8FA6', '#5056C9'];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const dotVariants = {
  initial: {},
  animate: {
    height: [30, 80, 30],
    transition: {
      repeat: Infinity,
    },
  },
};

interface Props {
  count?: number;
}

const Loader: FC<Props> = ({ count = 5 }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      style={{ display: 'flex', gap: 12, height: 80, alignItems: 'center' }}>
      {Array(count)
        .fill(null)
        .map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={dotVariants}
              style={{ height: 30, width: 15, backgroundColor: colors[index % colors.length], borderRadius: 20 }}
            />
          );
        })}
    </motion.div>
  );
};

export default Loader;
