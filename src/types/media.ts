interface ChildrenData {
  mediaUrl: string;
  id: string;
}

interface Children {
  data: ChildrenData[];
}

export interface Media {
  caption?: string;
  children?: Children;
  mediaUrl: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  permalink?: string;
  likeCount?: number;
  timestamp?: string;
  username?: string;
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
  data: Media[];
  paging?: Paging;
}
