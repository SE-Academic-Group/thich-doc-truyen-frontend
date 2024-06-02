import { cn } from "@/lib/utils";
import Link from "next/link";
import { tv, type VariantProps } from "tailwind-variants";
import { protestRevolution } from "../fonts";

const logo = tv({
  base: cn("font-bold uppercase text-center", protestRevolution.className),
  variants: {
    size: {
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-3xl sm:text-[2.75rem]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type LogoProps = VariantProps<typeof logo> & {
  className?: string;
};

export default function ThichDocTruyenLogo({ className, ...props }: LogoProps) {
  return (
    <Link
      href="/"
      title="Thích Đọc Truyện"
      className={cn(logo(props), className)}
    >
      <span className="hidden sm:inline">Thích đọc truyện</span>
      <span className="sm:hidden">TDTruyen</span>
    </Link>
  );
}
