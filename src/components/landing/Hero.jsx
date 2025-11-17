import React, { useState, useCallback } from "react";
// Importamos iconos de Lucide
import { Check, Shield, Code, Wrench, BarChart2, Zap, Search, Loader2, X } from 'lucide-react'; 


/* ----------------------------- CONFIGURACIÓN DE COLORES Y DATOS ----------------------------- */
const COLORS = {
    // Fondo Principal (Dark Blue) - #1E2A38
    DEEP_BLUE_BG: "#1E2A38",
    // Acento Primario (Bright Sky Blue) - #4FA3D1 (Para Software/CTA principal)
    BRIGHT_BLUE_ACCENT: "#4FA3D1",
    // Acento Secundario (Steel Blue) - #2E4A78 (Para Técnico/Bordes/Focos secundarios)
    STEEL_BLUE_ACCENT: "#2E4A78",
    // Texto/Bordes suaves
    SILVER_GRAY: "#D9D9D9",
    // Fondo de tarjeta muy oscuro
    VERY_DARK_BG: "#0F1823", 
};

const TABS = [
  {
    key: "tecnico",
    label: "Servicio Técnico",
    icon: Wrench,
    // Incluimos 'Móviles y PC' en el encabezado
    heading: <>Servicio Técnico <span className="text-[${COLORS.STEEL_BLUE_ACCENT}]"></span> para Celulares, Notebooks y PC</>,
    // Descripción incluye equipos celulares
    desc: "Somos especialistas en la reparación de equipos celulares, PC y Notebooks. Ofrecemos diagnóstico preciso, manejo transparente de repuestos y garantía escrita.",
    bullets: [
      // Nuevo punto clave para móviles
      "Reparación avanzada de Celulares y Tablets (pantallas, baterías, puertos de carga)",
      "Reparaciones de PC y Notebooks en 24–48 h",
      "Garantía oficial por escrito en todos los servicios",
    ],
    ctaHref: "#servicios-tecnicos",
    ctaText: "Explorar Servicio Técnico",
  },
  {
    key: "software",
    label: "Software & Arquitectura",
    icon: Code,
    // Enfasis en 'avanzado'
    heading: <>Arquitectura de <span className="text-[${COLORS.BRIGHT_BLUE_ACCENT}]">Sistemas</span> y Desarrollo Web avanzado</>,
    desc: "Construimos soluciones robustas y escalables. Desde sitios web modernos que convierten hasta sistemas de gestión complejos (ERP, CRM) a medida.",
    bullets: [
      "Stack Tecnológico Moderno: React, Node, Cloud Solutions",
      "Integración de Pasarelas de Pago, APIs y IoT",
      "Metodología ágil: Planificación → Desarrollo → QA → Entrega",
    ],
    ctaHref: "#software",
    ctaText: "Explorar Soluciones Software",
  },
];


/* ----------------------------- MODAL DE SEGUIMIENTO DE EQUIPO ----------------------------- */

const StatusModal = ({ isOpen, onClose }) => {
    const [dni, setDni] = useState('');
    const [model, setModel] = useState('');
    const [status, setStatus] = useState(null); // null, 'loading', or { state, details }
    
    // Simula la llamada a un backend para obtener el estado del equipo
    const handleCheckStatus = useCallback((e) => {
        e.preventDefault();
        
        if (!dni || !model) {
            setStatus({ state: 'error', details: 'Por favor, ingrese DNI y Modelo.' });
            return;
        }

        setStatus('loading');

        // --- INICIO DE LÓGICA DE CONEXIÓN CON BACKEND ---
        // Aquí es donde harías la llamada a tu API, por ejemplo:
        // fetch('/api/check-status', { method: 'POST', body: JSON.stringify({ dni, model }) })
        //   .then(res => res.json())
        //   .then(data => {
        //     setStatus({ state: data.status, details: data.message });
        //   })
        //   .catch(err => {
        //     setStatus({ state: 'error', details: 'Error de conexión. Intente más tarde.' });
        //   });
        
        // SIMULACIÓN (Reemplazar por la lógica de arriba)
        setTimeout(() => {
            const simulatedResponses = [
                { state: 'En diagnóstico', details: 'Tu equipo está siendo evaluado por el técnico.' },
                { state: 'Esperando repuesto', details: 'Se ha solicitado el repuesto. Tiempo estimado de llegada: 3 días hábiles.' },
                { state: 'Listo para retiro', details: '¡Tu equipo está reparado y listo! Puedes pasar a retirarlo.' },
                { state: 'No encontrado', details: 'No se encontraron registros con ese DNI y Modelo. Verifique los datos.' }
            ];
            
            // Lógica simple para simular un estado basado en el DNI (ejemplo)
            const index = (parseInt(dni) % 4);
            const result = simulatedResponses[index];

            setStatus({ state: result.state, details: result.details });

        }, 1500); // 1.5 segundos de simulación de carga
        // --- FIN DE LÓGICA DE CONEXIÓN CON BACKEND ---

    }, [dni, model]);

    if (!isOpen) return null;

    const isError = status && status.state === 'error' || status && status.state === 'No encontrado';
    const isSuccess = status && status.state && !isError && status !== 'loading';

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className={`bg-[${COLORS.VERY_DARK_BG}] rounded-xl p-6 md:p-8 w-full max-w-md shadow-2xl border border-[${COLORS.STEEL_BLUE_ACCENT}]/30`}
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-start">
                    <h2 className={`text-2xl font-bold text-white flex items-center`} style={{ color: COLORS.STEEL_BLUE_ACCENT }}>
                        <Search className="w-6 h-6 mr-2" /> Seguimiento de Equipo
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                
                <p className="mt-2 text-sm text-gray-400 border-b border-white/10 pb-4">
                    Ingresa tu número de identificación y el modelo del equipo para consultar su estado en el taller.
                </p>

                <EquipoLookupWidget COLORS={COLORS} />

                <form onSubmit={handleCheckStatus} className="mt-5 space-y-4">
                    <input
                        type="number"
                        placeholder="Número de DNI/Identificación"
                        value={dni}
                        onChange={(e) => { setDni(e.target.value); setStatus(null); }}
                        className={`w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-[${COLORS.STEEL_BLUE_ACCENT}] outline-none`}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Modelo del Equipo (Ej: iPhone 12, HP Pavilion)"
                        value={model}
                        onChange={(e) => { setModel(e.target.value); setStatus(null); }}
                        className={`w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-[${COLORS.STEEL_BLUE_ACCENT}] outline-none`}
                        required
                    />
                    
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold text-white transition duration-300
                                   bg-[${COLORS.STEEL_BLUE_ACCENT}] hover:bg-[#3d6d9c] shadow-lg shadow-[${COLORS.STEEL_BLUE_ACCENT}]/40`}
                    >
                        {status === 'loading' ? (
                            <><Loader2 className="w-5 h-5 animate-spin" /> Verificando...</>
                        ) : (
                            <>Consultar Estado</>
                        )}
                    </button>
                </form>

                {/* Área de Resultados */}
                {status && status !== 'loading' && (
                    <div className={`mt-5 p-4 rounded-lg text-white border-l-4 ${isError ? 'bg-red-900/30 border-red-500' : 'bg-green-900/30 border-green-500'}`}>
                        <p className="font-bold text-lg">{status.state}</p>
                        <p className="text-sm mt-1">{status.details}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

/* ----------------------------- VISUALIZADOR DE EXPERIENCIA DUAL ----------------------------- */

function ExperienceVisual({ active, setActive }) {
    const isTechnical = active === "tecnico";
    const transition = "transition-all duration-700 ease-in-out";

    // Panel 1: Servicio Técnico Informático - AHORA ES UN BOTÓN
    const PanelTechnical = ({ isActive }) => (
        <button 
            onClick={() => setActive("tecnico")} // Agregamos onClick
            className={`flex-1 text-left p-8 rounded-2xl border-2 ${transition} shadow-xl backdrop-blur-sm transform hover:scale-[1.03] focus:outline-none 
                        ${isActive 
                            ? `border-[${COLORS.STEEL_BLUE_ACCENT}] bg-[${COLORS.VERY_DARK_BG}] shadow-[0_0_30px_rgba(46,74,120,0.5)]`
                            : `border-white/10 bg-white/5 opacity-70 hover:opacity-100 hover:border-[${COLORS.STEEL_BLUE_ACCENT}]/50`
                        }`}
        >
            <Wrench className={`w-10 h-10 ${transition}`} style={{ color: isActive ? COLORS.STEEL_BLUE_ACCENT : COLORS.SILVER_GRAY }} />
            {/* Nuevo título de énfasis para incluir Movilidad */}
            <p className="mt-4 text-base font-extrabold uppercase tracking-widest text-white">HARDWARE, REDES & MOVILIDAD</p>
            {/* Título principal de la tarjeta sin años */}
            <h3 className="text-2xl font-bold mt-1 text-white">Servicio Técnico Informático</h3>
            {/* Descripción actualizada */}
            <p className="text-base mt-2 text-white/70">Reparación y mantenimiento de PC, Notebooks y Celulares.</p>
        </button>
    );

    // Panel 2: Análisis y Desarrollo de Sistemas - AHORA ES UN BOTÓN
    const PanelSoftware = ({ isActive }) => (
        <button 
            onClick={() => setActive("software")} // Agregamos onClick
            className={`flex-1 text-left p-8 rounded-2xl border-2 ${transition} shadow-xl backdrop-blur-sm transform hover:scale-[1.03] focus:outline-none 
                        ${isActive 
                            ? `border-[${COLORS.BRIGHT_BLUE_ACCENT}] bg-[${COLORS.VERY_DARK_BG}] shadow-[0_0_30px_rgba(79,163,209,0.5)]`
                            : `border-white/10 bg-white/5 opacity-70 hover:opacity-100 hover:border-[${COLORS.BRIGHT_BLUE_ACCENT}]/50`
                        }`}
        >
            <Code className={`w-10 h-10 ${transition}`} style={{ color: isActive ? COLORS.BRIGHT_BLUE_ACCENT : COLORS.SILVER_GRAY }} />
            {/* Título de énfasis */}
            <p className="mt-4 text-base font-extrabold uppercase tracking-widest text-white">SOFTWARE & CLOUD</p>
            {/* Título principal de la tarjeta sin años */}
            <h3 className="text-2xl font-bold mt-1 text-white">Análisis y Desarrollo de Sistemas</h3>
            <p className="text-base mt-2 text-white/70">Soluciones web y sistemas escalables.</p>
        </button>
    );


    return (
        <div className={`relative w-full p-6 md:p-8 rounded-3xl border border-white/10 ${transition} 
                        bg-gradient-to-br from-[#1E2A38] to-[#141C24] shadow-2xl shadow-black/50`}>
            
            {/* Título Superior */}
            <div className="mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
                <p className="text-lg font-bold text-white uppercase tracking-wider">
                    <Zap className="w-5 h-5 inline mr-2 text-[${COLORS.BRIGHT_BLUE_ACCENT}]"/> 
                    Nuestra Propuesta de Valor Dual
                </p>
            </div>

            {/* Contenedor de Paneles */}
            <div className="flex flex-col md:flex-row gap-6">
                <PanelTechnical isActive={isTechnical} />
                <PanelSoftware isActive={!isTechnical} />
            </div>

            {/* Texto de Valor Inferior */}
            <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <Shield className={`w-5 h-5 inline mr-2 ${isTechnical ? `text-[${COLORS.STEEL_BLUE_ACCENT}]` : `text-[${COLORS.BRIGHT_BLUE_ACCENT}]`}`} />
                <span className="text-sm text-gray-400">
                    Integramos lo mejor de ambos mundos: Soporte técnico físico y desarrollo de software avanzado.
                </span>
            </div>

        </div>
    );
}

/* --------------------------- COMPONENTE PRINCIPAL HERO ------------------------ */

export default function Hero() {
  const [active, setActive] = useState(TABS[0].key);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la modal
  const tab = TABS.find(t => t.key === active);

  // Mover indicador de tab
  const indicatorStyle = {
    transform: active === "tecnico" ? "translateX(0)" : "translateX(100%)",
    width: "calc(50% - 0.5rem)"
  };
  
  // Colores dinámicos
  const activeAccent = active === "tecnico" ? COLORS.STEEL_BLUE_ACCENT : COLORS.BRIGHT_BLUE_ACCENT;
  
  // CTA Primario (siempre ligado al BRIGHT_BLUE_ACCENT para la máxima atracción)
  const primaryCtaColor = `bg-[${COLORS.BRIGHT_BLUE_ACCENT}] hover:bg-[#68B6E3] shadow-2xl shadow-[${COLORS.BRIGHT_BLUE_ACCENT}]/40`;
  
  // Fondo del indicador del tab activo (usamos el azul acero para el indicador)
  const indicatorBg = COLORS.STEEL_BLUE_ACCENT; 

  return (
    <section className={`relative overflow-hidden min-h-screen flex items-center font-sans`} style={{ backgroundColor: COLORS.DEEP_BLUE_BG }}>
      
      {/* Fondo: Gradiente Sutil y "Glow" de Confianza */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blob de acento primario - sugerencia de energía contenida */}
        <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[${COLORS.BRIGHT_BLUE_ACCENT}]/10 blur-[150px] opacity-30`} 
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-24 md:py-32">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* COLUMNA DERECHA: Visualizador de Experiencia - Ahora toma setActive como prop */}
          <div className="lg:col-span-6 relative order-first lg:order-last">
            <ExperienceVisual active={active} setActive={setActive} />
          </div>

          {/* COLUMNA IZQUIERDA: Texto, Tabs y CTAs */}
          <div className="lg:col-span-6">
            
            {/* Sello de Trayectoria (Badge) */}
            <div className={`inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 mb-6 shadow-md`}>
                <BarChart2 className={`w-4 h-4 text-[${COLORS.BRIGHT_BLUE_ACCENT}] shrink-0`} />
                {/* Texto del badge enfocado en la dualidad */}
                <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                    Propuesta Dual | 
                    <span className={`ml-2`} style={{ color: COLORS.STEEL_BLUE_ACCENT }}>Hardware</span> & 
                    <span className={`ml-2`} style={{ color: COLORS.BRIGHT_BLUE_ACCENT }}>Software</span>
                </p>
            </div>

            {/* Tabs segmentadas con estilo premium */}
            <div className={`inline-flex relative rounded-xl border border-white/20 bg-white/10 p-1 shadow-xl shadow-black/30`}>
              {TABS.map((t) => {
                const isActive = t.key === active;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className={`relative z-10 px-6 py-2.5 text-base font-semibold transition duration-300 rounded-lg
                      ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`}
                  >
                    {t.label}
                  </button>
                );
              })}
              {/* Indicador animado */}
              <div
                className={`absolute top-1 bottom-1 rounded-lg transition-transform duration-500 shadow-md shadow-[${COLORS.STEEL_BLUE_ACCENT}]/40`}
                style={{...indicatorStyle, backgroundColor: indicatorBg}}
                aria-hidden
              />
            </div>

            {/* Contenido del tab activo */}
            <h1 className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight text-white" style={{ textShadow: `0 0 10px ${COLORS.BRIGHT_BLUE_ACCENT}50` }}>
              {tab.heading}
            </h1>

            <p className="mt-5 text-gray-300 text-lg md:text-xl max-w-xl">
              {tab.desc}
            </p>

            {/* Bullets de Valor: El color del check cambia según el tab activo */}
            <ul className="mt-8 space-y-3 text-base text-white/90">
              {tab.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 shrink-0 mt-0.5`} style={{ color: activeAccent }} />
                  {b}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={tab.ctaHref}
                className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-bold
                           text-white transition duration-300 transform hover:scale-[1.02] ${primaryCtaColor}`}
              >
                {tab.ctaText}
              </a>
              <a
                href="#contacto"
                className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-bold
                           text-[${COLORS.STEEL_BLUE_ACCENT}] border-2 border-[${COLORS.STEEL_BLUE_ACCENT}] hover:bg-[${COLORS.STEEL_BLUE_ACCENT}] hover:text-white transition duration-300`}
              >
                Solicitar presupuesto
              </a>

{/*               
              {active === 'tecnico' && (
                <button
                    onClick={() => setIsModalOpen(true)}
                    className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-bold
                               bg-white text-[${COLORS.DEEP_BLUE_BG}] hover:bg-gray-200 transition duration-300 transform hover:scale-[1.02] shadow-lg`}
                >
                    <Search className="w-5 h-5 mr-2" />
                    Chequea el Estado de tu Equipo
                </button>
              )} */}

            </div>
          </div>
        </div>
      </div>
      
      {/* [NUEVO COMPONENTE] Modal de Seguimiento */}
      <StatusModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
}