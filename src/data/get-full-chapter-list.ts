import { httpFullChapterListSchema } from "@/types/http";
import { parseZodSchema } from "./helpers";
import { generatePluginNameURL } from "./server-helpers";

export type GetFullChapterListParams = Readonly<{
  url: string;
}>;

export async function getFullChapterList(params: GetFullChapterListParams) {
  const fetchURL = generatePluginNameURL({ path: "full-chapter-list" });
  fetchURL.searchParams.set("url", params.url);

  const response = await fetch(fetchURL, {
    next: {
      tags: ["full-chapter-list"],
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch full chapter list");
  }

  const parsed = parseZodSchema(httpFullChapterListSchema, json);
  return parsed;
}
