import Skeleton from "@/ui/common/skeleton";

export default function LoadingScreen() {
  return (
    <Skeleton.Wrapper>
      <div className="mx-auto my-4 flex max-w-[660px] flex-col items-center gap-4">
        <Skeleton.Box className="h-4 w-16 self-end" />
        <Skeleton.Box className="h-6 w-1/3" />
        <Skeleton.Box className="h-8 w-1/2" />
        <div className="flex justify-center gap-2">
          <Skeleton.Box className="h-7 w-24" />
          <Skeleton.Box className="h-7 w-16" />
          <Skeleton.Box className="h-7 w-24" />
        </div>
        <Skeleton.Box className="h-96 w-full" />
      </div>
    </Skeleton.Wrapper>
  );
}
