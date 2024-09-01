import type { FC } from 'react';

import { motion } from 'framer-motion';

import { imageLinkList } from '@/constants/gallery';

const GridGallery: FC = () => {
  return (
    <div className="grid h-[900px] w-full max-w-[1120px] grid-cols-2 gap-4 xs:h-[800px] xsm:grid-cols-3 md:h-[700px] md:grid-cols-4">
      {imageLinkList.map((item, index) => (
        <div
          key={index}
          className={`flex size-full items-center justify-center overflow-hidden rounded-md
            ${index === 0 && 'col-span-2 xs:col-span-1 xs:row-span-2'}
            ${index === 1 && 'xsm:col-span-2 md:col-span-1'}
            ${index === 2 && 'md:col-span-2'}
            ${index === 3 && 'col-span-2 xsm:col-span-1'}
            ${index === 4 && 'col-span-2 xsm:col-span-1'}
            ${index === 5 && 'md:row-span-2'}
            ${index === 6 && 'xs:row-span-2 md:col-span-2 md:row-span-1'}
            ${index === 7 && 'col-span-2 xs:col-span-1 xsm:col-span-2 md:col-span-1'}
          `}>
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
