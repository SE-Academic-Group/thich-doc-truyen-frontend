import Pagination from "../../../ui/common/pagination";
import ResultStoryCard from "./result-story-card";
import { getSearchResult } from "@/data/get-search-result";

export type SearchResultListProps = Readonly<{
  keyword: string;
  page: number;
}>;

export default async function SearchResultList(props: SearchResultListProps) {
  const { data: stories, metadata } = await getSearchResult(props);

  if (!stories?.length) {
    return (
      <div>
        <span>Không tìm thấy kết quả nào cho từ khóa </span>
        <span className="font-medium">&quot;{props.keyword}&quot;</span>.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-x-4 gap-y-5">
        {stories.map((story) => (
          <li key={story.url}>
            <ResultStoryCard story={story} />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={metadata.currentPage}
        totalPages={metadata.maxPage}
      />
    </div>
  );
}
