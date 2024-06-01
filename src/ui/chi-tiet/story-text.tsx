import { getStoryDetail } from "@/data/get-story-detail";
import { parseHTML } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function StoryText({ storyUrl }: { storyUrl: string }) {
  const response = await getStoryDetail({ url: storyUrl });
  const detail = response.data;

  if (!detail) {
    return <div>Không tìm thấy tài nguyên</div>;
  }

  return (
    <article className="grid justify-center gap-4 rounded-lg border bg-bg-50 py-6 md:grid-cols-[repeat(2,auto)] md:gap-12">
      <section className="flex flex-col gap-3 text-center md:text-start">
        <h3 className="mb-2 text-balance text-xl font-semibold md:hidden">
          {detail.title}
        </h3>
        <Image
          src={detail.image}
          alt={detail.title}
          width={200}
          height={300}
          className="mx-auto aspect-[2/3] w-[200px] rounded bg-bg-300 object-cover shadow md:mx-0"
        />
        <section className="mx-auto max-w-[200px] text-sm md:hidden">
          <h4 className="sr-only">Thông tin thêm</h4>
          <ul className="space-y-1 mixin:inline-block mixin:pe-1.5 mixin:font-semibold">
            <li>
              <span className="mixin">Tác giả: </span>
              <span>{detail.author}</span>
            </li>
            <li>
              <span className="mixin">Thể loại: </span>
              <span>{detail.genres.join(", ")}</span>
            </li>
            <li>
              <span className="mixin">Số chương: </span>
              <span>{detail.nchapter}</span>
            </li>
          </ul>
        </section>
      </section>
      <section className="max-w-prose">
        <h3 className="mb-2.5 hidden text-balance text-center text-2xl font-semibold uppercase md:block">
          {detail.title}
        </h3>
        <section className="hidden text-sm md:block">
          <h4 className="sr-only">Thông tin thêm</h4>
          <ul className="flex flex-wrap justify-center gap-x-3 mixin:inline-block mixin:pe-1.5 mixin:font-semibold">
            <li>
              <span className="mixin">Tác giả: </span>
              <span>{detail.author}</span>
            </li>
            <li>
              <span className="mixin">Số chương: </span>
              <span>{detail.nchapter}</span>
            </li>
            <li>
              <span className="mixin">Thể loại: </span>
              <span>{detail.genres.join(", ")}</span>
            </li>
          </ul>
        </section>
        <hr className="my-2.5 border" />
        <div className="whitespace-pre-line text-pretty text-sm leading-6">
          {parseHTML(detail.description)}
        </div>
        <hr className="mb-5 mt-2.5 border" />
        <nav aria-label="Chuyển hướng đọc nhanh">
          <ul className="flex flex-wrap justify-center gap-2.5 text-sm mixin:rounded mixin:bg-bg-200 mixin:p-1.5">
            <li>
              <Link className="mixin hover:underline" href="/chuong-1">
                Đọc tiếp
              </Link>
            </li>
            <li>
              <Link className="mixin hover:underline" href="/chuong-1">
                Đọc từ đầu
              </Link>
            </li>

            <li>
              <Link className="mixin hover:underline" href="/chuong-2">
                Đọc mới nhất
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </article>
  );
}
