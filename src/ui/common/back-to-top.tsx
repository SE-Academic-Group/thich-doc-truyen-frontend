"use client";

import { useScrollToTop } from "@/lib/hooks";

export default function BackToTop() {
  const { scrollToTop } = useScrollToTop({});
  return (
    <button className="rounded bg-bg-200 px-2 py-1" onClick={scrollToTop}>
      Về đầu trang &uarr;
    </button>
  );
}
