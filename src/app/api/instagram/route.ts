import { NextResponse } from 'next/server';

import fetchJson from '@/libs/fetchJson';

import type { Media } from '@/types/media';

import type { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const baseUrl = process.env.GRAPH_API_BASE_URL;
  const instagramId = process.env.GRAPH_API_INSTAGRAM_ID;
  const accessToken = process.env.GRAPH_API_ACCESS_TOKEN;
  const since = request.nextUrl.searchParams.get('since');
  const queries = 'media{caption,children{media_url},media_url,media_type,permalink,like_count,timestamp,username}';
  const url = `${baseUrl}/${instagramId}?access_token=${accessToken}&fields=${queries}&since=${since}`;

  try {
    const data = await fetchJson<Media>(url);
    return NextResponse.json(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching Instagram media data: ', error);
    return NextResponse.json({ error: 'Failed to fetch Instagram data' }, { status: 500 });
  }
};
