import React from "react";

// Paleta original intacta
const COLORS = {
  bgLight: '#2E4A78',
  bgDeep: '#1E2A38',
  bgDeeper: '#0F1823',
  cardPrimary: '#2E4A78',
  accentBright: '#4FA3D1',
  textSecondary: '#D9D9D9',
  textPrimary: '#FFFFFF',
};

export default function MidCTA() {
  const wpLink = "https://api.whatsapp.com/send?phone=543534275476"; 

  return (
    <section
      id="contacto"
      className="
        relative py-16 md:py-20 
        bg-gradient-to-b from-[#0F1823] via-[#1E2A38] to-[#0F1823] 
        border-t border-white/10
      "
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Tarjeta CTA con efecto GLASS premium */}
        <div
          className="
            rounded-3xl p-8 md:p-10 
            bg-[#2E4A78]/20 backdrop-blur-xl
            border border-[#4FA3D1]/30 
            shadow-[0_20px_40px_rgba(0,0,0,0.45)]
            hover:shadow-[0_30px_60px_rgba(0,0,0,0.55)]
            transition-all duration-500
          "
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

            {/* TEXTO */}
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                ¿Necesitás reparar tu equipo o cotizar un sistema web?
              </h3>

              <p className="text-[16px] md:text-[17px] text-[#D9D9D9] mt-3 leading-relaxed">
                Te asesoramos personalmente y recibís una respuesta en <strong>menos de 24 horas</strong>.
              </p>
            </div>

            {/* BOTÓN CTA */}
            <a
              href={wpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-shrink-0 rounded-full px-8 py-4 
                text-lg font-semibold text-[#0F1823]
                bg-gradient-to-r from-[#4FA3D1] to-[#6CC4E6] 
                shadow-[0_0_20px_rgba(79,163,209,0.6)]
                hover:shadow-[0_0_35px_rgba(79,163,209,0.9)]
                hover:brightness-110 
                transition-all duration-300
                w-full md:w-auto text-center
              "
            >
              Chatear por WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
