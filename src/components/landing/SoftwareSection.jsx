import { Check } from "lucide-react";
import { whatsappLink } from "../../config/negocio.js";

// Sistema principal
const EDIFAI = {
  nombre: "EdifAI",
  para: "Gestión de obras para constructoras y estudios de arquitectura",
  texto:
    "Cada obra dividida en sus sectores reales, con labores, personal, presupuestos y pagos conectados entre sí. Incluye un asistente que responde por texto o por voz cuántos trabajadores hay activos, cómo va una labor o cuánto se gastó, y exporta la respuesta en PDF.",
  modulos: [
    "Obras",
    "Labores",
    "Trabajadores",
    "Presentismo",
    "Presupuestos",
    "Pagos",
    "Gastos imprevistos",
    "Materiales",
    "Compras",
    "Clientes",
    "Usuarios y permisos",
  ],
};

// Resto de los sistemas, en orden de prioridad
const SISTEMAS = [
  {
    nombre: "Cuaderno",
    para: "Logística para repartos de soda, agua y dispensers",
    puntos: [
      "Clientes y recorridos de reparto",
      "Despachos fiados y pagos",
      "Control de envases retornables",
      "Stock y producción, si los necesitás",
    ],
  },
  {
    nombre: "TallerPro",
    para: "Gestión para talleres mecánicos",
    puntos: [
      "Vehículos y clientes",
      "Órdenes de trabajo con su estado",
      "Presupuestos y cobros",
      "Inventario de repuestos y mecánicos",
    ],
  },
  {
    nombre: "Servicio técnico y celulares",
    para: "Para servicios técnicos y venta de celulares. Es el que usamos todos los días en este local.",
    puntos: [
      "Equipos, órdenes de trabajo y presupuestos",
      "Ventas, stock y compraventa de celulares",
      "Tienda online con Mercado Pago",
      "Consulta del estado del equipo para tus clientes",
    ],
  },
];

const ETAPAS_PROYECTO = [
  { t: "Relevamiento", d: "Entendemos tu negocio y vemos qué sistema le sirve o qué hay que adaptar." },
  { t: "Demo", d: "Lo probás con datos de ejemplo antes de decidir." },
  { t: "Puesta en marcha", d: "Cargamos tus datos y lo dejamos funcionando." },
  { t: "Acompañamiento", d: "Capacitación, soporte y mejoras a medida que lo usás." },
];

const pedirDemo = (sistema) => whatsappLink(`Hola, quiero ver una demo de ${sistema}.`);

export default function SoftwareSection() {
  return (
    <section id="software" className="bg-tinta text-papel">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 className="text-4xl font-bold leading-none md:text-5xl lg:col-span-6">Sistemas que desarrollamos</h2>
          <p className="max-w-[48ch] text-white/75 lg:col-span-5 lg:col-start-8 lg:pt-2">
            Cuatro sistemas listos para usar, hechos en Villa María y adaptables a cómo trabaja tu negocio.
          </p>
        </div>

        {/* EdifAI: sistema principal */}
        <article className="mt-12 grid gap-10 border-t-2 border-papel pt-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-block -rotate-2 rounded border-2 border-naranja px-2.5 py-1 font-display text-base font-bold leading-none text-naranja">
              Nuestro sistema principal
            </span>
            <h3 className="mt-5 text-6xl font-bold leading-none md:text-7xl">{EDIFAI.nombre}</h3>
            <p className="mt-3 font-display text-2xl font-semibold leading-tight">{EDIFAI.para}</p>
            <p className="mt-4 max-w-[52ch] text-white/75">{EDIFAI.texto}</p>
            <a
              href={pedirDemo("EdifAI")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-principal mt-8"
            >
              Pedir una demo de EdifAI
            </a>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h4 className="font-display text-xl font-bold">Módulos</h4>
            <ul className="mt-3 grid grid-cols-2 gap-x-8 sm:grid-cols-3">
              {EDIFAI.modulos.map((m) => (
                <li key={m} className="border-t border-white/20 py-3 font-medium">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Resto de los sistemas */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {SISTEMAS.map((s) => (
            <article key={s.nombre} className="flex flex-col border-t-2 border-papel pt-6">
              <h3 className="text-3xl font-bold leading-tight">{s.nombre}</h3>
              <p className="mt-2 max-w-[40ch] text-white/75">{s.para}</p>
              <ul className="mt-5 space-y-2.5">
                {s.puntos.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-naranja" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href={pedirDemo(s.nombre)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit pt-6 font-semibold underline decoration-naranja decoration-2 underline-offset-4 hover:text-naranja"
              >
                Pedir una demo
              </a>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-8 border-t border-white/20 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold">Cómo lo ponemos en marcha</h3>
            <p className="mt-2 max-w-[36ch] text-[0.95rem] text-white/70">
              También hacemos páginas web, tiendas online e integraciones a medida.
            </p>
          </div>
          <ol className="grid gap-6 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {ETAPAS_PROYECTO.map((e, i) => (
              <li key={e.t}>
                <span className="font-display text-lg font-bold text-naranja">{i + 1}.</span>{" "}
                <span className="font-display text-lg font-bold">{e.t}</span>
                <p className="mt-1 text-[0.95rem] text-white/70">{e.d}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[60ch] text-[0.95rem] text-white/60">
            Hechos con React, Node y PostgreSQL. Funcionan en la compu y en el celular, con usuarios, roles y datos en la
            nube.
          </p>
          <a
            href={whatsappLink("Hola, quiero consultar por un sistema para mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-principal shrink-0"
          >
            Contanos qué necesitás
          </a>
        </div>
      </div>
    </section>
  );
}
