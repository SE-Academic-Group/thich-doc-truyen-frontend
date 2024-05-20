import { searchAction } from "@/lib/actions";
import ThichDocTruyenLogo from "@/ui/common/thich-doc-truyen-logo";
import Footer from "@/ui/home/footer";
import SearchForm from "@/ui/home/search-form";
import SearchSourceInfo from "@/ui/home/search-source-info";

export default function Page() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto,1fr,auto]">
      <header></header>
      <main className="py-8">
        <h1 className="sr-only">Trang chủ Thích Đọc Truyện</h1>
        <section className="grid h-full grid-cols-1 place-content-center place-items-center gap-5 px-3 py-12">
          <h2 className="sr-only">Tìm kiếm truyện</h2>
          <ThichDocTruyenLogo size="lg" />
          <SearchSourceInfo />
          <SearchForm action={searchAction} />
          <p className="mx-auto w-fit text-center">
            <span>Truyện được tìm kiếm từ các nguồn bên thứ ba.</span>
            <br />
            <span>Chất lượng sẽ không ổn định và dữ liệu không nhất quán.</span>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
