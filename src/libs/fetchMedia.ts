import { convertToCamelCase } from '@/utils/conversion/convertToCamelCase';

import type { Media } from '@/types/media';

const fetchMedia = async (): Promise<Media> => {
  const res = await fetch('/api/instagram', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch media data');
  }

  const data = (await res.json()) as Media;
  return convertToCamelCase(data);
};

export default fetchMedia;
