import { getChapterList } from "@/lib/data";
import Link from "next/link";
import Pagination from "../pagination";

export default async function ChapterList({
  storyUrl,
  page,
}: {
  storyUrl: string;
  page: number;
}) {
  const { data: chapters, metadata } = await getChapterList({
    url: storyUrl,
    page,
  });

  if (!chapters) {
    return <div>Không tìm thấy tài nguyên</div>;
  }

  return (
    <div className="space-y-4">
      <ul className="-mt-2.5 sm:columns-2 md:columns-3">
        {chapters.map((chapter) => (
          <li key={chapter.url}>
            {chapter.url ? (
              <Link href={chapter.url} className="group inline-block py-0.5">
                <span role="presentation">*</span>
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
      {/* TODO: remove `+1` after backend fix the problem */}
      <Pagination
        currentPage={metadata.currentPage + 1}
        totalPages={metadata.maxPage}
        scrollToId="chapter-list"
      />
    </div>
  );
}