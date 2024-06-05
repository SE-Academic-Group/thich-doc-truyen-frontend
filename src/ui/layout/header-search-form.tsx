"use client";

import { SearchIcon } from "../../lib/icons";
import ErrorText from "../common/error-text";
import { cn } from "@/lib/utils";
import { searchQuerySchema } from "@/types/search-query";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";

export default function HeaderSearchForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleSearch = (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    };

    window.addEventListener("keydown", handleSearch);
    return () => {
      window.removeEventListener("keydown", handleSearch);
    };
  }, []);

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = searchQuerySchema.safeParse(inputRef.current?.value);

    if (result.error) {
      return setError(result.error.format()._errors.join(", "));
    }

    setError(null);
    startTransition(() => {
      router.push(`/tim-kiem?q=${result.data}`);
    });
  };

  return (
    <form onSubmit={onSearch}>
      <label htmlFor="search-input" className="sr-only">
        Tìm kiếm truyện theo từ khóa
      </label>
      <div
        className={cn(
          "relative flex items-center rounded border border-border bg-bg-0",
          isPending && "bg-bg-50",
        )}
      >
        <input
          type="search"
          id="search-input"
          name="search-input"
          className="w-full bg-transparent px-4 py-1 placeholder:text-sm focus:outline-none"
          placeholder="Tìm kiếm theo từ khóa..."
          ref={inputRef}
          disabled={isPending}
        />
        <button type="submit" className="self-stretch bg-bg-100 px-2">
          <SearchIcon className="pointer-events-none size-[14px] text-fg-500" />
        </button>
        {error && (
          <div className="absolute inset-x-0 top-[115%] border bg-bg-0 p-1 shadow-md">
            <ErrorText>{error}</ErrorText>
          </div>
        )}
        {isPending && (
          <span className="sr-only" aria-live="assertive">
            Đang xử lý kết quả tìm kiếm với từ khóa {inputRef.current?.value}
          </span>
        )}
      </div>
    </form>
  );
}
