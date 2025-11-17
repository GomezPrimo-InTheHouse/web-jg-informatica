export default function CaseStudies() {
  const cases = [
    { title: "Reparaciones exitosas", metric: "+5.000", metricDesc: "equipos reparados", desc: "Notebooks, PC y móviles con repuestos de calidad y garantía." },
    { title: "Tiempo promedio", metric: "24–48 h", metricDesc: "entrega habitual", desc: "Stock en insumos críticos para acelerar el servicio." },
    { title: "Calificación", metric: "4.8/5", metricDesc: "satisfacción", desc: "Transparencia y seguimiento posventa." },
    { title: "Proyectos software", metric: "+120", metricDesc: "web & sistemas", desc: "Desde landing pages hasta sistemas de gestión completos." },
    { title: "Cámaras instaladas", metric: "+300", metricDesc: "montajes", desc: "IP, detección, visión nocturna y app móvil." },
    { title: "Integraciones", metric: "10+", metricDesc: "conectores", desc: "Pagos, mensajería, auth, IoT/MQTT y más." },
  ];

  return (
    <section id="casos" className="bg-[#1E2A38] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Resultados medibles</h2>
          <p className="mt-2 text-[#D9D9D9]">Indicadores clave de servicios técnicos y desarrollo de software.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <article key={i} className="rounded-2xl border border-white/10 bg-[#1E2A38]/60 p-5 hover:bg-[#1E2A38]/50 transition">
              <div className="text-[#4FA3D1] text-3xl font-extrabold animate-breath">{c.metric}</div>
              <div className="text-xs text-[#D9D9D9]">{c.metricDesc}</div>
              <h3 className="mt-3 text-white font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-[#D9D9D9]">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
