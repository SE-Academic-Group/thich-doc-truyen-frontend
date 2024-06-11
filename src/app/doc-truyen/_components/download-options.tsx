"use client";

import { getDownloadOptions } from "@/data/get-download-options";
import { API_URL } from "@/lib/constants";
import { DownloadIcon } from "@/lib/icons";
import { capitalize } from "@/lib/utils";
import Link from "next/link";
import useSWR from "swr";

type DownloadOptionsProps = {
  chapterURL: string;
};

export default function DownloadOptions({ chapterURL }: DownloadOptionsProps) {
  const { data, isLoading, error } = useSWR(
    "download-options",
    getDownloadOptions,
  );

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return null;

  return (
    <ul className="space-y-2 text-sm">
      {data.map((option) => (
        <li key={option.name}>
          <Link
            href={`${API_URL}/download?type=${option.name}&url=${chapterURL}`}
            className="flex items-center gap-1.5"
            target="_blank"
          >
            <DownloadIcon className="text-fg-500 size-4" />
            <span>{capitalize(option.name)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
