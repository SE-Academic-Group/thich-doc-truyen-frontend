import { cn } from "@/lib/utils";
import Link from "next/link";

export type PaginationLinkProps = {
  page: number | "...";
  url: string;
  isActive: boolean;
  scrollToId?: string;
};

export function PaginationLink({
  url,
  page,
  isActive,
  scrollToId,
}: PaginationLinkProps) {
  if (page === "...") {
    return <span className="text-lg md:text-base">{page}</span>;
  }

  const paginationUrl = new URL(url);
  paginationUrl.searchParams.set("page", page.toString());

  if (scrollToId) {
    paginationUrl.hash = scrollToId;
  }

  return (
    <Link
      className={cn(
        "bg-bg-200 hover:bg-bg-300 rounded-sm",
        "md:px-2.5 md:py-1 md:text-base px-3 py-2 text-lg",
        isActive && "bg-primary text-primary-fg pointer-events-none",
      )}
      href={paginationUrl.toString()}
    >
      {page}
    </Link>
  );
}
