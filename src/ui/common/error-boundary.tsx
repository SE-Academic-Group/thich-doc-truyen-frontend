"use client";

import { reportError } from "@/lib/error-handling";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback: React.ReactElement | null;
};

export default function ErrorBoundary({
  children,
  fallback,
}: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary
      fallback={fallback}
      onError={(error) => reportError(error)}
    >
      {children}
    </ReactErrorBoundary>
  );
}
