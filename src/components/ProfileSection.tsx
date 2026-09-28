'use client';

import React from 'react';
import Image from 'next/image';

export default function ProfileSection() {
  return (
    <section id="sobre" className="py-24 bg-white border-t border-b border-petrol-deep/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-warm mb-2 block">
            Sobre o NG Consultório
          </span>
          <h2 className="font-title text-3xl sm:text-5xl font-extrabold text-petrol-deep">
            Cuidar também é prevenir.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna Esquerda: Card de Citação com Monograma */}
          <div className="lg:col-span-5">
            <div className="relative bg-petrol-soft rounded-3xl p-10 md:p-12 overflow-hidden border border-petrol-deep/10">
              <div className="absolute -top-6 -right-6 w-48 opacity-10 pointer-events-none">
                <Image src="/logo.png" alt="" width={200} height={70} className="w-full h-auto" />
              </div>

              <span className="font-title text-6xl text-gold-warm block leading-none mb-2">“</span>
              <p className="font-title text-2xl sm:text-3xl font-bold text-petrol-deep leading-tight mb-8">
                Cuidado em cada fase da vida.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-8 h-0.5 bg-gold-warm" />
                <div>
                  <strong className="block text-base text-petrol-deep font-bold">
                    Enfª Natali Garcia
                  </strong>
                  <span className="block text-xs text-slate-500">
                    Responsável pelo NG Consultório
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Narrativa Editorial e Pilares */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p className="font-semibold text-petrol-deep text-lg sm:text-xl">
              A <strong>NG Consultório</strong> nasceu para aproximar a orientação de enfermagem da rotina das pessoas e das famílias.
            </p>
            <p className="text-base text-slate-600">
              Por meio da <strong>NG Teleconsulta</strong>, a <strong>Enfª Natali Garcia</strong> oferece um espaço de escuta, orientação e cuidado individualizado. Nosso foco é fornecer suporte qualificado para esclarecer dúvidas, organizar rotinas preventivas e apoiar decisões de cuidado no dia a dia.
            </p>
            <p className="text-base text-slate-600">
              O atendimento é conduzido com sensibilidade, transparência e respeito à realidade de cada pessoa, garantindo acolhimento próximo mesmo no formato digital.
            </p>

            {/* Faixa de Pilares */}
            <div className="grid grid-cols-3 gap-4 pt-6 pb-6 border-t border-b border-slate-100 my-6">
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Marca Principal</span>
                <strong className="font-title text-lg text-petrol-deep">NG Consultório</strong>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Serviço Online</span>
                <strong className="font-title text-lg text-petrol-deep">NG Teleconsulta</strong>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Atendimento</span>
                <strong className="font-title text-lg text-petrol-deep">Enfª Natali Garcia</strong>
              </div>
            </div>

            <div>
              <a
                href="https://wa.me/5511963601677?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20teleconsulta%20de%20enfermagem."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-petrol-deep hover:bg-petrol-base text-white text-sm font-semibold transition-all duration-300 shadow-sm"
              >
                <span>Falar com a Enfª Natali Garcia</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
