import Skeleton from "../../ui/common/skeleton";

export default function StorySourceListSkeleton() {
  return (
    <Skeleton.Wrapper>
      <ul className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i * 2}>
            <Skeleton.Box className="h-6 w-24" />
          </li>
        ))}
      </ul>
    </Skeleton.Wrapper>
  );
}
