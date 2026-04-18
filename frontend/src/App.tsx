import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { PrizeDraws } from "./components/PrizeDraws";
import { FeaturedCharity } from "./components/FeaturedCharity";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <PrizeDraws />
        <FeaturedCharity />
      </main>
      <Footer />
    </div>
  );
}

export default App;
