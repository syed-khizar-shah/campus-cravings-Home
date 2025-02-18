import DownloadCTA from "./components/DownloadCTA";
import FeatureSection from "./components/FeatureSection";
import FeaturesGrid from "./components/FeaturesGrid";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full font-onest">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <FeatureSection />
      <DownloadCTA />
      <Footer />
    </div>
  );
}

export default App;
