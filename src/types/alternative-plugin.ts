import { z } from "zod";

export const ZAlternativePlugin = z
  .object({
    pluginMetadata: z.object({
      name: z.string(),
    }),
    novelSearchResult: z
      .object({
        url: z.string().url(),
      })
      .nullable(),
    chapterInfo: z
      .object({
        url: z.string().url(),
      })
      .nullable(),
  })
  .transform((data) => {
    return {
      pluginName: data.pluginMetadata.name,
      novelURL: data.novelSearchResult?.url,
      chapterURL: data.chapterInfo?.url,
    };
  });

export type TAlternativePlugin = z.infer<typeof ZAlternativePlugin>;
