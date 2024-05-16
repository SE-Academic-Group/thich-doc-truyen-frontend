export default function SearchKeyword({ keyword }: { keyword: string }) {
  return (
    <aside className="py-1 text-sm shadow">
      <p className="container">Tìm kiếm truyện với từ khóa: {keyword}</p>
    </aside>
  );
}
