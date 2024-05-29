import { getStoryDetail } from "@/lib/data/get-story-detail";
import { SearchParams } from "@/lib/definitions";
import { getSearchParam } from "@/lib/utils";
import Section from "@/ui/common/section";
import ChapterList from "@/ui/chi-tiet/chapter-list";
import StoryText from "@/ui/chi-tiet/story-text";
import { Metadata } from "next";
import { Suspense } from "react";

type Props = {
  searchParams: SearchParams;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const storyUrl = getSearchParam({ searchParams, key: "url" });
  const response = await getStoryDetail({ url: storyUrl });
  const story = response.data;

  return {
    title: story?.title || "Truyện không tồn tại",
  };
}

export default function Page({ searchParams }: Props) {
  const url = getSearchParam({ searchParams, key: "url" });
  const page = Number(getSearchParam({ searchParams, key: "page" }) ?? "1");

  return (
    <main className="container space-y-8 py-4">
      <Section title="Thông tin truyện">
        <Suspense fallback={<div>Đang tải...</div>}>
          <StoryText storyUrl={url.toString()} />
        </Suspense>
      </Section>
      <Section title="Danh sách chương">
        <Suspense fallback={<div>Đang tải...</div>}>
          <ChapterList storyUrl={url} page={page} />
        </Suspense>
      </Section>
    </main>
  );
}
