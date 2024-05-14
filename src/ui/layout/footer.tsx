import ThichDocTruyenLogo from "../thich-doc-truyen-logo";

export default function Footer() {
  return (
    <footer className="border-y py-3 shadow">
      <div className="container grid grid-cols-2 items-center gap-4">
        <div>
          <ThichDocTruyenLogo size="sm" />
          <p className="max-w-prose text-pretty">
            Đọc truyện quá 60 phút có hại cho sức khỏe, đặc biệt là mắt của
            bạn.&nbsp;
            <br />
            Hãy đọc truyện mà bạn thích, đừng đọc truyện vì bạn thích.
          </p>
        </div>
        <p className="text-center">
          Copyright &copy; 2024 FIT_HCMUS ANH EM XA DOAN
        </p>
      </div>
    </footer>
  );
}
