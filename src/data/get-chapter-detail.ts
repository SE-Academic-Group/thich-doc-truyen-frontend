import { httpChapterDetailSchema } from "@/types/http";
import { parseZodSchema } from "./helpers";
import { generatePluginNameURL } from "./server-helpers";

export type GetChapterListParams = Readonly<{
  novelURL: string;
  chapterURL: string;
}>;

export async function getChapterDetail(params: GetChapterListParams) {
  const fetchURL = generatePluginNameURL({ path: "chapter-detail" });
  fetchURL.searchParams.set("novelUrl", params.novelURL);
  fetchURL.searchParams.set("chapterUrl", params.chapterURL);

  const response = await fetch(fetchURL);
  const json = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch chapter detail");
  }

  const parsed = parseZodSchema(httpChapterDetailSchema, json);

  return parsed;
}
