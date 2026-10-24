// Caso semilla precargado para que los jueces prueben sin fricción
const SEED_ACUERDO = {
  id: "acu_001",
  cliente: { email: "ana.buyer@sandbox.paypal.com" },
  freelancer: { email: "lucia.merchant@sandbox.paypal.com" },
  moneda: "USD",
  etapas: [
    {
      n: 1,
      monto: "200.00",
      entregable: "3 bocetos conceptuales de logo",
      plazo: "2026-11-01",
      criterios: [
        { id: "e1_c1", texto: "3 bocetos iniciales en PNG", peso: 50 },
        { id: "e1_c2", texto: "Paleta inicial de café y crema", peso: 50 }
      ]
    },
    {
      n: 2,
      monto: "300.00",
      entregable: "Logo final en alta resolución y variantes",
      plazo: "2026-11-05",
      criterios: [
        { id: "c1", texto: "Archivos vectoriales en SVG y PNG", peso: 30 },
        { id: "c2", texto: "Uso exacto de colores de marca (#6B3E26 y #F2E3C6)", peso: 40 },
        { id: "c3", texto: "Versión monocromática en blanco y negro", peso: 30 }
      ]
    }
  ],
  aceptado_por: ["cliente", "freelancer"],
  hash: "8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4",
  estado: "READY_FOR_PAYMENT"
};

let memoryStore = JSON.parse(JSON.stringify(SEED_ACUERDO));

export const dbAdapter = {
  getAgreement: async (mode = "seed") => {
    return memoryStore;
  },
  saveAgreement: async (agreement, mode = "seed") => {
    memoryStore = { ...memoryStore, ...agreement };
    return memoryStore;
  },
  resetToSeed: () => {
    memoryStore = JSON.parse(JSON.stringify(SEED_ACUERDO));
    return memoryStore;
  }
};