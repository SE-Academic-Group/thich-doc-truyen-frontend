import ThichDocTruyenLogo from "../common/thich-doc-truyen-logo";

export default function Footer() {
  return (
    <footer className="bg-bg-50">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
        <ThichDocTruyenLogo size="sm" className="hidden sm:block" />
        <p className="max-w-prose text-pretty text-sm md:text-center">
          Đây chỉ là website phục vụ nhu cầu đồ án môn học. Chúng tôi không có
          mục đích thương mại cạnh tranh với bất kỳ trang web nào khác.
        </p>
      </div>
    </footer>
  );
}
