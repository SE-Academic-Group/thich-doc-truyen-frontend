"use client";

import FullChapterList from "./full-chapter-list";
import { ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type ChapterNavigationProps = {
  navigation: {
    prevPage: string | null;
    nextPage: string | null;
  };
};

export default function ChapterNavigation({
  navigation,
}: ChapterNavigationProps) {
  const { prevPage: prevChapter, nextPage: nextChapter } = navigation;
  const searchParams = useSearchParams();
  const novelURL = searchParams.get("novelUrl")!;
  const chapterIndex = Number(searchParams.get("chapterIndex")!);

  return (
    <nav className="mt-4 mb-6 flex justify-center gap-2">
      <Link
        className={cn(
          "inline-flex items-center rounded-sm bg-secondary py-1.5 pe-2 ps-0.5 text-sm text-fg-900 hover:opacity-90",
          !prevChapter && "pointer-events-none opacity-50",
        )}
        href={`/doc-truyen?chapterUrl=${prevChapter}&novelUrl=${novelURL}&
          chapterIndex=${chapterIndex - 1}`}
      >
        <ChevronLeftIcon size={18} />
        <span className="sm:hidden">Trước</span>
        <span className="hidden sm:inline">Chương trước</span>
      </Link>
      <FullChapterList />
      <Link
        className={cn(
          "inline-flex items-center rounded-sm bg-secondary py-1.5 pe-0.5 ps-2 text-sm text-fg-900 hover:opacity-90",
          !nextChapter && "pointer-events-none opacity-50",
        )}
        href={`/doc-truyen?chapterUrl=${nextChapter}&novelUrl=${novelURL}&chapterIndex=${chapterIndex + 1}`}
      >
        <span className="hidden sm:inline">Chương sau</span>
        <span className="sm:hidden">Sau</span>
        <ChevronRightIcon size={18} />
      </Link>
    </nav>
  );
}
