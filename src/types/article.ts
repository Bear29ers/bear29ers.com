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

export interface Author {
  fullName: string;
  slug: string;
  biography: string;
  profileImage?: {
    src: string;
    title: string;
    altText: string;
  };
}

interface CoverImage {
  src: string;
  fileType: string;
  width: number;
  height: number;
  title: string;
  altText: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface Article {
  _id: string;
  _sys: System;
  title: string;
  slug: string;
  body: string;
  author: Author;
  coverImage: CoverImage;
  tags: Tag[];
}
