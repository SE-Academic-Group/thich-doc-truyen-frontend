"use client";

import { searchAction } from "@/lib/actions";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { SearchIcon } from "../../lib/icons";
import Kbd from "../common/kbd";
import ErrorText from "../common/error-text";

export default function HeaderSearchForm() {
  const [state, action] = useFormState(searchAction, { error: "" });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleSearch = (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleSearch);
    return () => {
      window.removeEventListener("keydown", handleSearch);
    };
  }, []);

  return (
    <form action={action}>
      <label htmlFor="search-input" className="sr-only">
        Tìm kiếm truyện theo từ khóa
      </label>
      <div className="relative flex items-center rounded border border-border bg-bg-0 px-2">
        <SearchIcon className="pointer-events-none size-[14px] text-fg-500" />
        <input
          type="search"
          name="search-input"
          id="search-input"
          className="w-full px-4 py-1 placeholder:text-sm focus:outline-none"
          placeholder="Tìm kiếm theo từ khóa..."
          ref={inputRef}
        />
        <Kbd keystrokes={["/"]} screenReaderText="Nhấn phím để tìm kiếm" />
        <div className="absolute inset-x-0 top-[110%] bg-bg-50 p-0.5 shadow">
          <ErrorText>{state.error}</ErrorText>
        </div>
      </div>
    </form>
  );
}
