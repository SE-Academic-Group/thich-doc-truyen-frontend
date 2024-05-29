import ThichDocTruyenLogo from "../common/thich-doc-truyen-logo";
import ChangeSourceSetting from "../home/change-source-setting";
import HeaderSearchForm from "./header-search-form";

export default function Header() {
  return (
    <header className="bg-bg-100">
      <div className="container flex justify-between py-2">
        <ThichDocTruyenLogo size="sm" />
        <HeaderSearchForm />
        <ChangeSourceSetting />
      </div>
    </header>
  );
}
