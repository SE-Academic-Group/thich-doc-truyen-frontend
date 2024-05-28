"use client";

import { ServerAction } from "@/lib/actions";
import { SearchIcon } from "../../lib/icons";
import { useEffect, useRef } from "react";

export type SearchFormProps = Readonly<{
  action: ServerAction;
}>;

export default function SearchForm({ action }: SearchFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleSearch = (event: KeyboardEvent) => {
      if (event.key === "k" && event.ctrlKey) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    inputRef.current?.focus();
    window.addEventListener("keydown", handleSearch);
    return () => {
      window.removeEventListener("keydown", handleSearch);
    };
  }, []);

  return (
    <form className="mx-auto w-[min(100%,500px)] space-y-2" action={action}>
      <label htmlFor="search-input" className="sr-only">
        Tìm kiếm truyện
      </label>
      <div className="flex overflow-hidden rounded-3xl border border-border px-3 focus-within:ring">
        <div className="pointer-events-none flex items-center text-fg-500">
          <SearchIcon className="size-[14px]" />
        </div>
        <input
          type="search"
          name="search-input"
          id="search-input"
          className="w-full px-4 py-2 focus:outline-none"
          ref={inputRef}
          required
        />
        <div className="hidden items-center gap-1.5 text-xs md:flex">
          <span className="sr-only">
            Nhân tổ hợp phím Ctrl và K để tìm kiếm
          </span>
          <kbd aria-hidden="true" className="rounded bg-bg-50 p-1">
            Ctrl
          </kbd>
          <kbd aria-hidden="true" className="rounded bg-bg-50 p-1">
            K
          </kbd>
        </div>
      </div>
    </form>
  );
}
