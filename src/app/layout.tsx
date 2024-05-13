import "@/ui/globals.css";

import type { Metadata } from "next";
import { robotoCondensed } from "@/ui/fonts";

import Header from "@/ui/layout/header";
import Footer from "@/ui/layout/footer";
import { cn } from "@/lib/utils";
import Banner from "@/ui/layout/banner";

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
    <html lang="vi">
      <body
        className={cn(
          robotoCondensed.className,
          "grid grid-rows-[auto_auto_1fr_auto] min-h-dvh",
        )}
      >
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
