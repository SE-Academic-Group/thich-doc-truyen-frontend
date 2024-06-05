import ChapterList from "@/app/(with-layout)/chi-tiet/chapter-list";
import StoryText from "@/app/(with-layout)/chi-tiet/story-text";
import { getSearchParam } from "@/lib/utils";
import { SearchParams } from "@/types/search-params";
import Section from "@/ui/common/section";

type PageProps = {
  searchParams: SearchParams;
};

export default function Page({ searchParams }: PageProps) {
  const url = getSearchParam({ searchParams, key: "url" });
  const page = Number(getSearchParam({ searchParams, key: "page" }) || "1");

  return (
    <main className="container space-y-3 py-8">
      <Section title="Thông tin truyện">
        <StoryText storyUrl={url} />
      </Section>
      <Section title="Danh sách chương" id="chapter-list">
        <ChapterList storyUrl={url} page={page} />
      </Section>
    </main>
  );
}
