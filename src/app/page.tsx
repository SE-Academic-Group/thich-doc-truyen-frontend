import Footer from "@/app/(home)/footer";
import Header from "@/app/(home)/header";
import Main from "@/app/(home)/main";

export default function Page() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto,1fr,auto]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
