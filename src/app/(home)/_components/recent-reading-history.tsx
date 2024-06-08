"use client";

import Disclaimer from "../_layout/disclaimer";
import { useReadingHistoryList } from "@/data/use-reading-history-list";
import { buildReadingURL } from "@/types/reading-history";
import Link from "next/link";

const NUMBER_OF_RECENTLY_READ = 5;

export default function RecentReadingHistory() {
  const { readingHistoryList } = useReadingHistoryList();

  if (readingHistoryList.length == 0) return <Disclaimer />;

  const recentlyRead = readingHistoryList
    .slice(NUMBER_OF_RECENTLY_READ * -1)
    .toReversed();

  return (
    <section>
      <h3 className="text-base font-medium text-center text-fg-500">
        Đọc gần đây
      </h3>
      <ul className="mt-2 text-sm max-w-prose divide-y">
        {recentlyRead.map((history) => (
          <li
            key={history.novelURL}
            className="underline underline-offset-2 md:no-underline py-1"
          >
            <Link
              href={buildReadingURL(history)}
              className="line-clamp-1 hover:underline"
            >
              Chương {history.chapterIndex} - {history.storyTitle}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
