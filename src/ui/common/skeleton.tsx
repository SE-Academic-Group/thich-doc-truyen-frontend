import { cn } from "@/lib/utils";

type SkeletonWrapperProps = React.PropsWithChildren;

const SkeletonWrapper = ({ children }: SkeletonWrapperProps) => {
  return (
    <output>
      <span className="sr-only">{"Nội dung đang được chuẩn bị"}</span>
      <div aria-hidden="true" className="animate-pulse">
        {children}
      </div>
    </output>
  );
};

type SkeletonBoxProps = React.PropsWithChildren & {
  className: string;
};

const SkeletonBox = ({ children, className }: SkeletonBoxProps) => {
  return (
    <div className={cn("rounded-sm bg-bg-100 size-4", className)}>
      {children}
    </div>
  );
};

const Skeleton = {
  Box: SkeletonBox,
  Wrapper: SkeletonWrapper,
};

export default Skeleton;
