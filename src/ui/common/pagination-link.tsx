"use client";

import { SKIP_PAGINATION_NUMBER } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type PaginationLinkProps = React.PropsWithChildren & {
  page: number;
  scrollToId?: string;
};

export function PaginationLink({
  page,
  scrollToId,
  children,
}: PaginationLinkProps) {
  const pathname = usePathname();
  const readonlySearchParams = useSearchParams();

  if (page == SKIP_PAGINATION_NUMBER) {
    return <span className="md:text-base">...</span>;
  }

  const currentPage = parseInt(readonlySearchParams.get("page") ?? "1", 10);
  const isActive = currentPage === page;
  const searchParams = new URLSearchParams(readonlySearchParams);
  searchParams.set("page", page.toString());
  const scrollToIdParam = scrollToId ? `#${scrollToId}` : "";

  const url = `${pathname}?${searchParams}` + scrollToIdParam;

  return (
    <Link
      href={url}
      className={cn(
        "rounded bg-bg-100 hover:bg-bg-200 sm:text-sm px-2 py-1",
        isActive && "pointer-events-none bg-primary text-fg-900",
      )}
    >
      {children}
    </Link>
  );
}
