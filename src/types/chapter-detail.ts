import z from "zod";

export const chapterDetailSchema = z.object({
  title: z.string(),
  content: z.string(),
  url: z.string().url(),
  novelTitle: z.string(),
});
