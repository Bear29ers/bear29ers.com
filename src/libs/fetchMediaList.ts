import { headers } from 'next/headers';

import { convertToCamelCase } from '@/utils/conversion/convertToCamelCase';

import type { MediaEdge, Media, MediaData } from '@/types/media';

import fetchJson from './fetchJson';

const fetchMediaList = async (unixtime: number): Promise<Media> => {
  const baseUrl = headers().get('x-request-base');
  const res = await fetch(`${baseUrl}/api/instagram?since=${unixtime}`);

  if (!res.ok) {
    throw new Error('Failed to fetch media data');
  }

  let allData: MediaData[] = [];
  const data = (await res.json()) as Media;

  if (data.media && Array.isArray(data.media.data)) {
    allData = allData.concat(data.media.data);
  }

  let nextUrl = data.media.paging?.next || null;

  while (nextUrl) {
    // eslint-disable-next-line no-await-in-loop
    const nextData = await fetchJson<MediaEdge>(`${nextUrl}&since=${unixtime}`);

    if (nextData.data && Array.isArray(nextData.data)) {
      allData = allData.concat(nextData.data);
    }

    nextUrl = nextData.paging?.next || null;
  }

  return convertToCamelCase({ media: { data: allData } });
};

export default fetchMediaList;
