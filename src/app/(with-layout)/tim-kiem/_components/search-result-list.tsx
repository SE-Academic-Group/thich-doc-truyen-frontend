import Pagination from "../../../../ui/common/pagination";
import ResultStoryCard from "./result-story-card";
import { getSearchResult } from "@/data/get-search-result";
import ErrorBoundary from "@/ui/common/error-boundary";

type SearchResultListProps = {
  keyword: string;
  page: number;
};

export default async function SearchResultList(props: SearchResultListProps) {
  const { results, currentPage, totalPages } = await getSearchResult(props);

  if (results.length == 0) {
    return (
      <div>
        <span>Không tìm thấy kết quả nào cho từ khóa </span>
        <span className="font-medium">&quot;{props.keyword}&quot;</span>.
      </div>
    );
  }

  return (
    <ErrorBoundary fallback={<div>Failed to load search results</div>}>
      <div className="space-y-6">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-x-4 gap-y-5">
          {results.map((result) => (
            <li key={result.url}>
              <ResultStoryCard story={result} />
            </li>
          ))}
        </ul>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </ErrorBoundary>
  );
}
