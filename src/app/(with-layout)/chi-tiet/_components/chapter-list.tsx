import Pagination from "../../../../ui/common/pagination";
import { TStoryChapter } from "@/types/story-chapter";
import Link from "next/link";

type ChapterListProps = {
  chapterList: TStoryChapter[];
  currentPage: number;
  totalPages: number;
  storyURL: string;
};

export default async function ChapterList({
  storyURL,
  totalPages,
  chapterList,
  currentPage,
}: ChapterListProps) {
  const builderChapterLink = (chapter: TStoryChapter) => {
    const searchParams = new URLSearchParams();
    searchParams.set("chapterUrl", chapter.url!);
    searchParams.set("novelUrl", storyURL);
    searchParams.set("chapterIndex", String(chapter.index));

    return `/doc-truyen?${searchParams}`;
  };

  if (chapterList.length == 0) return <div>Không có chương nào.</div>;

  return (
    <div className="space-y-6">
      <ul className="-mt-2.5 list-disc ps-4 sm:columns-2 sm:text-sm gap-6 md:px-4">
        {chapterList.map((chapter) => (
          <li key={chapter.url}>
            {chapter.url && chapter.index ? (
              <Link
                href={builderChapterLink(chapter)}
                className="group inline-block py-0.5"
              >
                <span className="group-hover:underline">
                  Chương {chapter.index}:{" "}
                </span>
                <span className="inline-block text-pretty group-hover:underline">
                  {chapter.title}
                </span>
              </Link>
            ) : (
              <span className="mb-1.5 mt-2 ps-2 text-lg font-medium list-none">
                {chapter.title}
              </span>
            )}
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        scrollToId="chapter-list"
      />
    </div>
  );
}
