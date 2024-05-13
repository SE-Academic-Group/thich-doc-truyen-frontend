// TODO: Mobile first responsive design for search bar
export default function HeaderSearch() {
  return (
    <form className="hidden max-w-sm grow md:block">
      <label htmlFor="header-search-input" className="sr-only">
        Search
      </label>
      <div className="relative flex rounded-md border bg-bg_light pe-2 ps-3 focus-within:ring">
        <div className="pointer-events-none flex items-center">
          <svg
            className="size-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
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
