import { useState } from "react";
import { fetchEquipoByMarcaModeloDni } from "../../api/Equipo.jsx";

// Colores corporativos
const COLORS = {
  bg: "#1E2A38",
  secondary: "#2E4A78",
  accent: "#4FA3D1",
  neutral: "#D9D9D9",
  text: "#FFFFFF",
};

function formatDateISOtoLocal(iso) {
  if (!iso) return "-";
  try {
    const d = new Date(iso);
    // Argentina: America/Argentina/Cordoba (GMT-3)
    return new Intl.DateTimeFormat("es-AR", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Argentina/Cordoba",
    }).format(d);
  } catch {
    return iso;
  }
}

export default function EquipoLookup() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [dni, setDni] = useState("");
  const [loading, setLoading] = useState(false);
  const [equipo, setEquipo] = useState(null);
  const [error, setError] = useState("");

  async function handleBuscar(e) {
    e.preventDefault();
    setError("");
    setEquipo(null);
    setLoading(true);
    try {
      const data = await fetchEquipoByMarcaModeloDni({ marca, modelo, dni });
      setEquipo(data);
    } catch (err) {
      setError(err.message || "No se pudo obtener el equipo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="w-full py-10 px-4 md:px-6 lg:px-8"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Consulta de equipo por Marca/Modelo/DNI
            </h2>
            <p className="text-white/70">
              Ingresá al menos <span className="font-semibold">DNI</span> para filtrar.
            </p>
          </div>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleBuscar}
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          <input
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            placeholder="Marca (ej: Apple)"
            className="w-full rounded-xl border px-3 py-2 text-sm bg-[#1b2634] placeholder-white/50 focus:outline-none focus:ring"
            style={{ borderColor: "#ffffff22" }}
          />
          <input
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            placeholder="Modelo (ej: iPhone 12)"
            className="w-full rounded-xl border px-3 py-2 text-sm bg-[#1b2634] placeholder-white/50 focus:outline-none focus:ring"
            style={{ borderColor: "#ffffff22" }}
          />
          <input
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            placeholder="DNI"
            className="w-full rounded-xl border px-3 py-2 text-sm bg-[#1b2634] placeholder-white/50 focus:outline-none focus:ring"
            style={{ borderColor: "#ffffff22" }}
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl px-4 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg transition disabled:opacity-60"
            style={{ backgroundColor: COLORS.accent, color: "#0B1A24" }}
          >
            {loading ? "Buscando..." : "Buscar"}
          </button>
        </form>

        {/* Estados */}
        {error && (
          <div
            className="mt-4 rounded-xl border px-4 py-3 text-sm"
            style={{ borderColor: "#ff7b7b33", background: "#391f1f" }}
          >
            {error}
          </div>
        )}

        {/* Skeleton */}
        {loading && (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 rounded-2xl border p-6 animate-pulse"
                 style={{ borderColor: "#ffffff22", backgroundColor: "#1E2A38A0" }}>
              <div className="h-5 w-1/3 bg-white/10 rounded mb-3" />
              <div className="h-4 w-2/3 bg-white/10 rounded mb-2" />
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="h-4 bg-white/10 rounded" />
                <div className="h-4 bg-white/10 rounded" />
                <div className="h-4 bg-white/10 rounded" />
                <div className="h-4 bg-white/10 rounded" />
              </div>
            </div>
            <div className="rounded-2xl border p-6 animate-pulse"
                 style={{ borderColor: "#ffffff22", backgroundColor: "#1E2A38A0" }}>
              <div className="h-5 w-1/2 bg-white/10 rounded mb-3" />
              <div className="h-4 w-2/3 bg-white/10 rounded mb-2" />
              <div className="h-4 w-1/2 bg-white/10 rounded" />
            </div>
          </div>
        )}

        {/* Resultado */}
        {!loading && equipo && (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Card principal */}
            <article
              className="lg:col-span-2 rounded-2xl border p-6"
              style={{
                borderColor: "#ffffff22",
                background: `linear-gradient(160deg, ${COLORS.secondary}80 0%, #22324B 100%)`,
              }}
            >
              <header className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">
                    {equipo.marca} {equipo.modelo} · {equipo.tipo}
                  </h3>
                  <p className="text-sm text-white/80">
                    Problema: <span className="font-medium">{equipo.problema || "-"}</span>
                  </p>
                </div>

                <span
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                  style={{
                    backgroundColor: "#ffffff15",
                    border: "1px solid #ffffff22",
                    color: COLORS.accent,
                  }}
                >
                  {equipo.estado_nombre || "—"}
                </span>
              </header>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Cliente" value={`${equipo.cliente_nombre} ${equipo.cliente_apellido}`} />
                <Field label="DNI" value={equipo.cliente_dni}  />
                <Field label="Fecha de ingreso" value={formatDateISOtoLocal(equipo.fecha_ingreso)} />
                <Field label="Patrón/Clave" value={equipo.patron || equipo.password || "—"} />
              </div>

              <div className="mt-6 text-xs text-white/70">
                ID: {equipo.id} • Creado: {formatDateISOtoLocal(equipo.created_at)} •
                Actualizado: {formatDateISOtoLocal(equipo.updated_at)}
              </div>
            </article>

            {/* Lateral: Resumen / CTA */}
            <aside
              className="rounded-2xl border p-6 space-y-4"
              style={{ borderColor: "#ffffff22", backgroundColor: "#ffffff10" }}
            >
              <h4 className="font-semibold">Acciones</h4>
              <a
                href="https://api.whatsapp.com/send?phone=543534275476"
                className="inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg transition"
                style={{ backgroundColor: COLORS.accent, color: "#0B1A24" }}
              >
                Contactar al Servicio Técnico
              </a>

              <div className="pt-3 border-t" style={{ borderColor: "#ffffff22" }}>
                <h5 className="text-sm font-semibold">Resumen</h5>
                <ul className="mt-2 text-sm text-white/80 space-y-1">
                  <li>Tipo: {equipo.tipo}</li>
                  <li>Marca/Modelo: {equipo.marca} {equipo.modelo}</li>
                  <li>Estado: {equipo.estado_nombre}</li>
                </ul>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

/* Subcomponente: par etiqueta/valor con copiar */
function Field({ label, value, copyable = false }) {
  async function copy() {
    try {
      await navigator.clipboard.writeText(String(value ?? ""));
    } catch {}
  }

  return (
    <div className="rounded-xl border p-3 flex items-center justify-between gap-3"
         style={{ borderColor: "#ffffff22", backgroundColor: "#0f1823" }}>
      <div>
        <div className="text-xs text-white/60">{label}</div>
        <div className="text-sm font-medium">{value ?? "—"}</div>
      </div>
      {copyable && (
        <button
          type="button"
          onClick={copy}
          className="shrink-0 rounded-lg px-2 py-1 text-xs font-semibold hover:opacity-90 transition"
          style={{ backgroundColor: COLORS.accent, color: "#0B1A24" }}
          title="Copiar"
        >
          Copiar
        </button>
      )}
    </div>
  );
}
