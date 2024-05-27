export type SkeletonProps = Readonly<{
  children: React.ReactNode;
}>;

export default function Skeleton({ children }: SkeletonProps) {
  return (
    <output className="animate-pulse [&_div]:bg-bg-200">
      <span className="sr-only">Loading...</span>
      {children}
    </output>
  );
}
