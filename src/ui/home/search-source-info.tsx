"use client";

import { QuestionIcon } from "../icons";
import * as Popover from "@radix-ui/react-popover";

export default function SearchSourceInfo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <div>
        <span>Nguồn tìm kiếm: </span>
        <span className="font-bold uppercase text-primary">truyenfull.vn</span>
      </div>
      <Popover.Root>
        <Popover.Trigger>
          <div className="flex items-center gap-0.5">
            <QuestionIcon />
            <span>Thay đổi nguồn</span>
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            <div className="rounded-md border bg-white px-4 py-2 shadow-lg">
              Tùy chỉnh
              <span aria-label="Bước tiếp theo"> &rarr; </span>
              Thay đổi nguồn <br className="md:hidden" />
              <span aria-label="Bước tiếp theo"> &rarr; </span>
              Tích chọn nguồn truyện
            </div>
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
