"use client";

import parse from "html-react-parser";
import { useState } from "react";

type ReadMoreProps = React.PropsWithChildren;

const DEFAULT_SHOW_LENGTH = 600;

export default function ReadMore({ children }: ReadMoreProps) {
  const [more, setMore] = useState(false);

  if (!children || typeof children != "string") return null;
  if (children.length <= DEFAULT_SHOW_LENGTH)
    return <div>{parse(children)}</div>;

  const content = more ? children : children.slice(0, DEFAULT_SHOW_LENGTH);

  return (
    <div>
      {parse(content)}{" "}
      {children.length > DEFAULT_SHOW_LENGTH && (
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
