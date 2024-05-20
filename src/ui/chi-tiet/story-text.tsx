import { getStoryDetail } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function StoryText({ storyUrl }: { storyUrl: string }) {
  const response = await getStoryDetail({ url: storyUrl });
  const detail = response.data;

  if (!detail) {
    return <div>Không tìm thấy tài nguyên</div>;
  }

  return (
    <article className="grid justify-center gap-4 md:grid-cols-[repeat(3,auto)] md:gap-12">
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
        <h3 className="mb-1 hidden text-balance text-center text-xl font-semibold md:block">
          {detail.title}
        </h3>
        <section className="hidden md:block">
          <h4 className="sr-only">Thông tin thêm</h4>
          <ul className="flex flex-wrap justify-center gap-3 mixin:inline-block mixin:pe-1.5 mixin:font-semibold">
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
        <hr className="my-2.5 border" />
        <p className="text-pretty text-sm leading-6">{detail.description}</p>
        <hr className="my-2.5 border" />
      </section>
      <nav aria-label="Chuyển hướng đọc nhanh" className="flex flex-col">
        <h4 className="mb-4 text-xl font-semibold uppercase underline underline-offset-4">
          Đọc nhanh
        </h4>
        <ul className="flex flex-wrap gap-3 md:flex-col md:gap-4">
          <li>
            <Link
              className="rounded bg-primary px-2.5 py-2 text-primary-fg hover:underline"
              href="/chuong-1"
            >
              Đọc tiếp
            </Link>
          </li>
          <li>
            <Link
              className="rounded bg-primary px-2.5 py-2 text-primary-fg hover:underline"
              href="/chuong-1"
            >
              Đọc từ đầu
            </Link>
          </li>

          <li>
            <Link
              className="rounded bg-primary px-2.5 py-2 text-primary-fg hover:underline"
              href="/chuong-2"
            >
              Đọc mới nhất
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
}
