'use client';

import { useState, type FC } from 'react';

import AnimatedArrowButton from '@/components/common/AnimatedArrowButton/AnimatedArrowButton';
import Carousel from '@/components/ui/gallery/Carousel/Carousel';
import Thumbnails from '@/components/ui/gallery/Thumbnails/Thumbnails';

import type { Media } from '@/types/media';

interface Props {
  media: Media;
}

const GalleryDetailClient: FC<Props> = ({ media }) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="relative min-h-screen w-full flex-col gap-y-10 overflow-y-scroll py-24 flex-center">
      <div className="fixed left-4 top-4 xsm:left-8 xsm:top-8 lg:left-10">
        <AnimatedArrowButton url="/gallery?intro=skipped" text="Back to Gallery" />
      </div>
      <div className="flex flex-col gap-y-6">
        <Carousel media={media} index={index} setIndex={setIndex} />
        {media.children && media.children.data.length && (
          <Thumbnails images={media.children} index={index} setIndex={setIndex} />
        )}
      </div>
    </div>
  );
};

export default GalleryDetailClient;
