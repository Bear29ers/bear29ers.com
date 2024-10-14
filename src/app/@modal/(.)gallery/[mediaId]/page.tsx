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
        <div className="fixed flex h-screen w-full flex-center">
          <Preloader />
        </div>
      }>
      <GalleryModalClient media={media} />
    </Suspense>
  );
};

export default GalleryModal;
