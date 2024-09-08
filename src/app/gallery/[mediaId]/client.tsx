'use client';

import type { FC } from 'react';

import Carousel from '@/components/ui/gallery/Carousel/Carousel';

import type { Media } from '@/types/media';

interface Props {
  media: Media;
}

const GalleryDetailClient: FC<Props> = ({ media }) => {
  return (
    <div className="min-h-screen w-full flex-center">
      <Carousel media={media} />
    </div>
  );
};

export default GalleryDetailClient;
