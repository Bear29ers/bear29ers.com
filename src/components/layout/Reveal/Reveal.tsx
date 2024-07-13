import type { ComponentPropsWithoutRef, FC } from 'react';

import { motion } from 'framer-motion';

interface Props {
  contents: ComponentPropsWithoutRef<typeof motion.div>;
}

const Reveal: FC<Props> = ({ contents }) => {
  return (
    <motion.div
      transition={{
        duration: 0.5,
      }}
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      {...contents}
    />
  );
};

export default Reveal;
