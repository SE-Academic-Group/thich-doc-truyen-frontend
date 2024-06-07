import ReadingHistory from "./reading-history";
import ClientOnlyComponent from "@/ui/common/client-only-component";

export default function Page() {
  return (
    <main className="container py-6">
      <h1 className="text-xl font-medium uppercase underline underline-offset-2 mb-2">
        Lịch sử đọc truyện
      </h1>
      <ClientOnlyComponent fallback={<p aria-live="polite">Chờ chút nha...</p>}>
        <ReadingHistory />
      </ClientOnlyComponent>
    </main>
  );
}
