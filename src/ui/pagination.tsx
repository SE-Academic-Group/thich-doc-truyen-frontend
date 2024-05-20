import { generatePagination, getCustomHeader } from "@/lib/utils";
import { PaginationLink } from "./pagination-link";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  scrollToId?: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  scrollToId,
}: PaginationProps) {
  const pagination = generatePagination({ currentPage, totalPages });
  const requestUrl = getCustomHeader("x-url")!;
  const url = new URL(requestUrl);
  url.searchParams.delete("page");

  return (
    <ul className="flex items-center justify-center gap-3 md:gap-2.5">
      {pagination.map((page, index) => (
        <li key={`${page}-${index}`}>
          <PaginationLink
            page={page}
            url={url.toString()}
            isActive={page == currentPage}
            scrollToId={scrollToId}
          />
        </li>
      ))}
    </ul>
  );
}
