"use client";

import { cn } from "@/lib/utils";
import parse from "html-react-parser";

type StoryContentProps = {
  storyContent: string;
};

export default function StoryContent(props: StoryContentProps) {
  return (
    <div className={cn("mb-6 mt-8 whitespace-pre-line text-pretty")}>
      {parse(props.storyContent)}
    </div>
  );
}
