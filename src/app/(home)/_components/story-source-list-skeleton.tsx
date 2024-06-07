import Skeleton from "../../../ui/common/skeleton";

export default function StorySourceListSkeleton() {
  return (
    <Skeleton.Wrapper>
      <div className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton.Box className="h-6 w-24" key={i * 2} />
        ))}
      </div>
    </Skeleton.Wrapper>
  );
}
