'use client';

import { useState, type FC } from 'react';

import Modal from '@/components/common/Modal/Modal';
import Caption from '@/components/ui/gallery/Caption/Caption';
import Carousel from '@/components/ui/gallery/Carousel/Carousel';
import Thumbnails from '@/components/ui/gallery/Thumbnails/Thumbnails';

import { CAPTION_INFO } from '@/constants/gallery';

import type { Media } from '@/types/media';

interface Props {
  media: Media;
}

const GalleryModalClient: FC<Props> = ({ media }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="mx-auto h-[80vh] w-fit overflow-y-auto rounded-md bg-darkerGray px-4 py-8 sm:h-[95vh] lg:py-4 xl:h-full">
        <div className="flex-col gap-y-10 flex-center">
          <div className="flex flex-col gap-x-8 gap-y-10 px-1.5 sm:px-0 lg:mt-0 lg:flex-row">
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
            <div className="mx-auto w-full max-w-xl lg:max-w-[450px]">
              {/* Caption */}
              <Caption media={media} href={CAPTION_INFO.profileHref} alt={CAPTION_INFO.username} index={index} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GalleryModalClient;
