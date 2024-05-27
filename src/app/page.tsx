import Footer from "@/ui/home/footer";
import Header from "@/ui/home/header";
import Main from "@/ui/home/main";

export default function Page() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto,1fr,auto]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
