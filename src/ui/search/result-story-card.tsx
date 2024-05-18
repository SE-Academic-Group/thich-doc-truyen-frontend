import { StorySearchResult } from "@/lib/definitions";
import Image from "next/image";

type ResultStoryCardProps = {
  story: StorySearchResult;
};

export default function ResultStoryCard({ story }: ResultStoryCardProps) {
  return (
    <article className="flex items-center gap-4 rounded-sm border-2 p-4 hover:bg-gray-100 md:gap-3">
      <a href={story.url} className="shrink-0">
        <Image
          src={story.image}
          alt={story.title}
          width={90}
          height={120}
          className="h-[120px] w-[90px] rounded object-cover shadow"
        />
      </a>
      <section>
        <a href={story.url} className="hover:underline">
          <h3
            className="line-clamp-2 text-pretty font-semibold"
            title={story.title}
          >
            {story.title}
          </h3>
        </a>
        <p className="text-sm text-muted">
          <span>Tác giả: </span>
          <span>{story.author}</span>
        </p>
        <p>{story.nchapter} chương</p>
      </section>
    </article>
  );
}
