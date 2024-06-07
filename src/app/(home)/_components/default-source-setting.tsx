"use client";

import { getPluginList } from "@/data/get-plugin-list";
import { usePluginName } from "@/hooks/use-plugin-name";
import { capitalize } from "@/lib/utils";
import ErrorText from "@/ui/common/error-text";
import Skeleton from "@/ui/common/skeleton";
import useSwr from "swr";

export default function DefaultSourceSetting() {
  const { pluginName, setPluginName } = usePluginName();
  const { data, isLoading, error } = useSwr("plugin-list", getPluginList, {
    suspense: true,
  });

  if (isLoading) {
    return (
      <Skeleton.Wrapper>
        <Skeleton.Box className="h-[1.75rem] w-32" />
      </Skeleton.Wrapper>
    );
  }

  if (error) return <ErrorText>Có lỗi xảy ra</ErrorText>;

  return (
    <select
      defaultValue={pluginName}
      className="rounded border bg-bg-50 px-2 py-1 text-sm"
      onChange={(e) => setPluginName(e.target.value)}
    >
      {data.map((plugin) => {
        return (
          <option value={plugin.name} key={plugin.url}>
            {capitalize(plugin.name)}
          </option>
        );
      })}
    </select>
  );
}
