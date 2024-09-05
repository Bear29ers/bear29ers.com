import { NextResponse } from 'next/server';

import fetchJson from '@/libs/fetchJson';

import { convertToCamelCase } from '@/utils/conversion/convertToCamelCase';

import type { Media, MediaData, MediaEdge } from '@/types/media';

import type { NextRequest } from 'next/server';

export const revalidate = 3600;

export const GET = async (request: NextRequest) => {
  const baseUrl = process.env.GRAPH_API_BASE_URL;
  const instagramId = process.env.GRAPH_API_INSTAGRAM_ID;
  const accessToken = process.env.GRAPH_API_ACCESS_TOKEN;
  const since = request.nextUrl.searchParams.get('since');
  const queries = 'media{caption,children{media_url},media_url,media_type,permalink,like_count,timestamp,username}';
  const url = `${baseUrl}/${instagramId}?access_token=${accessToken}&fields=${queries}&since=${since}`;

  try {
    let allData: MediaData[] = [];
    const data = convertToCamelCase(await fetchJson<Media>(url));

    if (data.media && Array.isArray(data.media.data)) {
      allData = allData.concat(data.media.data);
    }

    let nextUrl = data.media.paging?.next || null;

    while (nextUrl) {
      // eslint-disable-next-line no-await-in-loop
      const nextData = convertToCamelCase(await fetchJson<MediaEdge>(`${nextUrl}&since=${since}`));

      if (nextData.data && Array.isArray(nextData.data)) {
        allData = allData.concat(nextData.data);
      }

      nextUrl = nextData.paging?.next || null;
    }

    const filteredData = allData.filter((meidaData) => meidaData.mediaType !== 'VIDEO');
    return NextResponse.json(filteredData);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching Instagram media data: ', error);
    return NextResponse.json({ error: 'Failed to fetch Instagram data' }, { status: 500 });
  }
};
