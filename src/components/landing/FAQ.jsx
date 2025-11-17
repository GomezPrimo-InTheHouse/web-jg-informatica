import { useState } from "react";

const faqs = [
  // Técnicos
  { q: "¿El diagnóstico tiene costo?", a: "El diagnóstico básico es sin cargo si avanzás con la reparación. Avisamos antes de comenzar." },
  { q: "¿Qué garantía tienen las reparaciones?", a: "Garantía escrita. Depende del tipo de reparación y del repuesto (original/alternativo)." },
  { q: "¿Trabajan con repuestos originales?", a: "Sí. También alternativos de alta calidad. Siempre te damos opciones y presupuesto por escrito." },
  { q: "¿En cuánto tiempo entregan?", a: "Reparaciones comunes en 24–48 h. Si el repuesto es específico, te informamos el plazo estimado." },

  // Software
  { q: "¿Cómo es el proceso para un sistema a medida?", a: "Descubrimiento → Prototipo → Desarrollo + QA → Despliegue. Entregas parciales y feedback continuo." },
  { q: "¿Pueden integrar pagos, mensajería o IoT?", a: "Sí. MercadoPago, Twilio/WhatsApp, Auth con 2FA, MQTT/IoT y otros conectores." },
  { q: "¿Qué stack utilizan?", a: "Frontend: React + Vite + Tailwind. Backend: Node + Express. DB: Supabase/PostgreSQL. Deploy en Vercel/Render." },
  { q: "¿Ofrecen soporte y mantenimiento?", a: "Sí. Planes de soporte con mejoras evolutivas y monitoreo según el nivel requerido." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="preguntas-frecuentes" className="bg-[#1E2A38] border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center">Preguntas frecuentes</h2>
        <p className="mt-2 text-center text-[#D9D9D9]">Claridad y confianza, antes y después de contratar.</p>

        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#1E2A38]/60">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="p-5">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between text-left">
                  <span className="text-white font-medium">{f.q}</span>
                  <svg className={`w-5 h-5 text-white transition-transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" />
                  </svg>
                </button>
                {isOpen && <p className="mt-3 text-sm text-[#D9D9D9]">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
