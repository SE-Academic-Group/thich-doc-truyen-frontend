"use client";

import { usePluginName } from "@/hooks/use-plugin-name";
import { cn } from "@/lib/utils";
import { TStoryChapter } from "@/types/story-chapter";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

type ChapterSelectProps = {
  fullChapterList: TStoryChapter[];
};

export default function ChapterSelect(props: ChapterSelectProps) {
  const router = useRouter();
  const { pluginName: currentPlugin } = usePluginName();
  const searchParams = useSearchParams();
  const novelURL = searchParams.get("novelUrl")!;
  const chapterURL = searchParams.get("chapterUrl")!;
  const [isPending, startTransition] = useTransition();
  const [selectValue, setSelectValue] = useState(chapterURL);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelectValue(chapterURL);
    startTransition(() => {
      const newChapterURL = e.target.value;

      if (!newChapterURL || newChapterURL === chapterURL) return;

      const chapter = props.fullChapterList.find(
        (chapter) => chapter.url === newChapterURL,
      )!;
      router.push(
        `/doc-truyen?chapterUrl=${newChapterURL}&novelUrl=${novelURL}&chapterIndex=${chapter.index}&currentPlugin=${currentPlugin}`,
      );
    });
  };

  useEffect(() => {
    setSelectValue(chapterURL);
  }, [chapterURL]);

  return (
    <select
      onChange={handleChange}
      className={cn(
        "rounded-sm bg-primary px-2 py-1.5 text-sm text-fg-900",
        isPending && "pointer-events-none opacity-50",
      )}
      disabled={isPending}
      value={selectValue}
    >
      {props.fullChapterList.map((chapter) => (
        <option
          key={chapter.url}
          value={chapter.url || ""}
          onClick={(e) => e.preventDefault()}
        >
          Chương {chapter.index}
        </option>
      ))}
    </select>
  );
}
