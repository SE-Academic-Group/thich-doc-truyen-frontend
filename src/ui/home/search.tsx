import Section from "../section";
import ThichDocTruyenLogo from "../thich-doc-truyen-logo";
import SearchBar from "./search-bar";
import SearchSourceInfo from "./search-source-info";

export default function Search() {
  return (
    <Section title="Tìm kiếm truyện">
      <div className="flex flex-col items-center gap-4 py-12">
        <ThichDocTruyenLogo size="lg" />
        <SearchSourceInfo />
        <div className="self-stretch">
          <SearchBar />
        </div>
        <p className="mx-auto w-fit text-center text-sm">
          Truyện được tìm kiếm từ các nguồn bên thứ ba. <br /> Chất lượng sẽ
          không ổn định và dữ liệu không nhất quán.
        </p>
      </div>
    </Section>
  );
}
