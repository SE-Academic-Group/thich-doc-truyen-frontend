import Footer from "@/app/doc-truyen/footer";
import Header from "@/app/doc-truyen/header";

export type LayoutProps = React.PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
