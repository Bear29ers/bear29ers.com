import type { FC } from 'react';

import { motion } from 'framer-motion';

const colors = ['#E55550', '#F86B62', '#FF7E73', '#FF9E96', '#FFBEB9'];

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
    height: [20, 60, 20],
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
      style={{ display: 'flex', gap: 12, height: 60, alignItems: 'center' }}>
      {Array(count)
        .fill(null)
        .map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={dotVariants}
              style={{ height: 20, width: 10, backgroundColor: colors[index % colors.length], borderRadius: 20 }}
            />
          );
        })}
    </motion.div>
  );
};

export default Loader;
