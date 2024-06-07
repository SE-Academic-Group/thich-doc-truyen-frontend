import ReadingHistory from "./reading-history";
import SearchForm from "./search-form";
import StorySourceList from "./story-source-list";
import StorySourceListSkeleton from "./story-source-list-skeleton";
import ClientOnlyComponent from "@/ui/common/client-only-component";
import ErrorBoundary from "@/ui/common/error-boundary";
import ErrorText from "@/ui/common/error-text";
import ThichDocTruyenLogo from "@/ui/common/thich-doc-truyen-logo";
import { Suspense } from "react";

export default function Main() {
  return (
    <main className="py-8">
      <section className="flex h-full flex-col items-center gap-4 px-3 pt-20 sm:pt-12 md:gap-6">
        <ThichDocTruyenLogo size="lg" />
        <SearchForm />
        <ErrorBoundary fallback={<ErrorText>Dịch vụ không có sẳn</ErrorText>}>
          <Suspense fallback={<StorySourceListSkeleton />}>
            <StorySourceList />
          </Suspense>
        </ErrorBoundary>
        <ClientOnlyComponent
          fallback={
            <p aria-live="polite" className="text-center">
              Chờ chút nha...
            </p>
          }
        >
          <ReadingHistory />
        </ClientOnlyComponent>
      </section>
    </main>
  );
}
