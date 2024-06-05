"use client";

import { SearchIcon } from "../../lib/icons";
import ErrorText from "../../ui/common/error-text";
import { cn } from "@/lib/utils";
import { searchQuerySchema } from "@/types/search-query";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";

export default function SearchForm() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const transition = () => {
      const parsedQuery = searchQuerySchema.safeParse(inputRef.current?.value);

      if (parsedQuery.success) {
        router.push(`/tim-kiem?q=${parsedQuery.data}`);
      } else {
        setErrorMsg(parsedQuery.error.format()._errors.join("; "));
      }
    };

    startTransition(transition);
  };

  useEffect(() => {
    const handleSearch = (event: KeyboardEvent) => {
      if (event.key === "/") {
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
    <form
      className="mx-auto w-[min(100%,500px)] space-y-2 md:space-y-3"
      onSubmit={handleSearch}
    >
      <label htmlFor="search-input" className="sr-only">
        Tìm kiếm truyện theo từ khóa
      </label>
      <div
        className={cn(
          "rounded-3xl border border-border ring-border",
          "overflow-hidden focus-within:ring",
          "flex items-center px-3",
          isPending && "pointer-events-none animate-pulse bg-bg-100",
        )}
      >
        <SearchIcon className="text-fg-500" size={14} />
        <input
          type="search"
          name="search-input"
          id="search-input"
          className="w-full bg-transparent px-4 py-2 focus:outline-none"
          ref={inputRef}
        />
      </div>
      {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
    </form>
  );
}
