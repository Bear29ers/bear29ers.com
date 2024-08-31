interface ChildrenData {
  mediaUrl: string;
  id: string;
}

interface Children {
  data: ChildrenData[];
}

export interface MediaData {
  caption: string;
  children: Children;
  mediaUrl: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  permalink: string;
  likeCount: number;
  timestamp: string;
  username: string;
  id: string;
}

interface Paging {
  cursors: {
    before: string;
    after: string;
  };
  previous?: string;
  next?: string;
}

export interface MediaEdge {
  data: MediaData[];
  paging?: Paging;
}

export interface Media {
  media: MediaEdge;
}
