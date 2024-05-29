"use client";

import { searchAction } from "@/lib/actions";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { SearchIcon } from "../../lib/icons";
import Kbd from "../common/kbd";
import ErrorText from "../common/error-text";

export default function SearchForm() {
  const [state, action] = useFormState(searchAction, { error: "" });
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
    <form className="mx-auto w-[min(100%,500px)] space-y-3" action={action}>
      <label htmlFor="search-input" className="sr-only">
        Tìm kiếm truyện theo từ khóa
      </label>
      <div className="flex items-center overflow-hidden rounded-3xl border border-border px-3 ring-border focus-within:ring">
        <SearchIcon className="pointer-events-none size-[14px] text-fg-500" />
        <input
          type="search"
          name="search-input"
          id="search-input"
          className="w-full px-4 py-2 focus:outline-none"
          ref={inputRef}
        />
        <Kbd
          keystrokes={["Ctrl", "K"]}
          screenReaderText="Nhân tổ hợp phím Ctrl và K để tìm kiếm"
        />
      </div>
      <ErrorText>{state?.error}</ErrorText>
    </form>
  );
}
