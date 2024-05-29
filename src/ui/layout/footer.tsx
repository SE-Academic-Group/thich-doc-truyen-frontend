import ThichDocTruyenLogo from "../common/thich-doc-truyen-logo";

export default function Footer() {
  return (
    <footer className="bg-bg-50">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-6">
        <ThichDocTruyenLogo size="sm" />
        <p className="max-w-prose text-pretty text-center text-sm">
          Đây chỉ là website phục vụ nhu cầu đồ án môn học. Chúng tôi không có
          mục đích thương mại cạnh tranh với bất kỳ trang web nào khác.
        </p>
      </div>
    </footer>
  );
}
