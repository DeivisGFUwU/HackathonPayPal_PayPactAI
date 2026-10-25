export const MOCK_AGREEMENT = {
  id: 'acu_001',
  cliente: { nombre: 'Ana (Lima)', email: 'ana.buyer@sandbox.paypal.com' },
  freelancer: { nombre: 'Lucía (Madrid)', email: 'lucia.merchant@sandbox.paypal.com' },
  moneda: 'USD',
  monto_total: '500.00',
  etapas: [
    {
      n: 1,
      monto: '200.00',
      entregable: '3 bocetos iniciales de concepto',
      plazo: '2026-11-01',
      estado: 'COMPLETED',
      criterios: [
        { id: 'e1_c1', texto: 'Mínimo 3 propuestas distintas en PNG', peso: 50, resultado: 'cumple' },
        { id: 'e1_c2', texto: 'Tipografía legible y temática cafetería', peso: 50, resultado: 'cumple' }
      ]
    },
    {
      n: 2,
      monto: '300.00',
      entregable: 'Logo final y variantes de color',
      plazo: '2026-11-05',
      estado: 'AUTHORIZED_RESERVED',
      criterios: [
        { id: 'c1', texto: 'Logo final en SVG y PNG', peso: 30, resultado: 'cumple', confianza: 0.96 },
        { id: 'c2', texto: 'Uso exacto de colores de marca (#6B3E26 y #F2E3C6)', peso: 40, resultado: 'cumple', confianza: 0.91 },
        { id: 'c3', texto: 'Versión en blanco y negro', peso: 30, resultado: 'no_cumple', confianza: 0.98 }
      ]
    }
  ],
  liquidacion_etapa_2: {
    reservado_usd: '300.00',
    porcentaje_cumplido: 70,
    cobrado_lucia_usd: '210.00',
    liberado_ana_usd: '90.00'
  },
  hash: '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4'
};
