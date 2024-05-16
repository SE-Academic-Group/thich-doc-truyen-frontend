"use client";

import { SettingsIcon } from "../../lib/icons";
import * as Popover from "@radix-ui/react-popover";

export default function UserSettings() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className="flex items-center gap-0.5">
          <SettingsIcon />
          <span>Tùy chỉnh</span>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align="end" sideOffset={6}>
          <div className="w-52 rounded-md bg-primary-light px-4 py-2 text-fg_primary shadow-md">
            <div>nguon</div>
            <section>
              <h3>reading</h3>
              <ul>
                <li>font</li>
                <li>lh</li>
                <li>bg</li>
                <li>fz</li>
              </ul>
            </section>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
