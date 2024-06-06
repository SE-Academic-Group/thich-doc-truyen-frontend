import { parseHttpErrorSchema, parseZodSchema } from "./helpers";
import { API_URL, HTTP_ERROR_CODES } from "@/lib/constants";
import { ZHttpChapterList } from "@/types/http";
import { TStoryChapter } from "@/types/story-chapter";

type GetChapterListParams = {
  url: string;
  page: number;
};

type GetChapterListResponse = {
  chapterList: TStoryChapter[];
  currentPage: number;
  totalPages: number;
};

export async function getChapterList(
  params: GetChapterListParams,
): Promise<GetChapterListResponse> {
  const fetchURL = new URL("chapter-list", API_URL);
  fetchURL.searchParams.set("url", params.url);
  fetchURL.searchParams.set("page", String(params.page));

  const response = await fetch(fetchURL);
  const json = await response.json();

  if (!response.ok) {
    const parsed = await parseHttpErrorSchema(json);
    const { errorCode, reason } = parsed.error;

    if (errorCode == HTTP_ERROR_CODES.NOT_FOUND) {
      return {
        chapterList: [],
        currentPage: 1,
        totalPages: 1,
      };
    }

    const err = new Error();
    err.name = errorCode;
    err.message = reason || "Failed to fetch chapter list";

    throw err;
  }

  const parsed = await parseZodSchema(ZHttpChapterList, json);

  return {
    chapterList: parsed.data,
    currentPage: parsed.metadata.currentPage,
    totalPages: parsed.metadata.maxPage,
  };
}
