import { API_URL } from "../constants";
import {
  HttpError,
  HttpMetadata,
  HttpResponse,
  StorySearchResult,
} from "../definitions";
import { getPluginNameFromCookie } from "../server-utils";

export type getSearchResultArgs = Readonly<{
  keyword: string;
  page: number;
}>;

export async function getSearchResult(args: getSearchResultArgs) {
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
