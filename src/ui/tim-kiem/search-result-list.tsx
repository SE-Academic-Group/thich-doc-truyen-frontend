import { getSearchResult } from "@/lib/data";
import Pagination from "../common/pagination";
import ResultStoryCard from "./result-story-card";

export type SearchResultListProps = {
  keyword: string;
  page: number;
};

export default async function SearchResultList({
  keyword,
  page,
}: SearchResultListProps) {
  const { data: stories, metadata } = await getSearchResult({ keyword, page });

  if (!stories) {
    return <div>Có lỗi xảy ra, vui lòng thử lại sau.</div>;
  }

  if (stories.length === 0) {
    return (
      <div>
        Không tìm thấy kết quả nào cho từ khóa&nbsp;
        <span className="font-medium">&quot;{keyword}&quot;</span>.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-x-4 gap-y-5">
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
