"use client";

import { API_URL } from "@/lib/constants";
import { DownloadIcon } from "@/lib/icons";
import { Popover } from "@/ui/common/popover";
import Link from "next/link";

const MOCK_OPTIONS = [
  { label: "pdf", value: "htmlToPdf" },
  { label: "epub", value: "htmlToEpub" },
  { label: "images", value: "htmlToImg" },
];

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
        <ul className="space-y-2 text-sm">
          {MOCK_OPTIONS.map((option) => (
            <li key={option.value}>
              <Link
                href={`${API_URL}/${option.value}?url=${chapterURL}`}
                className="flex items-center gap-1.5"
                target="_blank"
              >
                <DownloadIcon className="text-fg-500 size-4" />
                <span>{option.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Popover.Content>
    </Popover.Root>
  );
}
