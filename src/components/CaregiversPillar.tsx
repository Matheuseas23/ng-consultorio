'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CaregiversPillar() {
  return (
    <section id="familias" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-petrol-deep to-[#061c24] rounded-[32px] p-8 sm:p-12 md:p-16 text-white shadow-card relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Lado Esquerdo */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-warm mb-3 block">
                Acolhimento & Orientação
              </span>
              <h2 className="font-title text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
                Você não precisa cuidar de tudo sozinho.
              </h2>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8">
                Pais, familiares e cuidadores muitas vezes precisam tomar decisões importantes no dia a dia. A <strong>NG Teleconsulta</strong> oferece um espaço de escuta e orientação para ajudar você a cuidar com mais tranquilidade e segurança.
              </p>

              <div>
                <a
                  href="https://wa.me/5511963601677?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20teleconsulta%20de%20enfermagem."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold-warm hover:bg-gold-hover text-white text-base font-semibold shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Falar com a Enfª Natali</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Lado Direito: Citação Glass */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 md:p-10">
                <p className="font-title text-xl sm:text-2xl font-semibold text-white leading-snug mb-6">
                  “O cuidado verdadeiro começa quando escutamos com atenção a rotina de quem cuida.”
                </p>
                <div>
                  <strong className="block text-gold-warm text-base font-bold">
                    Enfª Natali Garcia
                  </strong>
                  <span className="block text-white/70 text-xs mt-0.5">
                    Responsável pelo NG Consultório
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
