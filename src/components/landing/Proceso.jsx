const PASOS = [
  {
    titulo: "Lo traés al local",
    texto: "Te damos una orden de servicio. Con tu DNI, la marca y el modelo seguís el estado desde esta página.",
  },
  {
    titulo: "Revisión y presupuesto",
    texto:
      "Diagnosticamos la falla y te pasamos el precio por escrito. Si avanzás, la revisión no se cobra; si no, se cobra el 10% del presupuesto.",
  },
  {
    titulo: "Reparación",
    texto: "Las fallas comunes salen en 24 a 48 horas. Si el repuesto hay que pedirlo, te avisamos el plazo antes.",
  },
  {
    titulo: "Retiro con garantía",
    texto: "Te avisamos cuando está listo. La garantía es de 30 a 60 días según el trabajo y el repuesto.",
  },
];

export default function Proceso() {
  return (
    <section className="border-b border-linea bg-papel">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <h2 className="max-w-[20ch] text-4xl font-bold leading-none md:text-5xl">Qué pasa con tu equipo desde que lo dejás</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PASOS.map((paso, i) => (
            <li key={paso.titulo} className="border-t-2 border-tinta pt-4">
              <span className="font-display text-5xl font-bold leading-none text-naranja-oscuro" aria-hidden>
                {i + 1}
              </span>
              <h3 className="mt-3 text-2xl font-bold leading-tight">{paso.titulo}</h3>
              <p className="mt-2 max-w-[38ch] text-tinta-2">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
