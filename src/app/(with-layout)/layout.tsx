import Footer from "@/ui/layout/footer";
import Header from "@/ui/layout/header";

type SharedLayoutProps = React.PropsWithChildren;

export default function SharedLayout({ children }: SharedLayoutProps) {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
