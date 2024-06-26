import ThichDocTruyenLogo from "../common/thich-doc-truyen-logo";
import HeaderSearchForm from "./header-search-form";
import PopoverSearch from "./popover-search";

export default function Header() {
  return (
    <header className="bg-bg-50">
      <div className="container flex items-center justify-between py-2">
        <ThichDocTruyenLogo size="sm" />
        <div className="hidden sm:block">
          <HeaderSearchForm />
        </div>
        <div className="sm:hidden">
          <PopoverSearch />
        </div>
      </div>
    </header>
  );
}
