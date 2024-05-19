import { cn, generatePagination, getCustomHeader } from "@/lib/utils";
import Link from "next/link";

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

function PaginationLink({
  page,
  url,
  isActive,
  scrollToId,
}: {
  page: number | "...";
  url: string;
  isActive: boolean;
  scrollToId?: string;
}) {
  if (typeof page === "string") {
    return <span className="text-lg md:text-base">{page}</span>;
  }

  return (
    <Link
      className={cn(
        "rounded-sm bg-bg-200 px-3 py-2 text-lg hover:bg-bg-300",
        "md:px-2.5 md:py-1 md:text-base",
        isActive && "bg-primary-light text-primary-fg pointer-events-none",
      )}
      href={`${url.toString()}&page=${page}${scrollToId ? `#${scrollToId}` : ""}`}
    >
      {page}
    </Link>
  );
}
