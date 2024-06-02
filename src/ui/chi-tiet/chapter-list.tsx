import { getChapterList } from "@/data/get-chapter-list";
import Link from "next/link";
import Pagination from "../common/pagination";

export type ChapterListProps = Readonly<{
  storyUrl: string;
  page: number;
}>;

export default async function ChapterList({
  storyUrl,
  page,
}: ChapterListProps) {
  const { data: chapters, metadata } = await getChapterList({
    url: storyUrl,
    page,
  });

  if (!chapters) {
    return <div>Không tìm thấy tài nguyên</div>;
  }

  return (
    <div className="space-y-6">
      <ul className="-mt-2.5 list-disc ps-4 sm:columns-2 sm:text-sm md:columns-3 md:px-4">
        {chapters.map((chapter) => (
          <li key={chapter.url}>
            {chapter.url ? (
              <Link
                href={`/doc-truyen?chapterUrl=${chapter.url}&novelUrl=${storyUrl}`}
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
              <span className="mb-1.5 mt-2 ps-2 text-lg font-medium">
                {chapter.title}
              </span>
            )}
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={metadata.currentPage}
        totalPages={metadata.maxPage}
        scrollToId="chapter-list"
      />
    </div>
  );
}
