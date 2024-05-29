import {
  ChapterDetail,
  ChapterDetailMetadata,
  HttpMetadata,
  HttpResponse,
  StoryChapter,
  StoryDetail,
} from "./definitions";

const API_URL = process.env.API_URL;

export async function getChapterList({
  url,
  page,
}: {
  url: string;
  page: number;
}) {
  const response = await fetch(
    `${API_URL}/chapter-list?url=${url}&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch chapter list");
  }

  return (await response.json()) as HttpResponse<
    StoryChapter[],
    null,
    HttpMetadata
  >;
}

export async function getChapterDetail({ url }: { url: string }) {
  const response = await fetch(`${API_URL}/chapter-detail?url=${url}`);

  if (!response.ok) {
    throw new Error("Failed to fetch chapter detail");
  }

  return (await response.json()) as HttpResponse<
    ChapterDetail,
    null,
    ChapterDetailMetadata
  >;
}
