import ThichDocTruyenLogo from "../common/thich-doc-truyen-logo";
import Settings from "../home/settings";
import HeaderSearchForm from "./header-search-form";

export default function Header() {
  return (
    <header className="bg-bg-100">
      <div className="container flex items-center justify-between py-2">
        <ThichDocTruyenLogo size="sm" />
        <HeaderSearchForm />
        <Settings />
      </div>
    </header>
  );
}
