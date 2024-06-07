import ReadMore from "../../../../ui/common/read-more";
import { cn } from "@/lib/utils";
import { TStoryDetail } from "@/types/story-detail";
import Image from "next/image";

type StoryTextProps = {
  storyText: TStoryDetail;
};

export default function StoryText({ storyText }: StoryTextProps) {
  const poster = (
    <Image
      src={storyText.image}
      alt={storyText.title}
      width={200}
      height={300}
      className="mx-auto aspect-[2/3] w-[200px] rounded bg-bg-300 object-cover shadow md:mx-0"
    />
  );

  const title = (
    <h3 className="text-xl font-semibold uppercase md:text-pretty">
      {storyText.title}
    </h3>
  );

  const desc = (
    <div className="text-start">
      <hr className="my-2.5 border" />
      <div className="whitespace-pre-line text-pretty text-sm leading-6">
        <ReadMore>{storyText.description}</ReadMore>
      </div>
      <hr className="mt-2.5 border" />
    </div>
  );

  const info = (
    <ul
      className={cn(
        "mixin:inline-block mixin:pe-1.5 mixin:font-semibold",
        "space-y-1 mx-auto max-w-[15rem] text-sm",
        "md:flex md:max-w-none md:items-center md:mixin:shrink-0 md:flex-wrap md:gap-2 md:justify-center md:space-y-0",
      )}
    >
      <li>
        <span className="mixin">Tác giả: </span>
        <span>{storyText.author}</span>
      </li>
      <li>
        <span className="mixin">Số chương: </span>
        <span>{storyText.nchapter}</span>
      </li>
      <li>
        <span className="mixin">Thể loại: </span>
        <span>{storyText.genres.join(", ")}</span>
      </li>
    </ul>
  );

  return (
    <article className="gap-4 rounded-lg px-1.5 py-2">
      <section className="text-center space-y-3 md:hidden">
        {title}
        {poster}
        {info}
        {desc}
      </section>
      <section className="gap-8 text-center hidden md:grid grid-cols-[auto_1fr]">
        {poster}
        <div className="space-y-2.5">
          {title}
          {info}
          {desc}
        </div>
      </section>
    </article>
  );
}
