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

  const { data, metadata } = await getChapterDetail({
    novelURL: novelUrl,
    chapterURL: chapterUrl,
  });

  return (
    <main>
      <Content novelURL={novelUrl} chapterDetail={data} navigation={metadata} />
    </main>
  );
}
