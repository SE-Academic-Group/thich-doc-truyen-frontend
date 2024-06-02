import { z } from "zod";
import { chapterDetailSchema } from "./chapter-detail";
import { sourcePluginSchema } from "./source-plugin";
import { StoryChapterSchema } from "./story-chapter";
import { storyDetailSchema } from "./story-detail";
import { storySearchResultSchema } from "./story-search-result";

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
  data: z.array(storySearchResultSchema),
  metadata: paginationMetadataSchema,
});

export const httpSourcePluginListSchema = z.object({
  data: z.array(sourcePluginSchema),
});

export const httpStoryDetailSchema = z.object({
  data: storyDetailSchema,
});

export const httpChapterListSchema = z.object({
  data: z.array(StoryChapterSchema),
  metadata: paginationMetadataSchema,
});

export const httpChapterDetailSchema = z.object({
  data: chapterDetailSchema,
  metadata: z.object({
    nextPage: z.string().nullable(),
    prevPage: z.string().nullable(),
  }),
});
