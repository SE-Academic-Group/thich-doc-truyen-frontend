import Footer from "@/ui/layout/footer";
import Header from "@/ui/layout/header";

type TimKiemLayoutProps = React.PropsWithChildren;

export default function TimKiemLayout({ children }: TimKiemLayoutProps) {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
