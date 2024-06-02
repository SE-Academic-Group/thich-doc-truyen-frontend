import ThichDocTruyenLogo from "../common/thich-doc-truyen-logo";
import HeaderSearchForm from "../layout/header-search-form";

export default function Header() {
  return (
    <header className="mx-auto max-w-[84ch] p-2">
      <div className="flex items-center justify-between">
        <ThichDocTruyenLogo size="sm" />
        <HeaderSearchForm />
      </div>
    </header>
  );
}
