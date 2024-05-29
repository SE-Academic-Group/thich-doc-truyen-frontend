import { cn } from "@/lib/utils";

export type SkeletonWrapperProps = Readonly<{
  children: React.ReactNode;
  screenReaderText?: string;
}>;

export type SkeletonBoxProps = Readonly<{
  className: string;
}>;

function SkeletonBox({ className }: SkeletonBoxProps) {
  return (
    <div className={cn("animate-pulse bg-bg-100 rounded-sm", className)} />
  );
}

function SkeletonWrapper({
  children,
  screenReaderText = "Nội dung đang được chuẩn bị",
}: SkeletonWrapperProps) {
  return (
    <output>
      <span className="sr-only">{screenReaderText}</span>
      <div aria-hidden="true">{children}</div>
    </output>
  );
}

const Skeleton = {
  Box: SkeletonBox,
  Wrapper: SkeletonWrapper,
};

export default Skeleton;
