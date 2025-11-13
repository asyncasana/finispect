// Importing components for the homepage
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-900 min-h-screen flex flex-col">
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="whats-included">
          <ServicesSection />
        </div>
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
