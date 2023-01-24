// Types
export type Blog = {
  id: string;
  body: string;
  title: string;
  tags: Tag[];
  image: Image;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Tag = {
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

type Image = {
  url: string;
  height: number;
  width: number;
};
