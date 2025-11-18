// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoJG from "../../assets/logo-1-sin-fondo.png"; 

// Paleta
const COLORS = {
  darkPrimary: "#0F1823",
  lightText: "#FFFFFF",
  accentGold: "#2f63d3ff",
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logo + estilo dinámico
  const LOGO_SRC = logoJG;
  const LOGO_ALT = "Logo de JG Informática";
  const logoClass =
    isScrolled || isMenuOpen
      ? "invert brightness-110"
      : "brightness-0 invert-[0.15]";

  // LINK OBJETOS (YA NO SE GENERAN AUTOMÁTICAMENTE — AHORA FUNCIONAN)
  const internalLinks = [
    { label: "Servicios Técnicos", href: "#servicios-tecnicos" },
    { label: "Software", href: "#software" },
    { label: "Preguntas Frecuentes", href: "#preguntas-frecuentes" },
  ];

  // Fondo dinámico del header
  let headerClasses = "";
  if (isMenuOpen) {
    headerClasses = "bg-[#0F1823] shadow-lg";
  } else if (isScrolled) {
    headerClasses = "backdrop-blur-md bg-[#0F1823]/90 shadow-lg";
  } else {
    headerClasses = "bg-transparent";
  }

  // Color del texto de navegación
  const textColorClass =
    isScrolled || isMenuOpen ? "text-white" : "text-gray-900";

  // Botón Contacto
  const buttonStyles =
    isScrolled || isMenuOpen
      ? {
          backgroundColor: COLORS.accentGold,
          color: COLORS.darkPrimary,
          borderColor: COLORS.accentGold,
        }
      : {
          backgroundColor: COLORS.darkPrimary,
          color: COLORS.lightText,
          borderColor: COLORS.darkPrimary,
        };

  const ctaHoverClasses =
    isScrolled || isMenuOpen ? "hover:opacity-90" : "hover:opacity-80";

  const handleMobileLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${headerClasses}`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center">
          <img
            src={LOGO_SRC}
            alt={LOGO_ALT}
            className={`
              h-20 md:h-24 lg:h-28 
              object-contain rounded-full transition-all duration-300
              hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(79,163,209,0.5)]
              ${logoClass}
            `}
          />
        </div>

        {/* NAV DESKTOP */}
        <nav
          className={`hidden md:flex items-center gap-8 ${textColorClass} text-base font-medium transition-colors duration-300`}
        >
          {internalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                relative transition duration-300 hover:text-[#2f63d3ff]
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 
                after:h-[2px] after:bg-[#2f63d3ff] hover:after:w-full after:transition-all after:duration-300
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA DESKTOP */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#contacto"
            className={`
              rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 border shadow-md
              ${ctaHoverClasses}
            `}
            style={buttonStyles}
          >
            Contacto
          </a>
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${textColorClass}`}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div
        className={`
          md:hidden absolute w-full transition-all duration-300 ease-in-out overflow-hidden 
          ${isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 py-0"}
          bg-[#0F1823] shadow-xl
        `}
      >
        <nav className="flex flex-col space-y-3 px-4">
          {internalLinks.map((link) => (
            <a
              key={`mobile-${link.href}`}
              href={link.href}
              onClick={handleMobileLinkClick}
              className="
                text-white text-base font-medium py-2 border-b border-white/10 
                hover:text-[#2f63d3ff] transition
              "
            >
              {link.label}
            </a>
          ))}

          {/* CTA MOBILE */}
          <a
            href="#contacto"
            onClick={handleMobileLinkClick}
            className="
              text-center mt-3 block rounded-full px-5 py-2.5 text-sm font-semibold 
              bg-[#2f63d3ff] text-[#0F1823] hover:opacity-90 transition
            "
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
