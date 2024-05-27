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
import { sleep } from "./utils";

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
  const response = await fetch(`http://localhost:8080/plugin-list`);

  if (!response.ok) {
    throw new Error("Failed to fetch plugin list");
  }

  await sleep(2000);

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
