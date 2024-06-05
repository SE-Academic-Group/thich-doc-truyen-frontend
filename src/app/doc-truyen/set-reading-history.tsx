"use client";

import { useReadingHistoryList } from "@/data/use-reading-history-list";
import { TReadingHistory } from "@/types/reading-history";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

type SetReadingHistoryProps = {
  storyTitle: string;
};

export default function SetReadingHistory({
  storyTitle,
}: SetReadingHistoryProps) {
  const searchParams = useSearchParams();
  const [cookies] = useCookies(["pluginName"]);
  const { addNewHistory } = useReadingHistoryList();

  const pluginName = cookies.pluginName;
  const novelURL = searchParams.get("novelUrl");
  const chapterURL = searchParams.get("chapterUrl");
  const chapterIndex = searchParams.get("chapterIndex");

  useEffect(() => {
    if (
      !novelURL ||
      !pluginName ||
      !chapterURL ||
      !storyTitle ||
      !chapterIndex
    ) {
      return;
    }

    const newHistory: TReadingHistory = {
      novelURL,
      chapterURL,
      storyTitle,
      pluginName,
      chapterIndex: parseInt(chapterIndex, 10),
    };

    addNewHistory(newHistory);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
