interface System {
  createdAt: string;
  updatedAt: string;
  customOrder: number;
  raw: {
    createdAt: string;
    updatedAt: string;
    firstPublishedAt: string;
    publishedAt: string;
  };
}

export interface Article {
  _id: string;
  _sys: System;
  title: string;
  slug: string;
  body: string;
}
