import { SearchParams } from "@/lib/definitions";
import { getSearchParam } from "@/lib/utils";
import Content from "@/ui/doc-truyen/content";

export type PageProps = Readonly<{
  searchParams: SearchParams;
}>;

export default function Page({ searchParams }: PageProps) {
  const url = getSearchParam({ searchParams, key: "url" });

  return (
    <main className="bg-read py-4">
      <Content url={url} />
    </main>
  );
}
