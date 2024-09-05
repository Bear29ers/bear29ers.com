// execute fetch api
const fetchJson = async <T>(url: string, next?: NextFetchRequestConfig): Promise<T> => {
  const res = await fetch(url, { next });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return (await res.json()) as T;
};

export default fetchJson;
