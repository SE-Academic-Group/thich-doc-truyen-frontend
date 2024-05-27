import { cn } from "@/lib/utils";
import { robotoCondensed } from "@/ui/fonts";
import "@/ui/globals.css";
import type { Metadata } from "next";

export const metadata = {
  title: "Thích Đọc Truyện",
  description: "Tìm kiếm và thưởng thức đa dạng truyện chữ online miễn phí",
  keywords: "đọc truyện, truyện chữ, truyện online, truyện miễn phí",
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-p-3 scroll-smooth">
      <body
        className={cn(robotoCondensed.className, "min-h-dvh bg-primary-bg")}
      >
        {children}
      </body>
    </html>
  );
}
