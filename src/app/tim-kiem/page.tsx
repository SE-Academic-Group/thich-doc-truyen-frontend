import { SearchParams } from "@/lib/definitions";
import { getSearchParam } from "@/lib/utils";
import SearchKeyword from "@/ui/search/search-keyword";
import SearchResultList from "@/ui/search/search-result-list";
import SearchResultListSkeleton from "@/ui/search/search-result-list.skeleton";
import Section from "@/ui/section";
import type { Metadata } from "next";
import { Suspense } from "react";

type Props = {
  searchParams: SearchParams;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const keyword = getSearchParam({ searchParams, key: "q" });

  return {
    title: "Kết quả tìm kiếm: " + keyword,
  };
}

export default function Page({ searchParams }: Props) {
  const keyword = getSearchParam({ searchParams, key: "q" });
  const page = Number(getSearchParam({ searchParams, key: "page" }) || "1");

  return (
    <div>
      <SearchKeyword keyword={keyword} />
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
