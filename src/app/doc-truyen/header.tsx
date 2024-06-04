import ThichDocTruyenLogo from "../../ui/common/thich-doc-truyen-logo";
import HeaderSearchForm from "@/ui/layout/header-search-form";

export default function Header() {
  return (
    <header className="mx-auto max-w-[660px] px-2 py-3">
      <div className="flex items-center justify-between">
        <ThichDocTruyenLogo size="sm" compact />
        <HeaderSearchForm />
      </div>
    </header>
  );
}
