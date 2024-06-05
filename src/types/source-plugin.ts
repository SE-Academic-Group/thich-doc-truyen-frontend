import { z } from "zod";

export const ZSourcePlugin = z.object({
  name: z.string(),
  url: z.string().url(),
});
