import { parseZodSchema } from "./helpers";
import { API_URL, HTTP_ERROR_CODES } from "@/lib/constants";
import { ZHttpError, ZHttpSearchResult } from "@/types/http";
import { TStorySearchResult } from "@/types/story-search-result";
import { cookies } from "next/headers";

type getSearchResultParams = {
  keyword: string;
  page: number;
  pluginName?: string;
};

type getSearchResultResponse = {
  results: TStorySearchResult[];
  currentPage: number;
  totalPages: number;
};

export const getSearchResult = async ({
  page,
  keyword,
  pluginName,
}: getSearchResultParams): Promise<getSearchResultResponse> => {
  const fetchPluginName =
    pluginName ||
    cookies().get("pluginName")?.value ||
    "DEFAULT_FETCH_PLUGIN_NAME";
  const fetchURL = new URL(`${fetchPluginName}/search`, API_URL);
  fetchURL.searchParams.set("q", keyword);
  fetchURL.searchParams.set("page", String(page));

  const response = await fetch(fetchURL);
  const json = await response.json();

  if (!response.ok) {
    const parsed = await parseZodSchema(ZHttpError, json);
    const { errorCode, reason } = parsed.error;

    if (
      errorCode == HTTP_ERROR_CODES.NOT_FOUND ||
      errorCode == HTTP_ERROR_CODES.BAD_REQUEST
    ) {
      return {
        results: [],
        currentPage: 1,
        totalPages: 1,
      };
    }

    const err = new Error();
    err.name = errorCode;
    err.message = reason || "Failed to fetch search results";

    throw err;
  }

  const parsed = await parseZodSchema(ZHttpSearchResult, json);

  return {
    results: parsed.data,
    currentPage: parsed.metadata.currentPage,
    totalPages: parsed.metadata.maxPage,
  };
};
