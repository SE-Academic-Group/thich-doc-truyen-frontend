import { ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import FullChapterList from "./full-chapter-list";
import Skeleton from "../common/skeleton";

export type Props = Readonly<{
  navigation: {
    prevPage: string | null;
    nextPage: string | null;
  };
  novelURL: string;
}>;

export default function ChapterNavigation({ navigation, novelURL }: Props) {
  const { prevPage: prevChapter, nextPage: nextChapter } = navigation;

  return (
    <nav
      aria-label="Điều hướng chương"
      className="my-4 flex justify-center gap-2"
    >
      <Link
        className={cn(
          "inline-flex items-center rounded-sm bg-secondary py-1.5 pe-2 ps-0.5 text-sm text-fg-900 hover:opacity-90",
          !prevChapter && "pointer-events-none opacity-50",
        )}
        href={`/doc-truyen?chapterUrl=${prevChapter}&novelUrl=${novelURL}`}
      >
        <ChevronLeftIcon size={18} />
        Chương trước
      </Link>
      <Suspense
        fallback={
          <Skeleton.Wrapper>
            <Skeleton.Box className="h-[2rem] w-[6.25rem] bg-secondary" />
          </Skeleton.Wrapper>
        }
      >
        <FullChapterList novelURL={novelURL} />
      </Suspense>
      <Link
        className={cn(
          "inline-flex items-center rounded-sm bg-secondary py-1.5 pe-0.5 ps-2 text-sm text-fg-900 hover:opacity-90",
          !nextChapter && "pointer-events-none opacity-50",
        )}
        href={`/doc-truyen?chapterUrl=${nextChapter}&novelUrl=${novelURL}`}
      >
        Chương sau
        <ChevronRightIcon size={18} />
      </Link>
    </nav>
  );
}
