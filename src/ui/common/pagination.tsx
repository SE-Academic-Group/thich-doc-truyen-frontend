import { generatePagination } from "@/lib/utils";
import { headers } from "next/headers";
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
  const requestUrl = headers().get("x-url")!;
  const url = new URL(requestUrl);
  url.searchParams.delete("page");
  const FIRST_PAGE = 1;
  const LAST_PAGE = totalPages;

  return (
    <ul className="flex items-center justify-center gap-3 md:gap-2.5">
      {currentPage > FIRST_PAGE && (
        <li>
          <PaginationLink
            page={currentPage - 1}
            url={url.toString()}
            isActive={false}
            scrollToId={scrollToId}
          >
            <span>&lt;</span>
            <span className="sr-only">Trang trước</span>
          </PaginationLink>
        </li>
      )}
      {pagination.map((page, index) => (
        <li key={`${page}-${index}`}>
          <PaginationLink
            page={page}
            url={url.toString()}
            isActive={page == currentPage}
            scrollToId={scrollToId}
          >
            {page}
          </PaginationLink>
        </li>
      ))}
      {currentPage < LAST_PAGE && (
        <li>
          <PaginationLink
            page={currentPage + 1}
            url={url.toString()}
            isActive={false}
            scrollToId={scrollToId}
          >
            <span>&gt;</span>
            <span className="sr-only">Trang sau</span>
          </PaginationLink>
        </li>
      )}
    </ul>
  );
}
