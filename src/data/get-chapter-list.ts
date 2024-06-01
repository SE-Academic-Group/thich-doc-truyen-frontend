import { httpChapterListSchema } from "@/types/http";
import { parseZodSchema } from "./helpers";
import { generatePluginNameURL } from "./server-helpers";

export type GetChapterListParams = Readonly<{
  url: string;
  page: number;
}>;

export async function getChapterList(params: GetChapterListParams) {
  const fetchURL = generatePluginNameURL({ path: "chapter-list" });
  fetchURL.searchParams.set("url", params.url);
  fetchURL.searchParams.set("page", String(params.page));

  const response = await fetch(fetchURL);
  const json = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch chapter list");
  }

  const parsed = parseZodSchema(httpChapterListSchema, json);
  return parsed;
}
