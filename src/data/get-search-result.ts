import { httpSearchResultSchema } from "@/types/http";
import { generatePluginNameURL } from "./server-helpers";
import { parseZodSchema } from "./helpers";

export type getSearchResultParams = Readonly<{
  keyword: string;
  page: number;
}>;

export const getSearchResult = async (args: getSearchResultParams) => {
  const fetchURL = generatePluginNameURL({ path: "search" });
  fetchURL.searchParams.set("q", args.keyword);
  fetchURL.searchParams.set("page", String(args.page));

  const response = await fetch(fetchURL);
  const json = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  // http data schema
  const parsed = parseZodSchema(httpSearchResultSchema, json);

  return parsed;
};
