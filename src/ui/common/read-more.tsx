"use client";

import parse from "html-react-parser";
import { useState } from "react";

type ReadMoreProps = Readonly<{
  children: string;
  length?: number;
}>;

const DEFAULT_SHOW_LENGTH = 600;

export default function ReadMore({
  children,
  length = DEFAULT_SHOW_LENGTH,
}: ReadMoreProps) {
  const [more, setMore] = useState(false);
  const contentLength = children.length;

  if (contentLength <= length) {
    return <div>{parse(children)}</div>;
  }

  const content = more ? children : children.slice(0, length);

  return (
    <div>
      {parse(content)}{" "}
      {children.length > length && (
        <button
          className="text-primary"
          onClick={() => setMore((prev) => !prev)}
        >
          {more ? "Thu gọn" : "... Xem thêm"}
        </button>
      )}
    </div>
  );
}
