import { getPluginList } from "@/data/get-plugin-list";
import { capitalize } from "@/lib/utils";
import Link from "next/link";

export default async function StorySourceList() {
  const { data: pluginList } = await getPluginList();

  if (!pluginList?.length) {
    return (
      <p
        role="alert"
        aria-live="polite"
        className="rounded-sm bg-red-100 px-1 text-sm text-red-800"
      >
        Có lỗi xảy ra trong quá trình hiển thị danh sách nguồn truyện
      </p>
    );
  }

  return (
    <nav aria-label="Điều hướng nhanh đến các nguồn truyện">
      <ul className="flex flex-wrap justify-center gap-4">
        {pluginList.map((plugin) => (
          <li key={plugin.pluginUrl}>
            <Link
              href={plugin.pluginUrl}
              target="_blank"
              rel="no-referer no-opener"
              className="text-fg-700 rounded bg-bg-50 px-3 py-1.5 text-sm hover:underline"
            >
              {capitalize(plugin.pluginName)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
