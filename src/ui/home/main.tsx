import { searchAction } from "@/lib/actions";
import { Suspense } from "react";
import ThichDocTruyenLogo from "../common/thich-doc-truyen-logo";
import ErrorBoundary from "../common/error-boundary";
import Disclaimer from "./disclaimer";
import QuickNavigation, { QuickNavigationSkeleton } from "./quick-navigation";
import SearchForm from "./search-form";

export default function Page() {
  return (
    <main className="py-8">
      <h1 className="sr-only">Trang chủ Thích Đọc Truyện</h1>
      <section className="flex h-full flex-col items-center gap-6 px-3 pt-24 sm:pt-12">
        <h2 className="sr-only">Tìm kiếm truyện</h2>
        <ThichDocTruyenLogo size="lg" />
        <SearchForm action={searchAction} />
        <Suspense fallback={<QuickNavigationSkeleton />}>
          <ErrorBoundary fallback={<div>error</div>}>
            <QuickNavigation />
          </ErrorBoundary>
        </Suspense>
        <Disclaimer />
      </section>
    </main>
  );
}
