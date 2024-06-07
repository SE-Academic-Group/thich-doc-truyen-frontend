import { parseZodSchema } from "./helpers";
import { API_URL } from "@/lib/constants";
import { logToErrorReportingService } from "@/lib/error-handling";
import { TAlternativePlugin } from "@/types/alternative-plugin";
import { ZHttpAlternativePlugins, ZHttpError } from "@/types/http";

type getAlternativePluginsParams = {
  novelURL: string;
  chapterIndex: string | number;
};

export async function getAlternativePlugins({
  novelURL,
  chapterIndex,
}: getAlternativePluginsParams): Promise<TAlternativePlugin[]> {
  const fetchURL = new URL("switch-plugin", API_URL);
  fetchURL.searchParams.append("novelUrl", novelURL);
  fetchURL.searchParams.append("chapterIndex", chapterIndex.toString());
  const response = await fetch(fetchURL);
  const json = await response.json();

  if (!response.ok) {
    const parsed = await parseZodSchema(ZHttpError, json);
    const { errorCode, reason } = parsed.error;

    const err = new Error();
    err.name = errorCode;
    err.message = reason || "Failed to fetch alternative plugins";

    logToErrorReportingService(err);

    return [];
  }

  const parsed = await parseZodSchema(ZHttpAlternativePlugins, json);

  return parsed.data;
}
