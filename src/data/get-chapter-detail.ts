import { API_URL } from "../lib/constants";
import {
  ChapterDetail,
  ChapterDetailMetadata,
  HttpResponse,
} from "../lib/definitions";
import { getPluginNameFromCookie } from "../lib/server-utils";

export type GetChapterListParams = Readonly<{
  url: string;
}>;

export async function getChapterDetail(params: GetChapterListParams) {
  const pluginName = getPluginNameFromCookie();
  const apiUrl = new URL(`${pluginName}/chapter-detail`, API_URL);
  apiUrl.searchParams.append("url", params.url);

  const response = await fetch(apiUrl.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch chapter detail");
  }

  return (await response.json()) as HttpResponse<
    ChapterDetail,
    null,
    ChapterDetailMetadata
  >;
}
