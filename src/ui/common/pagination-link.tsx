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
    return <span className="md:text-base">{page}</span>;
  }

  return (
    <Link
      className={cn(
        "rounded-lg bg-bg-100 hover:bg-bg-200",
        "px-2.5 py-1.5 text-lg",
        isActive && "pointer-events-none bg-primary text-fg-900",
      )}
      href={url}
    >
      {children}
    </Link>
  );
}
