import { searchAction } from "@/lib/actions";
import { SearchIcon } from "../lib/icons";

// TODO: Check why the action takes so long to perform
export default function HeaderSearch() {
  return (
    <form className="hidden max-w-64 grow md:block" action={searchAction}>
      <label htmlFor="header-search-input" className="sr-only">
        Tìm kiếm truyện
      </label>
      <div className="flex rounded-md border bg-bg_light pe-1 ps-3 text-fg_light focus-within:ring">
        <div className="pointer-events-none flex items-center">
          <SearchIcon className="size-3 text-muted" />
        </div>
        <input
          type="search"
          name="search-input"
          id="header-search-input"
          className="grow rounded-sm px-2.5 py-1 placeholder:text-sm focus:outline-none md:py-1.5 md:text-sm"
          placeholder="Tìm kiếm theo tên truyện..."
          required
        />
      </div>
    </form>
  );
}
