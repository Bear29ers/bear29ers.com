// execute fetch api
const fetchJson = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return (await res.json()) as T;
};

export default fetchJson;
