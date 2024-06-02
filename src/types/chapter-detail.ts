import z from "zod";

// add new line after each paragraph
const addNewLineAfterParagraph = (content: string) => {
  return content.replace(/<\/p>/g, "</p>\n\n");
};

const addNewLineAfterPunctuation = (content: string) => {
  return content.replace(/([.!?:]) /g, "$1\n\n");
};

// add new line after double quotes
const addNewLineAfterDoubleQuotes = (content: string) => {
  return content;
  return content.replace(/[”]/g, "”\n\n");
};

export const chapterDetailSchema = z.object({
  title: z.string(),
  content: z
    .string()
    .transform(addNewLineAfterParagraph)
    .transform(addNewLineAfterPunctuation)
    .transform(addNewLineAfterDoubleQuotes),
  url: z.string().url(),
  novelTitle: z.string(),
});
