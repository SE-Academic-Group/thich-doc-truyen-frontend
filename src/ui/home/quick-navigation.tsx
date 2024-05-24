import Link from "next/link";

export default function QuickNavigation() {
  return (
    <nav aria-label="Điều hướng nhanh ở trang chủ">
      <ul className="flex flex-wrap gap-4">
        <li>
          <Link
            href="/lich-su"
            className="rounded-sm bg-bg-200 px-2 py-1 hover:underline"
          >
            Truyện Full
          </Link>
        </li>
        <li>
          <Link
            href="/lich-su"
            className="rounded-sm bg-bg-200 px-2 py-1 hover:underline"
          >
            Tàng Thư Viện
          </Link>
        </li>
        <li>
          <Link
            href="/lich-su"
            className="rounded-sm bg-bg-200 px-2 py-1 hover:underline"
          >
            Thích Truyện
          </Link>
        </li>
      </ul>
    </nav>
  );
}
