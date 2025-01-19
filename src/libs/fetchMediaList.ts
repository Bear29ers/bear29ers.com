import { convertToCamelCase } from '@/utils/conversion/convertToCamelCase';

import type { Media, MediaEdge } from '@/types/media';

import fetchJson from './fetchJson';

const fetchMediaList = async (unixtime: number, next?: NextFetchRequestConfig): Promise<Media[]> => {
  const baseUrl = process.env.GRAPH_API_BASE_URL;
  const instagramId = process.env.GRAPH_API_INSTAGRAM_ID;
  const accessToken = process.env.GRAPH_API_ACCESS_TOKEN;
  const fields = 'media{media_url,media_type}';
  const endpoint = `${baseUrl}/${instagramId}?access_token=${accessToken}&fields=${fields}&since=${unixtime}`;

  try {
    let allData: Media[] = [];
    const data = convertToCamelCase(await fetchJson<{ media: MediaEdge }>(endpoint, next));

    if (data.media && Array.isArray(data.media.data)) {
      allData = allData.concat(data.media.data);
    }

    let nextUrl = data.media.paging?.next || null;

    while (nextUrl) {
      const nextData = convertToCamelCase(await fetchJson<MediaEdge>(`${nextUrl}&since=${unixtime}`, next));

      if (nextData.data && Array.isArray(nextData.data)) {
        allData = allData.concat(nextData.data);
      }

      nextUrl = nextData.paging?.next || null;
    }

    const filteredData = allData.filter((meidaData) => meidaData.mediaType !== 'VIDEO');

    return filteredData;
  } catch (error) {
    console.error('Error fetching Instagram media list data: ', error);
    throw new Error('Failed to fetch media list data', { cause: error });
  }
};

export default fetchMediaList;
