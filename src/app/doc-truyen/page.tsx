import { SearchParams } from "@/lib/definitions";
import { getSearchParam } from "@/lib/utils";
import Content from "@/ui/read/content";

type Props = {
  searchParams: SearchParams;
};

export default function Page({ searchParams }: Props) {
  const url = getSearchParam({ searchParams, key: "url" });

  return (
    <main className="bg-read py-4">
      <Content url={url} />
    </main>
  );
}
