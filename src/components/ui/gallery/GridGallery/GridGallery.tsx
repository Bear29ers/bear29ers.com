import type { FC } from 'react';

import { motion } from 'framer-motion';

const GridGallery: FC = () => {
  const colorBlocks = [
    { color: 'bg-red-500', area: 'img-1', src: 'https://www.instagram.com/p/BTNoXdplt68/' },
    { color: 'bg-blue-500', area: 'img-2', src: 'https://www.instagram.com/p/BWFraFrFsh-/' },
    { color: 'bg-green-500', area: 'img-3', src: 'https://www.instagram.com/p/BS_NXzYFZbl/' },
    { color: 'bg-yellow-500', area: 'img-4', src: 'https://www.instagram.com/p/BVDcF-dliQR/' },
    { color: 'bg-purple-500', area: 'img-5', src: 'https://www.instagram.com/p/BWJKs3blCJN/' },
    { color: 'bg-pink-500', area: 'img-6', src: 'https://www.instagram.com/p/BUh46wWFV4Y/' },
    { color: 'bg-indigo-500', area: 'img-7', src: 'https://www.instagram.com/p/BXzJw-zFnNO/' },
    { color: 'bg-orange-500', area: 'img-8', src: 'https://www.instagram.com/p/BeiqY7HBYaN/' },
  ];

  return (
    <div className="mt-56 grid h-[700px] w-full max-w-[1120px] grid-cols-4 gap-4">
      {colorBlocks.map((block, index) => (
        <div
          key={index}
          className={`${block.color} flex size-full items-center justify-center overflow-hidden rounded-md
              ${index === 0 ? 'col-span-1 row-span-2' : ''}
              ${index === 2 ? 'col-span-2' : ''}
              ${index === 5 ? 'row-span-2' : ''}
              ${index === 6 ? 'col-span-2' : ''}
              `}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
