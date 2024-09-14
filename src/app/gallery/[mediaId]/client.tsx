'use client';

import type { FC } from 'react';

import AnimatedArrowButton from '@/components/common/AnimatedArrowButton/AnimatedArrowButton';
import Carousel from '@/components/ui/gallery/Carousel/Carousel';

import type { Media } from '@/types/media';

interface Props {
  media: Media;
}

const GalleryDetailClient: FC<Props> = ({ media }) => {
  return (
    <div className="relative min-h-screen w-full flex-col gap-y-10 overflow-y-scroll py-24 flex-center">
      <div className="fixed left-4 top-4 xsm:left-8 xsm:top-8 lg:left-10">
        <AnimatedArrowButton text="Back to Gallery" />
      </div>
      <Carousel media={media} />
    </div>
  );
};

export default GalleryDetailClient;
