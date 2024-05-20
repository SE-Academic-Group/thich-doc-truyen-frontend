import ThichDocTruyenLogo from "../thich-doc-truyen-logo";

export default function Footer() {
  return (
    <footer className="border-t border-primary bg-bg-50 py-4">
      <div className="container grid items-center gap-4 md:grid-cols-2">
        <div>
          <ThichDocTruyenLogo size="sm" />
          <p className="max-w-prose text-pretty text-sm">
            Đọc truyện quá 60 phút có hại cho sức khỏe, đặc biệt là mắt của bạn.
            Thích Đọc Truyện không sở hữu tài nguyên truyện nào trên website,
            mọi truyện đều được lấy từ các nguồn trên internet.
          </p>
        </div>
        <p className="md:text-center">
          Copyright &copy; 2024 FIT_HCMUS ANH EM XA DOAN
        </p>
      </div>
    </footer>
  );
}
