import { API_URL } from "../lib/constants";
import { HttpMetadata, HttpResponse, StoryChapter } from "../lib/definitions";
import { getPluginNameFromCookie } from "../lib/server-utils";

export type GetChapterListParams = Readonly<{
  url: string;
  page: number;
}>;

export async function getChapterList(params: GetChapterListParams) {
  const pluginName = getPluginNameFromCookie();
  const apiUrl = new URL(`${pluginName}/chapter-list`, API_URL);
  apiUrl.searchParams.append("url", params.url);
  apiUrl.searchParams.append("page", String(params.page));

  const response = await fetch(apiUrl.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch chapter list");
  }

  return (await response.json()) as HttpResponse<
    StoryChapter[],
    null,
    HttpMetadata
  >;
}
