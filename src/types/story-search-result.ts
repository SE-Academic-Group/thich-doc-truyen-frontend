import { z } from "zod";

export const ZStorySearchResult = z.object({
  title: z.string().transform((s) => s.replace(/\[.*\]/g, "")),
  author: z.string(),
  image: z.string().url(),
  url: z.string().url(),
  nchapter: z.number().int().min(0),
});

export type TStorySearchResult = z.infer<typeof ZStorySearchResult>;
