import ReadMore from "../../../ui/common/read-more";
import { TStoryDetail } from "@/types/story-detail";
import Image from "next/image";

type StoryTextProps = {
  storyText: TStoryDetail;
};

export default function StoryText({ storyText }: StoryTextProps) {
  return (
    <article className="grid justify-center gap-4 rounded-lg px-1.5 py-2 md:grid-cols-[repeat(2,auto)] md:gap-12">
      <section className="flex flex-col gap-3 text-center md:text-start">
        <h3 className="mb-2  text-xl font-semibold md:hidden">
          {storyText.title}
        </h3>
        <Image
          src={storyText.image}
          alt={storyText.title}
          width={200}
          height={300}
          className="mx-auto aspect-[2/3] w-[200px] rounded bg-bg-300 object-cover shadow md:mx-0"
        />
        <section className="mx-auto max-w-[200px] text-sm md:hidden">
          <ul className="space-y-1 mixin:inline-block mixin:pe-1.5 mixin:font-semibold">
            <li>
              <span className="mixin">Tác giả: </span>
              <span>{storyText.author}</span>
            </li>
            <li>
              <span className="mixin">Thể loại: </span>
              <span>{storyText.genres.join(", ")}</span>
            </li>
            <li>
              <span className="mixin">Số chương: </span>
              <span>{storyText.nchapter}</span>
            </li>
          </ul>
        </section>
      </section>
      <section className="max-w-prose">
        <h3 className="mb-2.5 hidden  text-center text-2xl font-semibold uppercase md:block">
          {storyText.title}
        </h3>
        <section className="hidden text-sm md:block">
          <ul className="flex flex-wrap justify-center gap-x-3 mixin:inline-block mixin:pe-1.5 mixin:font-semibold">
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
        </section>
        <hr className="my-2.5 border" />
        <div className="whitespace-pre-line text-pretty text-sm leading-6">
          <ReadMore>{storyText.description}</ReadMore>
        </div>
        <hr className="mb-5 mt-2.5 border" />
      </section>
    </article>
  );
}
