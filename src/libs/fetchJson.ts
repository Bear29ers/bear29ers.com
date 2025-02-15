// execute fetch api
const fetchJson = async <T>(url: string, options?: { revalidate?: number | false; tags?: string[] }): Promise<T> => {
  const res = await fetch(url, { next: options });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return (await res.json()) as T;
};

export default fetchJson;
