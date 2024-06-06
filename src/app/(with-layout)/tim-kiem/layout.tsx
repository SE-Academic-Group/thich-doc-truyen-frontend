import SearchKeyword from "@/ui/layout/search-keyword";
import { Suspense } from "react";

type TimKiemLayoutProps = React.PropsWithChildren;

export default function TimKiemLayout({ children }: TimKiemLayoutProps) {
  return (
    <div>
      <Suspense fallback={null}>
        <SearchKeyword />
      </Suspense>
      {children}
    </div>
  );
}
