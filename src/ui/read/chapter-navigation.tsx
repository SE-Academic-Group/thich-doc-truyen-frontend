import { ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  navigation: {
    prevChapter: string | null;
    nextChapter: string | null;
  };
};

export default function ChapterNavigation({ navigation }: Props) {
  const { prevChapter, nextChapter } = navigation;

  return (
    <nav
      aria-label="Điều hướng chương"
      className="my-4 flex justify-center gap-2"
    >
      <Link
        className={cn(
          "bg-secondary text-primary-fg px-2 py-1 rounded-sm inline-flex hover:opacity-80",
          !prevChapter && "opacity-50 pointer-events-none",
        )}
        href={`/doc-truyen?url=${prevChapter}`}
      >
        <ChevronLeftIcon />
        Chương trước
      </Link>
      <Link
        className={cn(
          "bg-secondary text-primary-fg px-2 py-1 rounded-sm inline-flex hover:opacity-80",
          !nextChapter && "opacity-50 pointer-events-none",
        )}
        href={`/doc-truyen?url=${nextChapter}`}
      >
        Chương sau
        <ChevronRightIcon />
      </Link>
    </nav>
  );
}
