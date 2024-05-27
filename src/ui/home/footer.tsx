import ThichDocTruyenLogo from "../common/thich-doc-truyen-logo";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-bg-100 px-8 py-3 text-sm text-fg-200 sm:justify-between sm:text-base">
      <div className="hidden sm:block">
        <ThichDocTruyenLogo size="sm" />
      </div>
      <p className="text-sm">Copyright&copy; 2024 FIT_HCMUS ANH EM XA DOAN</p>
    </footer>
  );
}
