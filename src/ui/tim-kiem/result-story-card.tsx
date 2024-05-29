import { StorySearchResult } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export type ResultStoryCardProps = Readonly<{
  story: StorySearchResult;
}>;

export default function ResultStoryCard({ story }: ResultStoryCardProps) {
  const storyDetailUrl = `/chi-tiet?url=${story.url}`;

  return (
    <article className="flex items-center gap-4 rounded-sm border-2 p-4 hover:bg-gray-100 md:gap-3">
      <Link href={storyDetailUrl} className="shrink-0">
        <Image
          src={story.image}
          alt={story.title}
          width={90}
          height={120}
          className="h-[120px] w-[90px] rounded object-cover shadow"
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
