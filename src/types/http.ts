import { ZChapterDetail } from "./chapter-detail";
import { ZSourcePlugin } from "./source-plugin";
import { ZStoryChapter } from "./story-chapter";
import { ZStoryDetail } from "./story-detail";
import { ZStorySearchResult } from "./story-search-result";
import { z } from "zod";

export const httpErrorSchema = z.object({
  error: z.object({
    errorCode: z.string(),
    reason: z.string(),
  }),
});

export const paginationMetadataSchema = z.object({
  currentPage: z.number(),
  maxPage: z.number(),
});

export const httpSearchResultSchema = z.object({
  data: z.array(ZStorySearchResult),
  metadata: paginationMetadataSchema,
});

export const httpSourcePluginListSchema = z.object({
  data: z.array(ZSourcePlugin),
});

export const httpStoryDetailSchema = z.object({
  data: ZStoryDetail,
});

export const httpChapterListSchema = z.object({
  data: z.array(ZStoryChapter),
  metadata: paginationMetadataSchema,
});

export const httpFullChapterListSchema = z.object({
  data: z.array(ZStoryChapter),
});

export const httpChapterDetailSchema = z.object({
  data: ZChapterDetail,
  metadata: z.object({
    nextPage: z.string().nullable(),
    prevPage: z.string().nullable(),
  }),
});
