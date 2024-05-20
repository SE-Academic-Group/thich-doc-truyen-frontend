import "@/ui/globals.css";

import { robotoCondensed } from "@/ui/fonts";
import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import Footer from "@/ui/layout/footer";
import Header from "@/ui/layout/header";

export const metadata = {
  title: "Đọc truyện online | Thích Đọc Truyện",
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
        className={cn(
          robotoCondensed.className,
          "grid grid-rows-[auto_1fr_auto]",
          "min-h-dvh bg-primary-bg",
        )}
      >
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
