"use client";

import { cn } from "@/lib/utils";
import { StoryChapter } from "@/types/story-chapter";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

type ChapterSelectProps = {
  fullChapterList: StoryChapter[];
};

export default function ChapterSelect(props: ChapterSelectProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const chapterURL = searchParams.get("chapterUrl")!;
  const novelURL = searchParams.get("novelUrl")!;
  const [selectValue, setSelectValue] = useState(chapterURL);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    setSelectValue(chapterURL);
    startTransition(() => {
      const newChapterURL = e.target.value;
      const chapter = props.fullChapterList.find(
        (chapter) => chapter.url === newChapterURL,
      )!;
      router.push(
        `/doc-truyen?chapterUrl=${newChapterURL}&novelUrl=${novelURL}&chapterIndex=${chapter.index}`,
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
          value={chapter.url}
          onClick={(e) => e.preventDefault()}
        >
          Chương {chapter.index}
        </option>
      ))}
    </select>
  );
}
