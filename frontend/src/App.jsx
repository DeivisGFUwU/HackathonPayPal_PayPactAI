import React, { useState } from 'react';
import { MOCK_AGREEMENT } from './mocks/seedData.js';

export default function App() {
  const [role, setRole] = useState('cliente');
  const [dataMode, setDataMode] = useState('seed');

  return (
    <div className='min-h-screen bg-slate-950 text-slate-100 font-sans'>
      <header className='bg-slate-900 border-b border-slate-800 px-6 py-3 flex flex-wrap items-center justify-between gap-4'>
        <div className='flex items-center gap-3'>
          <span className='bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded'>PayPact AI</span>
          <span className='text-sm text-slate-400'>Judge Fast-Track Mode</span>
        </div>
        <div className='flex items-center gap-3 text-xs'>
          <button onClick={() => setRole(role === 'cliente' ? 'freelancer' : 'cliente')} className='bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded border border-slate-700'>
            Rol activo: {role === 'cliente' ? 'Ana (Cliente - Lima)' : 'Lucía (Freelancer - Madrid)'}
          </button>
          <button onClick={() => setDataMode(dataMode === 'seed' ? 'cloud' : 'seed')} className='bg-emerald-900/50 text-emerald-300 px-3 py-1.5 rounded border border-emerald-700/50'>
            Modo DB: {dataMode === 'seed' ? 'Instant Seed (Demo)' : 'Live Cloud DB'}
          </button>
        </div>
      </header>
      <main className='max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <section className='bg-slate-900/70 border border-slate-800 rounded-xl p-5'>
          <h2 className='text-lg font-semibold text-blue-400 mb-2'>Zona UI Kheyla (ui-kheyla)</h2>
          <p className='text-sm text-slate-400 mb-4'>Aquí se importarán FreelancerProfileCard, ContractChatPanel y RescueIntentModal.</p>
          <div className='bg-slate-950 p-4 rounded-lg border border-slate-800 text-xs text-slate-300'>
            <p><strong>Caso cargado:</strong> {MOCK_AGREEMENT.cliente.nombre} contrata a {MOCK_AGREEMENT.freelancer.nombre}</p>
            <p><strong>Total:</strong>  USD en 2 etapas ( + )</p>
          </div>
        </section>
        <section className='bg-slate-900/70 border border-slate-800 rounded-xl p-5'>
          <h2 className='text-lg font-semibold text-emerald-400 mb-2'>Zona UI Michael (ui-michael)</h2>
          <p className='text-sm text-slate-400 mb-4'>Aquí se importarán WeightSlidersCard y StageAuditDashboard.</p>
          <div className='bg-slate-950 p-4 rounded-lg border border-slate-800 text-xs text-slate-300 space-y-1'>
            <p><strong>Etapa 2 Reservada:</strong>  USD</p>
            <p><strong>Cumplimiento IA:</strong> {MOCK_AGREEMENT.liquidacion_etapa_2.porcentaje_cumplido}% ( USD cobrados /  USD liberados)</p>
            <p className='truncate text-slate-500'><strong>Hash:</strong> {MOCK_AGREEMENT.hash}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
