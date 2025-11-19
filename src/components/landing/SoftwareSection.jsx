

// import React, { useState } from "react";
// // Usamos iconos de Lucide (si se importan en App.jsx)
// import { CheckCircle, Bot, ChevronDown, Wrench, Server, Cloud, HeartPulse } from 'lucide-react'; 

// /* ----------------------------- DATA DE TABS ----------------------------- */
// const tabs = [
//   {
//     key: "web",
//     label: "Páginas Web",
//     title: "Sitios profesionales que convierten",
//     desc: "Diseño moderno, performance y SEO. Tu presencia digital lista para vender, optimizada para todos los dispositivos y con velocidad de carga ultra rápida.",
//     bullets: ["Diseño UX/UI adaptable", "Sitios institucionales & Landing pages", "Estrategia Blog/SEO", "Integración de Google Analytics"],
//   },
//   {
//     key: "sistemas",
//     label: "Sistemas de Gestión",
//     title: "Operaciones bajo control",
//     desc: "Soluciones a medida para procesos reales y complejos: ventas, stock, RRHH, obras y más. Construidos con seguridad y escalabilidad en mente.",
//     bullets: ["ABM completos y optimizados", "Reportes y KPIs en tiempo real", "Sistema de Roles y permisos (RBAC)", "Integración con hardware y APIs externas"],
//   },
//   {
//     key: "ecommerce",
//     label: "E-commerce",
//     title: "Catálogo, carrito y pagos",
//     desc: "Tienda online robusta con checkout seguro, compatible con medios de pago locales e integración logística completa. Tu canal de ventas 24/7.",
//     bullets: ["Pasarelas de pago locales e internacionales", "Manejo de Cuotas y promociones dinámicas", "Panel de pedidos avanzado y automatizado", "Notificaciones Email/SMS para pedidos y envíos"],
//   },
//   {
//     key: "integraciones",
//     label: "Integraciones",
//     title: "Tu stack, trabajando en equipo",
//     desc: "APIs y conectores robustos con ERPs, CRMs, pasarelas, mensajería y sistemas IoT. Conectamos tus herramientas para un flujo de trabajo sin fisuras.",
//     bullets: ["Conexión a MercadoPago y otros servicios", "Integración con Twilio/WhatsApp", "Sistemas de Auth y 2FA/TOTP", "Conectividad MQTT/IoT para hardware"],
//   },
// ];

// /* ------------------------------ STACK LISTS ----------------------------- */
// const StackGroups = [
//   {
//     title: "Frontend",
//     items: [
//       { name: "React", color: "#61DAFB", icon: "react" },
//       { name: "Vite", color: "#646CFF", icon: "bolt" },
//       { name: "Tailwind", color: "#38BDF8", icon: "wind" },
//     ],
//   },
//   {
//     title: "Backend",
//     items: [
//       { name: "Node.js", color: "#83CD29", icon: "node" },
//       { name: "Express", color: "#FFFFFF", icon: "server" },
//     ],
//   },
//   {
//     title: "Base de datos",
//     items: [
//       { name: "Supabase", color: "#3ECF8E", icon: "supabase" },
//       { name: "PostgreSQL", color: "#336791", icon: "postgres" },
//     ],
//   },
//   {
//     title: "Seguridad & Auth",
//     items: [
//       { name: "Auth 2FA (TOTP)", color: "#4FA3D1", icon: "shield" },
//       { name: "RBAC", color: "#D9D9D9", icon: "roles" },
//     ],
//   },
//   {
//     title: "DevOps & Cloud",
//     items: [
//       { name: "Vercel", color: "#FFFFFF", icon: "triangle" },
//       { name: "Render", color: "#FFFFFF", icon: "cloud" },
//     ],
//   },
//   {
//     title: "Tiempo real / IoT",
//     items: [
//       { name: "MQTT", color: "#660066", icon: "signal" },
//       { name: "SSE/WebSocket", color: "#D9D9D9", icon: "pulse" },
//     ],
//   },
// ];

// /* ------------------------------ ICONOS SVG (Personalizados) ------------------------------ */
// // Se mantienen los iconos SVG para tecnologías específicas.
// function Icon({ name, className = "w-4 h-4" }) {
//   switch (name) {
//     case "react":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
//           <circle cx="12" cy="12" r="1.6" />
//           <ellipse cx="12" cy="12" rx="10" ry="4.5" />
//           <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
//           <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
//         </svg>
//       );
//     case "bolt":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="currentColor">
//           <path d="M13 3L3 14h7l-1 7 11-11h-7l0-7z" />
//         </svg>
//       );
//     case "wind":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
//           <path d="M3 8h10a3 3 0 1 0-3-3" strokeLinecap="round" />
//           <path d="M3 16h14a3 3 0 1 1-3 3" strokeLinecap="round" />
//           <path d="M3 12h7" strokeLinecap="round" />
//         </svg>
//       );
//     case "node":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="currentColor">
//           <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
//         </svg>
//       );
//     case "server":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
//           <rect x="3" y="4" width="18" height="6" rx="2" />
//           <rect x="3" y="14" width="18" height="6" rx="2" />
//           <circle cx="8" cy="7" r="1" /><circle cx="8" cy="17" r="1" />
//         </svg>
//       );
//     case "supabase":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="currentColor">
//           <path d="M5 3h14l-7 9 7 9H5l7-9-7-9z" />
//         </svg>
//       );
//     case "postgres":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
//           <ellipse cx="12" cy="7" rx="7" ry="4" />
//           <path d="M5 7v6c0 2.2 3.1 4 7 4s7-1.8 7-4V7" />
//           <path d="M12 11v6" />
//         </svg>
//       );
//     case "shield":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
//           <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" />
//           <path d="M9 12l2 2 4-4" strokeLinecap="round" />
//         </svg>
//       );
//     case "roles":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
//           <circle cx="8" cy="8" r="3" />
//           <path d="M2 19a6 6 0 0 1 12 0" />
//           <circle cx="18" cy="8" r="2.5" />
//           <path d="M14.5 19c.8-2.2 2.8-3.7 5-3.7" />
//         </svg>
//       );
//     case "triangle":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="currentColor">
//           <path d="M12 3l9 18H3L12 3z" />
//         </svg>
//       );
//     case "cloud":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
//           <path d="M7 18h9a4 4 0 1 0-1-7 5 5 0 0 0-9 2" />
//         </svg>
//       );
//     case "signal":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="currentColor">
//           <rect x="3" y="12" width="4" height="8" rx="1" />
//           <rect x="10" y="9" width="4" height="11" rx="1" />
//           <rect x="17" y="6" width="4" height="14" rx="1" />
//         </svg>
//       );
//     case "pulse":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
//           <path d="M3 12h4l2-6 4 12 2-6h6" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       );
//     case "bot":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
//           <rect x="5" y="7" width="14" height="10" rx="3" />
//           <circle cx="9" cy="12" r="1.5" /><circle cx="15" cy="12" r="1.5" />
//           <path d="M12 7V4" /><circle cx="12" cy="3" r="1" />
//         </svg>
//       );
//     case "chat":
//       return (
//         <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
//         </svg>
//       );
//     default:
//       return null;
//   }
// }

// /* ------------------------------ BADGE STACK (Mejorado UX) ----------------------------- */
// function TechBadge({ name, color, icon }) {
//   // UX/UI: Badge más grande y con sombra más definida.
//   return (
//     <div
//       className={`group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-white/10 bg-gray-800/70 transition duration-300
//                   shadow-lg shadow-black/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]
//                   hover:bg-gray-700/60 cursor-pointer`}
//       title={name}
//     >
//       <span className="grid place-items-center w-5 h-5 rounded-md bg-white/10 shrink-0">
//         <Icon name={icon} className="w-4 h-4 text-white" />
//       </span>
//       <span className="text-sm font-medium" style={{ color: color || "#D9D9D9" }}>
//         {name}
//       </span>
//     </div>
//   );
// }

// /* -------------------------- STACK ACCORDION ITEM ------------------------- */
// function AccordionItem({ title, items, defaultOpen = false }) {
//   const [isOpen, setIsOpen] = useState(defaultOpen);

//   return (
//     <div className="border-b border-white/10">
//       <button
//         className="flex justify-between items-center w-full py-4 text-left group"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-expanded={isOpen}
//       >
//         <p className="text-white font-semibold text-lg">{title}</p>
//         <ChevronDown 
//           className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-400' : 'rotate-0'}`}
//         />
//       </button>
      
//       <div 
//         className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
//       >
//         <div className="flex flex-wrap gap-3">
//           {items.map((it, k) => (
//             <TechBadge key={k} name={it.name} color={it.color} icon={it.icon} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* -------------------------- EXTRA HIGHLIGHTS GRID (Mejorado UX) ------------------------- */
// function ExtraHighlightsGrid({ items = [] }) {
//   // Ahora el grid es estático para garantizar que no haya espacio vacío.
//   return (
//     <div className="mt-8 pt-6 border-t border-white/10">
//       <p className="text-sm uppercase tracking-widest text-teal-400 font-semibold mb-4">Diferenciales clave</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {items.map((it, i) => {
//            const HighlightIcon = it.icon === 'shield' ? Wrench : (it.icon === 'server' ? Server : (it.icon === 'cloud' ? Cloud : HeartPulse));
//            return (
//             <div
//               key={i}
//               className="rounded-xl border border-white/10 bg-gray-900/50 p-5 transition duration-300 hover:shadow-xl hover:shadow-teal-900/40"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-lg bg-teal-600/20 grid place-items-center text-teal-400 shrink-0">
//                   <HighlightIcon className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-white font-semibold text-lg">{it.title}</p>
//                   <p className="text-sm text-gray-400 mt-0.5">{it.desc}</p>
//                 </div>
//               </div>
//             </div>
//            )
//         })}
//       </div>
//     </div>
//   );
// }


// /* --------------------------- CALL OUT IA BOTS (Mejorado UX) ---------------------------- */
// function IABotsCallout() {
//   const bots = [
//     { icon: "chat", title: "Asistente de Ventas", desc: "Responde consultas, arma presupuestos iniciales y agenda turnos, liberando a tu equipo comercial." },
//     { icon: "shield", title: "Soporte Técnico", desc: "Triage de incidencias, guías paso a paso y derivación inteligente con historial de problemas." },
//     { icon: "pulse", title: "Operaciones", desc: "Carga automática de lecturas, alertas críticas y resúmenes diarios por chat para la gestión." },
//   ];

//   return (
//     <section
//       aria-labelledby="bots-ia"
//       className="rounded-3xl border border-teal-500/20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-color-gray-800)_10%,_var(--tw-color-gray-950)_70%)] p-6 md:p-12 shadow-2xl shadow-teal-900/50"
//     >
//       {/* Header */}
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//         <div className="flex items-start gap-4 flex-1">
//           <div className="w-16 h-16 rounded-2xl bg-teal-600/30 grid place-items-center text-teal-400 shrink-0 border border-teal-500/50">
//             <Bot className="w-9 h-9" />
//           </div>
//           <div className="min-w-0">
//             <h3 id="bots-ia" className="text-white font-extrabold text-3xl leading-tight">
//               🤖 BOTS de IA Integrados
//             </h3>
//             <span className="mt-1 inline-flex items-center gap-1 text-sm px-4 py-1 rounded-full bg-teal-500/20 text-teal-400 font-semibold">
//               <span className="w-2 h-2 rounded-full bg-teal-300 animate-ping absolute opacity-75" />
//               <span className="w-2 h-2 rounded-full bg-teal-300 relative" />
//               Futuro Digital
//             </span>
//             <p className="mt-3 text-lg text-gray-300 leading-relaxed max-w-2xl">
//               Automatiza tareas repetitivas y mejora la experiencia del cliente con agentes conversacionales conectados directamente a tus datos.
//             </p>
//           </div>
//         </div>

//         {/* CTA para Bots */}
//         <a
//           href="#contacto"
//           className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-bold
//                       bg-teal-500 text-gray-900 hover:bg-teal-400 transition duration-300 shadow-xl shadow-teal-500/60 transform hover:scale-[1.03] shrink-0"
//         >
//           Solicitar Demo de IA
//         </a>
//       </div>

//       {/* Cards de Bots */}
//       <div className="mt-10 pt-6 border-t border-white/10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {bots.map((b, i) => (
//             <article
//               key={i}
//               className="rounded-xl border border-white/12 bg-gray-900/80 p-5
//                          shadow-md hover:shadow-xl hover:shadow-indigo-900/30 transition duration-300"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-lg bg-indigo-600/20 grid place-items-center text-indigo-400 shrink-0">
//                   <Icon name={b.icon} className="w-5 h-5" />
//                 </div>
//                 <div className="min-w-0">
//                   <h4 className="text-white font-bold text-lg leading-snug">{b.title}</h4>
//                   <p className="mt-1 text-sm text-gray-400 leading-normal">{b.desc}</p>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// /* --------------------------- COMPONENTE PRINCIPAL (Mejorado UX) ------------------------ */
// export default function SoftwareSection() {
//   const [active, setActive] = useState(tabs[0].key);
//   const tab = tabs.find((t) => t.key === active);

//   const extraHighlights = [
//     { icon: "shield", title: "Seguridad primero", desc: "Buenas prácticas, roles/permiso y 2FA opcional para proteger tu información." },
//     { icon: "server", title: "Performance real", desc: "SSR/SPA optimizado y APIs eficientes garantizan una experiencia de usuario rápida." },
//     { icon: "cloud", title: "Escalabilidad", desc: "Arquitectura Cloud-native lista para crecer en tráfico, usuarios y volumen de datos sin problemas." },
//     { icon: "pulse", title: "Observabilidad", desc: "Logs, métricas y alertas configuradas para monitoreo continuo y operación sin sobresaltos." },
//   ];


//   return (
//     <section id="software" className="bg-gray-900 border-t border-gray-800 py-16 md:py-24">
//       <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
//         {/* Título de la sección */}
//         <div className="max-w-3xl mb-12">
//           <h2 className="text-4xl font-extrabold text-white">Desarrollo Web & Sistemas de Gestión</h2>
//           <p className="mt-3 text-xl text-gray-400">
//             Software empaquetado y a medida con los más altos estándares de calidad: rendimiento, seguridad y escalabilidad garantizados.
//           </p>
//         </div>

//         {/* Tabs - Mejor feedback visual */}
//         <div className="mt-8 flex flex-wrap gap-3">
//           {tabs.map((t) => (
//             <button
//               key={t.key}
//               onClick={() => setActive(t.key)}
//               className={`rounded-full px-5 py-2.5 text-base font-semibold transition duration-300
//                 ${active === t.key
//                   // Color activo ligado al acento de Desarrollo (Teal, o un Indigo oscuro fuerte)
//                   ? "bg-indigo-600 text-white border border-indigo-500 shadow-lg shadow-indigo-600/40"
//                   : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700/80 hover:text-white"}`}
//             >
//               {t.label}
//             </button>
//           ))}
//         </div>

//         {/* 1. Panel de Contenido y Timeline (Distribución 2/3 y 1/3) */}
//         <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
//           {/* Columna principal (2/3) - Contenido del Tab, Highlights y Stack */}
//           <div className="lg:col-span-2 space-y-8">
//             <div 
//                 // Añadimos un sutil gradiente radial para darle más profundidad
//                 className="rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-color-gray-800)_10%,_var(--tw-color-gray-800)/90)] p-8 md:p-10 shadow-2xl shadow-black/40"
//             >
//               <h3 className="text-white text-3xl font-bold border-b border-indigo-400/20 pb-3">{tab.title}</h3>
//               <p className="mt-4 text-lg leading-relaxed text-gray-300">{tab.desc}</p>

//               {/* Lista de Bullets - Con ícono CheckCircle para un toque profesional */}
//               <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
//                 {tab.bullets.map((b, i) => (
//                   <li key={i} className="flex items-start gap-3 text-base text-gray-200">
//                     <CheckCircle className="w-5 h-5 mt-1 text-teal-400 shrink-0" />
//                     <span>{b}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Diales de Diferenciales Clave */}
//               <ExtraHighlightsGrid items={extraHighlights} />

//               {/* STACK premium con ACORDEÓN (Desplegable) */}
//               <div className="mt-10 pt-6 border-t border-white/10">
//                 <p className="text-sm uppercase tracking-widest text-indigo-400 font-semibold mb-4">Stack Tecnológico</p>
                
//                 {/* Contenedor del Acordeón */}
//                 <div className="rounded-xl border border-white/10 bg-gray-900/50 px-6 divide-y divide-white/5">
//                   {StackGroups.map((g, i) => (
//                     <AccordionItem 
//                       key={i} 
//                       title={g.title} 
//                       items={g.items} 
//                       defaultOpen={i === 0} // Abre el primer item por defecto
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Columna lateral (1/3) - Proceso de trabajo (Timeline) */}
//           <div className="space-y-8 lg:col-span-1">
//             <div className="sticky top-24 rounded-3xl border border-white/10 bg-gray-800/70 p-8 shadow-2xl shadow-indigo-900/30">
//               <h4 className="text-white font-bold text-2xl mb-6 border-b border-indigo-400/20 pb-3">Nuestro Proceso de Trabajo</h4>
              
//               {/* Timeline visual */}
//               <ol className="relative space-y-8 ml-2 border-l-2 border-indigo-700/50">
//                 {[
//                   { n: 1, t: "Descubrimiento", d: "Relevamos objetivos, procesos clave y definimos el alcance estratégico." },
//                   { n: 2, t: "Diseño UX/UI", d: "Prototipado de alta fidelidad para validar usabilidad y flujo con los stakeholders." },
//                   { n: 3, t: "Desarrollo Ágil", d: "Iteraciones cortas, sprints definidos, pruebas continuas y reportes de progreso." },
//                   { n: 4, t: "Despliegue & QA", d: "Puesta en producción segura, monitoreo post-lanzamiento y traspaso de conocimiento." },
//                 ].map((s) => (
//                   <li key={s.n} className="ml-8 relative">
//                     {/* Punto del Timeline */}
//                     <span className="absolute flex items-center justify-center w-8 h-8 -left-11 top-0 rounded-full bg-indigo-600 text-white font-extrabold text-lg shadow-md shadow-indigo-600/50 ring-4 ring-gray-800">
//                       {s.n}
//                     </span>
//                     <div>
//                       <div className="text-white text-lg font-bold">{s.t}</div>
//                       <div className="text-gray-400 text-sm mt-0.5">{s.d}</div>
//                     </div>
//                   </li>
//                 ))}
//               </ol>
              
//               <a
//                 href="#contacto"
//                 className="mt-8 inline-flex items-center justify-center w-full rounded-full px-4 py-3 text-lg font-bold text-gray-900 bg-indigo-500 hover:bg-indigo-400 transition shadow-xl shadow-indigo-500/50 transform hover:scale-[1.01]"
//               >
//                 Comenzar mi Proyecto
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* 2. SECCIÓN BOTS DE IA (100% de Ancho, al final) */}
//         <div className="mt-16">
//             <IABotsCallout />
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
// Usamos iconos de Lucide
import { CheckCircle, Bot, ChevronDown, Wrench, Server, Cloud, HeartPulse } from 'lucide-react'; 

/* ----------------------------- PALETA DE COLORES ----------------------------- */
// Esta paleta es la base de todos los cambios de diseño:
const COLORS = {
  bgDeep: '#1E2A38',       // Azul profundo (Fondo base)
  bgDeeper: '#0F1823',     // Azul muy oscuro
  cardPrimary: '#2E4A78',  // Azul acero (Cards, foco secundario)
  accentBright: '#4FA3D1', // Azul celeste brillante (CTA, acentos, glow)
  textSecondary: '#D9D9D9',// Gris plateado (Texto secundario, bordes)
  textPrimary: '#FFFFFF',  // Blanco puro
};

/* ----------------------------- DATA DE TABS ----------------------------- */
const tabs = [
  {
    key: "web",
    label: "Páginas Web",
    title: "Sitios profesionales que convierten",
    desc: "Diseño moderno, performance y SEO. Tu presencia digital lista para vender, optimizada para todos los dispositivos y con velocidad de carga ultra rápida.",
    bullets: ["Diseño UX/UI adaptable", "Sitios institucionales & Landing pages", "Estrategia Blog/SEO", "Integración de Google Analytics"],
  },
  {
    key: "sistemas",
    label: "Sistemas de Gestión",
    title: "Operaciones bajo control",
    desc: "Soluciones a medida para procesos reales y complejos: ventas, stock, RRHH, obras y más. Construidos con seguridad y escalabilidad en mente.",
    bullets: ["ABM completos y optimizados", "Reportes y KPIs en tiempo real", "Sistema de Roles y permisos (RBAC)", "Integración con hardware y APIs externas"],
  },
  {
    key: "ecommerce",
    label: "E-commerce",
    title: "Catálogo, carrito y pagos",
    desc: "Tienda online robusta con checkout seguro, compatible con medios de pago locales e integración logística completa. Tu canal de ventas 24/7.",
    bullets: ["Pasarelas de pago locales e internacionales", "Manejo de Cuotas y promociones dinámicas", "Panel de pedidos avanzado y automatizado", "Notificaciones Email/SMS para pedidos y envíos"],
  },
  {
    key: "integraciones",
    label: "Integraciones",
    title: "Tu stack, trabajando en equipo",
    desc: "APIs y conectores robustos con ERPs, CRMs, pasarelas, mensajería y sistemas IoT. Conectamos tus herramientas para un flujo de trabajo sin fisuras.",
    bullets: ["Conexión a MercadoPago y otros servicios", "Integración con Twilio/WhatsApp", "Sistemas de Auth y 2FA/TOTP", "Conectividad MQTT/IoT para hardware"],
  },
];

/* ------------------------------ STACK LISTS ----------------------------- */
const StackGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React", color: "#61DAFB", icon: "react" },
      { name: "Vite", color: "#646CFF", icon: "bolt" },
      { name: "Tailwind", color: "#38BDF8", icon: "wind" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", color: "#83CD29", icon: "node" },
      { name: "Express", color: COLORS.textPrimary, icon: "server" },
    ],
  },
  {
    title: "Base de datos",
    items: [
      { name: "Supabase", color: "#3ECF8E", icon: "supabase" },
      { name: "PostgreSQL", color: "#336791", icon: "postgres" },
    ],
  },
  {
    title: "Seguridad & Auth",
    items: [
      { name: "Auth 2FA (TOTP)", color: COLORS.accentBright, icon: "shield" }, 
      { name: "RBAC", color: COLORS.textSecondary, icon: "roles" },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "Vercel", color: COLORS.textPrimary, icon: "triangle" },
      { name: "Render", color: COLORS.textPrimary, icon: "cloud" },
    ],
  },
  {
    title: "Tiempo real / IoT",
    items: [
      { name: "MQTT", color: "#660066", icon: "signal" },
      { name: "SSE/WebSocket", color: COLORS.textSecondary, icon: "pulse" },
    ],
  },
];

/* ------------------------------ ICONOS SVG (Personalizados) ------------------------------ */
function Icon({ name, className = "w-4 h-4", color = "currentColor" }) {
  const baseProps = { viewBox: "0 0 24 24", className: className };

  switch (name) {
    case "react":
      return (
        <svg {...baseProps} fill="none" stroke={color} strokeWidth="1.5">
          <circle cx="12" cy="12" r="1.6" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...baseProps} fill={color}>
          <path d="M13 3L3 14h7l-1 7 11-11h-7l0-7z" />
        </svg>
      );
    case "wind":
      return (
        <svg {...baseProps} fill="none" stroke={color} strokeWidth="1.8">
          <path d="M3 8h10a3 3 0 1 0-3-3" strokeLinecap="round" />
          <path d="M3 16h14a3 3 0 1 1-3 3" strokeLinecap="round" />
          <path d="M3 12h7" strokeLinecap="round" />
        </svg>
      );
    case "node":
      return (
        <svg {...baseProps} fill={color}>
          <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
        </svg>
      );
    case "server":
      return (
        <svg {...baseProps} fill="none" stroke={color} strokeWidth="1.8">
          <rect x="3" y="4" width="18" height="6" rx="2" />
          <rect x="3" y="14" width="18" height="6" rx="2" />
          <circle cx="8" cy="7" r="1" /><circle cx="8" cy="17" r="1" />
        </svg>
      );
    case "supabase":
      return (
        <svg {...baseProps} fill={color}>
          <path d="M5 3h14l-7 9 7 9H5l7-9-7-9z" />
        </svg>
      );
    case "postgres":
      return (
        <svg {...baseProps} fill="none" stroke={color} strokeWidth="1.6">
          <ellipse cx="12" cy="7" rx="7" ry="4" />
          <path d="M5 7v6c0 2.2 3.1 4 7 4s7-1.8 7-4V7" />
          <path d="M12 11v6" />
        </svg>
      );
    case "shield":
      return (
        <svg {...baseProps} fill="none" stroke={color} strokeWidth="1.8">
          <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" />
        </svg>
      );
    case "roles":
      return (
        <svg {...baseProps} fill="none" stroke={color} strokeWidth="1.8">
          <circle cx="8" cy="8" r="3" />
          <path d="M2 19a6 6 0 0 1 12 0" />
          <circle cx="18" cy="8" r="2.5" />
          <path d="M14.5 19c.8-2.2 2.8-3.7 5-3.7" />
        </svg>
      );
    case "triangle":
      return (
        <svg {...baseProps} fill={color}>
          <path d="M12 3l9 18H3L12 3z" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...baseProps} fill="none" stroke={color} strokeWidth="1.8">
          <path d="M7 18h9a4 4 0 1 0-1-7 5 5 0 0 0-9 2" />
        </svg>
      );
    case "signal":
      return (
        <svg {...baseProps} fill={color}>
          <rect x="3" y="12" width="4" height="8" rx="1" />
          <rect x="10" y="9" width="4" height="11" rx="1" />
          <rect x="17" y="6" width="4" height="14" rx="1" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...baseProps} fill="none" stroke={color} strokeWidth="1.8">
          <path d="M3 12h4l2-6 4 12 2-6h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "bot":
      return (
        <svg {...baseProps} fill="none" stroke={color} strokeWidth="1.6">
          <rect x="5" y="7" width="14" height="10" rx="3" />
          <circle cx="9" cy="12" r="1.5" /><circle cx="15" cy="12" r="1.5" />
          <path d="M12 7V4" /><circle cx="12" cy="3" r="1" />
        </svg>
      );
    case "chat":
      return (
        <svg {...baseProps} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      );
    default:
      return null;
  }
}

/* ------------------------------ BADGE STACK (Mejorado UX) ----------------------------- */
function TechBadge({ name, color, icon }) {
  // UX/UI: Badge más grande y con sombra más definida.
  return (
    <div
      className={`group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-[${COLORS.cardPrimary}] bg-[${COLORS.cardPrimary}]/50 transition duration-300
                  shadow-lg shadow-black/30 hover:shadow-[0_0_20px_rgba(79,163,209,0.5)] 
                  hover:bg-[${COLORS.cardPrimary}] cursor-pointer`}
      title={name}
    >
      <span className="grid place-items-center w-5 h-5 rounded-md bg-white/10 shrink-0">
        <Icon name={icon} className="w-4 h-4" color={color || COLORS.textPrimary} />
      </span>
      <span className="text-sm font-medium" style={{ color: color || COLORS.textSecondary }}>
        {name}
      </span>
    </div>
  );
}

/* -------------------------- STACK ACCORDION ITEM ------------------------- */
function AccordionItem({ title, items, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border-b border-[${COLORS.cardPrimary}]`}>
      <button
        className="flex justify-between items-center w-full py-4 text-left group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <p className={`text-[${COLORS.textPrimary}] font-semibold text-lg`}>{title}</p>
        <ChevronDown 
          className={`w-5 h-5 text-[${COLORS.textSecondary}] transform transition-transform duration-300 ${isOpen ? `rotate-180 text-[${COLORS.accentBright}]` : 'rotate-0'}`}
        />
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-wrap gap-3">
          {items.map((it, k) => (
            <TechBadge key={k} name={it.name} color={it.color} icon={it.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------- EXTRA HIGHLIGHTS GRID (Mejorado UX) ------------------------- */
function ExtraHighlightsGrid({ items = [] }) {
  const accentLight = COLORS.accentBright;

  return (
    <div className="mt-8 pt-6 border-t border-[${COLORS.cardPrimary}]/50">
      <p className={`text-sm uppercase tracking-widest text-[${accentLight}] font-semibold mb-4`}>Diferenciales clave</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((it, i) => {
           const HighlightIcon = it.icon === 'shield' ? Wrench : (it.icon === 'server' ? Server : (it.icon === 'cloud' ? Cloud : HeartPulse));
           return (
            <div
              key={i}
              className={`rounded-xl border border-[${COLORS.cardPrimary}] bg-[${COLORS.bgDeep}]/50 p-5 transition duration-300 hover:shadow-xl hover:shadow-[${accentLight}]/20`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg bg-[${accentLight}]/20 grid place-items-center text-[${accentLight}] shrink-0 border border-[${accentLight}]/50`}>
                  <HighlightIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-[${COLORS.textPrimary}] font-semibold text-lg`}>{it.title}</p>
                  <p className={`text-sm text-[${COLORS.textSecondary}] mt-0.5`}>{it.desc}</p>
                </div>
              </div>
            </div>
           )
        })}
      </div>
    </div>
  );
}


/* --------------------------- CALL OUT IA BOTS (Mejorado UX) ---------------------------- */
function IABotsCallout() {
  const bots = [
    { icon: "chat", title: "Asistente de Ventas", desc: "Responde consultas, arma presupuestos iniciales y agenda turnos, liberando a tu equipo comercial." },
    { icon: "shield", title: "Soporte Técnico", desc: "Triage de incidencias, guías paso a paso y derivación inteligente con historial de problemas." },
    { icon: "pulse", title: "Operaciones", desc: "Carga automática de lecturas, alertas críticas y resúmenes diarios por chat para la gestión." },
  ];
  const accent = COLORS.accentBright;
  const cardColor = COLORS.cardPrimary;

  // Botón CTA adaptado para esta sección
  const CTAButton = ({ children, onClick }) => (
    <button
      onClick={onClick}
      className={`
        px-8 py-3 font-semibold text-base rounded-full 
        bg-[${accent}] text-white 
        shadow-[0_0_15px_0_rgba(79,163,209,0.7)] 
        hover:shadow-[0_0_25px_0_rgba(79,163,209,1)] 
        hover:bg-opacity-90 
        transition-all duration-300 ease-in-out
        w-full sm:w-auto
      `}
    >
      {children}
    </button>
  );


  return (
    <section
      aria-labelledby="bots-ia"
      className={`rounded-3xl border border-[${accent}]/20 p-6 md:p-12 shadow-2xl shadow-[${accent}]/30 bg-[${COLORS.bgDeeper}]`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4 flex-1">
          <div className={`w-16 h-16 rounded-2xl bg-[${accent}]/30 grid place-items-center text-[${accent}] shrink-0 border border-[${accent}]/50`}>
            <Bot className="w-9 h-9" />
          </div>
          <div className="min-w-0">
            <h3 id="bots-ia" className={`text-[${COLORS.textPrimary}] font-extrabold text-3xl leading-tight`}>
              🤖 BOTS de <span className={`text-[${accent}]`}>IA</span> Integrados
            </h3>
            <span className="mt-1 inline-flex items-center gap-1 text-sm px-4 py-1 rounded-full bg-white/10 text-[${accent}] font-semibold">
              <span className={`w-2 h-2 rounded-full bg-[${accent}] animate-ping absolute opacity-75`} />
              <span className={`w-2 h-2 rounded-full bg-[${accent}] relative`} />
              Próximamente
            </span>
            <p className={`mt-3 text-lg text-[${COLORS.textSecondary}] leading-relaxed max-w-2xl`}>
              Automatiza tareas repetitivas y mejora la experiencia del cliente con agentes conversacionales conectados directamente a tus datos.
            </p>
          </div>
        </div>

        {/* CTA para Bots */}
        <CTAButton onClick={() => console.log("Redirigiendo a Solicitud de Demo de IA")}>
            Solicitar Demo de IA - (Próximamente)
        </CTAButton>
      </div>

      {/* Cards de Bots */}
      <div className={`mt-10 pt-6 border-t border-[${cardColor}]`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bots.map((b, i) => (
            <article
              key={i}
              className={`rounded-xl border border-[${cardColor}] bg-[${cardColor}]/50 p-5
                         shadow-md hover:shadow-xl hover:shadow-[${accent}]/30 transition duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg bg-[${accent}]/20 grid place-items-center text-[${accent}] shrink-0`}>
                  <Icon name={b.icon} className="w-5 h-5" color={accent} />
                </div>
                <div className="min-w-0">
                  <h4 className={`text-[${COLORS.textPrimary}] font-bold text-lg leading-snug`}>{b.title}</h4>
                  <p className={`mt-1 text-sm text-[${COLORS.textSecondary}] leading-normal`}>{b.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* --------------------------- COMPONENTE PRINCIPAL (ACTUALIZADO) ------------------------ */
export default function SoftwareSection() {
  const [active, setActive] = useState(tabs[0].key);
  const tab = tabs.find((t) => t.key === active);
  const accent = COLORS.accentBright;
  
  // Botón CTA adaptado para esta sección
  const CTAButton = ({ children, onClick }) => (
    <button
      onClick={onClick}
      className={`
        mt-8 inline-flex items-center justify-center w-full rounded-full px-4 py-3 text-lg font-bold 
        bg-[${accent}] text-[${COLORS.bgDeep}] hover:bg-opacity-90 transition 
        shadow-xl shadow-[${accent}]/50 transform hover:scale-[1.01]
      `}
    >
      {children}
    </button>
  );


  const extraHighlights = [
    { icon: "shield", title: "Seguridad primero", desc: "Buenas prácticas, roles/permiso y 2FA opcional para proteger tu información." },
    { icon: "server", title: "Performance real", desc: "SSR/SPA optimizado y APIs eficientes garantizan una experiencia de usuario rápida." },
    { icon: "cloud", title: "Escalabilidad", desc: "Arquitectura Cloud-native lista para crecer en tráfico, usuarios y volumen de datos sin problemas." },
    { icon: "pulse", title: "Observabilidad", desc: "Logs, métricas y alertas configuradas para monitoreo continuo y operación sin sobresaltos." },
  ];


  return (
    <section id="software" className={`bg-[${COLORS.bgDeep}] border-t border-[${COLORS.bgDeeper}] py-16 md:py-24`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="max-w-3xl mb-12">
          <h2 className={`text-4xl font-extrabold text-[${COLORS.textPrimary}]`}>Desarrollo Web & Sistemas de Gestión</h2>
          <p className={`mt-3 text-xl text-[${COLORS.textSecondary}]`}>
            Software empaquetado y a medida con los más altos estándares de calidad: rendimiento, seguridad y escalabilidad garantizados.
          </p>
        </div>

        {/* Tabs - Mejor feedback visual */}
        <div className="mt-8 flex flex-wrap gap-3">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-full px-5 py-2.5 text-base font-semibold transition duration-300
                ${active === t.key
                  // Color activo ligado al acento celeste brillante
                  ? `bg-[${accent}] text-[${COLORS.bgDeep}] border border-[${accent}] shadow-lg shadow-[${accent}]/50`
                  : `bg-[${COLORS.cardPrimary}]/50 text-[${COLORS.textSecondary}] border border-[${COLORS.cardPrimary}] hover:bg-[${COLORS.cardPrimary}] hover:text-[${COLORS.textPrimary}]`}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* 1. Panel de Contenido y Timeline (Distribución 2/3 y 1/3) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Columna principal (2/3) - Contenido del Tab, Highlights y Stack */}
          <div className="lg:col-span-2 space-y-8">
            <div 
                // Color de fondo de tarjeta principal (Azul Acero) con sutil gradiente
                className={`rounded-3xl border border-[${COLORS.cardPrimary}] bg-[${COLORS.cardPrimary}]/70 p-8 md:p-10 shadow-2xl shadow-black/40`}
            >
              <h3 className={`text-[${COLORS.textPrimary}] text-3xl font-bold border-b border-[${accent}]/40 pb-3`}>{tab.title}</h3>
              <p className={`mt-4 text-lg leading-relaxed text-[${COLORS.textSecondary}]`}>{tab.desc}</p>

              {/* Lista de Bullets - Con ícono CheckCircle para un toque profesional */}
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {tab.bullets.map((b, i) => (
                  <li key={i} className={`flex items-start gap-3 text-base text-[${COLORS.textPrimary}]`}>
                    <CheckCircle className={`w-5 h-5 mt-1 text-[${accent}] shrink-0`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Diales de Diferenciales Clave */}
              <ExtraHighlightsGrid items={extraHighlights} />

              {/* STACK premium con ACORDEÓN (Desplegable) */}
              <div className="mt-10 pt-6 border-t border-[${COLORS.cardPrimary}]/50">
                <p className={`text-sm uppercase tracking-widest text-[${accent}] font-semibold mb-4`}>Stack Tecnológico</p>
                
                {/* Contenedor del Acordeón */}
                <div className={`rounded-xl border border-[${COLORS.cardPrimary}] bg-[${COLORS.bgDeeper}] px-6 divide-y divide-[${COLORS.cardPrimary}]`}>
                  {StackGroups.map((g, i) => (
                    <AccordionItem 
                      key={i} 
                      title={g.title} 
                      items={g.items} 
                      defaultOpen={i === 0} // Abre el primer item por defecto
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Columna lateral (1/3) - Proceso de trabajo (Timeline) */}
          <div className="space-y-8 lg:col-span-1">
            <div className={`sticky top-24 rounded-3xl border border-[${COLORS.cardPrimary}] bg-[${COLORS.cardPrimary}]/70 p-8 shadow-2xl shadow-[${accent}]/30`}>
              <h4 className={`text-[${COLORS.textPrimary}] font-bold text-2xl mb-6 border-b border-[${accent}]/40 pb-3`}>Nuestro Proceso de Trabajo</h4>
              
              {/* Timeline visual */}
              <ol className={`relative space-y-8 ml-2 `}>
                {[
                  { n: 1, t: "Descubrimiento", d: "Relevamos objetivos, procesos clave y definimos el alcance estratégico." },
                  { n: 2, t: "Diseño UX/UI", d: "Prototipado de alta fidelidad para validar usabilidad y flujo con los stakeholders." },
                  { n: 3, t: "Desarrollo Ágil", d: "Iteraciones cortas, sprints definidos, pruebas continuas y reportes de progreso." },
                  { n: 4, t: "Despliegue & QA", d: "Puesta en producción segura, monitoreo post-lanzamiento y traspaso de conocimiento." },
                ].map((s) => (
                  <li key={s.n} className="ml-8 relative">
                    {/* Punto del Timeline */}
                    <span className={`absolute flex items-center justify-center w-8 h-8 -left-11 top-0 rounded-full bg-[${accent}] text-[${COLORS.bgDeep}] font-extrabold text-lg shadow-md shadow-[${accent}]/50 ring-4 ring-[${COLORS.cardPrimary}]`}>
                      {s.n}
                    </span>
                    <div>
                      <div className={`text-[${COLORS.textPrimary}] text-lg font-bold`}>{s.t}</div>
                      <div className={`text-[${COLORS.textSecondary}] text-sm mt-0.5`}>{s.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
              
              <CTAButton onClick={() => console.log("Comenzar Proyecto")}>
                Comenzar mi Proyecto
              </CTAButton>
            </div>
          </div>
        </div>

        {/* 2. SECCIÓN BOTS DE IA (100% de Ancho, al final) */}
        <div className="mt-16">
            <IABotsCallout />
        </div>
      </div>
    </section>
  );
}