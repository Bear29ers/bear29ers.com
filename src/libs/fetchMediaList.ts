import { convertToCamelCase } from '@/utils/conversion/convertToCamelCase';

import type { Media, MediaData, MediaEdge } from '@/types/media';

import fetchJson from './fetchJson';

const fetchMediaList = async (unixtime: number): Promise<MediaData[]> => {
  const baseUrl = process.env.GRAPH_API_BASE_URL;
  const instagramId = process.env.GRAPH_API_INSTAGRAM_ID;
  const accessToken = process.env.GRAPH_API_ACCESS_TOKEN;
  const fields = 'media{caption,children{media_url},media_url,media_type,permalink,like_count,timestamp,username}';
  const endpoint = `${baseUrl}/${instagramId}?access_token=${accessToken}&fields=${fields}&since=${unixtime}`;

  try {
    let allData: MediaData[] = [];
    // const data = await fetchData(url);
    const data = convertToCamelCase(await fetchJson<Media>(endpoint, 'no-store'));

    if (data.media && Array.isArray(data.media.data)) {
      allData = allData.concat(data.media.data);
    }

    let nextUrl = data.media.paging?.next || null;

    while (nextUrl) {
      // eslint-disable-next-line no-await-in-loop
      const nextData = convertToCamelCase(await fetchJson<MediaEdge>(`${nextUrl}&since=${unixtime}`, 'no-store'));

      if (nextData.data && Array.isArray(nextData.data)) {
        allData = allData.concat(nextData.data);
      }

      nextUrl = nextData.paging?.next || null;
    }

    const filteredData = allData.filter((meidaData) => meidaData.mediaType !== 'VIDEO');

    return filteredData;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching Instagram media list data: ', error);
    throw new Error('Failed to fetch media list data', { cause: error });
  }
};

export default fetchMediaList;
