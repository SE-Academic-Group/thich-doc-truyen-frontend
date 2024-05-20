import { searchAction } from "@/lib/actions";
import { SearchIcon } from "../../lib/icons";

export default function SearchBar() {
  return (
    <form
      className="mx-auto grid max-w-md grid-cols-[1fr_auto] gap-2"
      action={searchAction}
    >
      <label htmlFor="search-input" className="sr-only">
        Tìm kiếm truyện
      </label>
      <div className="bg-bg_light flex rounded-full border-2 pe-1 ps-3 focus-within:ring">
        <div className="pointer-events-none flex items-center">
          <SearchIcon />
        </div>
        <input
          type="search"
          name="search-input"
          id="search-input"
          className="grow rounded-lg bg-bg_light px-4 py-2 text-fg_light placeholder:text-sm focus:outline-none"
          required
        />
      </div>
    </form>
  );
}
