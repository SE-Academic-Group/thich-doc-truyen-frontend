import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SearchParams } from "./definitions";
import { headers } from "next/headers";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

export const sleep = async (nSecs = 1000) =>
  await new Promise((resolve) => setTimeout(resolve, nSecs));

export function getSearchParam({
  searchParams,
  key,
}: {
  searchParams: SearchParams;
  key: string;
}) {
  const value = searchParams[key] ?? "";
  const result = Array.isArray(value) ? value[0] : value;

  return result;
}

export function generatePagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}): Array<number | "..."> {
  // If the total number of pages is 1, return an empty array.
  if (totalPages === 1) {
    return [];
  }

  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 2) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 1) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
}
export const getCustomHeader = (key: string) => headers().get(key);

// TODO: Define rules to format the content of a story chapter.
export const preLineStoryDetail = (content: string) => {
  return content
    .replace(/(\n|\r\n|\r|<br\/>)/g, " ")
    .replace(/:“/g, ": “")
    .replace(/- /g, "")
    .replace(/(["”“”“]) .(["”“”“])/g, "$1\n\n$2")
    .replace(/([\.]) ([^\.])/g, "$1\n\n$2")
    .replace(/&quot;/g, '"')
    .replace(/([\.]{3})\n\n/g, "$1 ");
};
