// src/api/Equipo.jsx
// Consulta pública del estado de un equipo contra el backend del local.
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL_BACKEND; // Ej: https://local-app-back.onrender.com

// Error con un código para mostrarle al usuario qué pasó exactamente
export class ConsultaError extends Error {
  constructor(code, msg) {
    super(msg);
    this.code = code;
  }
}

// Mensajes para errores que no vienen del backend o que vienen sin mensaje
const MENSAJES = {
  SIN_CONFIG: "La consulta no está configurada en esta web (falta la dirección del servidor).",
  SIN_CONEXION:
    "No pudimos conectar con el servidor. Revisá tu conexión a internet y probá de nuevo.",
  TIEMPO_AGOTADO:
    "El servidor tardó demasiado en responder. Puede estar iniciando: esperá un minuto y probá de nuevo.",
  NO_AUTORIZADO: "La consulta no está disponible en este momento. Escribinos por WhatsApp y te contamos.",
  NO_ENCONTRADO: "No encontramos un equipo con esos datos.",
  DEMASIADAS_CONSULTAS: "Hiciste muchas consultas seguidas. Probá de nuevo en unos minutos.",
  ERROR_INTERNO: "El servidor tuvo un error al buscar tu equipo. Probá de nuevo en unos minutos.",
  DESCONOCIDO: "Ocurrió un error inesperado al consultar el estado.",
};

/**
 * POST /publico/estado-equipo  { dni, marca, modelo? }
 * Devuelve un array de equipos (el más reciente primero).
 * `alDemorar` se llama si el servidor tarda más de 6 s (Render puede estar despertando).
 */
export async function consultarEstadoEquipo({ dni, marca, modelo }, { alDemorar } = {}) {
  if (!BASE_URL) throw new ConsultaError("SIN_CONFIG", MENSAJES.SIN_CONFIG);

  const aviso = alDemorar ? setTimeout(alDemorar, 6000) : null;

  try {
    const { data } = await axios.post(
      `${BASE_URL}/publico/estado-equipo`,
      { dni, marca, modelo },
      { timeout: 70000 } // Render gratis puede tardar ~1 minuto en despertar
    );
    return data?.equipos ?? [];
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      throw new ConsultaError("TIEMPO_AGOTADO", MENSAJES.TIEMPO_AGOTADO);
    }
    if (!error.response) {
      // Sin respuesta: sin internet, servidor caído o bloqueo de CORS
      throw new ConsultaError("SIN_CONEXION", MENSAJES.SIN_CONEXION);
    }

    const { status, data } = error.response;
    let code = data?.code;
    if (!code) {
      if (status === 401 || status === 403) code = "NO_AUTORIZADO";
      else if (status === 404) code = "NO_ENCONTRADO";
      else if (status === 429) code = "DEMASIADAS_CONSULTAS";
      else if (status >= 500) code = "ERROR_INTERNO";
      else code = "DESCONOCIDO";
    }
    throw new ConsultaError(code, data?.msg || MENSAJES[code] || MENSAJES.DESCONOCIDO);
  } finally {
    if (aviso) clearTimeout(aviso);
  }
}
