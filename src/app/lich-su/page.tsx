import ReadingHistory from "./reading-history";
import ClientOnly from "@/ui/common/client-only";

export default function Page() {
  return (
    <main className="container py-6">
      <h1 className="text-xl font-medium uppercase underline underline-offset-2 mb-2">
        Lịch sử đọc truyện
      </h1>
      <ClientOnly fallback={<p aria-live="polite">Chờ chút nha...</p>}>
        <ReadingHistory />
      </ClientOnly>
    </main>
  );
}
