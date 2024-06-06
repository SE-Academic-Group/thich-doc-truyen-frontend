import { parseHttpErrorSchema, parseZodSchema } from "./helpers";
import { API_URL, HTTP_ERROR_CODES } from "@/lib/constants";
import { TChapterDetail } from "@/types/chapter-detail";
import { ZHttpChapterDetail } from "@/types/http";
import { notFound } from "next/navigation";

type GetChapterDetailParams = {
  novelURL: string;
  chapterURL: string;
};

type GetChapterDetailResponse = {
  chapterDetail: TChapterDetail;
  nextChapterURL: string | null;
  prevChapterURL: string | null;
};

export async function getChapterDetail(
  params: GetChapterDetailParams,
): Promise<GetChapterDetailResponse> {
  const fetchURL = new URL("chapter-detail", API_URL);
  fetchURL.searchParams.set("novelUrl", params.novelURL);
  fetchURL.searchParams.set("chapterUrl", params.chapterURL);

  const response = await fetch(fetchURL);
  const json = await response.json();

  if (!response.ok) {
    const parsed = await parseHttpErrorSchema(json);
    const { errorCode, reason } = parsed.error;

    if (errorCode == HTTP_ERROR_CODES.NOT_FOUND) {
      notFound();
    }

    const err = new Error();
    err.name = errorCode;
    err.message = reason || "Failed to fetch chapter detail";

    throw err;
  }

  const parsed = await parseZodSchema(ZHttpChapterDetail, json);

  return {
    chapterDetail: parsed.data,
    prevChapterURL: parsed.metadata.prevPage,
    nextChapterURL: parsed.metadata.nextPage,
  };
}
