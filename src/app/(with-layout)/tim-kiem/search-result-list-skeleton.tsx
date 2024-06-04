import Skeleton from "../../../ui/common/skeleton";
import { ImageIcon } from "@/lib/icons";

export default function SearchResultListSkeleton() {
  return (
    <Skeleton.Wrapper>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-x-4 gap-y-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <li
            key={index * Math.PI}
            className="grid grid-cols-[auto,1fr] items-center gap-4 rounded-sm border-2 p-4"
          >
            <Skeleton.Box className="grid h-[120px] w-[90px] place-items-center rounded bg-bg-100">
              <ImageIcon className="text-bg-300" />
            </Skeleton.Box>
            <div className="w-full mixin:rounded-full">
              <Skeleton.Box className="mixin mb-2 h-2.5 w-56" />
              <Skeleton.Box className="mixin mb-4 h-2.5 w-48" />
              <Skeleton.Box className="mixin mb-2.5 h-2 max-w-32" />
              <Skeleton.Box className="mixin mb-2.5 h-2 max-w-20" />
            </div>
            <span className="sr-only">Đang xử lý kết quả tìm kiếm...</span>
          </li>
        ))}
      </ul>
    </Skeleton.Wrapper>
  );
}
