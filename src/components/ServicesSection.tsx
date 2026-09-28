'use client';

import React from 'react';

const SERVICES = [
  {
    num: '01',
    chip: 'Infância',
    title: 'Saúde infantil',
    summary: 'Orientações para pais e responsáveis sobre cuidados e dúvidas do dia a dia.',
    link: 'Orientação de Enfermagem',
  },
  {
    num: '02',
    chip: 'Melhor Idade',
    title: 'Cuidados com idosos',
    summary: 'Apoio para familiares e cuidadores na rotina de cuidado e prevenção.',
    link: 'Apoio a Cuidadores',
  },
  {
    num: '03',
    chip: 'Prevenção',
    title: 'Pressão arterial e diabetes',
    summary: 'Orientações para acompanhar melhor a saúde e organizar a rotina de cuidados.',
    link: 'Acompanhamento Contínuo',
  },
  {
    num: '04',
    chip: 'Rotina',
    title: 'Uso seguro de medicamentos',
    summary: 'Informações para compreender melhor os cuidados relacionados aos medicamentos.',
    link: 'Organização e Clareza',
  },
  {
    num: '05',
    chip: 'Cuidados',
    title: 'Curativos e feridas',
    summary: 'Orientações gerais sobre cuidados e acompanhamento, respeitando os limites do atendimento online.',
    link: 'Direcionamento Seguro',
  },
  {
    num: '06',
    chip: 'Bem-Estar',
    title: 'Orientações gerais de saúde',
    summary: 'Um espaço para conversar sobre dúvidas e necessidades de cuidado.',
    link: 'Escuta Individualizada',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-ivory-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-warm mb-2 block">
            Áreas de Atendimento
          </span>
          <h2 className="font-title text-3xl sm:text-5xl font-extrabold text-petrol-deep leading-tight mb-4">
            Orientação para cuidar com mais segurança.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Conte com um atendimento acolhedor para compreender melhor suas necessidades de cuidado e as da sua família.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.num}
              className="bg-white border border-petrol-deep/10 rounded-3xl p-8 flex flex-col justify-between shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-title text-xl font-bold text-gold-warm">{srv.num}</span>
                  <span className="px-3 py-1 bg-petrol-soft text-petrol-deep text-xs font-semibold rounded-full uppercase tracking-wider">
                    {srv.chip}
                  </span>
                </div>
                <h3 className="font-title text-2xl font-bold text-petrol-deep mb-3">
                  {srv.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {srv.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-petrol-deep">
                <span>{srv.link}</span>
                <span className="text-gold-warm">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Clínico */}
        <div className="mt-12 bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="px-3 py-1 bg-gold-warm text-white rounded-full text-xs font-bold uppercase shrink-0">
            Nota Ética
          </div>
          <p className="text-sm text-amber-900/90 leading-relaxed m-0">
            O foco da NG Teleconsulta é a orientação e o cuidado humanizado de enfermagem. O atendimento online não substitui emergências nem avaliações médicas presenciais quando necessárias.
          </p>
        </div>

      </div>
    </section>
  );
}
