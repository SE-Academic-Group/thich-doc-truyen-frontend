"use client";

import { TrashIcon } from "@/lib/icons";
import { capitalize } from "@/lib/utils";
import groupBy from "lodash.groupby";
import Link from "next/link";
import { useState } from "react";

export default function ReadingHistory() {
  const [readingHistory, setReadingHistory] = useState(() => {
    const readingHistory = localStorage.getItem("readingHistory") ?? "[]";
    return JSON.parse(readingHistory);
  });
  const groupedByPlugin = groupBy(readingHistory, "pluginName");

  const handleRemoveHistory = (novelURL: string, chapterIndex: string) => {
    const newReadingHistory = readingHistory.filter(
      (story: any) =>
        story.novelURL !== novelURL || story.chapterIndex !== chapterIndex,
    );

    localStorage.setItem("readingHistory", JSON.stringify(newReadingHistory));
    setReadingHistory(newReadingHistory);
  };

  const handleRemoveAllHistory = () => {
    const confirmed = window.confirm(
      "Bạn có chắc chắn muốn xoá tất cả lịch sử đọc truyện?",
    );

    if (confirmed) {
      localStorage.removeItem("readingHistory");
      setReadingHistory([]);
    }
  };

  if (!readingHistory.length) {
    return <p>Chưa có lịch sử đọc truyện nào.</p>;
  }

  return (
    <div className="relative">
      <div className="absolute top-0 right-0">
        <button
          className="inline-flex gap-1 hover:text-red-500"
          onClick={handleRemoveAllHistory}
        >
          <TrashIcon size={18} className="mt-[2px]" />
          <span>Xoá tất cả</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(groupedByPlugin).map(([pluginName, histories]) => (
          <section key={pluginName}>
            <h2 className="text-lg font-medium mt-4">
              {capitalize(pluginName)}
            </h2>
            <ul className="mt-2">
              {histories.map((history) => (
                <li
                  key={history.chapterIndex}
                  className="mt-2 flex justify-between items-center w-full bg-bg-50 py-1 px-2 rounded"
                >
                  <Link
                    href={`/doc-truyen?chapterUrl=${history.chapterURL}&novelUrl=${history.novelURL}&chapterIndex=${history.chapterIndex}`}
                    className="line-clamp-1 hover:underline"
                  >
                    Chương {history.chapterIndex} - {history.storyTitle}
                  </Link>
                  <button
                    className="hover:text-red-500"
                    onClick={() =>
                      handleRemoveHistory(
                        history.novelURL,
                        history.chapterIndex,
                      )
                    }
                  >
                    <TrashIcon size={18} />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
