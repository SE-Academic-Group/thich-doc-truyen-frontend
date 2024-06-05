import Footer from "@/ui/layout/footer";
import Header from "@/ui/layout/header";

type LichSuLayoutProps = React.PropsWithChildren;

export default function LichSuLayout({ children }: LichSuLayoutProps) {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
