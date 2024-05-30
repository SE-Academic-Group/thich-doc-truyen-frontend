import { z } from "zod";

export const sourcePluginSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export type sourcePlugin = z.infer<typeof sourcePluginSchema>;
