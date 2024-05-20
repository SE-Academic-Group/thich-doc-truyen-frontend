import { getChapterDetail } from "@/lib/data";
import { normalizeContent } from "@/lib/utils";
import ChapterNavigation from "./chapter-navigation";

export type Props = {
  url: string;
};

export default async function Content({ url }: Props) {
  const { data: detail, metadata: navigation } = await getChapterDetail({
    url,
  });

  if (!detail) {
    return <div>Không tìm thấy tài nguyên</div>;
  }

  const preLinedContent = normalizeContent(detail.content);

  return (
    <article className="container">
      <section className="mx-auto max-w-[84ch] py-2">
        <h2 className="mb-4 text-center text-2xl font-medium uppercase text-secondary">
          {detail.title}
        </h2>
        <ChapterNavigation navigation={navigation} />
        <p className="mb-4 whitespace-pre-line text-pretty text-lg">
          {preLinedContent}
        </p>
        <p className="text-center uppercase text-secondary">-- hết chương --</p>
        <ChapterNavigation navigation={navigation} />
      </section>
    </article>
  );
}
