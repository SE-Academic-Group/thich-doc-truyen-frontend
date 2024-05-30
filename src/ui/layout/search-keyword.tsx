"use client";

import { useSearchParams } from "next/navigation";

export default function SearchKeyword() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  return (
    <aside className="border-y bg-bg-0 py-1 text-sm">
      <p className="container text-fg-500">
        Tìm kiếm truyện với từ khóa: &quot;{q}&quot;
      </p>
    </aside>
  );
}
