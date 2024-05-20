import FinishedList from "@/ui/home/finished-list";
import ReadLater from "@/ui/home/read-later";
import ReadingList from "@/ui/home/reading-list";
import Banner from "@/ui/layout/banner";

export default function Page() {
  return (
    <>
      <Banner />
      <main className="py-8">
        <h1 className="sr-only">Trang chủ Thích Đọc Truyện</h1>
        <div className="container space-y-12">
          <ReadingList />
          <FinishedList />
          <ReadLater />
        </div>
      </main>
    </>
  );
}
