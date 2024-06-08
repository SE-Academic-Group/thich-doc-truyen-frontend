"use client";

import DownloadOptions from "./download-options";
import { DownloadIcon } from "@/lib/icons";
import { Popover } from "@/ui/common/popover";

type SaveToLocalProps = {
  chapterURL: string;
};

export default function SaveToLocal({ chapterURL }: SaveToLocalProps) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className="flex items-center gap-1">
          <span className="hidden md:inline text-sm">Lưu về máy</span>
          <DownloadIcon className="text-fg-500 size-5" />
        </div>
      </Popover.Trigger>
      <Popover.Content>
        <DownloadOptions chapterURL={chapterURL} />
      </Popover.Content>
    </Popover.Root>
  );
}
