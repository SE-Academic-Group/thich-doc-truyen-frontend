import { parseHttpErrorSchema, parseZodSchema } from "./helpers";
import { API_URL, HTTP_ERROR_CODES } from "@/lib/constants";
import { ZHttpFullChapterList } from "@/types/http";
import { TStoryChapter } from "@/types/story-chapter";

type GetFullChapterListParams = {
  url: string;
};

export async function getFullChapterList({
  url,
}: GetFullChapterListParams): Promise<TStoryChapter[]> {
  const fetchURL = new URL("full-chapter-list", API_URL);
  fetchURL.searchParams.set("url", url);

  const response = await fetch(fetchURL);
  const json = await response.json();

  if (!response.ok) {
    const parsed = await parseHttpErrorSchema(json);
    const { errorCode, reason } = parsed.error;

    if (
      errorCode == HTTP_ERROR_CODES.NOT_FOUND ||
      errorCode == HTTP_ERROR_CODES.BAD_REQUEST
    ) {
      return [];
    }

    const err = new Error();
    err.name = errorCode;
    err.message = reason || "Failed to fetch chapter detail";

    throw err;
  }

  const parsed = await parseZodSchema(ZHttpFullChapterList, json);

  return parsed.data;
}
