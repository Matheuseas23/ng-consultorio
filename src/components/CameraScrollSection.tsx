'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageCircle, Calendar, Video, FileCheck2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: '01',
    title: 'Entre em contato',
    desc: 'Fale com o NG Consultório pelo WhatsApp oficial de forma direta e sem burocracia para iniciar seu atendimento.',
    icon: MessageCircle,
  },
  {
    num: '02',
    title: 'Explique sua necessidade',
    desc: 'Conte brevemente o que você e sua família precisam para direcionarmos a consulta com atenção integral.',
    icon: Calendar,
  },
  {
    num: '03',
    title: 'Escolha um horário',
    desc: 'Alinhe a melhor data e horário para a videochamada privativa e segura com a Enfª Natali Garcia.',
    icon: Video,
  },
  {
    num: '04',
    title: 'Receba sua orientação',
    desc: 'Após a teleconsulta acolhedora, receba no seu WhatsApp o resumo estruturado com todas as recomendações de enfermagem.',
    icon: FileCheck2,
  },
];

export default function CameraScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Pin scroll cinematográfico controlado com timing estrito de 0.2s e ease power3.out
      mm.add('(min-width: 992px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            start: 'top top',
            end: '+=1800',
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          const startTime = 0.2 + index * 0.2; // Timing estrito de 0.2s entre cada elemento

          tl.fromTo(
            card,
            {
              opacity: 0,
              y: 60,
              scale: 0.94,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.0,
              ease: 'power3.out',
            },
            startTime
          );
        });
      });

      // Mobile: Transições suaves sem pin para evitar saltos verticais ao rolar com barra de endereços
      mm.add('(max-width: 991px)', () => {
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { opacity: 0, y: 35 },
            {
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
              },
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              delay: index * 0.1,
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden border-t border-b border-petrol-deep/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-warm mb-2 block">
            Como Funciona
          </span>
          <h2 className="font-title text-3xl sm:text-5xl font-extrabold text-petrol-deep leading-tight mb-4">
            Um cuidado simples, próximo e acessível.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Quatro etapas organizadas para você e sua família receberem orientação profissional de enfermagem com agilidade e acolhimento.
          </p>
        </div>

        {/* Grid de Passos Sequenciados (0.2s Timing no Desktop Pin) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className="bg-ivory-page border border-petrol-deep/10 rounded-3xl p-8 flex flex-col justify-between shadow-soft hover:shadow-card hover:border-gold-warm/40 transition-all duration-500 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-title text-4xl font-extrabold text-gold-warm">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-petrol-soft text-petrol-deep flex items-center justify-center group-hover:bg-petrol-deep group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-title text-xl font-bold text-petrol-deep mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/5511963601677?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20teleconsulta%20de%20enfermagem."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-petrol-deep hover:bg-petrol-base text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Quero agendar pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
