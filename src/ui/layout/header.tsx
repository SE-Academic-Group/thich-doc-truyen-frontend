import HeaderSearch from "../header-search";
import ThichDocTruyenLogo from "../thich-doc-truyen-logo";
import UserSettings from "../user-settings";

export default function Header() {
  return (
    <header className="bg-primary py-2.5 text-fg_primary">
      <div className="container flex items-center justify-between">
        <ThichDocTruyenLogo />
        <HeaderSearch />
        <UserSettings />
      </div>
    </header>
  );
}
