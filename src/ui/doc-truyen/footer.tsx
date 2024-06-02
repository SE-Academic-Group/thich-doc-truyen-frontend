import BackToTop from "../common/back-to-top";
import ThichDocTruyenLogo from "../common/thich-doc-truyen-logo";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[84ch] p-2">
      <p className="mb-2 text-pretty text-center text-sm italic">
        Đọc truyện quá 60 phút sẽ ảnh hưởng đến công việc và sức khỏe
      </p>
      <div className="flex items-center justify-between border-t py-2">
        <ThichDocTruyenLogo size="sm" />
        <BackToTop />
      </div>
    </footer>
  );
}
