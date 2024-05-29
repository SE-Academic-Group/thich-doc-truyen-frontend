import { Suspense } from "react";
import ErrorBoundary from "../common/error-boundary";
import ThichDocTruyenLogo from "../common/thich-doc-truyen-logo";
import Disclaimer from "./disclaimer";
import SearchForm from "./search-form";
import StorySourceList from "./story-source-list";
import StorySourceListSkeleton from "./story-source-list-skeleton";

export default function Page() {
  return (
    <main className="py-8">
      <h1 className="sr-only">Trang chủ Thích Đọc Truyện</h1>
      <section className="flex h-full flex-col items-center gap-6 px-3 pt-24 sm:pt-12">
        <h2 className="sr-only">Tìm kiếm truyện</h2>
        <ThichDocTruyenLogo size="lg" />
        {/* TODO: add Suspense to let other part of this page to be able statically rendered */}
        <SearchForm />
        <Suspense fallback={<StorySourceListSkeleton />}>
          <ErrorBoundary fallback={<div>error</div>}>
            <StorySourceList />
          </ErrorBoundary>
        </Suspense>
        <Disclaimer />
      </section>
    </main>
  );
}
