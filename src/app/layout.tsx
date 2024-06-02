import { cn } from "@/lib/utils";
import { robotoCondensed } from "@/ui/fonts";
import "@/ui/globals.css";
import type { Metadata } from "next";

export const metadata = {
  title: "Thích Đọc Truyện",
  description: "Tìm kiếm và thưởng thức đa dạng truyện chữ online miễn phí",
  keywords: "đọc truyện, truyện chữ, truyện online, truyện miễn phí",
} satisfies Metadata;

export type RootLayoutProps = Readonly<React.PropsWithChildren>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="vi" className="scroll-p-3 scroll-smooth">
      <body
        className={cn(robotoCondensed.className, "bg-primary-bg min-h-dvh")}
      >
        {children}
      </body>
    </html>
  );
}
