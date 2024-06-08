import Footer from "@/app/doc-truyen/_layout/footer";
import Header from "@/app/doc-truyen/_layout/header";

type LayoutProps = React.PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
