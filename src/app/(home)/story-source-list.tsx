import { getPluginList } from "@/data/get-plugin-list";
import { capitalize } from "@/lib/utils";
import Link from "next/link";

export default async function StorySourceList() {
  const pluginList = await getPluginList();

  return (
    <nav aria-label="Điều hướng nhanh đến các nguồn truyện">
      <ul className="flex flex-wrap justify-center gap-4">
        {pluginList.map((plugin) => (
          <li key={plugin.url}>
            <Link
              href={plugin.url}
              target="_blank"
              rel="no-referer no-opener"
              className="text-fg-700 rounded bg-bg-50 px-3 py-1.5 text-sm hover:underline"
            >
              {capitalize(plugin.name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
