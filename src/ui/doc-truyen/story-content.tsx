"use client";

import PadSettings from "./pad-settings";
import { cn } from "@/lib/utils";

export type StoryContentProps = Readonly<{
  storyContent: string;
}>;

export default function StoryContent(props: StoryContentProps) {
  return (
    <>
      <div className={cn("mb-4 mt-6 whitespace-pre-line text-pretty text-lg")}>
        {props.storyContent}
      </div>
    </>
  );
}
