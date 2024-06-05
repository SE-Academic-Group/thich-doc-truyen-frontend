"use client";

import Disclaimer from "./disclaimer";
import { useReadingHistoryList } from "@/data/use-reading-history-list";
import Link from "next/link";

export default function ReadingHistory() {
  const { readingHistoryList } = useReadingHistoryList();
  const fiveRecentlyRead = readingHistoryList.slice(-5).toReversed();

  if (fiveRecentlyRead.length == 0) {
    return <Disclaimer />;
  }

  return (
    <>
      <div className="md:hidden mb-3">
        <Disclaimer />
      </div>
      <section>
        <h3 className="text-base font-medium text-center text-fg-500">
          Đọc gần đây
        </h3>
        <ul className="mt-2 text-sm max-w-prose divide-y">
          {fiveRecentlyRead.map((history) => (
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
    </>
  );
}
