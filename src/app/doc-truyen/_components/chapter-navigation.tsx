"use client";

import FullChapterList from "./full-chapter-list";
import { ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type ChapterNavigationProps = {
  prevChapterURL: string | null;
  nextChapterURL: string | null;
};

export default function ChapterNavigation({
  nextChapterURL,
  prevChapterURL,
}: ChapterNavigationProps) {
  const searchParams = useSearchParams();
  const novelURL = searchParams.get("novelUrl")!;
  const chapterIndex = Number(searchParams.get("chapterIndex")!);

  return (
    <nav className="mb-6 mt-2 flex justify-center gap-2">
      <Link
        className={cn(
          "inline-flex items-center rounded-sm bg-primary py-1.5 pe-2 ps-0.5 text-sm text-fg-900 hover:opacity-90",
          !prevChapterURL && "pointer-events-none opacity-50",
        )}
        href={`/doc-truyen?chapterUrl=${prevChapterURL}&novelUrl=${novelURL}&
          chapterIndex=${chapterIndex - 1}`}
      >
        <ChevronLeftIcon size={18} />
        <span className="sm:hidden">Trước</span>
        <span className="hidden sm:inline">Chương trước</span>
      </Link>
      <FullChapterList />
      <Link
        className={cn(
          "inline-flex items-center rounded-sm bg-primary py-1.5 pe-0.5 ps-2 text-sm text-fg-900 hover:opacity-90",
          !nextChapterURL && "pointer-events-none opacity-50",
        )}
        href={`/doc-truyen?chapterUrl=${nextChapterURL}&novelUrl=${novelURL}&chapterIndex=${chapterIndex + 1}`}
      >
        <span className="hidden sm:inline">Chương sau</span>
        <span className="sm:hidden">Sau</span>
        <ChevronRightIcon size={18} />
      </Link>
    </nav>
  );
}
