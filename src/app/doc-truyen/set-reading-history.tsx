"use client";

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
  const novelURL = searchParams.get("novelUrl")!;
  const chapterURL = searchParams.get("chapterUrl")!;
  const chapterIndex = searchParams.get("chapterIndex")!;
  const [cookies] = useCookies(["pluginName"]);
  const pluginName = cookies.pluginName;

  useEffect(() => {
    const readingHistory = localStorage.getItem("readingHistory") ?? "[]";
    const newReadingHistory = JSON.parse(readingHistory).filter(
      (story: any) => story.novelURL !== novelURL,
    );

    console.log(newReadingHistory);

    localStorage.setItem(
      "readingHistory",
      JSON.stringify([
        ...newReadingHistory,
        {
          novelURL,
          chapterURL,
          chapterIndex,
          pluginName,
          storyTitle,
        },
      ]),
    );
  }, [chapterIndex, chapterURL, novelURL, pluginName, storyTitle]);

  return null;
}
