import Link from "next/link";
import Settings from "./settings";

export default function Header() {
  return (
    <header className="flex items-center justify-end gap-6 px-8 py-3">
      <nav aria-label="Điều hướng chính">
        <ul>
          <li>
            <Link href="/lich-su" className="text-sm hover:underline">
              Lịch sử đọc truyện
            </Link>
          </li>
        </ul>
      </nav>
      <Settings />
    </header>
  );
}
