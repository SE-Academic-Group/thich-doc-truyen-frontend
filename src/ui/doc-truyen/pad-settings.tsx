"use client";

import { SettingsIcon } from "@/lib/icons";
import { Popover } from "@/ui/common/popover";
import { ToggleGroup } from "../common/toggle-group";
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";

export default function PadSettings() {
  const [cookies, setBgColor] = useCookies(["bg-color"]);
  const bgColor = cookies["bg-color"] || "light-yellow";

  return (
    <CookiesProvider>
      <Popover.Root>
        <Popover.Trigger>
          <div className="flex items-center gap-1">
            <span className="text-sm">Tùy chỉnh</span>
            <SettingsIcon className="text-fg-500" size={18} />
          </div>
        </Popover.Trigger>
        <Popover.Content>
          <ul className="space-y-2 text-sm">
            <li className="space-y-0.5">
              <span>Màu nền</span>
              <ToggleGroup.Root
                type="single"
                className="space-x-2"
                defaultValue={bgColor}
                onValueChange={(value) => setBgColor("bg-color", value)}
              >
                <ToggleGroup.Item
                  className="rounded bg-gray-50 px-2 py-1 ring-secondary data-[state=on]:ring-2"
                  value="light-gray"
                >
                  xám
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  className="rounded bg-blue-50 px-2 py-1 ring-secondary data-[state=on]:ring-2"
                  value="light-blue"
                >
                  xanh
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  className="rounded bg-yellow-50 px-2 py-1 ring-secondary data-[state=on]:ring-2"
                  value="light-yellow"
                >
                  vàng
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </li>
          </ul>
        </Popover.Content>
      </Popover.Root>
    </CookiesProvider>
  );
}
