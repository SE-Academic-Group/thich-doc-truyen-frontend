import { z } from "zod";

export const ZDownloadOption = z.object({
  name: z.string(),
});

export type TDownloadOption = z.infer<typeof ZDownloadOption>;
