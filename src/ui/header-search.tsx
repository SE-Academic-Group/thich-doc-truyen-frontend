import { SearchIcon } from "./icons";

// TODO: Mobile first responsive design for search bar
export default function HeaderSearch() {
  return (
    <form className="hidden max-w-sm grow md:block">
      <label htmlFor="header-search-input" className="sr-only">
        Search
      </label>
      <div className="relative flex rounded-md border bg-bg_light pe-2 ps-3 focus-within:ring">
        <div className="pointer-events-none flex items-center">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="header-search-input"
          className="grow rounded-lg bg-bg_light px-2.5 py-1.5 text-fg_light placeholder:text-sm focus:outline-none"
          placeholder="Tìm kiếm theo tên truyện, tên tác giả..."
          required
        />
        <button
          type="submit"
          className="self-center rounded-md bg-primary px-2 py-1 text-sm"
        >
          Tìm kiếm
        </button>
      </div>
    </form>
  );
}
