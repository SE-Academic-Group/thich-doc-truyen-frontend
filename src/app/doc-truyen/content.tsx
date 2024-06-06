"use client";

import ChapterNavigation from "./chapter-navigation";
import LoadingScreen from "./loading-screen";
import ReadingPadSettings from "./reading-pad-settings";
import SetReadingHistory from "./set-reading-history";
import SettingsConsumer from "./settings-consumer";
import StoryContent from "./story-content";
import { CookiesProvider } from "@/lib/providers";
import { TChapterDetail } from "@/types/chapter-detail";
import ClientOnly from "@/ui/common/client-only";
import Link from "next/link";

type ContentProps = {
  chapterDetail: TChapterDetail;
  prevChapterURL: string | null;
  nextChapterURL: string | null;
  novelURL: string;
};

export default function Content({
  nextChapterURL,
  prevChapterURL,
  chapterDetail,
  novelURL,
}: ContentProps) {
  return (
    <CookiesProvider>
      <ClientOnly fallback={<LoadingScreen />}>
        <SetReadingHistory storyTitle={chapterDetail.novelTitle} />
        <SettingsConsumer>
          <article className="container">
            <section className="container py-3">
              <div className="flex justify-end">
                <ReadingPadSettings />
              </div>
              <h3 className="mb-2 text-center font-medium uppercase text-fg-500 sm:text-lg">
                <Link
                  href={`/chi-tiet?url=${novelURL}`}
                  className="hover:underline"
                >
                  {chapterDetail.novelTitle}
                </Link>
              </h3>
              <h2 className="mb-4 text-center sm:text-xl font-medium uppercase text-primary">
                {chapterDetail.title}
              </h2>
              <ChapterNavigation
                nextChapterURL={nextChapterURL}
                prevChapterURL={prevChapterURL}
              />
              <StoryContent storyContent={chapterDetail.content} />
              <ChapterNavigation
                nextChapterURL={nextChapterURL}
                prevChapterURL={prevChapterURL}
              />
            </section>
          </article>
        </SettingsConsumer>
      </ClientOnly>
    </CookiesProvider>
  );
}
