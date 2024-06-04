"use client";

import ChapterNavigation from "./chapter-navigation";
import ReadingPadSettings from "./reading-pad-settings";
import SettingsConsumer from "./settings-consumer";
import StoryContent from "./story-content";
import { CookiesProvider } from "@/lib/providers";
import { ChapterDetail } from "@/types/chapter-detail";

type ContentProps = {
  chapterDetail: ChapterDetail;
  navigation: {
    prevPage: string | null;
    nextPage: string | null;
  };
};

export default function Content({ chapterDetail, navigation }: ContentProps) {
  return (
    <CookiesProvider>
      <SettingsConsumer>
        <article className="container">
          <section className="mx-auto max-w-[660px] py-3">
            <div className="flex justify-end">
              <ReadingPadSettings />
            </div>
            <p className="mb-2 text-balance text-center font-medium uppercase text-fg-500 text-lg">
              {chapterDetail.novelTitle}
            </p>
            <h2 className="mb-4 text-center text-xl font-medium uppercase text-secondary">
              {chapterDetail.title}
            </h2>
            <ChapterNavigation navigation={navigation} />
            <StoryContent storyContent={chapterDetail.content} />
            <ChapterNavigation navigation={navigation} />
          </section>
        </article>
      </SettingsConsumer>
    </CookiesProvider>
  );
}
