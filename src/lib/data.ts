import {
  ChapterDetail,
  ChapterDetailMetadata,
  HttpError,
  HttpMetadata,
  HttpResponse,
  StoryChapter,
  StoryDetail,
  StoryPlugin,
  StorySearchResult,
} from "./definitions";

const API_URL = process.env.API_URL;

export async function getSearchResult({
  keyword,
  page,
}: {
  keyword: string;
  page: number;
}) {
  const response = await fetch(`${API_URL}/search?q=${keyword}&page=${page}`);

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  const results = (await response.json()) as HttpResponse<
    StorySearchResult[],
    HttpError,
    HttpMetadata
  >;

  return results;
}

export async function getPluginList() {
  const response = await fetch(`${API_URL}/plugin-list`);

  if (!response.ok) {
    throw new Error("Failed to fetch plugin list");
  }

  return (await response.json()) as HttpResponse<StoryPlugin[]>;
}

export async function getStoryDetail({ url }: { url: string }) {
  const response = await fetch(`${API_URL}/novel-detail?url=${url}`);

  if (!response.ok) {
    throw new Error("Failed to fetch story detail");
  }

  return (await response.json()) as HttpResponse<StoryDetail>;
}

export async function getChapterList({
  url,
  page,
}: {
  url: string;
  page: number;
}) {
  const response = await fetch(
    `${API_URL}/chapter-list?url=${url}&page=${page}`,
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
