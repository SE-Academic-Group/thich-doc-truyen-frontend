import { PaginationLink } from "./pagination-link";
import { generatePagination } from "@/lib/utils";

type PaginationProps = {
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
  const FIRST_PAGE = 1;
  const LAST_PAGE = totalPages;

  return (
    <ul className="flex items-center justify-center gap-3 md:gap-2.5">
      {currentPage > FIRST_PAGE && (
        <li>
          <PaginationLink page={currentPage - 1} scrollToId={scrollToId}>
            <span>&laquo;</span>
            <span className="sr-only">Trang trước</span>
          </PaginationLink>
        </li>
      )}
      {pagination.map((page, index) => (
        <li key={`${page}-${index}`}>
          <PaginationLink page={page} scrollToId={scrollToId}>
            {page}
          </PaginationLink>
        </li>
      ))}
      {currentPage < LAST_PAGE && (
        <li>
          <PaginationLink page={currentPage + 1} scrollToId={scrollToId}>
            <span>&raquo;</span>
            <span className="sr-only">Trang sau</span>
          </PaginationLink>
        </li>
      )}
    </ul>
  );
}
