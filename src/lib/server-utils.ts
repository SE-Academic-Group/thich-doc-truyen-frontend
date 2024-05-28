import { cookies } from "next/headers";

export const getPluginNameFromCookie = () => {
  const cookieStore = cookies();
  const pluginCookie = cookieStore.get("pluginName");
  return pluginCookie?.value ?? "default";
};
