import { API_URL, HTTP_ERROR_CODES } from "../lib/constants";
import { parseZodSchema } from "./helpers";
import { ZHttpError, ZHttpSourcePluginList } from "@/types/http";
import { TSourcePlugin } from "@/types/source-plugin";
import { unstable_noStore as noStore } from "next/cache";

export async function getPluginList(): Promise<TSourcePlugin[]> {
  noStore();

  const fetchURL = new URL("plugin-list", API_URL);

  const response = await fetch(fetchURL);
  const json = await response.json();

  if (!response.ok) {
    const parsed = await parseZodSchema(ZHttpError, json);
    const { errorCode, reason } = parsed.error;

    if (errorCode === HTTP_ERROR_CODES.NOT_FOUND) {
      return [];
    }

    const err = new Error();
    err.name = errorCode;
    err.message = reason || "Failed to fetch plugin list";

    throw err;
  }

  const parsed = await parseZodSchema(ZHttpSourcePluginList, json);

  return parsed.data;
}
