import { Suspense } from 'react';

import Preloader from '@/components/common/Preloader/Preloader';

import fetchMediaList from '@/libs/fetchMediaList';

import GalleryClient from './client';

import type { NextPage } from 'next';

export const revalidate = 3600;

const Gallery: NextPage = async () => {
  const DATE = new Date('2024-05-01T12:00:00Z');
  const unixtime = Math.floor(DATE.getTime() / 1000);
  const mediaList = await fetchMediaList(unixtime);

  return (
    <Suspense
      fallback={
        <div className="fixed flex h-screen w-full bg-hitGray bg-noise-pattern flex-center">
          <Preloader />
        </div>
      }>
      <GalleryClient mediaList={mediaList} />
    </Suspense>
  );
};

export default Gallery;
