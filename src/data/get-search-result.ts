import { API_URL } from "../lib/constants";
import {
  HttpError,
  HttpMetadata,
  HttpResponse,
  StorySearchResult,
} from "../lib/definitions";
import { getPluginNameFromCookie } from "../lib/server-utils";

export type getSearchResultParams = Readonly<{
  keyword: string;
  page: number;
}>;

export async function getSearchResult(args: getSearchResultParams) {
  const pluginName = getPluginNameFromCookie();
  const apiUrl = new URL(`${pluginName}/search`, API_URL);
  apiUrl.searchParams.set("q", args.keyword);
  apiUrl.searchParams.set("page", String(args.page));

  const response = await fetch(apiUrl.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  const results = (await response.json()) as HttpResponse<
    StorySearchResult[],
    HttpError,
    HttpMetadata
  >;

  return results;
}
