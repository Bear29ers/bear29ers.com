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
    <div className="mt-56 grid h-[700px] w-full max-w-[1120px] grid-cols-4 gap-4">
      {colorBlocks.map((block, index) => (
        <div
          key={index}
          className={`flex size-full items-center justify-center overflow-hidden rounded-md
              ${index === 0 ? 'col-span-1 row-span-2' : ''}
              ${index === 2 ? 'col-span-2' : ''}
              ${index === 5 ? 'row-span-2' : ''}
              ${index === 6 ? 'col-span-2' : ''}
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
