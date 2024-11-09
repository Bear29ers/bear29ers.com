'use client';

import { useState, type FC, useEffect } from 'react';

import AnimatedArrowButton from '@/components/common/AnimatedArrowButton/AnimatedArrowButton';
import Footer from '@/components/layout/Footer/Footer';
import Caption from '@/components/ui/gallery/Caption/Caption';
import Carousel from '@/components/ui/gallery/Carousel/Carousel';
import Thumbnails from '@/components/ui/gallery/Thumbnails/Thumbnails';

import { CAPTION_INFO } from '@/constants/gallery';

import type { Media } from '@/types/media';

interface Props {
  media: Media;
}

const GalleryDetailClient: FC<Props> = ({ media }) => {
  const [index, setIndex] = useState<number>(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-y-scroll text-white">
      <div className="flex-col gap-y-10 pt-24 flex-center">
        <div className="absolute left-4 top-4 xsm:left-8 xsm:top-8 lg:left-10">
          <AnimatedArrowButton url="/gallery?intro=skipped" text="Back to Gallery" />
        </div>
        <div className="mt-10 flex flex-col gap-x-8 gap-y-10 px-1.5 sm:px-0 lg:mt-0 lg:flex-row">
          <div className="flex flex-col gap-y-6">
            {/* Carousel */}
            <Carousel
              media={media}
              index={index}
              touchPosition={touchPosition}
              setIndex={setIndex}
              setTouchPosition={setTouchPosition}
            />
            {/* Thumbnails */}
            {media.children && media.children.data.length && (
              <Thumbnails images={media.children} index={index} setIndex={setIndex} />
            )}
          </div>
          <div className="mx-auto w-full max-w-xl lg:max-w-[350px]">
            {/* Caption */}
            <Caption media={media} href={CAPTION_INFO.profileHref} alt={CAPTION_INFO.username} index={index} />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GalleryDetailClient;
