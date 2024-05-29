import { cn } from "@/lib/utils";

export type SkeletonWrapperProps = Readonly<{
  children: React.ReactNode;
  screenReaderText?: string;
}>;

export type SkeletonBoxProps = Readonly<{
  className: string;
  children?: React.ReactNode;
}>;

function SkeletonBox(props: SkeletonBoxProps) {
  return (
    <div className={cn("bg-bg-100 rounded-sm", props.className)}>
      {props.children}
    </div>
  );
}

function SkeletonWrapper({
  children,
  screenReaderText = "Nội dung đang được chuẩn bị",
}: SkeletonWrapperProps) {
  return (
    <output>
      <span className="sr-only">{screenReaderText}</span>
      <div aria-hidden="true" className="animate-pulse">
        {children}
      </div>
    </output>
  );
}

const Skeleton = {
  Box: SkeletonBox,
  Wrapper: SkeletonWrapper,
};

export default Skeleton;
