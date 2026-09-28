'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-24 bg-ivory-page border-t border-b border-petrol-deep/5">
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
              No Instagram, compartilhamos orientações práticas sobre prevenção, saúde e bem-estar para acompanhar você no dia a dia.
            </p>
            <a
              href="https://www.instagram.com/ngteleconsulta/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-petrol-deep/20 hover:border-petrol-deep text-petrol-deep text-sm font-semibold transition-all duration-300 hover:bg-petrol-deep/5"
            >
              <span>Conhecer o Instagram @ngteleconsulta</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="bg-white border border-petrol-deep/10 rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-warm block mb-1">
                Prevenção
              </span>
              <strong className="font-title text-xl font-bold text-petrol-deep block mb-2">
                Saúde & Autonomia
              </strong>
              <p className="text-slate-600 text-sm leading-relaxed m-0">
                Orientações contínuas sobre hábitos saudáveis e monitoramento da rotina.
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
                Dicas para apoiar cuidadores e simplificar os cuidados em casa.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
