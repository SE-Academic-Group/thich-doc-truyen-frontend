import SearchKeyword from "@/ui/search/search-keyword";
import SearchResultList from "@/ui/search/search-result-list";
import { Suspense } from "react";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const q = searchParams["q"] ?? "";
  let keyword = "";

  if (Array.isArray(q)) {
    keyword = q.at(0) ?? "";
  } else {
    keyword = q;
  }

  return (
    <div>
      <SearchKeyword keyword={keyword} />
      <main className="container py-4">
        <Suspense fallback={<div>loading results</div>}>
          <SearchResultList keyword={keyword} />
        </Suspense>
      </main>
    </div>
  );
}
