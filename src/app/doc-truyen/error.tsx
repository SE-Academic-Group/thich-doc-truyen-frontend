"use client";

import { useErrorReporting } from "@/hooks/use-error-reporting";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useErrorReporting(error);

  return (
    <div className="container">
      <h2>Có lỗi xảy ra!</h2>
      <p>{error.toString()}</p>
      <button onClick={() => reset()}>Thử lại</button>
    </div>
  );
}
