import { z } from "zod";

export const storySearchResultSchema = z.object({
  title: z.string().transform((s) => s.replace(/\[.*\]/g, "")),
  author: z.string(),
  image: z.string().url(),
  url: z.string().url(),
  nchapter: z.number().int().min(0),
});

export type StorySearchResult = z.infer<typeof storySearchResultSchema>;

export const storySearchResultSchemaArray = z.array(storySearchResultSchema);

export type StorySearchResultArray = z.infer<
  typeof storySearchResultSchemaArray
>;
