import { z } from "zod";

// remove from the beginning of the string to the last colon
const removeChapterIndex = (val: string) => {
  const match = val.match(/^.*: (.*)$/);

  return match ? match[1] : val;
};

export const StoryChapterSchema = z.object({
  title: z.string().transform(removeChapterIndex),
  url: z.string().url(),
  index: z.string(),
});
