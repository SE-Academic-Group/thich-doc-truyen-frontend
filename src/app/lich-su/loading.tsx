import Skeleton from "@/ui/common/skeleton";

export default function Loading() {
  return (
    <div className="container py-6">
      <Skeleton.Wrapper>
        <Skeleton.Box className="h-7 w-56" />
        <div className="flex justify-end">
          <Skeleton.Box className="h-6 w-24" />
        </div>
        <div>
          <Skeleton.Box className="h-7 w-24 mb-3" />
          <Skeleton.Box className="h-6 w-1/2 mb-2" />
          <Skeleton.Box className="h-6 w-1/2 mb-2" />
          <Skeleton.Box className="h-6 w-1/2 mb-2" />
        </div>
      </Skeleton.Wrapper>
    </div>
  );
}
