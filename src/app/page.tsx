import FinishedList from "@/ui/home/finished-list";
import ReadingList from "@/ui/home/reading-list";
import Search from "@/ui/home/search";
import Banner from "@/ui/layout/banner";

export default function Page() {
  return (
    <div>
      <Banner />
      <main className="py-8">
        <h1 className="sr-only">Trang chủ Thích Đọc Truyện</h1>
        <div className="container">
          <Search />
          <div className="grid grid-cols-2 gap-2">
            <FinishedList />
            <ReadingList />
          </div>
        </div>
      </main>
    </div>
  );
}
