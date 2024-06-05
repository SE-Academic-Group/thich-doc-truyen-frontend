import { z } from "zod";

const readingHistorySchema = z.object({
  storyTitle: z.string(),
  chapterIndex: z.number(),
  pluginName: z.string(),
  chapterURL: z.string(),
  novelURL: z.string(),
});

export type ReadingHistory = z.infer<typeof readingHistorySchema>;
