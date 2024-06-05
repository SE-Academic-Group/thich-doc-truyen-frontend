import Settings from "./settings";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-end gap-2 p-2 md:gap-4 md:px-8 md:py-3">
      <nav>
        <Link href="/lich-su" className="text-sm hover:underline">
          Lịch sử đọc truyện
        </Link>
      </nav>
      <Settings />
    </header>
  );
}
