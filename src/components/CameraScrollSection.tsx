'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: '01',
    title: 'Entre em contato',
    desc: 'Fale com a NG Consultório pelo WhatsApp oficial de forma direta e sem burocracia.',
  },
  {
    num: '02',
    title: 'Explique sua necessidade',
    desc: 'Conte brevemente o que você precisa e tire suas dúvidas iniciais de saúde e cuidado.',
  },
  {
    num: '03',
    title: 'Escolha um horário',
    desc: 'Verifique as opções disponíveis na agenda para o atendimento online por videochamada privativa.',
  },
  {
    num: '04',
    title: 'Receba sua orientação',
    desc: 'Converse com a Enfª Natali Garcia de forma acolhedora, individualizada e receba seu resumo clínico.',
  },
];

export default function CameraScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Pin scroll cinematográfico com timing estrito de 0.2s e ease power3.out
      mm.add('(min-width: 992px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            start: 'top top',
            end: '+=2200',
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          const startTime = 0.3 + index * 0.2; // Intervalo exato de 0.2s

          tl.fromTo(card,
            { opacity: 0, y: 60, scale: 0.94 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.0, // >= 0.8s
              ease: 'power3.out',
            },
            startTime
          );
        });
      });

      // Mobile: Transições suaves sem pin para evitar saltos verticais com a barra do browser
      mm.add('(max-width: 991px)', () => {
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          gsap.fromTo(card,
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
            Passo a Passo
          </span>
          <h2 className="font-title text-3xl sm:text-5xl font-extrabold text-petrol-deep leading-tight mb-4">
            Um cuidado simples, próximo e acessível.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Quatro etapas organizadas para você receber orientação profissional com agilidade e acolhimento.
          </p>
        </div>

        {/* Grid de Passos Sequenciados (0.2s Timing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          {STEPS.map((step, idx) => (
            <div
              key={step.num}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className="bg-ivory-page border border-petrol-deep/10 rounded-3xl p-8 flex flex-col justify-between shadow-soft hover:shadow-card hover:border-gold-warm transition-all duration-500"
            >
              <div>
                <span className="font-title text-5xl font-extrabold text-gold-warm/90 block mb-4">
                  {step.num}
                </span>
                <h3 className="font-title text-xl font-bold text-petrol-deep mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5511963601677?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20teleconsulta%20de%20enfermagem."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-petrol-deep hover:bg-petrol-base text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>Quero falar pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
