import type { FC } from 'react';

const GridGallery: FC = () => {
  const colorBlocks = [
    { color: 'bg-red-500', area: 'img-1' },
    { color: 'bg-blue-500', area: 'img-2' },
    { color: 'bg-green-500', area: 'img-3' },
    { color: 'bg-yellow-500', area: 'img-4' },
    { color: 'bg-purple-500', area: 'img-5' },
    { color: 'bg-pink-500', area: 'img-6' },
    { color: 'bg-indigo-500', area: 'img-7' },
    { color: 'bg-orange-500', area: 'img-8' },
  ];

  return (
    <div className="mt-40 grid h-[700px] w-full max-w-[1120px] grid-cols-4 gap-4">
      {colorBlocks.map((block, index) => (
        <div
          key={index}
          className={`${block.color} flex items-center justify-center rounded-md text-3xl font-bold text-white shadow-md
              ${index === 0 ? 'col-span-1 row-span-2' : ''}
              ${index === 2 ? 'col-span-2' : ''}
              ${index === 5 ? 'row-span-2' : ''}
              ${index === 6 ? 'col-span-2' : ''}
              `}>
          {block.area}
        </div>
      ))}
    </div>
  );
};

export default GridGallery;
