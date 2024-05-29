import { API_URL } from "../constants";
import { HttpResponse, StoryPlugin } from "../definitions";

export async function getPluginList() {
  const apiUrl = new URL("plugin-list", API_URL);
  const response = await fetch(apiUrl.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch plugin list");
  }

  return (await response.json()) as HttpResponse<StoryPlugin[]>;
}
