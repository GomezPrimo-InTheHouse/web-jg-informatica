import React from "react";
import logoJG from "../../assets/logo-1-sin-fondo.png"; 

export default function Footer() {
  return (
    <footer className="bg-[#1E2A38] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LOGO + Marca */}
          <div className="flex items-center gap-3">
            {/* LOGO BLANCO + EFECTOS */}
            <img
              src={logoJG}
              alt="Logo JG Informática"
              className="
                h-20 md:h-24 lg:h-28 
                object-contain
                invert brightness-110
                transition-all duration-300
                hover:scale-105 hover:brightness-125
              "
            />

            
          </div>

          {/* NAV Links */}
          <nav className="flex items-center gap-5 text-sm text-[#D9D9D9]">
            <a href="#servicios-tecnicos" className="hover:text-white transition">Servicios Técnicos</a>
            <a href="#software" className="hover:text-white transition">Software</a>
            <a href="#preguntas-frecuentes" className="hover:text-white transition">Preguntas Frecuentes</a>
            <a href="#contacto" className="hover:text-white transition">Contacto</a>
          </nav>

          {/* Info derecha */}
          <div className="text-xs text-[#D9D9D9] text-center md:text-right leading-relaxed">
            <div>Bolívar 1313 · Villa María</div>
            <div>WhatsApp: 353 4275476</div>
            <div>
              © {new Date().getFullYear()} JG Informática — Todos los derechos reservados.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
