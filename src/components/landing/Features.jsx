import { ArrowUpRight } from "lucide-react";

const SERVICIOS = [
  {
    nombre: "Celulares y tablets",
    detalle: "Cambio de pantalla, batería y pin de carga. Microsoldadura en placa.",
  },
  {
    nombre: "PC y notebooks",
    detalle: "Fallas de hardware y software, limpieza, ampliación de RAM y disco SSD, optimización.",
  },
  {
    nombre: "Consolas de videojuegos",
    detalle: "Diagnóstico y reparación.",
  },
  {
    nombre: "Cámaras de seguridad",
    detalle: "Venta, instalación y configuración, con acceso desde el celular, visión nocturna y detección de movimiento.",
  },
  {
    nombre: "Accesorios",
    detalle: "Cargadores, cables, periféricos y vidrios templados en stock.",
  },
];

export default function Features() {
  return (
    <section id="servicios-tecnicos" className="bg-papel">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-4xl font-bold leading-none md:text-5xl">Qué reparamos</h2>
            <p className="mt-4 max-w-[36ch] text-tinta-2">
              Trabajamos con repuestos originales y alternativos de calidad. Siempre te damos las dos opciones con su
              precio.
            </p>
          </div>
        </div>
        <ul className="lg:col-span-8">
          {SERVICIOS.map((s) => (
            <li
              key={s.nombre}
              className="grid gap-1 border-t border-linea py-6 first:border-t-2 first:border-tinta sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8"
            >
              <h3 className="text-2xl font-bold leading-tight">{s.nombre}</h3>
              <p className="max-w-[52ch] text-tinta-2">{s.detalle}</p>
            </li>
          ))}
          <li className="border-t border-linea pt-6">
            <a
              href="https://app-shop-jg.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold underline decoration-naranja decoration-2 hover:text-naranja-oscuro"
            >
              Ver accesorios y equipos en JG Shop
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
