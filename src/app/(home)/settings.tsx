"use client";

import { BarsIcon } from "@/lib/icons";
import { CookiesProvider } from "@/lib/providers";
import { Popover } from "@/ui/common/popover";
import ChangeSourceSetting from "./change-source-setting";

export default function Settings() {
  return (
    <CookiesProvider>
      <Popover.Root>
        <Popover.Trigger className="rounded-full p-1.5 hover:bg-bg-100">
          <BarsIcon size={28} />
        </Popover.Trigger>
        <Popover.Content>
          <ul>
            <li>
              <span className="text-medium mb-2 block text-sm">
                Nguồn truyện mặc định
              </span>
              <ChangeSourceSetting />
            </li>
          </ul>
        </Popover.Content>
      </Popover.Root>
    </CookiesProvider>
  );
}
