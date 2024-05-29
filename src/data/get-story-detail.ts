import { API_URL } from "../lib/constants";
import { getPluginNameFromCookie } from "../lib/server-utils";
import { HttpResponse, StoryDetail } from "../lib/definitions";

export type getStoryDetailParams = Readonly<{
  url: string;
}>;

export async function getStoryDetail(args: getStoryDetailParams) {
  const pluginName = getPluginNameFromCookie();
  const apiUrl = new URL(`${pluginName}/novel-detail`, API_URL);
  apiUrl.searchParams.append("url", args.url);

  const response = await fetch(apiUrl.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch story detail");
  }

  return (await response.json()) as HttpResponse<StoryDetail>;
}
