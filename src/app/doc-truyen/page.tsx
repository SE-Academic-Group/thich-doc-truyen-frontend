import Content from "@/app/doc-truyen/content";
import { getChapterDetail } from "@/data/get-chapter-detail";
import { getSearchParam } from "@/lib/utils";
import { TSearchParams } from "@/types/search-params";

type PageProps = {
  searchParams: TSearchParams;
};

export default async function Page({ searchParams }: PageProps) {
  const novelUrl = getSearchParam({ searchParams, key: "novelUrl" });
  const chapterUrl = getSearchParam({ searchParams, key: "chapterUrl" });

  const { chapterDetail, nextChapterURL, prevChapterURL } =
    await getChapterDetail({
      chapterURL: chapterUrl,
      novelURL: novelUrl,
    });

  return (
    <main>
      <Content
        novelURL={novelUrl}
        chapterDetail={chapterDetail}
        prevChapterURL={prevChapterURL}
        nextChapterURL={nextChapterURL}
      />
    </main>
  );
}
