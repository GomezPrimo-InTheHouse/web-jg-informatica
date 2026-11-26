import logoJG from "../../assets/logo-2-sinfondo-blanco.png";
import { DIRECCION, WHATSAPP_VISIBLE, whatsappLink } from "../../config/negocio.js";

export default function Footer() {
  return (
    <footer className="bg-tinta text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <img src={logoJG} alt="JG Informática" className="h-14 w-14 object-contain" />
          <div className="text-[0.95rem] leading-snug">
            <p className="font-display text-xl font-bold text-papel">JG Informática</p>
            <p>
              {DIRECCION.calle}, {DIRECCION.ciudad}
            </p>
          </div>
        </div>

        <nav aria-label="Pie de página" className="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
          <a href="#servicios-tecnicos" className="hover:text-papel">Servicios técnicos</a>
          <a href="#software" className="hover:text-papel">Software</a>
          <a href="#preguntas-frecuentes" className="hover:text-papel">Preguntas frecuentes</a>
          <a href="#contacto" className="hover:text-papel">Contacto</a>
        </nav>

        <div className="text-[0.95rem] md:text-right">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-papel">
            WhatsApp {WHATSAPP_VISIBLE}
          </a>
          <p className="text-sm text-white/50">© {new Date().getFullYear()} JG Informática</p>
        </div>
      </div>
    </footer>
  );
}
