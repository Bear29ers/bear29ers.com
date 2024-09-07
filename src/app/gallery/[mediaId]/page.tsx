import { Suspense } from 'react';

import Preloader from '@/components/common/Preloader/Preloader';

import GalleryDetailClient from './client';

import type { NextPage } from 'next';

interface Props {
  params: {
    mediaId: string;
  };
}

const GalleryDetail: NextPage<Props> = ({ params }) => {
  // const media = await fetchMedia(params.mediaId, { revalidate: 1800 });
  return (
    <Suspense
      fallback={
        <div className="fixed flex h-screen w-full bg-hitGray bg-noise-pattern flex-center">
          <Preloader />
        </div>
      }>
      <GalleryDetailClient />
    </Suspense>
  );
};

export default GalleryDetail;
