import { Suspense } from "react";
import ErrorBoundary from "../../ui/common/error-boundary";
import ThichDocTruyenLogo from "../../ui/common/thich-doc-truyen-logo";
import Disclaimer from "./disclaimer";
import SearchForm from "./search-form";
import StorySourceList from "./story-source-list";
import StorySourceListSkeleton from "./story-source-list-skeleton";

export default function Page() {
  return (
    <main className="py-8">
      <section className="flex h-full flex-col items-center gap-4 px-3 pt-20 sm:pt-12 md:gap-6">
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
