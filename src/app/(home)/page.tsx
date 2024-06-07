import Footer from "@/app/(home)/_layout/footer";
import Header from "@/app/(home)/_layout/header";
import Main from "@/app/(home)/_layout/main";

export default function Page() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto,1fr,auto]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
