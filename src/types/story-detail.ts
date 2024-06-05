import { z } from "zod";

// TruyenFull
const addLineBreaksBeforeTheseWords = (val: string) => {
  return (
    val
      // add newline before these words
      .replace(
        /(Tác giả:|Thể loại:|Số chương:|Nhân vật chính:|Editor:|Giới thiệu)/g,
        "\n<b>$1</b>",
      )
      // add colon after "Giới thiệu"
      .replace(/(Giới thiệu)/, "$1: ")
      // remove leading newline
      .replace(/^\n/, "")
  );
};

const addWhiteSpaceAfterTheseSymbols = (val: string) => {
  return val.replace(/([.,?!])/g, "$1 ");
};

const addWhiteSpaceBeforeCapitalLetters = (val: string) => {
  return val.replace(/([A-Z])/g, " $1");
};

// remove special characters
const removeSpecialCharacters = (val: string) => {
  return val.replace(/(-{2,})/g, "");
};

export const ZStoryDetail = z.object({
  title: z.string(),
  author: z.string(),
  image: z.string().url(),
  url: z.string().url(),
  description: z
    .string()
    .transform(addLineBreaksBeforeTheseWords)
    .transform(addWhiteSpaceAfterTheseSymbols)
    .transform(addWhiteSpaceBeforeCapitalLetters)
    .transform(removeSpecialCharacters),
  genres: z.array(z.string()),
  nchapter: z.number().int().min(0),
});
