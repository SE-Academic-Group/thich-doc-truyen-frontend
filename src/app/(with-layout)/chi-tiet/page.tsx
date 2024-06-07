import ChapterList from "@/app/(with-layout)/chi-tiet/_components/chapter-list";
import StoryText from "@/app/(with-layout)/chi-tiet/_components/story-text";
import { getChapterList } from "@/data/get-chapter-list";
import { getStoryDetail } from "@/data/get-story-detail";
import { getSearchParam } from "@/lib/utils";
import { TSearchParams } from "@/types/search-params";
import Section from "@/ui/common/section";

type PageProps = {
  searchParams: TSearchParams;
};

export default async function Page({ searchParams }: PageProps) {
  const url = getSearchParam({ searchParams, key: "url" });
  const page = Number(getSearchParam({ searchParams, key: "page" }) || "1");

  const [storyText, { chapterList, totalPages, currentPage }] =
    await Promise.all([getStoryDetail({ url }), getChapterList({ url, page })]);

  return (
    <main className="container space-y-3 py-8">
      <Section title="Thông tin truyện">
        <StoryText storyText={storyText} />
      </Section>
      <Section title="Danh sách chương" id="chapter-list">
        <ChapterList
          chapterList={chapterList}
          currentPage={currentPage}
          totalPages={totalPages}
          storyURL={url}
        />
      </Section>
    </main>
  );
}
