import { searchAction } from "@/lib/actions";
import ThichDocTruyenLogo from "@/ui/common/thich-doc-truyen-logo";
import Disclaimer from "@/ui/home/disclaimer";
import Footer from "@/ui/home/footer";
import Header from "@/ui/home/header";
import QuickNavigation from "@/ui/home/quick-navigation";
import SearchForm from "@/ui/home/search-form";

export default function Page() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto,1fr,auto]">
      <Header />
      <main className="py-8">
        <h1 className="sr-only">Trang chủ Thích Đọc Truyện</h1>
        <section className="flex h-full flex-col items-center gap-5 px-3 pt-24 sm:pt-12">
          <h2 className="sr-only">Tìm kiếm truyện</h2>
          <ThichDocTruyenLogo size="lg" />
          <SearchForm action={searchAction} />
          <QuickNavigation />
          <Disclaimer />
        </section>
      </main>
      <Footer />
    </div>
  );
}
