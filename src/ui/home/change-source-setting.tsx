"use client";

import { getPluginList } from "@/data/get-plugin-list";
import { useAsync, useCookies } from "@/lib/hooks";
import Skeleton from "../common/skeleton";
import ErrorText from "../common/error-text";
import { capitalize } from "@/lib/utils";

export default function ChangeSourceSetting() {
  const [cookies, setCookie] = useCookies(["pluginName"]);
  const state = useAsync(getPluginList);

  if (state.loading) {
    return (
      <Skeleton.Wrapper>
        <Skeleton.Box className="h-[1.875rem] w-32" />
      </Skeleton.Wrapper>
    );
  }

  if (state.error || !state.value?.data) {
    return <ErrorText>Có lỗi xảy ra</ErrorText>;
  }

  return (
    <select
      onChange={(e) => setCookie("pluginName", e.target.value)}
      defaultValue={cookies.pluginName}
      className="rounded border bg-bg-50 px-2 py-1"
    >
      {state.value.data.map((plugin) => {
        return (
          <option value={plugin.name} key={plugin.url}>
            {capitalize(plugin.name)}
          </option>
        );
      })}
    </select>
  );
}
