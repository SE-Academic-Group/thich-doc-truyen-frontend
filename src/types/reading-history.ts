import { z } from "zod";

export const ZReadingHistory = z
  .object({
    storyTitle: z.string(),
    chapterIndex: z.number(),
    chapterURL: z.string().url(),
    novelURL: z.string().url(),
    pluginName: z.string(),
  })
  .transform((value) => {
    const searchParams = new URLSearchParams();
    searchParams.set("novelUrl", value.novelURL);
    searchParams.set("chapterUrl", value.chapterURL);
    searchParams.set("currentPlugin", value.pluginName);
    searchParams.set("chapterIndex", value.chapterIndex.toString());

    return {
      ...value,
      readingURL: `/doc-truyen?${searchParams}`,
    };
  });

export const ZReadingHistoryList = z.array(ZReadingHistory);

export type TReadingHistory = z.infer<typeof ZReadingHistory>;

export type TReadingHistoryList = z.infer<typeof ZReadingHistoryList>;
