"use client";

import ChapterNavigation from "./chapter-navigation";
import ReadingPadSettings from "./reading-pad-settings";
import SetReadingHistory from "./set-reading-history";
import SettingsConsumer from "./settings-consumer";
import StoryContent from "./story-content";
import { CookiesProvider } from "@/lib/providers";
import { ChapterDetail } from "@/types/chapter-detail";
import Link from "next/link";

type ContentProps = {
  chapterDetail: ChapterDetail;
  navigation: {
    prevPage: string | null;
    nextPage: string | null;
  };
  novelURL: string;
};

export default function Content({
  chapterDetail,
  navigation,
  novelURL,
}: ContentProps) {
  return (
    <CookiesProvider>
      <SetReadingHistory storyTitle={chapterDetail.novelTitle} />
      <SettingsConsumer>
        <article className="container">
          <section className="container py-3">
            <div className="flex justify-end">
              <ReadingPadSettings />
            </div>
            <h3 className="mb-2 text-center font-medium uppercase text-fg-500 text-lg">
              <Link
                href={`/chi-tiet?url=${novelURL}`}
                className="hover:underline"
              >
                {chapterDetail.novelTitle}
              </Link>
            </h3>
            <h2 className="mb-4 text-center text-xl font-medium uppercase text-primary">
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
