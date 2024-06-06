import { parseZodSchema } from "./helpers";
import { API_URL, HTTP_ERROR_CODES } from "@/lib/constants";
import { ZHttpError, ZHttpSearchResult } from "@/types/http";
import { cookies } from "next/headers";

type getSearchResultParams = {
  keyword: string;
  page: number;
  pluginName?: string;
};

export const getSearchResult = async ({
  page,
  keyword,
  pluginName,
}: getSearchResultParams) => {
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

  // http data schema
  const parsed = await parseZodSchema(ZHttpSearchResult, json);

  return {
    results: parsed.data,
    currentPage: parsed.metadata.currentPage,
    totalPages: parsed.metadata.maxPage,
  };
};
