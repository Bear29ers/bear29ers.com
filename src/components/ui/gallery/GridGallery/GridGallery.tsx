import type { FC } from 'react';

import { motion } from 'framer-motion';

import type { ImageInfo } from '@/types/gallery';

interface Props {
  imageInfoList: ImageInfo[];
}

const GridGallery: FC<Props> = ({ imageInfoList }) => {
  return (
    <div className="grid h-[900px] w-full max-w-[1120px] grid-cols-2 gap-4 xs:h-[800px] xsm:grid-cols-3 md:h-[700px] md:grid-cols-4">
      {imageInfoList.map((item, index) => (
        <div
          key={index}
          className={`flex size-full items-center justify-center overflow-hidden rounded-md ${item.class}`}>
          <a href={item.src} target="_blank" className="size-full" rel="noreferrer">
            <motion.img
              src={`/images/gallery/gallery-0${index + 1}.jpg`}
              alt={`grid-gallery-img-0${index + 1}`}
              className="size-full object-cover"
              whileHover={{ scale: 1.1, transition: { type: 'spring' } }}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default GridGallery;
