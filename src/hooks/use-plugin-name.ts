import { useSearchParams } from "next/navigation";
import { useCookie } from "react-use";

export const usePluginName = () => {
  const [pluginName] = useCookie("pluginName");
  const searchParams = useSearchParams();
  const currentPlugin =
    searchParams.get("currentPlugin") ?? pluginName ?? "default";

  return currentPlugin;
};
