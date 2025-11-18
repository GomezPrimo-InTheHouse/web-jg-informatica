// import React, { useState } from 'react';
// // Importamos iconos de Lucide
// import { Monitor, Smartphone, ShoppingCart, Camera, Clock, FileText, Search, HardHat, X } from 'lucide-react'; 

// import EquipoLookupWidget from '../../components/landing/EquipoLookup.jsx'

// // Definimos los colores. Usaremos NEGRO ABSOLUTO para el fondo principal.
// const COLORS = {
//     // Fondo Principal (Absolute Black) - ESTE ES EL CAMBIO CLAVE para el contraste
//     DEEP_BLACK_BG: "#000000", 
//     // Acento Primario (Bright Sky Blue) - #4FA3D1
//     BRIGHT_BLUE_ACCENT: "#4FA3D1",
//     // Acento Secundario (Steel Blue) - #2E4A78
//     STEEL_BLUE_ACCENT: "#2E4A78",
//     // Fondo de tarjeta muy oscuro (Sutilmente más claro que el fondo principal)
//     VERY_DARK_BG: "#1A1A1A", 
// };
// const [isModalOpen, setIsModalOpen] = useState(false);

// // Función placeholder para la acción del botón
// const handleCheckStatus = () => {
//   console.log("Acción: Botón 'Chequea el estado de tu equipo' presionado.");
//   setIsModalOpen(true);
// };



// export default function Features() {
//   const items = [
//     {
//       title: "Reparación Avanzada de Móviles",
//       desc: "Especialistas en la reparación de hardware de **Celulares y Tablets** (cambio de pantallas, baterías, conectores de carga, microsoldadura). Garantía escrita en todos los trabajos.",
//       icon: Smartphone, // Nuevo icono para móviles
//       accent: COLORS.BRIGHT_BLUE_ACCENT,
//     },
//     {
//       title: "Servicio Técnico PC & Notebooks",
//       desc: "Diagnóstico y reparación de fallas de hardware y software en equipos **PC y Laptops**. Limpieza, upgrades de componentes (RAM/SSD) y optimización general.",
//       icon: Monitor, // Icono para PC/Notebooks
//       accent: COLORS.STEEL_BLUE_ACCENT,
//     },
//     {
//       title: "Seguridad y Cámaras IP",
//       desc: "Venta, instalación y configuración de sistemas de **Videovigilancia (CCTV/IP)**. Acceso remoto, visión nocturna y detección de movimiento desde app móvil.",
//       icon: Camera, // Icono para seguridad
//       accent: COLORS.BRIGHT_BLUE_ACCENT,
//     },
//     {
//       title: "Logística y Tiempo de Respuesta",
//       desc: "Entrega de equipos en **24–48 h** para fallas comunes. Mantenemos stock de insumos críticos para reducir los tiempos de espera al mínimo.",
//       icon: Clock, // Icono para tiempo
//       accent: COLORS.STEEL_BLUE_ACCENT,
//     },
//     {
//       title: "Accesorios y Suministros",
//       desc: "Stock permanente de **cargadores, cables, periféricos, vidrios templados** y componentes originales o alternativos de alta calidad.",
//       icon: ShoppingCart, // Icono para accesorios
//       accent: COLORS.BRIGHT_BLUE_ACCENT,
//     },
//     {
//       title: "Transparencia y Posventa",
//       desc: "Presupuesto detallado **sin compromiso** y trazabilidad total del servicio. Ofrecemos **soporte posventa** para garantizar su satisfacción a largo plazo.",
//       icon: FileText, // Icono para transparencia
//       accent: COLORS.STEEL_BLUE_ACCENT,
//     },
//   ];



//   return (
//     // CAMBIO CLAVE: Usamos 'style' para forzar el fondo a Negro Absoluto (#000000)
//     <section 
//       id="servicios-técnicos" 
//       className={`border-t border-white/10 py-16 md:py-24`} 
//       style={{ backgroundColor: COLORS.DEEP_BLACK_BG }}
//     >
//       <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        
//         {/* Encabezado */}
//         <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
//           <HardHat className="w-10 h-10 mx-auto text-white" style={{ color: COLORS.BRIGHT_BLUE_ACCENT }} />
//           <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
//             Especialistas en Servicio Técnico
//           </h2>
//           <p className="mt-4 text-xl text-[#D9D9D9] max-w-2xl mx-auto">
//             Garantizamos la máxima eficiencia y transparencia en la reparación de sus dispositivos de **Movilidad, PC y Seguridad.**
//           </p>

//           {/* Botón de Chequeo de Estado */}
//           {/* También usamos 'style' para el fondo del botón por seguridad */}
//           <button
//             onClick={handleCheckStatus}
//             className={`mt-8 inline-flex items-center justify-center px-8 py-3 
//                         border-2 border-transparent text-lg font-semibold rounded-xl 
//                         transition-all duration-300 transform 
//                         shadow-lg text-white 
//                         hover:bg-opacity-90 hover:scale-[1.05]`}
//             style={{
//                 backgroundColor: COLORS.BRIGHT_BLUE_ACCENT,
//                 boxShadow: `0 0 20px 0 ${COLORS.BRIGHT_BLUE_ACCENT}80`,
//             }}
//           >
//             <Search className="w-5 h-5 mr-2" />
//             Chequea el Estado de tu Equipo
//           </button>
//         </div>

//         {/* Grid de Servicios */}
//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {items.map((f, i) => {
//             const IconComponent = f.icon; 
//             return (
//               <div 
//                 key={i} 
//                 className={`rounded-2xl border-2 p-6 transition-all duration-300 transform hover:scale-[1.03] shadow-xl`}
//                 style={{
//                     // Bordes y fondo dinámicos
//                     borderColor: `${f.accent}30`, 
//                     backgroundColor: COLORS.VERY_DARK_BG, // Gris oscuro (#1A1A1A) para la tarjeta
//                     boxShadow: `0 8px 30px -10px ${f.accent}40`, 
//                 }}
//               >
                
//                 {/* Icono */}
//                 <div 
//                   className={`w-14 h-14 rounded-full grid place-items-center mb-4`}
//                   style={{
//                     backgroundColor: `${f.accent}15`, 
//                     color: f.accent, 
//                     border: `2px solid ${f.accent}40`,
//                   }}
//                 >
//                   <IconComponent className="w-7 h-7" />
//                 </div>

//                 {/* Título y Descripción (Mismos tamaños grandes de letra) */}
//                 <h3 className="mt-2 text-white font-bold text-xl md:text-2xl leading-snug">{f.title}</h3>
//                 <p className="mt-2 text-[#D9D9D9] text-base md:text-lg">{f.desc}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {isModalOpen && (
//   <div
//     className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//     onClick={() => setIsModalOpen(false)}
//   >
//     <div
//       className="relative bg-[#1A1A1A] rounded-xl p-6 md:p-8 w-full max-w-2xl shadow-2xl border border-white/10 overflow-y-auto max-h-[90vh]"
//       onClick={(e) => e.stopPropagation()}
//     >
//       <button
//         onClick={() => setIsModalOpen(false)}
//         className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
//       >
//         <X className="w-6 h-6" />
//       </button>

//       <h2
//         className="text-2xl font-bold text-center text-white mb-4 flex items-center justify-center gap-2"
//         style={{ color: COLORS.BRIGHT_BLUE_ACCENT }}
//       >
//         <Search className="w-6 h-6" /> Seguimiento de Equipo
//       </h2>

//       {/* Aquí se renderiza el nuevo componente */}
//       <EquipoLookupWidget COLORS={COLORS} />
//     </div>
//   </div>
// )}

//     </section>
//   );
// }

import React, { useState } from 'react';
// Importamos iconos de Lucide
import { Monitor, Smartphone, ShoppingCart, Camera, Clock, FileText, Search, HardHat } from 'lucide-react'; 
import LogoRedondo from '../../assets/logo-2-sinfondo-blanco.png';
// ⬇️ NUEVO: import del componente de lookup (ajustá la ruta si corresponde)
import EquipoLookupWidget from "../../components/landing/EquipoLookup.jsx";

// Definimos los colores. Usaremos NEGRO ABSOLUTO para el fondo principal.
const COLORS = {
    // Fondo Principal (Absolute Black) - ESTE ES EL CAMBIO CLAVE para el contraste
    DEEP_BLACK_BG: "#000000", 
    // Acento Primario (Bright Sky Blue) - #4FA3D1
    BRIGHT_BLUE_ACCENT: "#4FA3D1",
    // Acento Secundario (Steel Blue) - #2E4A78
    STEEL_BLUE_ACCENT: "#2E4A78",
    // Fondo de tarjeta muy oscuro (Sutilmente más claro que el fondo principal)
    VERY_DARK_BG: "#1A1A1A", 
};

// Función placeholder para la acción del botón
const handleCheckStatus = () => {
    // Aquí iría la lógica real para redirigir o abrir un modal
    console.log("Acción: Botón 'Chequea el estado de tu equipo' presionado. Redirigir a la página de seguimiento.");
    // Ejemplo de implementación: window.location.href = '/status';
};

export default function Features() {
  // ⬇️ NUEVO: estado para abrir/cerrar el modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = [
    {
      title: "Reparación Avanzada de Móviles",
      desc: "Especialistas en la reparación de hardware de **Celulares y Tablets** (cambio de pantallas, baterías, conectores de carga, microsoldadura). Garantía escrita en todos los trabajos.",
      icon: Smartphone, // Nuevo icono para móviles
      accent: COLORS.BRIGHT_BLUE_ACCENT,
    },
    {
      title: "Servicio Técnico PC & Notebooks",
      desc: "Diagnóstico y reparación de fallas de hardware y software en equipos **PC y Laptops**. Limpieza, upgrades de componentes (RAM/SSD) y optimización general.",
      icon: Monitor, // Icono para PC/Notebooks
      accent: COLORS.STEEL_BLUE_ACCENT,
    },
    {
      title: "Seguridad y Cámaras IP",
      desc: "Venta, instalación y configuración de sistemas de **Videovigilancia (CCTV/IP)**. Acceso remoto, visión nocturna y detección de movimiento desde app móvil.",
      icon: Camera, // Icono para seguridad
      accent: COLORS.BRIGHT_BLUE_ACCENT,
    },
    {
      title: "Logística y Tiempo de Respuesta",
      desc: "Entrega de equipos en **24–48 h** para fallas comunes. Mantenemos stock de insumos críticos para reducir los tiempos de espera al mínimo.",
      icon: Clock, // Icono para tiempo
      accent: COLORS.STEEL_BLUE_ACCENT,
    },
    {
      title: "Accesorios y Suministros",
      desc: "Stock permanente de **cargadores, cables, periféricos, vidrios templados** y componentes originales o alternativos de alta calidad.",
      icon: ShoppingCart, // Icono para accesorios
      accent: COLORS.BRIGHT_BLUE_ACCENT,
    },
    {
      title: "Transparencia y Posventa",
      desc: "Presupuesto detallado **sin compromiso** y trazabilidad total del servicio. Ofrecemos **soporte posventa** para garantizar su satisfacción a largo plazo.",
      icon: FileText, // Icono para transparencia
      accent: COLORS.STEEL_BLUE_ACCENT,
    },
  ];

  return (
    
    <section 
      id="servicios-técnicos" 
      className={`border-t border-white/10 py-16 md:py-24`} 
      style={{ backgroundColor: COLORS.DEEP_BLACK_BG }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          {/* <HardHat  style={{ color: COLORS.BRIGHT_BLUE_ACCENT }} /> */}



          <img className="w-20 h-20 mx-auto text-white" src={LogoRedondo} alt="Logo JGP" >
          </img>



          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Especialistas en Servicio Técnico
          </h2>
          <p className="mt-4 text-xl text-[#D9D9D9] max-w-2xl mx-auto">
            Garantizamos la máxima eficiencia y transparencia en la reparación de sus dispositivos de **Movilidad, PC y Seguridad.**
          </p>

          {/* Botón de Chequeo de Estado */}
          {/* También usamos 'style' para el fondo del botón por seguridad */}
          <button
            onClick={() => { handleCheckStatus(); setIsModalOpen(true); }} // ⬅️ NUEVO: abrimos el modal sin tocar tu lógica existente
            className={`mt-8 inline-flex items-center justify-center px-8 py-3 
                        border-2 border-transparent text-lg font-semibold rounded-xl 
                        transition-all duration-300 transform 
                        shadow-lg text-white 
                        hover:bg-opacity-90 hover:scale-[1.05]`}
            style={{
                backgroundColor: COLORS.BRIGHT_BLUE_ACCENT,
                boxShadow: `0 0 20px 0 ${COLORS.BRIGHT_BLUE_ACCENT}80`,
            }}
          >
            <Search className="w-5 h-5 mr-2" />
            Chequea el Estado de tu Equipo
          </button>
        </div>

        {/* Grid de Servicios */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => {
            const IconComponent = f.icon; 
            return (
              <div 
                key={i} 
                className={`rounded-2xl border-2 p-6 transition-all duration-300 transform hover:scale-[1.03] shadow-xl`}
                style={{
                    // Bordes y fondo dinámicos
                    borderColor: `${f.accent}30`, 
                    backgroundColor: COLORS.VERY_DARK_BG, // Gris oscuro (#1A1A1A) para la tarjeta
                    boxShadow: `0 8px 30px -10px ${f.accent}40`, 
                }}
              >
                
                {/* Icono */}
                <div 
                  className={`w-14 h-14 rounded-full grid place-items-center mb-4`}
                  style={{
                    backgroundColor: `${f.accent}15`, 
                    color: f.accent, 
                    border: `2px solid ${f.accent}40`,
                  }}
                >
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Título y Descripción (Mismos tamaños grandes de letra) */}
                <h3 className="mt-2 text-white font-bold text-xl md:text-2xl leading-snug">{f.title}</h3>
                <p className="mt-2 text-[#D9D9D9] text-base md:text-lg">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ⬇️ NUEVO: Modal con EquipoLookupWidget (mismo esquema de colores) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-[#1A1A1A] rounded-xl p-6 md:p-8 w-full max-w-2xl shadow-2xl border border-white/10 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar (sin nuevos imports) */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors text-2xl leading-none"
              aria-label="Cerrar"
              title="Cerrar"
            >
              ×
            </button>

            <h2
              className="text-2xl font-bold text-center text-white mb-4 flex items-center justify-center gap-2"
              style={{ color: COLORS.BRIGHT_BLUE_ACCENT }}
            >
              <Search className="w-6 h-6" /> Seguimiento de Equipo
            </h2>

            {/* Componente que consulta tu backend */}
            <EquipoLookupWidget COLORS={COLORS} />
          </div>
        </div>
      )}
    </section>
  );
}
