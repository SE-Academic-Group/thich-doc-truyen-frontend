import { API_URL, HTTP_ERROR_CODES } from "../lib/constants";
import { parseZodSchema } from "./helpers";
import { reportError } from "@/lib/error-handling";
import { TDownloadOption } from "@/types/download-option";
import { ZHttpDownloadOptions, ZHttpError } from "@/types/http";
import { unstable_noStore as noStore } from "next/cache";

export async function getDownloadOptions(): Promise<TDownloadOption[]> {
  noStore();

  const fetchURL = new URL("download-options", API_URL);

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
    reportError(err);

    return [];
  }

  const parsed = await parseZodSchema(ZHttpDownloadOptions, json);

  return parsed.data;
}
