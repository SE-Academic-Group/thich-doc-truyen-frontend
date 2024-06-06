import { ZChapterDetail } from "./chapter-detail";
import { ZSourcePlugin } from "./source-plugin";
import { ZStoryChapter } from "./story-chapter";
import { ZStoryDetail } from "./story-detail";
import { ZStorySearchResult } from "./story-search-result";
import { z } from "zod";

export const ZHttpError = z
  .object({
    error: z.object({
      errorCode: z.string(),
      reason: z.string().optional(),
    }),
  })
  .describe("ZHttpError, error response from server");

export const ZPaginationMetadata = z.object({
  currentPage: z.number(),
  maxPage: z.number(),
});

export const ZHttpSearchResult = z.object({
  data: z.array(ZStorySearchResult),
  metadata: ZPaginationMetadata,
});

export const ZHttpSourcePluginList = z.object({
  data: z.array(ZSourcePlugin),
});

export const ZHttpStoryDetail = z.object({
  data: ZStoryDetail,
});

export const ZHttpChapterList = z.object({
  data: z.array(ZStoryChapter),
  metadata: ZPaginationMetadata,
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
