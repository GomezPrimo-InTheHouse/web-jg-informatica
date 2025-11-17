import Header from "../components/landing/Header.jsx";
import Hero from "../components/landing/Hero.jsx";
import Features from "../components/landing/Features.jsx";           // Servicios técnicos
import SoftwareSection from "../components/landing/SoftwareSection.jsx"; // NUEVO
import Clients from "../components/landing/Clients.jsx";
import CaseStudies from "../components/landing/CaseStudies.jsx";
import MidCTA from "../components/landing/MidCTA.jsx";
import FAQ from "../components/landing/FAQ.jsx";
import Footer from "../components/landing/Footer.jsx";

export default function LandingPage() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        {/* <Clients /> */}
        <SoftwareSection />
        {/* <CaseStudies /> */}
        <MidCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
