import { QuestionIcon } from "../icons";
import Section from "../section";
import ThichDocTruyenLogo from "../thich-doc-truyen-logo";
import SearchBar from "./search-bar";

export default function Search() {
  return (
    <Section title="Tìm kiếm truyện">
      <div className="flex flex-col items-center gap-4 py-12">
        <ThichDocTruyenLogo size="lg" />
        <div className="flex items-center justify-center gap-4">
          <div>
            <span>Nguồn tìm kiếm: </span>
            <span className="font-bold uppercase text-primary">
              truyenfull.vn
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            <QuestionIcon />
            <span>Thay đổi nguồn</span>
          </div>
        </div>
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
