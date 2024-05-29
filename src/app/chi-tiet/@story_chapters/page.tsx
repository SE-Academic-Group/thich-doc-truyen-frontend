import { SearchParams } from "@/lib/definitions";
import { getSearchParam } from "@/lib/utils";
import Section from "@/ui/common/section";
import ChapterList from "@/ui/chi-tiet/chapter-list";
import { Suspense } from "react";

export type PageProps = Readonly<{
  searchParams: SearchParams;
}>;

export default function Page({ searchParams }: PageProps) {
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
