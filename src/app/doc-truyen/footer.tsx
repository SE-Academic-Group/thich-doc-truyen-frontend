import BackToTop from "../../ui/common/back-to-top";
import ThichDocTruyenLogo from "../../ui/common/thich-doc-truyen-logo";

export default function Footer() {
  return (
    <footer className="flex container p-2 items-center gap-1 justify-between">
      <div>
        <ThichDocTruyenLogo size="sm" />
        <p className="mb-2  text-sm italic hidden sm:block">
          Đọc truyện quá 60 phút sẽ ảnh hưởng đến công việc và sức khỏe
        </p>
      </div>
      <div>
        <BackToTop />
      </div>
    </footer>
  );
}
