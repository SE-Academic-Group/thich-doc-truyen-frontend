import Footer from "@/ui/doc-truyen/footer";
import Header from "@/ui/doc-truyen/header";

export type LayoutProps = Readonly<React.PropsWithChildren>;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
