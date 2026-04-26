export const fetchData = async <T>(url: string): Promise<T> => {
  const data = await fetch(url);
  const res = data;

  if (!res.ok) {
    throw new Error("API ERROR");
  }
  return res.json();
};
