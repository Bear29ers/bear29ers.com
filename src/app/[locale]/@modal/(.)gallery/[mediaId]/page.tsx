import { Suspense } from 'react';

import Preloader from '@/components/common/Preloader/Preloader';

import fetchMedia from '@/libs/fetchMedia';

import GalleryModalClient from './client';

import type { NextPage } from 'next';

interface Props {
  params: {
    mediaId: string;
  };
}

const GalleryModal: NextPage<Props> = async ({ params }) => {
  const media = await fetchMedia(params.mediaId, { revalidate: 1800 });
  return (
    <Suspense
      fallback={
        <div className="fixed left-0 top-0 z-60 h-screen w-full bg-black/65">
          <div className="relative left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 overflow-auto">
            <div className="rounded-md bg-white p-4">
              <Preloader />
            </div>
          </div>
        </div>
      }>
      <GalleryModalClient media={media} />
    </Suspense>
  );
};

export default GalleryModal;
