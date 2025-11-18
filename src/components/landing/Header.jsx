


// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoJG from "../../assets/logo-1-sin-fondo.png"; 

// Definición de colores para una mayor coherencia
const COLORS = {
    // Color oscuro principal 
    darkPrimary: "#0F1823",
    // Color claro 
    lightText: "#FFFFFF",
    // Color de acento
    accentGold: "#2f63d3ff",
};

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    // Estado para controlar si el menú móvil está abierto
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Lógica para detectar el desplazamiento
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Usamos SIEMPRE tu imagen local como logo
    const LOGO_SRC = logoJG;
    const LOGO_ALT = "Logo de JG Informática";
    const logoClass = isScrolled || isMenuOpen
        ? "invert brightness-110"      // modo blanco
        : "brightness-0 invert-[0.15]"; // modo negro suave
    const internalLinks = ["Servicios Técnicos", "Software", "Preguntas Frecuentes"];

    // CLASES DINÁMICAS DEL ENCABEZADO
    let headerClasses = "";

    // *** LÓGICA DE FONDO ACTUALIZADA (igual que antes, pero con clases fijas Tailwind) ***
    if (isMenuOpen) {
        // 1. MOBILE MENU OPEN: Forzamos fondo oscuro sólido (100% opacidad)
        headerClasses = "bg-[#0F1823] shadow-lg";
    } else if (isScrolled) {
        // 2. SCROLLED (Desktop/Mobile Menu Closed): Fondo oscuro semi-transparente/blur
        headerClasses = "backdrop-blur-md bg-[#0F1823]/90 shadow-lg";
    } else {
        // 3. TOP (Desktop/Mobile Menu Closed): Fondo transparente
        headerClasses = "bg-transparent";
    }
    // **********************************

    // CLASES DINÁMICAS DEL TEXTO DE NAVEGACIÓN
    // El texto debe ser blanco si está scrolled O si el menú está abierto para contrastar con el fondo oscuro.
    const textColorClass =
        isScrolled || isMenuOpen ? "text-white" : "text-gray-900";

    // Estilos de color para el botón (usados con el atributo 'style')
    const buttonStyles =
        isScrolled || isMenuOpen // El botón usa estilo scrolled si está abierto
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

    // Clases NO relacionadas con el color del botón (para el hover)
    const ctaHoverClasses =
        isScrolled || isMenuOpen ? "hover:opacity-90" : "hover:opacity-80";

    // Manejador para cerrar el menú y hacer scroll
    const handleMobileLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`sticky top-0 z-40 transition-all duration-300 ${headerClasses}`}
        >
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Marca / Logo principal */}
                <div className="flex items-center">
                    <img
                        src={LOGO_SRC}
                        alt={LOGO_ALT}
                        className={`  h-20 md:h-24 lg:h-28 
                        object-contain 
                        transition-all duration-300 
                        rounded-full
                        hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(79,163,209,0.5)] ${logoClass}`}
                    />
                </div>


                {/* Nav - Enlaces principales (Desktop) */}
                <nav
                    className={`hidden md:flex items-center gap-8 ${textColorClass} text-base font-medium transition-colors duration-300`}
                >
                    {internalLinks.map((linkText) => (
                        <a
                            key={linkText}
                            href={`#${linkText.toLowerCase().replace(/\s/g, "-")}`}
                            className={`
                relative transition duration-300
                hover:text-[#2f63d3ff]
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] 
                after:bg-[#2f63d3ff]
                hover:after:w-full after:transition-all after:duration-300
              `}
                        >
                            {linkText}
                        </a>
                    ))}
                </nav>

                {/* CTA - Botón de Contacto (Desktop - visible en mobile si no hay botón de hamburguesa) */}
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

                {/* BOTÓN DE MENÚ MÓVIL (Operativo) */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`md:hidden p-2 transition-colors duration-300 ${textColorClass}`}
                >
                    {/* Icono dinámico: X si está abierto, Menu si está cerrado */}
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* MENÚ DESPLEGABLE MÓVIL */}
            <div
                className={`
          md:hidden absolute w-full transition-all duration-300 ease-in-out overflow-hidden 
          ${isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 py-0"}
          bg-[#0F1823] shadow-xl
        `}
            >
                <nav className="flex flex-col space-y-3 px-4">
                    {internalLinks.map((linkText) => (
                        <a
                            key={`mobile-${linkText}`}
                            href={`#${linkText.toLowerCase().replace(/\s/g, "-")}`}
                            onClick={handleMobileLinkClick} // Cierra el menú al hacer clic
                            className="text-white text-base font-medium py-2 border-b border-white/10 hover:text-[#2f63d3ff] transition"
                        >
                            {linkText}
                        </a>
                    ))}
                    {/* CTA también en el menú móvil */}
                    <a
                        href="#contacto"
                        onClick={handleMobileLinkClick}
                        className="text-center mt-3 block rounded-full px-5 py-2.5 text-sm font-semibold bg-[#2f63d3ff] text-[#0F1823] hover:opacity-90 transition"
                    >
                        Contacto
                    </a>
                </nav>
            </div>
        </header>
    );
}

