import { parseZodSchema } from "./helpers";
import { generatePluginNameURL } from "./server-helpers";
import { httpChapterDetailSchema } from "@/types/http";
import { revalidateTag } from "next/cache";

export type GetChapterListParams = {
  novelURL: string;
  chapterURL: string;
};

export async function getChapterDetail(params: GetChapterListParams) {
  const fetchURL = generatePluginNameURL({ path: "chapter-detail" });
  fetchURL.searchParams.set("novelUrl", params.novelURL);
  fetchURL.searchParams.set("chapterUrl", params.chapterURL);

  const response = await fetch(fetchURL);
  const json = await response.json();
  revalidateTag("full-chapter-list");

  if (!response.ok) {
    throw new Error("Failed to fetch chapter detail");
  }

  const parsed = parseZodSchema(httpChapterDetailSchema, json);

  return parsed;
}
