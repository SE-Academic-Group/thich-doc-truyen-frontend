import ResultStoryCardSkeleton from "./result-story-card.skeleton";

export default function SearchResultListSkeleton() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-x-4 gap-y-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index}>
          <ResultStoryCardSkeleton />
        </li>
      ))}
    </ul>
  );
}
