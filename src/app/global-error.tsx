"use client";

import { useLogToErrorReporting } from "@/lib/error-handling";

export default function GlobalError({ error }: { error: Error }) {
  useLogToErrorReporting(error);

  return (
    <html>
      <body>
        <main className="container">
          <h2>500 | SERVER_ERROR</h2>
          <p>Có lỗi xảy ra! Vui lòng quay lại sau.</p>
        </main>
      </body>
    </html>
  );
}
