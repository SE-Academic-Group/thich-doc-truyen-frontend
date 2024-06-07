import SearchResultList from "@/app/(with-layout)/tim-kiem/_components/search-result-list";
import SearchResultListSkeleton from "@/app/(with-layout)/tim-kiem/_components/search-result-list-skeleton";
import { getSearchParam } from "@/lib/utils";
import { TSearchParams } from "@/types/search-params";
import Section from "@/ui/common/section";
import { Suspense } from "react";

type PageProps = {
  searchParams: TSearchParams;
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
    <main className="container py-4">
      <Section title={`Kết quả tìm kiếm - Trang ${page}`} className="my-2">
        <Suspense fallback={<SearchResultListSkeleton />}>
          <SearchResultList keyword={keyword} page={page} />
        </Suspense>
      </Section>
    </main>
  );
}
