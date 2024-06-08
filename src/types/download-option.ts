import { z } from "zod";

export const ZDownloadOption = z.object({
  type: z.string(),
  path: z.string(),
  description: z.string(),
});

export type TDownloadOption = z.infer<typeof ZDownloadOption>;
