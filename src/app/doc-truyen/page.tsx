import { SearchParams } from "@/lib/definitions";
import { getSearchParam } from "@/lib/utils";
import Content from "@/ui/doc-truyen/content";

export type PageProps = Readonly<{
  searchParams: SearchParams;
}>;

export default function Page({ searchParams }: PageProps) {
  const novelUrl = getSearchParam({ searchParams, key: "novelUrl" });
  const chapterUrl = getSearchParam({ searchParams, key: "chapterUrl" });

  return (
    <main className="bg-read py-4">
      <Content novelURL={novelUrl} chapterURL={chapterUrl} />
    </main>
  );
}
