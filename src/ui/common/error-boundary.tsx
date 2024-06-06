"use client";

import { logToErrorReportingService } from "@/lib/error-handling";
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
      onError={(error) => logToErrorReportingService(error)}
    >
      {children}
    </ReactErrorBoundary>
  );
}
