// Datos del local en un solo lugar: si cambia un número o un horario, se cambia acá.

export const WHATSAPP_NUMERO = "543534012117";
export const WHATSAPP_VISIBLE = "353 401-2117";

export function whatsappLink(mensaje = "") {
  const base = `https://wa.me/${WHATSAPP_NUMERO}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

export const DIRECCION = {
  calle: "Bolívar 1313",
  barrio: "Barrio Rivadavia",
  ciudad: "Villa María, Córdoba",
};

const consultaMapa = encodeURIComponent("Bolívar 1313, Villa María, Córdoba, Argentina");
export const MAPA_EMBED = `https://www.google.com/maps?q=${consultaMapa}&output=embed`;
export const MAPA_LINK = `https://www.google.com/maps/search/?api=1&query=${consultaMapa}`;

export const INSTAGRAM = {
  usuario: "@jg.informatica.vm",
  url: "https://www.instagram.com/jg.informatica.vm/",
};

// Completar con los horarios reales. Mientras esté vacío, la web muestra
// "Consultá el horario por WhatsApp".
// Ejemplo: { dias: "Lunes a viernes", horas: "9 a 13 y 17 a 21" }
export const HORARIOS = [];
