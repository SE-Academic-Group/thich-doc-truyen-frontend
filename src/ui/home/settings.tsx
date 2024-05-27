"use client";

import { BarsIcon } from "@/lib/icons";
import { Popover } from "@/ui/common/popover";

export default function Settings() {
  return (
    <Popover.Root>
      <Popover.Trigger className="rounded-full p-1.5 hover:bg-bg-100">
        <BarsIcon className="size-7" />
      </Popover.Trigger>
      <Popover.Content>
        <ul>
          <li>
            <span>thay doi nguon truyen</span>
          </li>
        </ul>
      </Popover.Content>
    </Popover.Root>
  );
}
