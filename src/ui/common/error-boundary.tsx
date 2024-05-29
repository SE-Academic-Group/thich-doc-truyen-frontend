import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

export type ErrorBoundaryProps = Readonly<{
  children: React.ReactNode;
  fallback: React.ReactElement;
}>;

export default function ErrorBoundary({
  children,
  fallback,
}: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary fallback={fallback}>{children}</ReactErrorBoundary>
  );
}
