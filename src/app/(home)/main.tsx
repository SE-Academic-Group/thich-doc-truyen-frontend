import ErrorBoundary from "../../ui/common/error-boundary";
import ThichDocTruyenLogo from "../../ui/common/thich-doc-truyen-logo";
import ReadingHistory from "./reading-history";
import SearchForm from "./search-form";
import StorySourceList from "./story-source-list";
import StorySourceListSkeleton from "./story-source-list-skeleton";
import ClientOnly from "@/ui/common/client-only";
import ErrorText from "@/ui/common/error-text";
import { Suspense } from "react";

export default function Main() {
  return (
    <main className="py-8">
      <section className="flex h-full flex-col items-center gap-4 px-3 pt-20 sm:pt-12 md:gap-6">
        <ThichDocTruyenLogo size="lg" />
        <SearchForm />
        <Suspense fallback={<StorySourceListSkeleton />}>
          <ErrorBoundary fallback={<ErrorText>Có lỗi xảy ra</ErrorText>}>
            <StorySourceList />
          </ErrorBoundary>
        </Suspense>
        <ClientOnly>
          <ReadingHistory />
        </ClientOnly>
      </section>
    </main>
  );
}
