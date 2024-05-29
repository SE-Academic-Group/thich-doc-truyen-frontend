"use client";

import { getPluginList } from "@/lib/data/get-plugin-list";
import { useAsync, useCookies } from "@/lib/hooks";
import Skeleton from "../common/skeleton";

export default function ChangeSourceSetting() {
  const [cookies, setCookie] = useCookies(["pluginName"]);
  const state = useAsync(getPluginList);

  if (state.loading) {
    return (
      <Skeleton.Wrapper>
        <Skeleton.Box className="h-6 w-28" />
      </Skeleton.Wrapper>
    );
  }

  if (state.error || !state.value?.data) {
    return <div>error</div>;
  }

  return (
    <select
      onChange={(e) => setCookie("pluginName", e.target.value)}
      defaultValue={cookies.pluginName}
    >
      {state.value.data.map((plugin) => {
        return (
          <option value={plugin.pluginName} key={plugin.pluginUrl}>
            {plugin.pluginName}
          </option>
        );
      })}
    </select>
  );
}
