"use client";

import { ServerAction } from "@/lib/actions";
import { SearchIcon } from "../../lib/icons";
import { useEffect, useRef } from "react";

export type SearchFormProps = {
  action: ServerAction;
};

export default function SearchForm({ action }: SearchFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleSearch = (event: KeyboardEvent) => {
      if (event.key === "k" && event.ctrlKey) {
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
          <kbd role="presentation" className="rounded bg-bg-50 p-1">
            Ctrl
          </kbd>
          <kbd role="presentation" className="rounded bg-bg-50 p-1">
            K
          </kbd>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <fieldset className="rounded border text-sm">
            <legend className="text-xs">Tìm kiếm theo</legend>
            <ul className="space-x-2.5 px-2 py-0.5">
              <li className="inline-flex items-center gap-1">
                <input
                  type="radio"
                  id="ten-truyen"
                  name="search-by"
                  value="title"
                  defaultChecked
                />
                <label htmlFor="ten-truyen">Tên truyện</label>
              </li>
              <li className="inline-flex items-center gap-1">
                <input
                  type="radio"
                  id="ten-tac-gia"
                  name="search-by"
                  value="author"
                />
                <label htmlFor="ten-tac-gia">Tác giả</label>
              </li>
            </ul>
          </fieldset>
          <fieldset className="rounded border text-sm">
            <legend className="text-xs">Nguồn tìm kiếm</legend>
            <select
              name="story-source"
              id="story-source"
              className="px-2 py-0.5"
            >
              <option value="truyenfull" selected>
                Truyện Full
              </option>
              <option value="truyencv">Truyện CV</option>
              <option value="wikidich">Wiki Dịch</option>
            </select>
          </fieldset>
        </div>
        <button className="rounded-sm bg-bg-200 px-2.5 py-1" type="submit">
          Tìm kiếm
        </button>
      </div>
    </form>
  );
}
