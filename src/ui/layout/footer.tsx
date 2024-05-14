import ThichDocTruyenLogo from "../thich-doc-truyen-logo";

export default function Footer() {
  return (
    <footer className="border-y py-2 shadow">
      <div className="container">
        <ThichDocTruyenLogo size="sm" />
        <p className="max-w-prose text-pretty">
          Đọc truyện quá 60 phút có hại cho sức khỏe, đặc biệt là mắt của
          bạn.&nbsp;
          <br />
          Hãy đọc truyện mà bạn thích, đừng đọc truyện vì bạn thích.
        </p>
      </div>
    </footer>
  );
}
