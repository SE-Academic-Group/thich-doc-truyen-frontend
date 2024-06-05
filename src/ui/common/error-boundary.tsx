import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback: React.ReactElement;
};

export default function ErrorBoundary({
  children,
  fallback,
}: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary fallback={fallback}>{children}</ReactErrorBoundary>
  );
}
