import SearchResultList from "@/app/(with-layout)/tim-kiem/search-result-list";
import SearchResultListSkeleton from "@/app/(with-layout)/tim-kiem/search-result-list-skeleton";
import { getSearchParam } from "@/lib/utils";
import { SearchParams } from "@/types/search-params";
import Section from "@/ui/common/section";
import SearchKeyword from "@/ui/layout/search-keyword";
import { Suspense } from "react";

export type PageProps = {
  searchParams: SearchParams;
};

export async function generateMetadata({ searchParams }: PageProps) {
  const keyword = getSearchParam({ searchParams, key: "q" });

  return {
    title: "Kết quả tìm kiếm: " + keyword,
  };
}

export default function Page({ searchParams }: PageProps) {
  const keyword = getSearchParam({ searchParams, key: "q" });
  const page = Number(getSearchParam({ searchParams, key: "page" }) || "1");

  return (
    <div>
      <Suspense
        fallback={
          <div className="container text-sm">
            Tìm kiếm truyện với từ khóa:...
          </div>
        }
      >
        <SearchKeyword />
      </Suspense>
      <main className="container py-4">
        <Section title={`Kết quả tìm kiếm - Trang ${page}`} className="my-2">
          <Suspense fallback={<SearchResultListSkeleton />}>
            <SearchResultList keyword={keyword} page={page} />
          </Suspense>
        </Section>
      </main>
    </div>
  );
}
