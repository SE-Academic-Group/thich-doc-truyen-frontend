import { API_URL } from "../constants";
import { getPluginNameFromCookie } from "../server-utils";
import { HttpResponse, StoryDetail } from "../definitions";

export type getStoryDetailArgs = Readonly<{
  url: string;
}>;

export async function getStoryDetail(args: getStoryDetailArgs) {
  const pluginName = getPluginNameFromCookie();
  const apiUrl = new URL(`${pluginName}/novel-detail`, API_URL);
  apiUrl.searchParams.append("url", args.url);

  const response = await fetch(apiUrl.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch story detail");
  }

  return (await response.json()) as HttpResponse<StoryDetail>;
}
