import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "¿La revisión tiene costo?",
    a: "Si avanzás con la reparación, no. Si decidís no hacerla, se cobra el 10% del presupuesto.",
  },
  {
    q: "¿Qué garantía tienen las reparaciones?",
    a: "Depende del trabajo y del repuesto, original o alternativo. Por lo general es de 30 a 60 días, y te la dejamos por escrito.",
  },
  {
    q: "¿Trabajan con repuestos originales?",
    a: "Sí, y también con alternativos de buena calidad. Te damos las dos opciones con su precio para que elijas.",
  },
  {
    q: "¿En cuánto tiempo entregan?",
    a: "Las reparaciones comunes, en 24 a 48 horas. Si el repuesto hay que pedirlo, te avisamos el plazo estimado.",
  },
  {
    q: "¿Cómo sigo el estado de mi equipo?",
    a: "Arriba de todo, en «¿Cómo va tu equipo?», con tu DNI y la marca y el modelo como figuran en la orden.",
  },
  {
    q: "¿Cómo es el proceso para un sistema a medida?",
    a: "Relevamiento, prototipo, desarrollo con entregas parciales y puesta en marcha. Vas viendo el avance en cada etapa.",
  },
  {
    q: "¿Pueden integrar pagos, WhatsApp o dispositivos IoT?",
    a: "Sí: Mercado Pago, WhatsApp y Twilio, inicio de sesión con doble factor, MQTT para IoT y otros conectores.",
  },
  {
    q: "¿Ofrecen soporte y mantenimiento?",
    a: "Sí, con planes de soporte que incluyen mejoras y monitoreo según lo que necesite tu sistema.",
  },
];

export default function FAQ() {
  return (
    <section id="preguntas-frecuentes" className="bg-papel">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-12 lg:px-8">
        <h2 className="text-4xl font-bold leading-none md:text-5xl lg:col-span-4">Preguntas frecuentes</h2>
        <div className="border-b border-linea lg:col-span-8">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              className={`group border-t ${i === 0 ? "border-t-2 border-tinta" : "border-linea"}`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-xl font-bold leading-snug md:text-[1.375rem]">{f.q}</span>
                <Plus
                  className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="max-w-[60ch] pb-6 text-tinta-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
