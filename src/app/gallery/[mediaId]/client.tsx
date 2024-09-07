'use client';

import type { FC } from 'react';

import Carousel from '@/components/ui/gallery/Carousel/Carousel';

const GalleryDetailClient: FC = () => {
  return (
    <div className="min-h-screen w-full flex-center">
      <Carousel />
    </div>
  );
};

export default GalleryDetailClient;
