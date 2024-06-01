import { z } from "zod";

export const storyDetailSchema = z.object({
  title: z.string(),
  author: z.string(),
  image: z.string().url(),
  url: z.string().url(),
  description: z.string(),
  genres: z.array(z.string()),
  nchapter: z.number().int().min(0),
});

export type StoryDetail = z.infer<typeof storyDetailSchema>;
