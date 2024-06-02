import { getFullChapterList } from "@/data/get-full-chapter-list";
import ChapterSelect from "./chapter-select";

export type FullChapterListProps = Readonly<{
  novelURL: string;
}>;

export default async function FullChapterList(props: FullChapterListProps) {
  const { data: fullChapterList } = await getFullChapterList({
    url: props.novelURL,
  });

  if (!fullChapterList) {
    return <div>Lỗi xảy ra</div>;
  }

  return (
    <ChapterSelect
      novelURL={props.novelURL}
      fullChapterList={fullChapterList}
    />
  );
}
