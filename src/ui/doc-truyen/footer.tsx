import BackToTop from "../common/back-to-top";
import ThichDocTruyenLogo from "../common/thich-doc-truyen-logo";

export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-[84ch] p-2">
      <ThichDocTruyenLogo size="sm" />
      <p className="mb-2 text-pretty text-sm italic">
        Đọc truyện quá 60 phút sẽ ảnh hưởng đến công việc và sức khỏe
      </p>
      <div className="absolute right-2 top-2 sm:top-1/2 sm:-translate-y-1/2">
        <BackToTop />
      </div>
    </footer>
  );
}
