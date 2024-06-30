import { NextResponse } from 'next/server';

export const GET = async () => {
  const baseUrl = process.env.GRAPH_API_BASE_URL;
  const instagramId = process.env.GRAPH_API_INSTAGRAM_ID;
  const accessToken = process.env.GRAPH_API_ACCESS_TOKEN;
  const queries = 'media{caption,children{media_url},media_url,permalink,like_count,timestamp,username}';
  const url = `${baseUrl}/${instagramId}?access_token=${accessToken}&fields=${queries}`;

  const res = await fetch(url);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await res.json();
  return NextResponse.json(data);
};
