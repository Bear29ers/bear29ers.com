import { convertToCamelCase } from '@/utils/conversion/convertToCamelCase';

import type { MediaEdge, Media } from '@/types/media';

import fetchJson from './fetchJson';

const fetchMedia = async (unixtime: number): Promise<Media> => {
  const res = await fetch(`/api/instagram?since=${unixtime}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch media data');
  }

  const data = (await res.json()) as Media;

  let nextUrl = data.media.paging.next || null;

  while (nextUrl) {
    // eslint-disable-next-line no-await-in-loop
    const nextData = await fetchJson<MediaEdge>(`${nextUrl}&since=${unixtime}`);
    nextUrl = nextData.paging.next || null;
  }
  return convertToCamelCase(data);
};

export default fetchMedia;
