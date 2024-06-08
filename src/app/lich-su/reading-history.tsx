"use client";

import { useReadingHistoryList } from "@/data/use-reading-history-list";
import { TrashIcon } from "@/lib/icons";
import { buildReadingURL } from "@/types/reading-history";
import Link from "next/link";

export default function ReadingHistory() {
  const { readingHistoryList, removeHistory, clearHistory } =
    useReadingHistoryList();

  if (!readingHistoryList.length) {
    return <p>Chưa có lịch sử đọc truyện nào.</p>;
  }

  return (
    <div className="relative">
      <div className="text-end absolute right-0 bottom-[105%]">
        <button
          className="inline-flex gap-1 hover:text-red-500 text-sm"
          onClick={clearHistory}
        >
          <TrashIcon size={14} className="mt-[3px]" />
          <span>Xoá tất cả</span>
        </button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 py-3">
        {readingHistoryList.map((history) => (
          <li
            key={history.novelURL}
            className="flex justify-between items-center w-full bg-bg-50 py-1 px-2 rounded"
          >
            <Link
              href={buildReadingURL(history)}
              className="line-clamp-1 hover:underline"
            >
              Chương {history.chapterIndex} - {history.storyTitle}
            </Link>
            <button
              className="hover:text-red-500"
              onClick={() => removeHistory(history.novelURL)}
            >
              <TrashIcon size={18} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
