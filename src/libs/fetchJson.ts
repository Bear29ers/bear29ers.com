// execute fetch api
const fetchJson = async <T>(url: string, requestCache?: RequestCache): Promise<T> => {
  const res = await fetch(url, { cache: requestCache || 'default' });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return (await res.json()) as T;
};

export default fetchJson;
