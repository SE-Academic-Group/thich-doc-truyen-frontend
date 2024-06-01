import { z } from "zod";

const removeChapterIndexFromTitle = (val: string) => {
  const match = val.match(/^Chương \d+: (.*)$/);

  return match ? match[1] : val;
};

export const StoryChapterSchema = z.object({
  title: z.string().transform(removeChapterIndexFromTitle),
  url: z.string().url(),
  index: z.string(),
});
