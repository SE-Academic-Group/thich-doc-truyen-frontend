import { SearchParams } from "@/lib/definitions";
import { cn, getSearchParam } from "@/lib/utils";
import { ReadingPadBgColor } from "@/types/pad-settings";
import Content from "@/ui/doc-truyen/content";
import { cookies } from "next/headers";

export type PageProps = Readonly<{
  searchParams: SearchParams;
}>;

export default function Page({ searchParams }: PageProps) {
  const novelUrl = getSearchParam({ searchParams, key: "novelUrl" });
  const chapterUrl = getSearchParam({ searchParams, key: "chapterUrl" });

  const bgColor = cookies().get("bg-color")?.value as
    | ReadingPadBgColor
    | undefined;

  return (
    <main
      className={cn(
        "bg-yellow-50 py-2",
        bgColor == "light-yellow" && "bg-yellow-50",
        bgColor == "light-blue" && "bg-blue-50",
        bgColor == "light-gray" && "bg-gray-50",
      )}
    >
      <Content novelURL={novelUrl} chapterURL={chapterUrl} />
    </main>
  );
}
