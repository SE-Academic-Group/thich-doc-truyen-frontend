"use client";

import { useScrollToTop } from "@/lib/hooks";
import { MoveUpIcon } from "@/lib/icons";

export default function BackToTop() {
  const { scrollToTop } = useScrollToTop({});

  return (
    <button
      className="size-8 rounded-full bg-primary text-fg-900 grid place-content-center"
      onClick={scrollToTop}
    >
      <MoveUpIcon size={18} />
      <span className="sr-only">Về đầu trang</span>
    </button>
  );
}
