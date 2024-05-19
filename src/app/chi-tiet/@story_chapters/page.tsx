import { SearchParams } from "@/lib/definitions";
import { getSearchParam } from "@/lib/utils";
import Section from "@/ui/section";
import ChapterList from "@/ui/story-detail/chapter-list";
import { Suspense } from "react";

type Props = {
  searchParams: SearchParams;
};

export default function Page({ searchParams }: Props) {
  const url = getSearchParam({ searchParams, key: "url" });
  const page = Number(getSearchParam({ searchParams, key: "page" }) ?? "1");

  return (
    <Section title="Danh sách chương" id="chapter-list">
      <Suspense fallback={<div>Đang tải...</div>}>
        <ChapterList storyUrl={url} page={page} />
      </Suspense>
    </Section>
  );
}
