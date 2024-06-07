"use client";

import { useEffect, useState } from "react";

type ClientOnlyComponentProps = React.PropsWithChildren & {
  fallback?: React.ReactNode;
};

export default function ClientOnlyComponent({
  children,
  fallback,
}: ClientOnlyComponentProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? children : fallback;
}
