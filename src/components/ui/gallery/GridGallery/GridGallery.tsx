import type { FC } from 'react';

import { motion } from 'framer-motion';

const GridGallery: FC = () => {
  const colorBlocks = [
    { area: 'grid-gallery-img-1', src: 'https://www.instagram.com/p/BTNoXdplt68/' },
    { area: 'grid-gallery-img-2', src: 'https://www.instagram.com/p/BWFraFrFsh-/' },
    { area: 'grid-gallery-img-3', src: 'https://www.instagram.com/p/BS_NXzYFZbl/' },
    { area: 'grid-gallery-img-4', src: 'https://www.instagram.com/p/BVDcF-dliQR/' },
    { area: 'grid-gallery-img-5', src: 'https://www.instagram.com/p/BWJKs3blCJN/' },
    { area: 'grid-gallery-img-6', src: 'https://www.instagram.com/p/BUh46wWFV4Y/' },
    { area: 'grid-gallery-img-7', src: 'https://www.instagram.com/p/BXzJw-zFnNO/' },
    { area: 'grid-gallery-img-8', src: 'https://www.instagram.com/p/BeiqY7HBYaN/' },
  ];

  return (
    <div className="grid h-[800px] w-full max-w-[1120px] grid-cols-2 gap-4 xsm:grid-cols-3 md:h-[700px] md:grid-cols-4">
      {colorBlocks.map((block, index) => (
        <div
          key={index}
          className={`flex size-full items-center justify-center overflow-hidden rounded-md
            ${index === 0 && 'col-span-1 row-span-2'}
            ${index === 1 && 'xsm:col-span-2 md:col-span-1'}
            ${index === 2 && 'md:col-span-2'}
            ${index === 3 && 'col-span-2 xsm:col-span-1'}
            ${index === 4 && 'col-span-2 xsm:col-span-1'}
            ${index === 5 && 'md:row-span-2'}
            ${index === 6 && 'row-span-2 md:col-span-2 md:row-span-1'}
            ${index === 7 && 'xsm:col-span-2 md:col-span-1'}
          `}>
          <a href={block.src} target="_blank" className="size-full" rel="noreferrer">
            <motion.img
              src={`/images/gallery/gallery-0${index + 1}.jpg`}
              alt={block.area}
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
