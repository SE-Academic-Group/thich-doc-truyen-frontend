import { parseZodSchema } from "./helpers";
import { API_URL, HTTP_ERROR_CODES } from "@/lib/constants";
import { ZHttpError, ZHttpStoryDetail } from "@/types/http";
import { TStoryDetail } from "@/types/story-detail";
import { notFound } from "next/navigation";

type getStoryDetailParams = {
  url: string;
};

export async function getStoryDetail({
  url,
}: getStoryDetailParams): Promise<TStoryDetail> {
  const fetchURL = new URL("novel-detail", API_URL);
  fetchURL.searchParams.append("url", url);

  const response = await fetch(fetchURL);
  const json = await response.json();

  if (!response.ok) {
    const parsed = await parseZodSchema(ZHttpError, json);
    const { errorCode, reason } = parsed.error;

    if (
      errorCode == HTTP_ERROR_CODES.NOT_FOUND ||
      errorCode == HTTP_ERROR_CODES.BAD_REQUEST
    ) {
      notFound();
    }

    const err = new Error();
    err.name = errorCode;
    err.message = reason || "Failed to fetch story detail";

    throw err;
  }

  const parsed = await parseZodSchema(ZHttpStoryDetail, json);

  return parsed.data;
}
