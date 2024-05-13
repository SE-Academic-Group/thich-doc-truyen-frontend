export default function Page() {
  return (
    <main className="py-8">
      <div className="container">
        <h1 className="sr-only">Trang chủ Thích Đọc Truyện</h1>
        <section>
          <h2 className="text-xl font-semibold uppercase underline underline-offset-4">
            Tìm kiếm truyện
          </h2>
          <div>search</div>
        </section>
        <div className="grid grid-cols-2 gap-2">
          <section>
            <h2 className="text-xl font-semibold uppercase underline underline-offset-4">
              Truyện đã đọc xong
            </h2>
            <div>Danh sach</div>
          </section>
          <section>
            <h2 className="text-xl font-semibold uppercase underline underline-offset-4">
              Truyện đang đọc
            </h2>
            <div>Danh sach</div>
          </section>
        </div>
      </div>
    </main>
  );
}
