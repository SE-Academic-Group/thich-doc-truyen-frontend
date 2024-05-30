import { API_URL } from "../lib/constants";
import { HttpResponse, StoryPlugin } from "../lib/definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function getPluginList() {
  noStore();
  const apiUrl = new URL("plugin-list", API_URL);
  const response = await fetch(apiUrl.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch plugin list");
  }

  return (await response.json()) as HttpResponse<StoryPlugin[]>;
}
