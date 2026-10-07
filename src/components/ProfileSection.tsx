'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProfileSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageFrameRef.current,
        { opacity: 0, x: -40 },
        {
          scrollTrigger: {
            trigger: imageFrameRef.current,
            start: 'top 85%',
          },
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        textContentRef.current,
        { opacity: 0, x: 40 },
        {
          scrollTrigger: {
            trigger: textContentRef.current,
            start: 'top 85%',
          },
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="sobre" ref={containerRef} className="py-24 bg-white border-t border-b border-petrol-deep/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna Esquerda: Retrato da Enfª Natali Garcia com Moldura Clínica */}
          <div ref={imageFrameRef} className="lg:col-span-5">
            <div className="relative bg-petrol-soft rounded-3xl p-6 sm:p-8 overflow-hidden border border-petrol-deep/10 shadow-soft">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-6 shadow-sm">
                <Image
                  src="/natali-garcia.jpg"
                  alt="Enfª Natali Garcia - NG Consultório"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petrol-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-wider text-gold-warm font-semibold block mb-0.5">
                    Responsável Técnica
                  </span>
                  <strong className="font-title text-xl font-bold block">
                    Enfª Natali Garcia
                  </strong>
                </div>
              </div>

              {/* Citação Inspiracional */}
              <div className="pt-2 border-t border-petrol-deep/10">
                <p className="font-title text-lg font-semibold text-petrol-deep leading-snug mb-3">
                  “O cuidado verdadeiro começa quando escutamos com atenção a rotina de quem cuida.”
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-0.5 bg-gold-warm" />
                  <span className="text-xs text-slate-500 font-medium">
                    Orientação e Teleconsulta de Enfermagem
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Narrativa Editorial e Pilares */}
          <div ref={textContentRef} className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-warm mb-2 block">
              Sobre o NG Consultório
            </span>
            <h2 className="font-title text-3xl sm:text-5xl font-extrabold text-petrol-deep leading-tight mb-6">
              Cuidar também é prevenir.
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg mb-8">
              <p className="font-semibold text-petrol-deep">
                A <strong>NG Consultório</strong> nasceu para aproximar a orientação de enfermagem da rotina das pessoas e das famílias.
              </p>
              <p>
                Por meio da <strong>NG Teleconsulta</strong>, a <strong>Enfª Natali Garcia</strong> oferece um espaço de escuta, orientação e cuidado individualizado. Nosso foco é fornecer suporte qualificado para esclarecer dúvidas, organizar rotinas preventivas e apoiar decisões de cuidado no dia a dia.
              </p>
              <p>
                O atendimento é conduzido com sensibilidade, transparência e respeito à realidade de cada pessoa, garantindo acolhimento próximo mesmo no formato digital.
              </p>
            </div>

            {/* Faixa de Pilares */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 pb-6 border-t border-b border-slate-100 mb-8">
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

            {/* Ações */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/5511963601677?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20teleconsulta%20de%20enfermagem."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-petrol-deep hover:bg-petrol-base text-white text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar com a Enfª Natali Garcia</span>
              </a>

              <a
                href="https://www.instagram.com/ngteleconsulta/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 hover:border-petrol-deep text-petrol-deep text-sm font-semibold transition-all duration-300 hover:bg-petrol-deep/5"
              >
                <span>Ver Instagram @ngteleconsulta</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

