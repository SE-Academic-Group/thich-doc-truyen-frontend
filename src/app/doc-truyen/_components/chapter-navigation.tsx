"use client";

import FullChapterList from "./full-chapter-list";
import { usePluginName } from "@/hooks/use-plugin-name";
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
  const { pluginName: currentPlugin } = usePluginName();

  const searchParams = useSearchParams();
  const novelURL = searchParams.get("novelUrl")!;
  const chapterIndex = Number(searchParams.get("chapterIndex")!);

  const buildChapterURL = (chapterURL: string, chapterIndex: number) => {
    const searchParams = new URLSearchParams();
    searchParams.set("novelUrl", novelURL);
    searchParams.set("chapterUrl", chapterURL);
    searchParams.set("currentPlugin", currentPlugin);
    searchParams.set("chapterIndex", chapterIndex.toString());

    return `/doc-truyen?${searchParams}`;
  };

  return (
    <nav className="mb-6 mt-2 flex justify-center gap-2">
      <Link
        className={cn(
          "inline-flex items-center rounded-sm bg-primary py-1.5 pe-2 ps-0.5 text-sm text-fg-900 hover:opacity-90",
          !prevChapterURL && "pointer-events-none opacity-50",
        )}
        href={buildChapterURL(prevChapterURL!, chapterIndex - 1)}
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
        href={buildChapterURL(nextChapterURL!, chapterIndex + 1)}
      >
        <span className="hidden sm:inline">Chương sau</span>
        <span className="sm:hidden">Sau</span>
        <ChevronRightIcon size={18} />
      </Link>
    </nav>
  );
}
