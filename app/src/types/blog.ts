// Types
export type Blog = {
  id: string;
  body: string;
  title: string;
  tags: Tag[];
  eyecatch: EyeCatch;
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

type EyeCatch = {
  url: string;
  height: number;
  width: number;
};

export type MicrocmsResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
