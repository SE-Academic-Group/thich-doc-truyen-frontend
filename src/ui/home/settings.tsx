"use client";

import { BarsIcon } from "@/lib/icons";
import * as Popover from "@radix-ui/react-popover";

export default function Settings() {
  return (
    <Popover.Root>
      <Popover.Trigger className="rounded-full p-1.5 hover:bg-bg-100">
        <BarsIcon className="size-7" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="bottom"
          align="end"
          sideOffset={8}
          className="rounded-md border bg-white px-4 py-2 shadow-lg"
        >
          <ul>
            <li>
              <span>thay doi nguon truyen</span>
            </li>
          </ul>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
