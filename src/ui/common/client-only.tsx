"use client";

import { useEffect, useState } from "react";

type ClientOnlyProps = React.PropsWithChildren;

export default function ClientOnly({ children }: ClientOnlyProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <>{children}</> : <p aria-live="polite">Chờ chút nha...</p>;
}
