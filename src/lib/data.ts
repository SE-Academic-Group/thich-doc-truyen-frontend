import {
  HttpError,
  HttpMetadata,
  HttpResponse,
  StoryPlugin,
  StorySearchResult,
} from "./definitions";

export async function getSearchResult({
  keyword,
  page,
}: {
  keyword: string;
  page: number;
}) {
  const response = await fetch(
    `http://localhost:8080/tangThuVien/search?q=${keyword}&page=${page}`,
  );

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
  const response = await fetch("http://localhost:8080/plugin-list");

  if (!response.ok) {
    throw new Error("Failed to fetch plugin list");
  }

  return (await response.json()) as HttpResponse<StoryPlugin[]>;
}
