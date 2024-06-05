import { StorySearchResult } from "@/types/story-search-result";
import Image from "next/image";
import Link from "next/link";

export type ResultStoryCardProps = {
  story: StorySearchResult;
};

export default function ResultStoryCard({ story }: ResultStoryCardProps) {
  const storyDetailUrl = `/chi-tiet?url=${story.url}`;

  return (
    <article className="flex items-center gap-4 rounded border-2 p-2.5 hover:bg-gray-100 md:gap-3 hover:shadow">
      <Link href={storyDetailUrl} className="shrink-0">
        <Image
          src={story.image}
          alt={story.title}
          width={80}
          height={110}
          className="h-[110px] w-[80px] rounded object-cover shadow"
        />
      </Link>
      <section>
        <Link href={storyDetailUrl} className="hover:underline">
          <h3
            className="line-clamp-2 text-pretty font-semibold"
            title={story.title}
          >
            {story.title}
          </h3>
        </Link>
        <p className="text-sm text-fg-500">
          <span>Tác giả: </span>
          <span>{story.author}</span>
        </p>
        <p>{story.nchapter} chương</p>
      </section>
    </article>
  );
}
