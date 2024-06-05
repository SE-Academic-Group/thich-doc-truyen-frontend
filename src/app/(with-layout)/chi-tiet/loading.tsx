import Skeleton from "@/ui/common/skeleton";

export default function Loading() {
  return (
    <Skeleton.Wrapper>
      <div className="py-8 container hidden md:block">
        <Skeleton.Box className="h-7 w-[20ch] mb-5" />
        <div className="grid grid-cols-[auto_1fr] gap-8 mb-8">
          <Skeleton.Box className="h-[300px] w-[200px]" />
          <Skeleton.Box className="h-[300px] w-full" />
        </div>
        <Skeleton.Box className="h-7 w-[20ch] mb-5" />
        <Skeleton.Box className="h-[500px] w-full" />
      </div>
      <div className="py-8 container md:hidden">
        <Skeleton.Box className="h-7 w-[20ch] mb-5" />
        <Skeleton.Box className="h-7 w-[32ch] mb-3 mx-auto" />
        <Skeleton.Box className="h-[300px] w-[200px] mx-auto mb-4" />
        <Skeleton.Box className="h-[100px] w-[160px] mx-auto mb-4" />
        <Skeleton.Box className="h-[300px] w-full mb-6" />
        <Skeleton.Box className="h-7 w-[20ch] mb-5" />
        <Skeleton.Box className="h-[500px] w-full" />
      </div>
    </Skeleton.Wrapper>
  );
}
