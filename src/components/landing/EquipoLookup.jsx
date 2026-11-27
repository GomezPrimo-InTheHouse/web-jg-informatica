import { useState } from "react";
import { Loader2 } from "lucide-react";
import { consultarEstadoEquipo } from "../../api/Equipo.jsx";
import { whatsappLink } from "../../config/negocio.js";

// Etapas que ve el cliente, en el mismo orden que el proceso del taller.
// Se corresponden con los estados de equipo del sistema del local.
const ETAPAS = ["Recibido", "En revisión", "En reparación", "Listo para retirar", "Entregado"];

function etapaDesdeEstado(nombre = "") {
  const n = nombre.toLowerCase();
  if (n.includes("entregado")) return 4;
  if (n.includes("finalizado")) return 3;
  if (n.includes("reparaci")) return 2;
  if (n.includes("revisa") || n.includes("revisi") || n.includes("reingres")) return 1;
  return 0;
}

function formatearFecha(iso) {
  if (!iso) return "—";
  try {
    return new Intl.DateTimeFormat("es-AR", {
      day: "numeric",
      month: "short",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Argentina/Cordoba",
    }).format(new Date(iso));
  } catch {
    return "—";
  }
}

export default function EquipoLookup() {
  const [dni, setDni] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cargando, setCargando] = useState(false);
  const [demora, setDemora] = useState(false);
  const [equipos, setEquipos] = useState([]);
  const [elegido, setElegido] = useState(0);
  const [error, setError] = useState(null); // { code, msg }

  async function consultar(e) {
    e.preventDefault();
    setError(null);
    setEquipos([]);
    setElegido(0);

    if (!dni || !marca.trim()) {
      setError({ code: "DATOS_INCOMPLETOS", msg: "Completá el DNI del titular y la marca del equipo." });
      return;
    }
    if (dni.length < 6 || dni.length > 9) {
      setError({ code: "DNI_INVALIDO", msg: "El DNI tiene que tener entre 6 y 9 números, sin puntos." });
      return;
    }

    setCargando(true);
    setDemora(false);
    try {
      const lista = await consultarEstadoEquipo(
        { dni, marca: marca.trim(), modelo: modelo.trim() },
        { alDemorar: () => setDemora(true) }
      );
      if (lista.length === 0) {
        setError({ code: "NO_ENCONTRADO", msg: "No encontramos un equipo con esos datos." });
      } else {
        setEquipos(lista);
      }
    } catch (err) {
      setError({
        code: err.code || "DESCONOCIDO",
        msg: err.message || "Ocurrió un error inesperado al consultar el estado.",
      });
    } finally {
      setCargando(false);
      setDemora(false);
    }
  }

  return (
    <div>
      <form onSubmit={consultar} noValidate className="grid grid-cols-2 gap-x-5 gap-y-5">
        <label className="col-span-2 block">
          <span className="block text-sm font-medium text-tinta-2">DNI del titular</span>
          <input
            className="campo"
            inputMode="numeric"
            autoComplete="off"
            value={dni}
            onChange={(e) => setDni(e.target.value.replace(/\D/g, ""))}
            placeholder="30123456"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-tinta-2">Marca</span>
          <input className="campo" value={marca} onChange={(e) => setMarca(e.target.value)} placeholder="Samsung" />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-tinta-2">
            Modelo <span className="font-normal">(opcional)</span>
          </span>
          <input className="campo" value={modelo} onChange={(e) => setModelo(e.target.value)} placeholder="A26" />
        </label>
        <button type="submit" disabled={cargando} className="btn-principal col-span-2 mt-1 disabled:opacity-70">
          {cargando ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> Consultando
            </>
          ) : (
            "Consultar estado"
          )}
        </button>
      </form>

      <div aria-live="polite">
        {cargando && demora && (
          <p className="mt-4 text-[0.95rem] text-tinta-2">
            El servidor se está iniciando, puede tardar hasta un minuto. No cierres la página.
          </p>
        )}

        {error && <ErrorConsulta error={error} />}

        {equipos.length > 1 && (
          <div className="mt-6">
            <p className="text-sm font-medium text-tinta-2">Encontramos {equipos.length} equipos. Elegí cuál ver:</p>
            <div className="mt-2 flex flex-wrap gap-2" role="tablist" aria-label="Tus equipos">
              {equipos.map((eq, i) => (
                <button
                  key={eq.id}
                  type="button"
                  role="tab"
                  aria-selected={i === elegido}
                  onClick={() => setElegido(i)}
                  className={`rounded-md border-2 px-3 py-1.5 text-left text-sm font-semibold transition-colors ${
                    i === elegido ? "border-tinta bg-tinta text-papel" : "border-linea text-tinta hover:border-tinta"
                  }`}
                >
                  {[eq.marca, eq.modelo].filter(Boolean).join(" ")}
                  <span className={`block text-xs font-normal ${i === elegido ? "text-white/70" : "text-tinta-2"}`}>
                    Ingresó {formatearFecha(eq.fecha_ingreso)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {equipos[elegido] && <Resultado key={equipos[elegido].id} equipo={equipos[elegido]} />}
      </div>
    </div>
  );
}

function Resultado({ equipo }) {
  const actual = etapaDesdeEstado(equipo.estado_nombre);
  const listo = actual === 3;
  const reingresado = (equipo.estado_nombre || "").toLowerCase().includes("reingres");
  const titulo = [equipo.marca, equipo.modelo].filter(Boolean).join(" ");

  return (
    <div className="mt-6 border-t-2 border-dashed border-linea pt-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-2xl font-bold leading-tight">{titulo || "Tu equipo"}</p>
          {equipo.problema && <p className="mt-1 text-[0.95rem] text-tinta-2">{equipo.problema}</p>}
        </div>
        <span
          className={`sello shrink-0 rounded border-2 px-2.5 py-1 font-display text-lg font-bold leading-none ${
            listo ? "border-naranja bg-naranja text-tinta" : "border-tinta text-tinta"
          }`}
        >
          {ETAPAS[actual]}
        </span>
      </div>

      <ol className="relative mt-6 grid grid-cols-5" aria-label="Etapas de la reparación">
        <span className="absolute left-[10%] right-[10%] top-[7px] h-0.5 bg-linea" aria-hidden />
        <span
          className="avance absolute left-[10%] top-[7px] h-0.5 bg-naranja"
          style={{ width: `${actual * 20}%` }}
          aria-hidden
        />
        {ETAPAS.map((etapa, i) => (
          <li key={etapa} className="relative flex flex-col items-center text-center">
            <span
              className={`h-4 w-4 rounded-full border-2 ${
                i <= actual ? "border-naranja bg-naranja" : "border-linea bg-papel"
              }`}
              aria-hidden
            />
            <span
              className={`mt-2 text-xs leading-tight ${i === actual ? "font-semibold text-tinta" : "text-tinta-2"}`}
              aria-current={i === actual ? "step" : undefined}
            >
              {etapa}
            </span>
          </li>
        ))}
      </ol>

      {reingresado && (
        <p className="mt-4 text-[0.95rem] text-tinta-2">Lo volvimos a ingresar por garantía y lo estamos revisando.</p>
      )}

      <dl className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-[0.95rem]">
        <div>
          <dt className="text-sm text-tinta-2">Ingresó</dt>
          <dd className="font-medium">{formatearFecha(equipo.fecha_ingreso)}</dd>
        </div>
        <div>
          <dt className="text-sm text-tinta-2">Última novedad</dt>
          <dd className="font-medium">{formatearFecha(equipo.updated_at)}</dd>
        </div>
      </dl>

      <a
        href={whatsappLink(
          `Hola, consulto por mi ${titulo}${equipo.id ? ` (orden ${equipo.id})` : ""}.`
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secundario mt-6 w-full"
      >
        {listo ? "Avisar que paso a retirarlo" : "Preguntar por WhatsApp"}
      </a>
    </div>
  );
}

// Muestra qué falló, con el código para poder identificarlo,
// y una salida por WhatsApp cuando el problema no es de los datos ingresados.
function ErrorConsulta({ error }) {
  const esDeDatos = ["DATOS_INCOMPLETOS", "DNI_INVALIDO", "NO_ENCONTRADO"].includes(error.code);
  return (
    <div role="alert" className="mt-5 rounded-md border-l-4 border-naranja bg-mesa px-4 py-3">
      <p className="text-[0.95rem] font-medium text-tinta">{error.msg}</p>
      <p className="mt-1 text-xs text-tinta-2">Código: {error.code}</p>
      {!esDeDatos && (
        <a
          href={whatsappLink(`Hola, quise consultar el estado de mi equipo en la web y me dio el error ${error.code}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm font-semibold underline decoration-naranja decoration-2"
        >
          Consultar por WhatsApp
        </a>
      )}
    </div>
  );
}
