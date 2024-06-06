import { cn } from "@/lib/utils";
import Link from "next/link";
import { type VariantProps, tv } from "tailwind-variants";

const logo = tv({
  base: "font-bold uppercase text-center font-logo",
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
  compact?: boolean;
};

export default function ThichDocTruyenLogo({
  className,
  compact,
  ...props
}: LogoProps) {
  return (
    <Link href="/" className={cn(logo(props), className)}>
      <span className={cn(compact && "hidden sm:inline")}>
        Thích đọc truyện
      </span>
      <span className={cn("hidden", compact && "inline sm:hidden")}>
        TDTruyen
      </span>
    </Link>
  );
}
