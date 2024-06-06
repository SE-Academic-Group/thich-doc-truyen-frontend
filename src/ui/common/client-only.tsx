"use client";

import { useEffect, useState } from "react";

type ClientOnlyProps = React.PropsWithChildren & {
  fallback?: React.ReactNode;
};

export default function ClientOnly({ children, fallback }: ClientOnlyProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) return children;
  return fallback;
}
