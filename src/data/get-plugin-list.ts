import { API_URL } from "../lib/constants";
import { parseZodSchema } from "./helpers";
import { httpSourcePluginListSchema } from "@/types/http";
import { unstable_noStore as noStore } from "next/cache";

export async function getPluginList() {
  noStore();

  const fetchURL = new URL("plugin-list", API_URL);
  const response = await fetch(fetchURL);
  const json = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch plugin list");
  }

  // http data schema
  const parsed = parseZodSchema(httpSourcePluginListSchema, json);

  return parsed;
}
