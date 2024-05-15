import Breadcrumbs from "@/ui/layout/breadcrumbs";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const q = (searchParams["q"] ?? "").toString();

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "Tìm kiếm truyện: " + q,
            href: "/tim-kiem?q=" + q.replace(/ /g, "+"),
          },
        ]}
      />
      <main className="container py-4">Page</main>
    </div>
  );
}
