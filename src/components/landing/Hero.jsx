import { MapPin } from "lucide-react";
import EquipoLookup from "./EquipoLookup.jsx";
import logoHex from "../../assets/logo-2-sinfondo.png";
import { whatsappLink, DIRECCION } from "../../config/negocio.js";

export default function Hero() {
  return (
    <section className="relative -mt-20 bg-mesa pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-8">
        <div className="lg:col-span-6">
          <h1 className="max-w-[13ch] text-[2.75rem] font-bold leading-[0.95] tracking-[-0.01em] sm:text-6xl lg:text-[4.5rem]">
            Arreglamos tu celular, notebook o PC en Villa María.
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg text-tinta-2 md:text-xl">
            Presupuesto por escrito antes de tocar nada, repuestos originales o alternativos a elección y garantía en
            cada trabajo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink("Hola, quiero consultar por una reparación.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-principal"
            >
              Escribinos por WhatsApp
            </a>
            <a href="#contacto" className="btn-secundario">
              Cómo llegar
            </a>
          </div>
          <p className="mt-8 flex items-center gap-2 text-[0.95rem] text-tinta-2">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {DIRECCION.calle}, {DIRECCION.barrio}. Más de 8 años en el barrio.
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-8">
          <div className="drop-shadow-[0_18px_28px_rgba(26,26,26,0.14)]">
            <div className="ticket bg-papel px-6 pb-8 pt-9 sm:px-8">
              <div className="flex items-center justify-between gap-4 border-b-2 border-tinta pb-4">
                <div>
                  <h2 className="text-[1.75rem] font-bold leading-none">¿Cómo va tu equipo?</h2>
                  <p className="mt-2 text-[0.95rem] text-tinta-2">Con los datos de tu orden de servicio.</p>
                </div>
                <img src={logoHex} alt="" className="h-12 w-12 shrink-0 object-contain" />
              </div>
              <div className="pt-6">
                <EquipoLookup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
