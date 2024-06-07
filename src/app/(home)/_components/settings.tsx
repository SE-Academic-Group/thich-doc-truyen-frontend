"use client";

import DefaultSourceSetting from "./default-source-setting";
import { BarsIcon } from "@/lib/icons";
import { Popover } from "@/ui/common/popover";

export default function Settings() {
  return (
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
            <DefaultSourceSetting />
          </li>
        </ul>
      </Popover.Content>
    </Popover.Root>
  );
}
