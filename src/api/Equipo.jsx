// src/api/equipos.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL_BACKEND; // Ej: https://local-app-back.onrender.com
// const BASE_URL = "http://localhost:7001"
/**
 * Llama a GET /equipo/marca-modelo-dni enviando el body con marca, modelo y dni.
 * Retorna el objeto del equipo si existe.
 */
export async function fetchEquipoByMarcaModeloDni({ marca, modelo, dni }) {
  if (!BASE_URL) {
    throw new Error("Falta la variable VITE_API_URL_BACKEND en el .env");
  }

  if (!marca || !modelo || !dni) {
    throw new Error("Debes ingresar marca, modelo y DNI para continuar.");
  }

  try {
    const response = await axios({
      method: "POST", // 👈 método GET
      url: `${BASE_URL}/equipo/marca-modelo-dni`,
      headers: {
        "Content-Type": "application/json",
      },
      // 👇 enviamos los datos en el body (no en query params)
      data: {
        marca,
        modelo,
        dni,
      },
      timeout: 10000, // 10s
      validateStatus: (status) => status < 500, // evita que axios lance error automático
    });

    if (response.status === 404) {
      throw new Error(response.data?.msg || "Equipo no encontrado");
    }

    if (response.status !== 200) {
      throw new Error(response.data?.error || "Error al obtener los datos del equipo");
    }

    return response.data; // el backend devuelve un objeto
  } catch (error) {
    if (axios.isCancel(error)) {
      throw new Error("La solicitud fue cancelada.");
    }
    if (error.code === "ECONNABORTED") {
      throw new Error("Tiempo de espera agotado. Intenta nuevamente.");
    }
    throw new Error(error.response?.data?.msg || error.message || "Error al conectar con el servidor.");
  }
}
