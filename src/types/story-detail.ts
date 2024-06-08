import { z } from "zod";

const removeDoubleLineBreak = (val: string) => {
  return val.replace(/(<br>){2}/g, "<br>");
};

const removeLineBreakInsideSpan = (val: string) => {
  return val.replace(/<span>(<br>)+/g, "<span>");
};

export const ZStoryDetail = z.object({
  title: z.string(),
  author: z.string(),
  image: z.string().url(),
  url: z.string().url(),
  description: z
    .string()
    .transform(removeDoubleLineBreak)
    .transform(removeLineBreakInsideSpan),
  genres: z.array(z.string()),
  nchapter: z.number().int().min(0),
});

export type TStoryDetail = z.infer<typeof ZStoryDetail>;
