'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Baby, HeartHandshake, Activity, Pill, ShieldAlert, Sparkles, ArrowRight, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    num: '01',
    chip: 'Infância',
    title: 'Saúde infantil',
    summary: 'Orientações para pais e responsáveis sobre cuidados, puericultura e dúvidas do dia a dia.',
    link: 'Orientação de Enfermagem',
    icon: Baby,
  },
  {
    num: '02',
    chip: 'Melhor Idade',
    title: 'Cuidados com idosos',
    summary: 'Apoio para familiares e cuidadores na rotina de cuidado, prevenção de quedas e conforto.',
    link: 'Apoio a Cuidadores',
    icon: HeartHandshake,
  },
  {
    num: '03',
    chip: 'Prevenção',
    title: 'Pressão arterial e diabetes',
    summary: 'Orientações para acompanhar melhor a saúde, controle glicêmico e rotina preventiva.',
    link: 'Acompanhamento Contínuo',
    icon: Activity,
  },
  {
    num: '04',
    chip: 'Rotina',
    title: 'Uso seguro de medicamentos',
    summary: 'Informações para organizar horários e compreender os cuidados com remédios prescritos.',
    link: 'Organização e Clareza',
    icon: Pill,
  },
  {
    num: '05',
    chip: 'Cuidados',
    title: 'Curativos e feridas',
    summary: 'Orientações gerais sobre cuidados e higienização, respeitando os limites do atendimento online.',
    link: 'Direcionamento Seguro',
    icon: ShieldAlert,
  },
  {
    num: '06',
    chip: 'Bem-Estar',
    title: 'Orientações gerais de saúde',
    summary: 'Um espaço de escuta qualificada para esclarecer dúvidas e direcionar suas decisões de saúde.',
    link: 'Escuta Individualizada',
    icon: Sparkles,
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 35 },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
            },
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            delay: (idx % 3) * 0.1,
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="servicos" ref={containerRef} className="py-24 bg-ivory-page">
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
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.num}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className="bg-white border border-petrol-deep/10 rounded-3xl p-8 flex flex-col justify-between shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-500 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-title text-2xl font-bold text-gold-warm">{srv.num}</span>
                    <span className="px-3 py-1 bg-petrol-soft text-petrol-deep text-xs font-semibold rounded-full uppercase tracking-wider">
                      {srv.chip}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-petrol-soft text-petrol-deep flex items-center justify-center mb-5 group-hover:bg-petrol-deep group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
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
                  <ArrowRight className="w-4 h-4 text-gold-warm group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Clínico */}
        <div className="mt-12 bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-2.5 bg-amber-500/15 rounded-xl text-amber-700 shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <p className="text-sm text-amber-900 leading-relaxed m-0">
            <strong>Nota ética e limites do atendimento:</strong> O foco da NG Teleconsulta é a orientação e o cuidado humanizado de enfermagem. O atendimento online não substitui emergências nem avaliações médicas presenciais quando necessárias. Em situações graves, procure imediatamente o pronto-socorro ou ligue para o SAMU (192).
          </p>
        </div>

      </div>
    </section>
  );
}

