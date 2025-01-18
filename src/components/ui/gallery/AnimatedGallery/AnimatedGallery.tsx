import type { Dispatch, FC, SetStateAction } from 'react';

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

interface Props {
  layoutId: string;
  imageSrc: string;
  maxWidth: string;
  setState?: Dispatch<SetStateAction<boolean>> | undefined;
}

const AnimatedGallery: FC<Props> = ({ layoutId, imageSrc, maxWidth, setState = undefined }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/gallery/${layoutId}`);
  };

  return (
    <motion.img
      layout
      layoutId={layoutId}
      transition={{ ease: [0.8, 0, 0.2, 1], duration: 1 }}
      src={imageSrc}
      className={`z-auto w-full cursor-pointer ${maxWidth}`}
      onClick={handleClick}
      onLayoutAnimationComplete={() => {
        if (setState) {
          setState((prevState: boolean): boolean => !prevState);
        }
      }}
    />
  );
};

export default AnimatedGallery;
