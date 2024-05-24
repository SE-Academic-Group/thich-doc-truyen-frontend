export default function ResultStoryCardSkeleton() {
  return (
    <div
      role="status"
      className="grid animate-pulse grid-cols-[auto,1fr] items-center gap-4 rounded-sm border-2 p-4"
    >
      <div className="grid h-[120px] w-[90px] place-items-center rounded bg-bg-300">
        <svg
          className="size-10 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="w-full mixin:rounded-full mixin:bg-bg-200">
        <div className="mixin mb-2 h-2.5 w-56" />
        <div className="mixin mb-4 h-2.5 w-48" />
        <div className="mixin mb-2.5 h-2 max-w-32" />
        <div className="mixin mb-2.5 h-2 max-w-20" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
