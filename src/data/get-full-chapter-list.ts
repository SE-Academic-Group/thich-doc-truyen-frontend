import { parseZodSchema } from "./helpers";
import { API_URL } from "@/lib/constants";
import { httpFullChapterListSchema } from "@/types/http";

type GetFullChapterListParams = {
  url: string;
  pluginName: string;
};

export async function getFullChapterList(params: GetFullChapterListParams) {
  const fetchURL = new URL(`${params.pluginName}/full-chapter-list`, API_URL);
  fetchURL.searchParams.set("url", params.url);

  const response = await fetch(fetchURL);
  const json = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch full chapter list");
  }

  const parsed = parseZodSchema(httpFullChapterListSchema, json);
  return parsed;
}
