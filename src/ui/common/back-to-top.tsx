"use client";

import { useScrollToTop } from "@/lib/hooks";

export default function BackToTop() {
  const { scrollToTop } = useScrollToTop({});

  return (
    <button
      className="size-8 rounded-full bg-primary text-fg-900"
      onClick={scrollToTop}
    >
      &uarr;
      <span className="sr-only">Về đầu trang</span>
    </button>
  );
}
