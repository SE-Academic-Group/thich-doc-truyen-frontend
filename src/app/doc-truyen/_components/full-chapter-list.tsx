"use client";

import ChapterSelect from "./chapter-select";
import { getFullChapterList } from "@/data/get-full-chapter-list";
import { useAsync } from "@/hooks";
import Skeleton from "@/ui/common/skeleton";
import { useSearchParams } from "next/navigation";

export default function FullChapterList() {
  const searchParams = useSearchParams();
  const novelURL = searchParams.get("novelUrl")!;
  const state = useAsync(
    () => getFullChapterList({ url: novelURL }),
    [novelURL],
  );

  if (state.loading) {
    return (
      <Skeleton.Wrapper>
        <Skeleton.Box className="h-[2rem] w-[6.25rem] bg-primary" />
      </Skeleton.Wrapper>
    );
  }
  if (state.error || !state.value) return null;
  return <ChapterSelect fullChapterList={state.value} />;
}
