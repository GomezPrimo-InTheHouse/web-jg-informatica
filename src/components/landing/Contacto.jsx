import { Instagram, MessageCircle, Navigation } from "lucide-react";
import {
  DIRECCION,
  HORARIOS,
  INSTAGRAM,
  MAPA_EMBED,
  MAPA_LINK,
  WHATSAPP_VISIBLE,
  whatsappLink,
} from "../../config/negocio.js";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-mesa">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <h2 className="text-4xl font-bold leading-none md:text-5xl">Vení al local</h2>

          <address className="mt-8 not-italic">
            <p className="font-display text-3xl font-bold leading-tight">{DIRECCION.calle}</p>
            <p className="text-tinta-2">
              {DIRECCION.barrio}, {DIRECCION.ciudad}
            </p>
          </address>

          <div className="mt-8 border-t-2 border-tinta pt-4">
            <h3 className="text-xl font-bold">Horario</h3>
            {HORARIOS.length > 0 ? (
              <dl className="mt-2 space-y-1">
                {HORARIOS.map((h) => (
                  <div key={h.dias} className="flex flex-wrap justify-between gap-x-4">
                    <dt className="text-tinta-2">{h.dias}</dt>
                    <dd className="font-medium" style={{ fontVariantNumeric: "tabular-nums" }}>
                      {h.horas}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-2 text-tinta-2">Consultá el horario por WhatsApp.</p>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink("Hola, tengo una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-principal"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {WHATSAPP_VISIBLE}
            </a>
            <a href={MAPA_LINK} target="_blank" rel="noopener noreferrer" className="btn-secundario">
              <Navigation className="h-4 w-4" aria-hidden />
              Abrir en Google Maps
            </a>
          </div>

          <a
            href={INSTAGRAM.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-medium text-tinta-2 hover:text-tinta"
          >
            <Instagram className="h-5 w-5" aria-hidden />
            {INSTAGRAM.usuario}
          </a>
        </div>

        <div className="lg:col-span-7">
          <iframe
            title="Mapa: JG Informática, Bolívar 1313, Villa María"
            src={MAPA_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] lg:aspect-[16/11] h-auto w-full rounded-md border-2 border-tinta bg-papel grayscale-[0.35]"
          />
        </div>
      </div>
    </section>
  );
}
