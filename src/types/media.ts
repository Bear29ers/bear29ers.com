interface ChildrenData {
  mediaUrl: string;
  id: string;
}

interface Children {
  data: ChildrenData[];
}

interface MediaData {
  caption: string;
  children: Children;
  mediaUrl: string;
  permalink: string;
  likeCount: number;
  timestamp: string;
  id: string;
}

export interface Media {
  media: {
    data: MediaData[];
  };
}
