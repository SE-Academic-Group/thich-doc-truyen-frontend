"use client";

import { usePluginName } from "@/hooks/use-plugin-name";
import { capitalize } from "@/lib/utils";

export default function CurrentSource() {
  const { pluginName } = usePluginName();

  return <span className="text-xs">Server: {capitalize(pluginName)}</span>;
}
