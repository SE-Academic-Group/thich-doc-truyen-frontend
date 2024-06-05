"use client";

import ChapterSelect from "./chapter-select";
import { getFullChapterList } from "@/data/get-full-chapter-list";
import { useAsync, useCookies } from "@/lib/hooks";
import Skeleton from "@/ui/common/skeleton";
import { useSearchParams } from "next/navigation";

export default function FullChapterList() {
  const searchParams = useSearchParams();
  const novelURL = searchParams.get("novelUrl")!;
  const [cookies] = useCookies(["pluginName"]);
  const state = useAsync(() =>
    getFullChapterList({ url: novelURL, pluginName: cookies.pluginName }),
  );

  if (state.loading) {
    return (
      <Skeleton.Wrapper>
        <Skeleton.Box className="h-[2rem] w-[6.25rem] bg-secondary" />
      </Skeleton.Wrapper>
    );
  }

  if (state.error) {
    return null;
  }

  return <ChapterSelect fullChapterList={state.value?.data || []} />;
}
