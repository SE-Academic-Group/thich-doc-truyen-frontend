"use client";

import { getAlternativePlugins } from "@/data/get-alternative-plugins";
import { useAsync } from "@/hooks";
import { capitalize, cn } from "@/lib/utils";
import { TAlternativePlugin } from "@/types/alternative-plugin";
import Skeleton from "@/ui/common/skeleton";
import { useRouter, useSearchParams } from "next/navigation";

export default function ChangeChapterSource() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const novelURL = searchParams.get("novelUrl")!;
  const chapterIndex = searchParams.get("chapterIndex")!;

  const state = useAsync(
    () => getAlternativePlugins({ novelURL, chapterIndex }),
    [novelURL, chapterIndex],
  );

  if (state.loading) {
    return (
      <div className="text-xs flex justify-center items-center gap-4 mb-3.5">
        <span>Chuyển server: </span>

        <Skeleton.Wrapper>
          <Skeleton.Box className="h-4 w-20 bg-primary/50" />
        </Skeleton.Wrapper>
      </div>
    );
  }

  if (state.error || !state.value) return null;

  const filtered = state.value.filter(
    (source) => source.chapterURL && source.novelURL,
  );

  const changeSource = (source: TAlternativePlugin) => {
    const searchParams = new URLSearchParams();
    searchParams.set("novelUrl", source.novelURL!);
    searchParams.set("chapterUrl", source.chapterURL!);
    searchParams.set("chapterIndex", chapterIndex);
    searchParams.set("currentPlugin", source.pluginName);
    router.push(`/doc-truyen?${searchParams}`);
  };

  return (
    <div className="text-xs flex justify-center items-center gap-4 mb-3.5">
      <span>Chuyển server: </span>
      <div className="text-xs flex justify-center items-center gap-2.5">
        {filtered.map((source) => (
          <button
            key={source.pluginName}
            className={cn("bg-bg-300/70 py-0.5 px-1 rounded-sm")}
            onClick={() => changeSource(source)}
          >
            {capitalize(source.pluginName)}
          </button>
        ))}
      </div>
    </div>
  );
}
