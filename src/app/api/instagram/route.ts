import { NextResponse } from 'next/server';

import fetchJson from '@/libs/fetchJson';

import type { Media, MediaData } from '@/types/media';

import type { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const baseUrl = process.env.GRAPH_API_BASE_URL;
  const instagramId = process.env.GRAPH_API_INSTAGRAM_ID;
  const accessToken = process.env.GRAPH_API_ACCESS_TOKEN;
  const since = request.nextUrl.searchParams.get('since');
  const queries = 'media{caption,children{media_url},media_url,media_type,permalink,like_count,timestamp,username}';
  let url = `${baseUrl}/${instagramId}?access_token=${accessToken}&fields=${queries}&since=${since}`;
  let allMedia: MediaData[] = [];

  try {
    const data = await fetchJson<Media>(url);

    if (data.media && Array.isArray(data.media.data)) {
      allMedia = allMedia.concat(data.media.data);
    }

    url = data.media.paging?.next ? `${data.media.paging?.next}&since=${since}` : '';

    return NextResponse.json({ media: { data: allMedia } });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching Instagram media data: ', error);
    return NextResponse.json({ error: 'Failed to fetch Instagram data' }, { status: 500 });
  }
};
