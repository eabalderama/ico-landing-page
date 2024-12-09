import Header from "./components/header";
import Hero from "./components/hero";
import TokenDetails from "./components/token-details";
import IcoInfo from "./components/ico-info";
import Team from "./components/team";
import Roadmap from "./components/roadmap";
import Faq from "./components/faq";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main>
        <Hero />
        <TokenDetails />
        <IcoInfo />
        <Team />
        <Roadmap />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
