export type MicrocmsResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
