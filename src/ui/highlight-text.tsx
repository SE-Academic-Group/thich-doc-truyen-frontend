import { cn } from "@/lib/utils";

type HighlightTextProps = React.ComponentProps<"mark">;

export default function HighlightText({
  className,
  ...props
}: HighlightTextProps) {
  return <mark className={cn(className)} {...props} />;
}
