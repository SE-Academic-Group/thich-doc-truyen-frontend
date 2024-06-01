import Footer from "@/ui/layout/footer";
import Header from "@/ui/layout/header";

export type TimKiemLayoutProps = Readonly<React.PropsWithChildren>;

export default function RootLayout({ children }: TimKiemLayoutProps) {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
