import { Suspense } from 'react';

import Preloader from '@/components/common/Preloader/Preloader';

import fetchMediaList from '@/libs/fetchMediaList';

import GalleryClient from './client';

import type { NextPage } from 'next';

const Gallery: NextPage = async () => {
  const DATE = new Date('2024-05-01T12:00:00Z');
  const unixtime = Math.floor(DATE.getTime() / 1000);
  const mediaList = await fetchMediaList(unixtime, { revalidate: 1800 });
  const pickedMediaList = mediaList.splice(0, 6);
  const mediaData = mediaList[0]!;

  return (
    <Suspense
      fallback={
        <div className="fixed flex h-screen w-full bg-hitGray bg-noise-pattern flex-center">
          <Preloader />
        </div>
      }>
      <GalleryClient mediaList={mediaList} animatingMediaList={pickedMediaList} mainVisual={mediaData} />
    </Suspense>
  );
};

export default Gallery;
