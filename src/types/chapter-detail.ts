import retextLatin from "retext-latin";
import retextSmartyPants from "retext-smartypants";
import retextStringify from "retext-stringify";
import { unified } from "unified";
import { z } from "zod";

// check if the content does not contain any html tags
const isPlainText = (val: string) => {
  return !/<[a-z][\s\S]*>/i.test(val);
};

// remove the content between the two colons
const removeChapterIndex = (val: string) => {
  return val.replace(/:(.*):/g, ":");
};

// use retext to process content to a standard format
const processContent = async (val: string) => {
  const file = await unified()
    .use(retextLatin)
    .use(retextSmartyPants)
    .use(retextStringify)
    .process(val);

  return String(file);
};

// add a linebreak after each dot (one dot only)
const addLineBreak = (val: string) => {
  if (!isPlainText(val)) return val;

  return val
    .replace(/([.!?])\s*(?=[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯẠ-ỹ])/g, "$1<br/><br/>")
    .replace(/(” )/g, "$1<br/><br/>")
    .replace(/(“)/g, "<br/><br/>$1")
    .replaceAll("<br/><br/><br/><br/>", "<br/><br/>")
    .replace(/“[^”]+/g, (match) => `- ${match.replaceAll("<br/>", " ")}`);
};

// remove all words inside []
const removeBracketContent = (val: string) => {
  return val.replace(/\[.*?\]/g, "");
};

// remove first linebreaks if any
const removeFirstLineBreak = (val: string) => {
  return val.replace(/^<br\/><br\/>/, "");
};

export const ZChapterDetail = z.object({
  title: z.string().transform(removeChapterIndex),
  content: z
    .string()
    .transform(processContent)
    .transform(removeBracketContent)
    .transform(addLineBreak)
    .transform(removeFirstLineBreak),
  url: z.string().url(),
  novelTitle: z.string(),
});

export type TChapterDetail = z.infer<typeof ZChapterDetail>;
