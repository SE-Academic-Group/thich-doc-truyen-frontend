import z from "zod";

// remove the content between the two colons
const removeChapterIndex = (val: string) => {
  return val.replace(/:(.*):/g, ":");
};

const addNewLineAfterPunctuation = (val: string) => {
  return val
    .replace(/\."/g, '"')
    .replace(/” “/g, "”\n\n“")
    .replace(/"/, "”")
    .replace(/(\.|!”|:|\?”)/g, "$1\n\n")
    .replace(/.\n\n”/g, ".” ")
    .replace(/\.\n\n\.\n\n\.\n\n/g, "...")
    .replace(/\.\n\n\./g, "..");
};

const addSpaceAfter = (val: string) => {
  return val.replace(/([?!])[^”]/g, "$1 ").replace(/(\w)([A-Z])/g, "$1 $2");
};

// if an capital letter has no space before it, add a space before it
const addSpaceBefore = (val: string) => {
  return val.replace(/(\w)([A-Z])/g, "$1 $2");
};

export const chapterDetailSchema = z.object({
  title: z.string().transform(removeChapterIndex),
  content: z
    .string()
    .transform(addNewLineAfterPunctuation)
    .transform(addSpaceAfter)
    .transform(addSpaceBefore),
  url: z.string().url(),
  novelTitle: z.string(),
});
