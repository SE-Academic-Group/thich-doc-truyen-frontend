"use client";

import { ToggleGroup } from "../../ui/common/toggle-group";
import { BG_COLOR_MAP, FONT_FAMILY_MAP, FONT_SIZE_MAP } from "@/lib/constants";
import { SettingsIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { BgColor, FontFamily, FontSize } from "@/types/reading-pad-settings";
import { Popover } from "@/ui/common/popover";
import { useCookies } from "react-cookie";

export default function ReadingPadSettings() {
  const [cookies, setCookies] = useCookies([
    "bg-color",
    "font-size",
    "font-family",
  ]);
  const bgColor = (cookies["bg-color"] as BgColor) ?? "light-yellow";
  const fontSize = (cookies["font-size"] as FontSize) ?? "medium";
  const fontFamily = (cookies["font-family"] as FontFamily) ?? "serif";

  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className="flex items-center gap-1">
          <span className="hidden md:inline text-sm">Tùy chỉnh</span>
          <SettingsIcon className="text-fg-500 size-7 md:size-5" />
        </div>
      </Popover.Trigger>
      <Popover.Content>
        <ul className="space-y-2 text-sm">
          <li className="space-y-1">
            <span>Màu nền</span>
            <ToggleGroup.Root
              type="single"
              className="space-x-2"
              defaultValue={bgColor}
              onValueChange={(value) => setCookies("bg-color", value)}
            >
              {Object.entries(BG_COLOR_MAP).map(([key, value]) => (
                <ToggleGroup.Item
                  key={key}
                  value={key}
                  className={cn(
                    "rounded px-2 py-1 ring-secondary data-[state=on]:ring-2",
                    value,
                  )}
                >
                  <div className="size-5" />
                </ToggleGroup.Item>
              ))}
            </ToggleGroup.Root>
          </li>
          <hr />
          <li className="space-y-1">
            <span>Cở chữ</span>
            <ToggleGroup.Root
              type="single"
              className="flex gap-2"
              defaultValue={fontSize}
              onValueChange={(value) => setCookies("font-size", value)}
            >
              {Object.entries(FONT_SIZE_MAP).map(([key, value]) => (
                <ToggleGroup.Item
                  key={key}
                  value={key}
                  className={cn(
                    "rounded px-2 py-1 bg-bg-100 h-8",
                    "data-[state=on]:bg-secondary/50 data-[state=on]:text-fg-900 data-[state=on]:ring-2 data-[state=on]:ring-secondary",
                    "text-base",
                  )}
                >
                  <span className={value}>Aa</span>
                </ToggleGroup.Item>
              ))}
            </ToggleGroup.Root>
          </li>
          <hr />
          <li className="space-y-1">
            <span>Font chữ</span>
            <ToggleGroup.Root
              type="single"
              className="flex gap-2"
              defaultValue={fontFamily}
              onValueChange={(value) => setCookies("font-family", value)}
            >
              {Object.entries(FONT_FAMILY_MAP).map(([key, value]) => (
                <ToggleGroup.Item
                  key={key}
                  value={key}
                  className={cn(
                    "rounded px-2 py-1 bg-bg-100 h-8",
                    "data-[state=on]:bg-secondary/50 data-[state=on]:text-fg-900 data-[state=on]:ring-2 data-[state=on]:ring-secondary",
                  )}
                >
                  <span className={value}>{key}</span>
                </ToggleGroup.Item>
              ))}
            </ToggleGroup.Root>
          </li>
        </ul>
      </Popover.Content>
    </Popover.Root>
  );
}
