import { convertToCamelCase } from '@/utils/conversion/convertToCamelCase';

import type { Media } from '@/types/media';

import fetchJson from './fetchJson';

const fetchMedia = async (mediaId: string, next?: NextFetchRequestConfig): Promise<Media> => {
  const baseUrl = process.env.GRAPH_API_BASE_URL;
  const accessToken = process.env.GRAPH_API_ACCESS_TOKEN;
  const fields = 'caption,children{media_url},media_type,permalink,like_count,timestamp,username';
  const endpoint = `${baseUrl}/${mediaId}?access_token=${accessToken}&fields=${fields}`;

  try {
    const data = convertToCamelCase(await fetchJson<Media>(endpoint, next));

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching Instagram media data: ', error);
    throw new Error('Failed to fetch media data', { cause: error });
  }
};

export default fetchMedia;
