"use client";

import { useReadingHistoryList } from "@/data/use-reading-history-list";
import { TReadingHistory } from "@/types/reading-history";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

type SetReadingHistoryProps = {
  storyTitle: string;
};

export default function SetReadingHistory({
  storyTitle,
}: SetReadingHistoryProps) {
  const searchParams = useSearchParams();
  const novelURL = searchParams.get("novelUrl")!;
  const chapterURL = searchParams.get("chapterUrl")!;
  const chapterIndex = searchParams.get("chapterIndex")!;

  const { addNewHistory } = useReadingHistoryList();

  useEffect(() => {
    if (!novelURL || !chapterURL || !storyTitle || !chapterIndex) return;

    const newHistory: TReadingHistory = {
      novelURL,
      chapterURL,
      storyTitle,
      chapterIndex: parseInt(chapterIndex, 10),
    };

    addNewHistory(newHistory);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterIndex]);

  return null;
}
