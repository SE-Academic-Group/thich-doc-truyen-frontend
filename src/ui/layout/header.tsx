import ThichDocTruyenLogo from "../common/thich-doc-truyen-logo";
import UserSettings from "./user-settings";

export default function Header() {
  return (
    <header className="bg-primary py-3 text-fg-900">
      <div className="container flex items-center justify-between">
        <ThichDocTruyenLogo />
        <UserSettings />
      </div>
    </header>
  );
}
