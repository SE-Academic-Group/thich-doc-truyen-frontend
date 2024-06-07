import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { useCookie } from "react-use";

const DEFAULT_PLUGIN_NAME = "DEFAULT_PLUGIN_NAME";

export const usePluginName = () => {
  const [pluginNameCookie, setPluginNameCookie] = useCookie("pluginName");
  const searchParams = useSearchParams();
  const pluginName =
    searchParams.get("currentPlugin") ??
    pluginNameCookie ??
    DEFAULT_PLUGIN_NAME;

  const setPluginName = useCallback(
    (pluginName?: string) => {
      setPluginNameCookie(pluginName ?? DEFAULT_PLUGIN_NAME);
    },
    [setPluginNameCookie],
  );

  return { pluginName, setPluginName };
};
