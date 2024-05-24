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
      lg: "text-4xl sm:text-[2.75rem]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type LogoProps = VariantProps<typeof logo>;

export default function ThichDocTruyenLogo(props: LogoProps) {
  return (
    <Link href="/" title="Thích Đọc Truyện" className={logo(props)}>
      Thích đọc truyện
    </Link>
  );
}
