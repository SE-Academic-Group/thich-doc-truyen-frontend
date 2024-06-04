"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export type PaginationLinkProps = React.PropsWithChildren & {
  page: number | "...";
  isActive: boolean;
  scrollToId?: string;
};

export function PaginationLink({
  page,
  isActive,
  scrollToId,
  children,
}: PaginationLinkProps) {
  const pathname = usePathname();
  const readonlySearchParams = useSearchParams();

  const searchParams = new URLSearchParams(readonlySearchParams);
  searchParams.forEach((value, key) => {
    searchParams.set(key, value);
  });
  searchParams.delete("page");
  searchParams.set("page", page.toString());

  const url = `${pathname}?${searchParams.toString()}${scrollToId ? `#${scrollToId}` : ""}`;

  if (page === "...") {
    return <span className="text-lg md:text-base">{page}</span>;
  }

  return (
    <Link
      className={cn(
        "rounded-sm bg-bg-100 hover:bg-bg-200",
        "px-3 py-2 text-lg md:px-2.5 md:py-1 md:text-base",
        isActive && "pointer-events-none bg-secondary text-fg-900",
      )}
      href={url}
    >
      {children}
    </Link>
  );
}
