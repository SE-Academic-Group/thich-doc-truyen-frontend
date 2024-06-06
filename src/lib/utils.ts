import { SKIP_PAGINATION_NUMBER } from "./constants";
import { TSearchParams } from "@/types/search-params";
import { capitalCase } from "change-case";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));
export const capitalize = (text: string) => capitalCase(text);

export const getSearchParam = ({
  searchParams,
  key,
}: {
  searchParams: TSearchParams;
  key: string;
}) => {
  const value = searchParams[key] ?? "";
  const result = Array.isArray(value) ? value[0] : value;

  return result;
};

export const generatePagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
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
    return [1, 2, 3, SKIP_PAGINATION_NUMBER, totalPages - 1, totalPages];
  }

  // If the current page is among the last 2 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 1) {
    return [
      1,
      2,
      SKIP_PAGINATION_NUMBER,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    SKIP_PAGINATION_NUMBER,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    SKIP_PAGINATION_NUMBER,
    totalPages,
  ];
};

export const pipe =
  <T>(...fns: Array<(arg: T) => T>) =>
  (x: T) =>
    fns.reduce((v, f) => f(v), x);
