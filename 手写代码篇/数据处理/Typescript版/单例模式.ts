import { api } from "../../../utils/API";
const cache: Record<string, string> = {};
export const request = async (url: string) => {
  if (cache[url]) {
    return cache[url];
  } else {
    const res = await api(url);
    cache[url] = res;
    return res;
  }
};
