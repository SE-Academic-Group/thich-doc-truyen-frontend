import { getPluginList } from "@/lib/data";
import { convertToCapitalCase } from "@/lib/utils";
import Link from "next/link";
import Skeleton from "../common/skeleton";

export function QuickNavigationSkeleton() {
  return (
    <Skeleton>
      <ul className="flex gap-4 flex-wrap justify-center">
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i}>
            <div className="h-2 w-10" />
          </li>
        ))}
      </ul>
    </Skeleton>
  );
}

export default async function QuickNavigation() {
  const { data: pluginList } = await getPluginList();

  if (!pluginList?.length) {
    return null;
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
              {convertToCapitalCase(plugin.pluginName)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
