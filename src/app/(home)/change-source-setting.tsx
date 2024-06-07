"use client";

import { getPluginList } from "@/data/get-plugin-list";
import { useAsync, useCookies } from "@/hooks";
import { capitalize } from "@/lib/utils";
import ErrorText from "@/ui/common/error-text";
import Skeleton from "@/ui/common/skeleton";
import { useEffect } from "react";

export default function ChangeSourceSetting() {
  const [cookies, setCookie] = useCookies(["pluginName"]);
  const state = useAsync(getPluginList);

  useEffect(() => {
    if (!state.value) return;
    if (!cookies.pluginName) setCookie("pluginName", state.value.at(0)?.name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.value]);

  if (state.loading)
    return (
      <Skeleton.Wrapper>
        <Skeleton.Box className="h-[1.875rem] w-32" />
      </Skeleton.Wrapper>
    );
  if (state.error || !state.value) return <ErrorText>Có lỗi xảy ra</ErrorText>;

  return (
    <select
      onChange={(e) => setCookie("pluginName", e.target.value)}
      defaultValue={cookies.pluginName}
      className="rounded border bg-bg-50 px-2 py-1"
    >
      {state.value.map((plugin) => {
        return (
          <option value={plugin.name} key={plugin.url}>
            {capitalize(plugin.name)}
          </option>
        );
      })}
    </select>
  );
}
