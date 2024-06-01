import { z } from "zod";

export const StoryChapterSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  index: z.number(),
});
