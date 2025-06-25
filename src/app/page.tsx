// Importing components for the homepage
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WhatsIncludedSection from "./components/WhatsIncludedSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <HeroSection />
      <AboutSection />
      <WhatsIncludedSection />
      <WhyChooseUsSection />
      <PricingSection />
      <ContactSection />
      {/* Footer */}
    </div>
  );
}
