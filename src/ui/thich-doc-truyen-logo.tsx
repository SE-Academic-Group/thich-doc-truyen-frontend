import { cn } from "@/lib/utils";
import Link from "next/link";
import { protestRevolution } from "./fonts";
import { tv, type VariantProps } from "tailwind-variants";

const logo = tv({
  base: cn("font-bold uppercase", protestRevolution.className),
  variants: {
    size: {
      sm: "text-lg",
      md: "text-xl",
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
