import { z } from "zod";

export const buildReadingURL = (val: TReadingHistory) => {
  const searchParams = new URLSearchParams();
  searchParams.set("novelUrl", val.novelURL);
  searchParams.set("chapterUrl", val.chapterURL);
  searchParams.set("currentPlugin", val.pluginName);
  searchParams.set("chapterIndex", val.chapterIndex.toString());

  return `/doc-truyen?${searchParams}`;
};

export const ZReadingHistory = z.object({
  storyTitle: z.string(),
  chapterIndex: z.number(),
  chapterURL: z.string().url(),
  novelURL: z.string().url(),
  pluginName: z.string(),
});

export const ZReadingHistoryList = z.array(ZReadingHistory);

export type TReadingHistory = z.infer<typeof ZReadingHistory>;

export type TReadingHistoryList = z.infer<typeof ZReadingHistoryList>;
