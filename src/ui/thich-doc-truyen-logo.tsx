import { cn } from "@/lib/utils";
import Link from "next/link";
import { protestRevolution } from "./fonts";

export default function ThichDocTruyenLogo() {
  return (
    <Link
      href="/"
      title="Thích Đọc Truyện"
      className={cn(
        "text-2xl font-bold uppercase",
        protestRevolution.className,
      )}
    >
      Thích đọc truyện
    </Link>
  );
}
