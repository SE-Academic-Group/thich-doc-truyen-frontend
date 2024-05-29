export type SearchKeywordProps = Readonly<{
  keyword: string;
}>;

export default function SearchKeyword(props: SearchKeywordProps) {
  return (
    <aside className="bg-bg_light py-1 text-sm shadow">
      <p className="container text-fg-500">
        Tìm kiếm truyện với từ khóa: &quot;{props.keyword}&quot;
      </p>
    </aside>
  );
}
