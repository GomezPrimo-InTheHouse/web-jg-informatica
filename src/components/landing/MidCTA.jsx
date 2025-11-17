import React from "react";

// Paleta de colores consistente con el componente SoftwareSection
const COLORS = {
  bgDeep: '#1E2A38',       // Azul profundo (Fondo base)
  bgDeeper: '#0F1823',     // Azul muy oscuro
  cardPrimary: '#2E4A78',  // Azul acero (Fondo de la tarjeta CTA)
  accentBright: '#4FA3D1', // Azul celeste brillante (Botón y acentos)
  textSecondary: '#D9D9D9',// Gris plateado
  textPrimary: '#FFFFFF',  // Blanco puro
};

export default function MidCTA() {
  const wpLink = "https://api.whatsapp.com/send?phone=543534275476"; 

  // Usamos el fondo oscuro general
  return (
    <section id="contacto" className={`bg-[${COLORS.bgDeep}] border-t border-[${COLORS.bgDeep}]/50 py-10`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        
        {/* La tarjeta CTA: Usa el color 'cardPrimary' como base y el 'accentBright' en el gradiente */}
        <div 
          className={`
            my-4 rounded-2xl border border-[${COLORS.accentBright}]/30 p-6 md:p-8 
            bg-gradient-to-br from-[${COLORS.cardPrimary}] to-[${COLORS.cardPrimary}]/70 
            shadow-2xl shadow-black/50
          `}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            {/* Texto */}
            <div>
              <h3 className={`text-2xl md:text-3xl font-extrabold text-[${COLORS.textPrimary}]`}>
                ¿Necesitás reparar tu equipo o cotizar sistema de software?
              </h3>
              <p className={`text-base text-[${COLORS.textSecondary}] mt-1.5`}>
                Escribinos ahora para **recibir un presupuesto claro y sin compromiso** en 24 horas.
              </p>
            </div>
            
            {/* Botón CTA - Usa el color 'accentBright' para el fondo */}
            <a
              href={wpLink}
              target="_blank" 
              rel="noopener noreferrer"
              className={`
                flex-shrink-0 rounded-full px-7 py-3 text-lg font-bold 
                bg-[${COLORS.accentBright}] text-[${COLORS.bgDeep}] 
                shadow-[0_0_15px_0_rgba(79,163,209,0.7)] 
                hover:shadow-[0_0_25px_0_rgba(79,163,209,1)] 
                hover:bg-opacity-90 transition duration-300
                w-full md:w-auto text-center
              `}
            >
              Chatear por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}