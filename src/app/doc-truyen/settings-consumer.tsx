"use client";

import LoadingScreen from "./loading-screen";
import { BG_COLOR_MAP, FONT_FAMILY_MAP, FONT_SIZE_MAP } from "@/lib/constants";
import { useCookies } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { BgColor, FontFamily, FontSize } from "@/types/reading-pad-settings";
import { useEffect, useState } from "react";

type BackgroundChangeProps = React.PropsWithChildren;

export default function SettingsConsumer({ children }: BackgroundChangeProps) {
  const [isClient, setIsClient] = useState(false);
  const [cookies] = useCookies(["bg-color", "font-size", "font-family"]);
  const bgColor = (cookies["bg-color"] as BgColor) ?? "light-yellow";
  const fontSize = (cookies["font-size"] as FontSize) ?? "medium";
  const fontFamily = (cookies["font-family"] as FontFamily) ?? "serif";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <div
          suppressHydrationWarning
          className={cn(
            BG_COLOR_MAP[bgColor],
            FONT_SIZE_MAP[fontSize],
            FONT_FAMILY_MAP[fontFamily],
            "transition-colors duration-300 ease-in-out",
            "leading-relaxed",
          )}
        >
          {children}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
