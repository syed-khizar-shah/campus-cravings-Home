import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesGrid from "./components/FeaturesGrid";
import FeatureSection from "./components/FeatureSection";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full font-onest">
      <Navbar />
      <div id="mission">
        <HeroSection />
      </div>
      <div id="featuresGrid">
        <FeaturesGrid />
      </div>
      <div id="featureSection">
        <FeatureSection />
      </div>
      <DownloadCTA />
      <Footer />
    </div>
  );
}

export default App;