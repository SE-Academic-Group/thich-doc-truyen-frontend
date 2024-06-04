import { API_URL } from "@/lib/constants";
import { cookies } from "next/headers";

type generatePluginNameURLParams = Readonly<{
  path: string;
}>;

export const generatePluginNameURL = (args: generatePluginNameURLParams) => {
  const cookieStore = cookies();
  const pluginCookie = cookieStore.get("pluginName");
  const pluginName = pluginCookie?.value ?? "default";

  return new URL(`${pluginName}/${args.path}`, API_URL);
};
