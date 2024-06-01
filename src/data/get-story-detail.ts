import { httpStoryDetailSchema } from "@/types/http";
import { parseZodSchema } from "./helpers";
import { generatePluginNameURL } from "./server-helpers";

export type getStoryDetailParams = Readonly<{
  url: string;
}>;

export async function getStoryDetail(args: getStoryDetailParams) {
  const fetchURL = generatePluginNameURL({ path: "novel-detail" });
  fetchURL.searchParams.append("url", args.url);

  console.log(fetchURL.toString());
  const response = await fetch(fetchURL);
  const json = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch story detail");
  }

  const parsed = parseZodSchema(httpStoryDetailSchema, json);
  return parsed;
}
