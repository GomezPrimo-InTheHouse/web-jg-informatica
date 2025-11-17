
import React, { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';


// Definición de colores para una mayor coherencia
const COLORS = {
  // Color oscuro principal 
  darkPrimary: '#0F1823', 
  // Color claro 
  lightText: '#FFFFFF', 
  // Color de acento
  accentGold: '#2f63d3ff', 
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  // URLs de ejemplo para el logo, cambiando de oscuro a claro.
  const LOGO_URL = (isScrolled || isMenuOpen) // El logo se mantiene claro si está scrolled O si el menú está abierto
    ? `https://placehold.co/120x40/${COLORS.lightText.substring(1)}/${COLORS.darkPrimary.substring(1)}/png?text=JG+Informática+Logo` 
    : `https://placehold.co/120x40/${COLORS.darkPrimary.substring(1)}/${COLORS.lightText.substring(1)}/png?text=JG+Informática+Logo`; 

  const LOGO_ALT = "Logo de JG Informática";
  const internalLinks = ['Servicios Técnicos', 'Software', 'Preguntas Frecuentes'];

  // CLASES DINÁMICAS DEL ENCABEZADO
  let headerClasses = '';

  // *** LÓGICA DE FONDO ACTUALIZADA ***
  if (isMenuOpen) {
      // 1. MOBILE MENU OPEN: Forzamos fondo oscuro sólido (100% opacidad)
      headerClasses = `bg-[${COLORS.darkPrimary}] shadow-lg`; 
  } else if (isScrolled) {
      // 2. SCROLLED (Desktop/Mobile Menu Closed): Fondo oscuro semi-transparente/blur
      headerClasses = `backdrop-blur-md bg-[${COLORS.darkPrimary}]/90 shadow-lg`; 
  } else {
      // 3. TOP (Desktop/Mobile Menu Closed): Fondo transparente
      headerClasses = `bg-transparent`; 
  }
  // **********************************

  // CLASES DINÁMICAS DEL TEXTO DE NAVEGACIÓN
  // El texto debe ser blanco si está scrolled O si el menú está abierto para contrastar con el fondo oscuro.
  const textColorClass = isScrolled || isMenuOpen 
    ? 'text-white'      
    : 'text-gray-900';  
    
  // Estilos de color para el botón (usados con el atributo 'style')
  const buttonStyles = isScrolled || isMenuOpen // El botón usa estilo scrolled si está abierto
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
  const ctaHoverClasses = isScrolled || isMenuOpen
    ? 'hover:opacity-90' 
    : 'hover:opacity-80'; 

  // Manejador para cerrar el menú y hacer scroll
  const handleMobileLinkClick = () => {
      setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${headerClasses}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Marca / Logo principal */}
        <div className="flex items-center">
          <img 
            src={LOGO_URL} 
            alt={LOGO_ALT}
            className="h-9 md:h-11 object-contain transition-all duration-300"
          />
        </div>

        {/* Nav - Enlaces principales (Desktop) */}
        <nav className={`hidden md:flex items-center gap-8 ${textColorClass} text-base font-medium transition-colors duration-300`}>
          {internalLinks.map((linkText) => (
            <a 
              key={linkText}
              href={`#${linkText.toLowerCase().replace(/\s/g, '-')}`} 
              className={`relative hover:text-[${COLORS.accentGold}] transition duration-300
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] 
                after:bg-[${COLORS.accentGold}] 
                hover:after:w-full after:transition-all after:duration-300`}
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
        // Este panel siempre usa el color oscuro sólido, ya que la opacidad del fondo se maneja en el <header> padre.
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out overflow-hidden 
          ${isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 py-0'}
          bg-[${COLORS.darkPrimary}] shadow-xl`}
      >
        <nav className="flex flex-col space-y-3 px-4">
          {internalLinks.map((linkText) => (
            <a 
              key={`mobile-${linkText}`}
              href={`#${linkText.toLowerCase().replace(/\s/g, '-')}`}
              onClick={handleMobileLinkClick} // Cierra el menú al hacer clic
              className={`text-white text-base font-medium py-2 border-b border-white/10 hover:text-[${COLORS.accentGold}] transition`}
            >
              {linkText}
            </a>
          ))}
          {/* CTA también en el menú móvil */}
          <a
            href="#contacto"
            onClick={handleMobileLinkClick}
            className={`text-center mt-3 block rounded-full px-5 py-2.5 text-sm font-semibold bg-[${COLORS.accentGold}] text-[${COLORS.darkPrimary}] hover:opacity-90 transition`}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

