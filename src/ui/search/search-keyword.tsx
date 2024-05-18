export default function SearchKeyword({ keyword }: { keyword: string }) {
  return (
    <aside className="bg-bg_light py-1 text-sm shadow">
      <p className="container text-muted">
        Tìm kiếm truyện với từ khóa: &quot;{keyword}&quot;
      </p>
    </aside>
  );
}
