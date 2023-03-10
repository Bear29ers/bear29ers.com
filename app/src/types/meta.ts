// Meta Types
export type Meta = {
  id: string;
  title: string;
  description: string;
  image: Image;
  imageWidth: string;
  imageHeight: string;
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
