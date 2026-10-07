'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function InstagramSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 35 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="instagram" ref={containerRef} className="py-24 bg-ivory-page border-t border-b border-petrol-deep/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-warm mb-2 block">
              Redes Oficiais
            </span>
            <h2 className="font-title text-3xl sm:text-5xl font-extrabold text-petrol-deep leading-tight mb-4">
              Informação para cuidar melhor.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-lg">
              No Instagram, compartilhamos orientações práticas sobre prevenção, saúde e bem-estar para acompanhar você e sua família no dia a dia.
            </p>

            <a
              href="https://www.instagram.com/ngteleconsulta/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-petrol-deep/20 hover:border-petrol-deep text-petrol-deep text-sm font-semibold transition-all duration-300 hover:bg-petrol-deep hover:text-white"
            >
              <Instagram className="w-4 h-4" />
              <span>Conhecer o Instagram @ngteleconsulta</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white border border-petrol-deep/10 rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-warm block mb-1">
                Prevenção
              </span>
              <strong className="font-title text-xl font-bold text-petrol-deep block mb-2">
                Saúde & Autonomia
              </strong>
              <p className="text-slate-600 text-sm leading-relaxed m-0">
                Orientações contínuas sobre hábitos saudáveis e monitoramento da rotina preventiva.
              </p>
            </div>

            <div className="bg-white border border-petrol-deep/10 rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-warm block mb-1">
                Acolhimento
              </span>
              <strong className="font-title text-xl font-bold text-petrol-deep block mb-2">
                Rotina Familiar
              </strong>
              <p className="text-slate-600 text-sm leading-relaxed m-0">
                Dicas práticas para apoiar cuidadores e simplificar os cuidados em ambiente doméstico.
              </p>
            </div>

            <div className="bg-white border border-petrol-deep/10 rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-warm block mb-1">
                Segurança
              </span>
              <strong className="font-title text-xl font-bold text-petrol-deep block mb-2">
                Uso Correto de Medicamentos
              </strong>
              <p className="text-slate-600 text-sm leading-relaxed m-0">
                Dicas para organizar horários, evitar confusões e manter a regularidade das doses prescritas.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
