import { headers } from 'next/headers';

import type { MediaData } from '@/types/media';

const fetchMediaList = async (unixtime: number): Promise<MediaData[]> => {
  const baseUrl = headers().get('x-request-base');
  console.log('baseUrl: ', baseUrl);
  console.log('url: ', `${baseUrl}/api/instagram?since=${unixtime}`);
  const res = await fetch(`${baseUrl}/api/instagram?since=${unixtime}`);
  const data = (await res.json()) as MediaData[];

  if (!res.ok) {
    throw new Error('Failed to fetch media data');
  }

  return data;
};

export default fetchMediaList;
