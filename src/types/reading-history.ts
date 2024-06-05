import { z } from "zod";

export const ZReadingHistory = z.object({
  storyTitle: z.string(),
  chapterIndex: z.number(),
  pluginName: z.string(),
  chapterURL: z.string(),
  novelURL: z.string(),
});

export const ZReadingHistoryList = z.array(ZReadingHistory);

export type TReadingHistory = z.infer<typeof ZReadingHistory>;

export type TReadingHistoryList = z.infer<typeof ZReadingHistoryList>;
