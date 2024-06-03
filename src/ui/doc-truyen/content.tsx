import { getChapterDetail } from "@/data/get-chapter-detail";
import { Suspense } from "react";
import ChapterNavigation from "./chapter-navigation";
import StoryContent from "./story-content";
import PadSettings from "./pad-settings";

export type Props = Readonly<{
  novelURL: string;
  chapterURL: string;
}>;

export default async function Content(props: Props) {
  const { data: detail, metadata: navigation } = await getChapterDetail(props);

  if (!detail) {
    return <div>Không tìm thấy tài nguyên</div>;
  }

  return (
    <article className="container">
      <section className="mx-auto max-w-[84ch] py-3">
        <div className="flex justify-end">
          <PadSettings />
        </div>
        <p className="mb-2 text-balance text-center font-medium uppercase text-fg-500">
          {detail.novelTitle}
        </p>
        <h2 className="mb-4 text-center text-xl font-medium uppercase text-secondary">
          {detail.title}
        </h2>
        <ChapterNavigation novelURL={props.novelURL} navigation={navigation} />
        <Suspense fallback={<div>Đang tải...</div>}>
          <StoryContent storyContent={detail.content} />
        </Suspense>
        <p className="text-center font-medium uppercase text-secondary">
          == hết chương ==
        </p>
        <ChapterNavigation novelURL={props.novelURL} navigation={navigation} />
      </section>
    </article>
  );
}
