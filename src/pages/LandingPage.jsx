import Header from "../components/landing/Header.jsx";
import Hero from "../components/landing/Hero.jsx";
import Proceso from "../components/landing/Proceso.jsx";
import Features from "../components/landing/Features.jsx";
import SoftwareSection from "../components/landing/SoftwareSection.jsx";
import Contacto from "../components/landing/Contacto.jsx";
import FAQ from "../components/landing/FAQ.jsx";
import Footer from "../components/landing/Footer.jsx";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Proceso />
        <Features />
        <SoftwareSection />
        <Contacto />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
