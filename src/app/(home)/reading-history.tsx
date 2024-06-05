"use client";

import Disclaimer from "./disclaimer";
import { TReadingHistory as ReadingHistoryType } from "@/types/reading-history";
import Link from "next/link";
import { useState } from "react";

export default function ReadingHistory() {
  const [readingHistory] = useState(() => {
    const readingHistory = localStorage.getItem("readingHistory") ?? "[]";
    const parsed = JSON.parse(readingHistory) as ReadingHistoryType[];
    const fiveLatestHistory = parsed.slice(-5).reverse();
    return fiveLatestHistory;
  });

  if (!readingHistory.length) {
    return <Disclaimer />;
  }

  return (
    <div>
      <div className="md:hidden mb-3">
        <Disclaimer />
      </div>
      <section>
        <h3 className="text-base font-medium text-center text-fg-500">
          Đọc gần đây
        </h3>
        <ul className="mt-2 text-sm max-w-prose divide-y">
          {readingHistory.map((history) => (
            <li
              key={history.novelURL}
              className="underline underline-offset-2 md:no-underline py-1"
            >
              <Link
                href={`/doc-truyen?chapterUrl=${history.chapterURL}&novelUrl=${history.novelURL}&chapterIndex=${history.chapterIndex}`}
                className="line-clamp-1 hover:underline"
              >
                Chương {history.chapterIndex} - {history.storyTitle}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
