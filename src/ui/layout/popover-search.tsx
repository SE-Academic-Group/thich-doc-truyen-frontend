"use client";

import { TextSearchIcon } from "@/lib/icons";
import { Popover } from "../common/popover";
import HeaderSearchForm from "./header-search-form";

export default function PopoverSearch() {
  return (
    <Popover.Root>
      <Popover.Trigger className="rounded-full p-1.5 hover:bg-bg-100">
        <TextSearchIcon className="size-6" />
      </Popover.Trigger>
      <Popover.Content>
        <div className="sm:hidden">
          <HeaderSearchForm />
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
