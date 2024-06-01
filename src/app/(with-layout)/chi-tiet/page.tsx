import { getStoryDetail } from "@/data/get-story-detail";
import { SearchParams } from "@/lib/definitions";
import { getSearchParam } from "@/lib/utils";
import ChapterList from "@/ui/chi-tiet/chapter-list";
import StoryText from "@/ui/chi-tiet/story-text";
import Section from "@/ui/common/section";
import { Suspense } from "react";

export type PageProps = Readonly<{
  searchParams: SearchParams;
}>;

export async function generateMetadata({ searchParams }: PageProps) {
  const storyUrl = getSearchParam({ searchParams, key: "url" });
  const response = await getStoryDetail({ url: storyUrl });
  const story = response.data;

  return {
    title: story?.title ?? "Truyện không tồn tại",
  };
}

export default function Page({ searchParams }: PageProps) {
  const url = getSearchParam({ searchParams, key: "url" });
  const page = Number(getSearchParam({ searchParams, key: "page" }) || "1");

  return (
    <main className="container space-y-8 py-8">
      <Section title="Thông tin truyện">
        <Suspense fallback={<div>Đang tải...</div>}>
          <StoryText storyUrl={url} />
        </Suspense>
      </Section>
      <Section title="Danh sách chương" id="chapter-list">
        <Suspense fallback={<div>Đang tải...</div>}>
          <ChapterList storyUrl={url} page={page} />
        </Suspense>
      </Section>
    </main>
  );
}
